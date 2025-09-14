import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
    <main className="min-h-screen pt-16 bg-background">
      <section className="py-16">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold font-playfair text-center mb-6 text-foreground">
            {mode === 'login' ? 'Login' : 'Create an account'}
          </h1>
          <Card className="elegant-card">
            <CardContent className="p-6">
              <div className="flex gap-2 mb-6">
                <Button
                  variant={mode === 'login' ? 'hero' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('login')}
                >
                  Login
                </Button>
                <Button
                  variant={mode === 'signup' ? 'hero' : 'outline'}
                  className="flex-1"
                  onClick={() => setMode('signup')}
                >
                  Sign up
                </Button>
              </div>

              <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your secure password"
                    className="bg-background border-border"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-gold hover:shadow-gold"
                >
                  {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Create account'}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                {mode === 'login' ? (
                  <>
                    Don’t have an account?{' '}
                    <button className="text-primary underline" onClick={() => setMode('signup')}>Sign up</button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button className="text-primary underline" onClick={() => setMode('login')}>Login</button>
                  </>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Auth;