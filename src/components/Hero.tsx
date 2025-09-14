import { Button } from '@/components/ui/button';
import { Camera, Award, Users, Star, Play, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '/src/assets/hero-bg.jpg';
import secondBg from '/src/assets/SecondBg.jpg';

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary-dark/60 to-primary-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">


            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-8xl font-bold hero-text leading-tight">
                <span className="block drop-shadow-2xl">Sri Sai Digital</span>
                <span className="block text-primary drop-shadow-2xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Photo Studio</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary-dark-foreground/95 font-poppins max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Capturing life's most precious moments with <span className="text-primary font-semibold">artistic vision</span> and <span className="text-primary font-semibold">creativity</span>
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link to="/portfolio" className="group">
                <Button variant="hero" size="xl" className="min-w-[220px] h-14 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50">
                  <Camera className="mr-3 h-5 w-5" />
                  View Portfolio
                </Button>
              </Link>
              <Link to="/booking" className="group">
                <Button variant="outline-gold" size="xl" className="min-w-[220px] h-14 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 border-2">
                  <Play className="mr-3 h-5 w-5" />
                  Book Session
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 pt-6">
              <div className="flex items-center gap-2 text-primary-dark-foreground/80">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="font-poppins text-sm font-medium">@srisaidigital</span>
              </div>
              <div className="w-1 h-1 bg-primary rounded-full" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
                <span className="text-primary-dark-foreground/80 font-poppins text-sm font-medium ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" style={{ backgroundImage: `url(${secondBg})`, backgroundSize: '400px 400px' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/40 mb-6 group-hover:border-primary/60 transition-all duration-300">
                <Camera className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">500+</h3>
              <p className="text-primary-dark-foreground/90 font-poppins font-medium text-lg">Projects Completed</p>
              <p className="text-primary-dark-foreground/70 font-poppins text-sm mt-2">Weddings, Portraits & Events</p>
            </div>
            
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/40 mb-6 group-hover:border-primary/60 transition-all duration-300">
                <Award className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">8+</h3>
              <p className="text-primary-dark-foreground/90 font-poppins font-medium text-lg">Years Experience</p>
            </div>
            
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/40 mb-6 group-hover:border-primary/60 transition-all duration-300">
                <Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">98%</h3>
              <p className="text-primary-dark-foreground/90 font-poppins font-medium text-lg">Client Satisfaction</p>
              <p className="text-primary-dark-foreground/70 font-poppins text-sm mt-2">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;