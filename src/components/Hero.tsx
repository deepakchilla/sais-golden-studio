import { Button } from '@/components/ui/button';
import { Camera, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold hero-text">
              <span className="block">Sri Sai Digital</span>
              <span className="block text-primary">Photo Studio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-dark-foreground/90 font-poppins max-w-2xl mx-auto leading-relaxed">
              Capturing your precious moments with elegance, creativity, and professional excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              View Portfolio
            </Button>
            <Button variant="outline-gold" size="xl" className="min-w-[200px]">
              Book Session
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary-dark-foreground mb-2">500+</h3>
              <p className="text-primary-dark-foreground/80 font-poppins">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary-dark-foreground mb-2">5+</h3>
              <p className="text-primary-dark-foreground/80 font-poppins">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary-dark-foreground mb-2">98%</h3>
              <p className="text-primary-dark-foreground/80 font-poppins">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;