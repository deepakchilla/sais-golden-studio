import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Camera, User, Settings, LogOut, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auth state management
  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
      });
    }
  };

  // Navigation items (excluding Login for authenticated users)
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Add login item only if user is not authenticated
  const navigationItems = user ? navItems : [...navItems, { name: 'Login', path: '/auth' }];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface-dark/95 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent p-2">
              <Camera className="h-6 w-6 text-primary-dark" />
            </div>
            <div className="text-primary-dark-foreground">
              <span className="font-playfair font-bold text-xl">Sri Sai</span>
              <span className="text-primary ml-1 font-playfair">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-poppins font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary gold-accent'
                    : 'text-primary-dark-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Book Now Button */}
            <Link to="/booking">
              <Button variant="hero" size="sm">
                Book Now
              </Button>
            </Link>
            
            {/* Profile Dropdown or Login */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="relative h-10 w-10 rounded-full border-primary/20 hover:border-primary/40 bg-primary/10 hover:bg-primary/20 p-0">
                    <User className="h-5 w-5 text-primary" />
                    <span className="sr-only">Profile menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-foreground">Welcome back!</p>
                      <p className="text-xs leading-none text-muted-foreground font-poppins">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/booking" className="flex items-center cursor-pointer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/portfolio" className="flex items-center cursor-pointer">
                      <Heart className="mr-2 h-4 w-4" />
                      Favorites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              !loading && (
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40 text-primary hover:text-primary">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block font-poppins font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-primary-dark-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Book Now Button */}
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="sm" className="w-full">
                Book Now
              </Button>
            </Link>
            
            {/* Mobile Profile Section */}
            {user ? (
              <div className="border-t border-border pt-4 space-y-2">
                <div className="px-2 py-2">
                  <p className="text-sm font-medium text-foreground">Signed in as</p>
                  <p className="text-xs text-muted-foreground font-poppins">{user.email}</p>
                </div>
                <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
                <Link to="/booking" onClick={() => setIsOpen(false)} className="flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Bookings
                </Link>
                <Link to="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Heart className="mr-2 h-4 w-4" />
                  Favorites
                </Link>
                <Link to="/settings" onClick={() => setIsOpen(false)} className="flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center px-2 py-2 text-sm text-destructive hover:text-destructive/80 transition-colors w-full text-left"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </button>
              </div>
            ) : (
              !loading && (
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 hover:border-primary/40 text-primary hover:text-primary">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;