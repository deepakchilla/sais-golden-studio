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

  // Helper function to navigate and scroll to top
  const navigateAndScrollToTop = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

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

  // Navigation items (including Login for non-authenticated users)
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
          <div onClick={() => navigateAndScrollToTop('/')} className="cursor-pointer flex items-center">
            <div className="text-primary-dark-foreground">
              <span className="font-serif italic font-medium text-2xl tracking-wide text-white">SRI SAI</span>
              <span className="text-primary ml-2 font-serif italic font-medium text-2xl tracking-wide">DIGITAL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                onClick={() => navigateAndScrollToTop(item.path)}
                className={`cursor-pointer font-poppins font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary gold-accent'
                    : 'text-primary-dark-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </div>
            ))}
            
            {/* Book Now Button */}
            <Button variant="hero" size="sm" onClick={() => navigateAndScrollToTop('/booking')}>
              Book Now
            </Button>
            
            {/* Profile Dropdown (only for authenticated users) */}
            {user && (
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
                  <DropdownMenuItem onClick={() => navigateAndScrollToTop('/profile')} className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateAndScrollToTop('/booking')} className="cursor-pointer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    My Bookings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateAndScrollToTop('/portfolio')} className="cursor-pointer">
                    <Heart className="mr-2 h-4 w-4" />
                    Favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateAndScrollToTop('/settings')} className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
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
              <div
                key={item.name}
                onClick={() => {
                  navigateAndScrollToTop(item.path);
                  setIsOpen(false);
                }}
                className={`cursor-pointer block font-poppins font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-primary-dark-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </div>
            ))}
            
            {/* Mobile Book Now Button */}
            <Button variant="hero" size="sm" className="w-full" onClick={() => {
              navigateAndScrollToTop('/booking');
              setIsOpen(false);
            }}>
              Book Now
            </Button>
            
            {/* Mobile Profile Section (only for authenticated users) */}
            {user && (
              <div className="border-t border-border pt-4 space-y-2">
                <div className="px-2 py-2">
                  <p className="text-sm font-medium text-foreground">Signed in as</p>
                  <p className="text-xs text-muted-foreground font-poppins">{user.email}</p>
                </div>
                <div onClick={() => {
                  navigateAndScrollToTop('/profile');
                  setIsOpen(false);
                }} className="cursor-pointer flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </div>
                <div onClick={() => {
                  navigateAndScrollToTop('/booking');
                  setIsOpen(false);
                }} className="cursor-pointer flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Bookings
                </div>
                <div onClick={() => {
                  navigateAndScrollToTop('/portfolio');
                  setIsOpen(false);
                }} className="cursor-pointer flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Heart className="mr-2 h-4 w-4" />
                  Favorites
                </div>
                <div onClick={() => {
                  navigateAndScrollToTop('/settings');
                  setIsOpen(false);
                }} className="cursor-pointer flex items-center px-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </div>
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
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;