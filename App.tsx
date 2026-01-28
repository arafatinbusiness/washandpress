import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import StoreApp from './components/StoreApp';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import { StoreAccount, UserStoreAssociation } from './types';
import { authService } from './services/firebaseService';

// Import laundry components
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import Pricing from './components/Pricing';
import AppShowcase from './components/AppShowcase';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState<'home' | 'login' | 'superadmin' | 'app' | 'blocked'>('home');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  const [currentStore, setCurrentStore] = useState<StoreAccount | null>(null);
  const [userStores, setUserStores] = useState<UserStoreAssociation[]>([]);
  const [selectedStore, setSelectedStore] = useState<UserStoreAssociation | null>(null);
  const [showStoreSelection, setShowStoreSelection] = useState(false);

  // Login Form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string>('');
  const [isJoiningStore, setIsJoiningStore] = useState(false);

  // Check for existing Firebase auth state on app load
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(async (user) => {
      if (user) {
        // Check if user is admin
        if (user.email && user.email.toLowerCase().endsWith('@labinitial.com')) {
          setView('superadmin');
          return;
        }
        
        // Check if user is a store owner
        const existingStores = JSON.parse(localStorage.getItem('store_registry') || '[]');
        const store = existingStores.find((s: StoreAccount) => s.id === user.uid);
        
        if (store) {
          setCurrentStore({ ...store, role: 'admin' });
          setView('app');
          return;
        }
        
        // Check if user is a store user
        try {
          const userStores = await authService.getUserStoresByEmail(user.email || '');
          if (userStores.length > 0) {
            setUserStores(userStores);
            
            if (userStores.length === 1) {
              const storeAssoc = userStores[0];
              setSelectedStore(storeAssoc);
              const store: StoreAccount = {
                id: storeAssoc.storeId,
                name: storeAssoc.storeName,
                email: user.email || '',
                password: '',
                status: 'active',
                expiryDate: null,
                joinedDate: new Date().toISOString().split('T')[0],
                role: storeAssoc.role
              };
              setCurrentStore(store);
              setView('app');
            } else {
              setShowStoreSelection(true);
              setView('login');
            }
            return;
          }
        } catch (error) {
          console.error('Error getting user stores:', error);
        }
        
        setView('login');
      } else {
        if (view === 'superadmin' || view === 'app') {
          setView('home');
        }
      }
    });

    return () => unsubscribe();
  }, [view]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');
    
    try {
      const result = await authService.signIn(email, password);
      
      if (result.store) {
        const store = result.store;
        setCurrentStore(store);
        setView('app');
      } else if (result.userStores.length > 0) {
        setUserStores(result.userStores);
        
        if (result.userStores.length === 1) {
          const storeAssoc = result.userStores[0];
          setSelectedStore(storeAssoc);
          const store: StoreAccount = {
            id: storeAssoc.storeId,
            name: storeAssoc.storeName,
            email: email,
            password: '',
            status: 'active',
            expiryDate: null,
            joinedDate: new Date().toISOString().split('T')[0],
            role: storeAssoc.role
          };
          setCurrentStore(store);
          setView('app');
        } else {
          setShowStoreSelection(true);
        }
      }
    } catch (error: any) {
      setAuthError(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');
    
    if (!email || !password) {
      setAuthError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    if (!isJoiningStore && !signupName) {
      setAuthError('Please enter your business name');
      setIsLoading(false);
      return;
    }
    
    try {
      if (isJoiningStore) {
        // User is joining existing store
        await authService.signUp(email, password, { name: 'Staff Member', status: 'active' as const, expiryDate: null, joinedDate: new Date().toISOString().split('T')[0] });
        setAuthError('Account created! Please check your email for verification.');
      } else {
        // User is creating a new store
        const storeData = {
          name: signupName,
          status: 'active' as const,
          expiryDate: null,
          joinedDate: new Date().toISOString().split('T')[0]
        };
        const store = await authService.signUp(email, password, storeData);
        setCurrentStore(store);
        setView('app');
      }
    } catch (error: any) {
      setAuthError(error.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await authService.signOut();
      // Clear any stored session data
      localStorage.removeItem('admin_session');
      localStorage.removeItem('admin_email');
      setCurrentStore(null);
      setUserStores([]);
      setSelectedStore(null);
      setView('home');
    } catch (error) {
      console.error('Error during logout:', error);
      // Still redirect to home even if signOut fails
      setView('home');
    }
  };

  // Render different views
  if (view === 'superadmin') {
    return <SuperAdminDashboard stores={[]} setStores={() => {}} onLogout={handleLogout} />;
  }
  
  if (view === 'app' && currentStore) {
    return <StoreApp storeId={currentStore.id} storeName={currentStore.name} onLogout={handleLogout} />;
  }
  
  if (view === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Wash and Press POS</h1>
            <p className="text-slate-600">Login to access your laundry management system</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex border-b mb-6">
              <button
                className={`flex-1 py-3 font-medium ${authMode === 'login' ? 'text-gold-accent border-b-2 border-gold-accent' : 'text-slate-500'}`}
                onClick={() => setAuthMode('login')}
              >
                Login
              </button>
              <button
                className={`flex-1 py-3 font-medium ${authMode === 'signup' ? 'text-gold-accent border-b-2 border-gold-accent' : 'text-slate-500'}`}
                onClick={() => setAuthMode('signup')}
              >
                Sign Up
              </button>
            </div>
            
            <form onSubmit={authMode === 'login' ? handleLogin : handleSignup}>
              {authError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {authError}
                </div>
              )}
              
              {authMode === 'signup' && !isJoiningStore && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                  <Input
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="Enter your laundry business name"
                    required
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {authMode === 'signup' && (
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isJoiningStore}
                      onChange={(e) => setIsJoiningStore(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-slate-700">I'm joining an existing laundry business</span>
                  </label>
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full bg-gold-accent hover:bg-gold-600 text-white font-bold py-3 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : authMode === 'login' ? 'Login to POS' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setView('home')}
                className="text-sm text-slate-500 hover:text-slate-700"
              >
                ← Back to home
              </button>
            </div>
          </div>
          
          {showStoreSelection && userStores.length > 0 && (
            <div className="mt-6 bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Select a Store</h3>
              <div className="space-y-3">
                {userStores.map((storeAssoc) => (
                  <button
                    key={storeAssoc.storeId}
                    className={`w-full p-4 text-left rounded-lg border ${selectedStore?.storeId === storeAssoc.storeId ? 'border-gold-accent bg-gold-50' : 'border-slate-200 hover:border-gold-accent'}`}
                    onClick={() => {
                      setSelectedStore(storeAssoc);
                      const store: StoreAccount = {
                        id: storeAssoc.storeId,
                        name: storeAssoc.storeName,
                        email: email,
                        password: '',
                        status: 'active',
                        expiryDate: null,
                        joinedDate: new Date().toISOString().split('T')[0],
                        role: storeAssoc.role
                      };
                      setCurrentStore(store);
                      setView('app');
                    }}
                  >
                    <div className="font-medium text-slate-800">{storeAssoc.storeName}</div>
                    <div className="text-sm text-slate-500 capitalize">{storeAssoc.role}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Home view - Laundry landing page
  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setView('login')} />
      <main className="flex-grow">
        <Hero onLoginClick={() => setView('login')} />
        <TrustStats />
        <Services />
        <Pricing />
        <AppShowcase />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}