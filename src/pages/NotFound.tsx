import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-16 bg-warm-gray flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="elegant-card">
          <CardContent className="p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <Camera className="h-10 w-10 text-primary" />
            </div>
            
            <h1 className="font-playfair text-6xl sm:text-7xl font-bold text-foreground mb-4">
              4<span className="text-primary">0</span>4
            </h1>
            
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground font-poppins mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, 
              or you entered the wrong URL. Let's get you back on track.
            </p>
            
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-poppins mb-6">
                <strong>Attempted URL:</strong> <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
                
                <Button variant="outline-gold" size="lg" asChild>
                  <Link to="/services">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Services
                  </Link>
                </Button>
              </div>
              
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-poppins">
                Need help? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> and we'll assist you.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
