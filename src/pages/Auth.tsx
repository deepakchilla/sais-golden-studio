import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Camera, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = mode === 'login' ? 'Login | Sri Sai Digital Photo Studio' : 'Sign Up | Sri Sai Digital Photo Studio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', `${mode === 'login' ? 'Login' : 'Sign up'} to Sri Sai Digital Photo Studio to manage your bookings and inquiries.`);
    }
  }, [mode]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate('/');
      }
    });
    // Then check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/');
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: 'Welcome back!', description: 'You are now signed in.' });
      navigate('/');
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Login failed', description: err?.message || 'Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectUrl },
      });
      if (error) throw error;
      toast({ title: 'Check your email', description: 'Confirm your email to complete sign up.' });
      setMode('login');
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Signup failed', description: err?.message || 'Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-warm-gray">
      {/* Header Section */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-primary-dark-foreground mb-4">
              Welcome to <span className="text-primary">Sri Sai Digital</span>
            </h1>
            <p className="text-primary-dark-foreground/90 font-poppins">
              {mode === 'login' ? 'Sign in to manage your bookings and inquiries' : 'Create an account to book our photography services'}
            </p>
          </div>
        </div>
      </section>

      {/* Auth Form Section */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <Card className="elegant-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                </h2>
                <p className="text-muted-foreground font-poppins text-sm">
                  {mode === 'login' 
                    ? 'Enter your credentials to access your account' 
                    : 'Fill in your details to create a new account'
                  }
                </p>
              </div>

              <div className="flex gap-2 mb-6">
                <Button
                  variant={mode === 'login' ? 'gold' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('login')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button
                  variant={mode === 'signup' ? 'gold' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('signup')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>

              <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-poppins">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2 text-foreground font-poppins">
                    <Lock className="h-4 w-4 text-primary" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === 'login' ? 'Enter your password' : 'Create a secure password'}
                    className="bg-background border-border focus:ring-primary"
                  />
                  {mode === 'signup' && (
                    <p className="text-xs text-muted-foreground font-poppins">
                      Password should be at least 6 characters long
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-gold hover:shadow-gold transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground font-poppins mb-4">
                  {mode === 'login' ? (
                    <>
                      Don’t have an account?{' '}
                      <button 
                        type="button"
                        className="text-primary hover:text-primary/80 underline font-medium transition-colors" 
                        onClick={() => setMode('signup')}
                      >
                        Create one here
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button 
                        type="button"
                        className="text-primary hover:text-primary/80 underline font-medium transition-colors" 
                        onClick={() => setMode('login')}
                      >
                        Sign in here
                      </button>
                    </>
                  )}
                </p>
                
                {mode === 'login' && (
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground font-poppins">
                      Forgot your password? Contact us at{' '}
                      <a href="mailto:info@srisaidigital.com" className="text-primary hover:underline">
                        info@srisaidigital.com
                      </a>
                    </p>
                  </div>
                )}
              </div>

            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Auth;