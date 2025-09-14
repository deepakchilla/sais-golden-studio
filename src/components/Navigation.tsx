import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/auth' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-surface-dark/95 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Camera className="h-6 w-6 text-primary-dark" />
            </div>
            <div className="text-primary-dark-foreground">
              <span className="font-playfair font-bold text-xl">Sri Sai</span>
              <span className="text-primary ml-1 font-playfair">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
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
            <Button variant="hero" size="sm">
              Book Now
            </Button>
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
            {navItems.map((item) => (
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
            <Button variant="hero" size="sm" className="w-full">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;