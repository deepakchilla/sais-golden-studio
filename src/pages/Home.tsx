import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Video, User, FileImage, Edit, Book, Building, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import weddingImage from '/src/assets/wedding-service.jpg';
import portraitImage from '/src/assets/portrait-service.jpg';
import corporateImage from '/src/assets/corporate-service.jpg';

const Home = () => {
  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Capturing your special day with artistic flair and emotional depth',
      image: weddingImage,
    },
    {
      icon: User,
      title: 'Portrait Sessions',
      description: 'Professional portraits that showcase your personality and style',
      image: portraitImage,
    },
    {
      icon: Building,
      title: 'Corporate Photography',
      description: 'Professional headshots and corporate event coverage',
      image: corporateImage,
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Cinematic videos that tell your story beautifully',
      image: weddingImage,
    },
    {
      icon: FileImage,
      title: 'Passport Photos',
      description: 'Quick and professional ID photos with same-day delivery',
      image: portraitImage,
    },
    {
      icon: Edit,
      title: 'Photo Editing',
      description: 'Advanced retouching and color grading services',
      image: corporateImage,
    },
  ];

  const testimonials = [
    {
      name: 'Priya & Rajesh Sharma',
      service: 'Wedding Photography',
      text: 'Sri Sai Digital exceeded our expectations! They captured every precious moment of our wedding day with such artistry and professionalism. The photos are absolutely stunning and we get compliments from everyone who sees them. Worth every penny!',
      rating: 5,
      location: 'Mumbai',
      avatar: portraitImage,
    },
    {
      name: 'Dr. Arun Kumar',
      service: 'Corporate Headshots',
      text: 'As a medical professional, I needed high-quality headshots for my practice. The team at Sri Sai Digital made me feel comfortable throughout the session and delivered exceptional results. Highly recommended.',
      rating: 5,
      location: 'Bangalore',
      avatar: corporateImage,
    },
    {
      name: 'Meera & Family',
      service: 'Family Portraits',
      text: 'What an amazing experience! The photographers were incredibly patient with our three young children and somehow managed to capture perfect family moments. The final photos are treasures we\'ll cherish forever.',
      rating: 5,
      location: 'Chennai',
      avatar: weddingImage,
    },
    {
      name: 'Vikram Industries',
      service: 'Corporate Event Coverage',
      text: 'Sri Sai Digital provided comprehensive coverage for our annual corporate event. Their professionalism, attention to detail, and ability to capture key moments without being intrusive was impressive. Excellent service!',
      rating: 5,
      location: 'Delhi',
      avatar: corporateImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-primary-dark/95 via-primary-dark/90 to-primary-dark/95 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-48 translate-y-48" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-20">

            <h2 className="font-playfair text-5xl sm:text-6xl font-bold text-primary-dark-foreground mb-8">
              Our <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-primary-dark-foreground/80 max-w-3xl mx-auto font-poppins leading-relaxed">
              From intimate portraits to grand celebrations, we deliver exceptional photography experiences 
              <span className="text-primary font-semibold">tailored to your unique vision</span>
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden bg-background/95 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent group-hover:from-primary-dark/60 transition-all duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 bg-gradient-to-br from-primary/95 to-accent/95 backdrop-blur-sm p-4 border border-primary/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <service.icon className="h-7 w-7 text-primary-dark drop-shadow-lg" />
                  </div>
                  

                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center pb-6 px-4">
                      <Button variant="hero" size="sm" className="bg-primary/90 hover:bg-primary text-primary-dark font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Card Content */}
                <CardContent className="p-8 bg-gradient-to-br from-background to-background/95 border border-black">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-poppins leading-relaxed text-base mb-4">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-poppins font-medium">Quality Guaranteed</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link to="/services">
                <Button variant="hero" size="xl" className="min-w-[200px] h-14 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                  <Camera className="mr-3 h-5 w-5" />
                  View All Services
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline-gold" size="xl" className="min-w-[200px] h-14 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                  <ArrowRight className="mr-3 h-5 w-5" />
                  Book Now
                </Button>
              </Link>
            </div>
            <p className="text-primary-dark-foreground/60 font-poppins text-sm mt-4">
              Free consultation • Same-day booking available
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-background via-warm-gray/50 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-20">

            <h2 className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-8">
              What Our <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>

          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group bg-background/95 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                    <span className="ml-2 text-primary font-poppins font-semibold text-sm">5.0</span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-foreground font-poppins text-lg leading-relaxed mb-8 relative">
                    <span className="text-primary text-4xl font-playfair absolute -top-2 -left-2 opacity-50">“</span>
                    <span className="relative z-10">{testimonial.text}</span>
                    <span className="text-primary text-4xl font-playfair absolute -bottom-4 -right-2 opacity-50">”</span>
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-14 h-14 object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-primary font-poppins font-semibold text-sm">{testimonial.service}</p>
                      <p className="text-muted-foreground font-poppins text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  

                </CardContent>
              </Card>
            ))}
          </div>
          

        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary-dark overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">

          
          <h2 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark-foreground mb-8 leading-tight">
            Ready to Capture Your 
            <span className="block text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl">
              Special Moments?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-primary-dark-foreground/90 mb-12 font-poppins max-w-4xl mx-auto leading-relaxed">
            Let's collaborate to create <span className="text-primary font-semibold">timeless memories</span> with 
            professional photography that tells your unique story beautifully
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/booking" className="group">
              <Button variant="hero" size="xl" className="min-w-[280px] h-16 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50">
                <Camera className="mr-3 h-6 w-6" />
                Book Your Session
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button variant="outline-gold" size="xl" className="min-w-[280px] h-16 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 border-2">
                <Star className="mr-3 h-6 w-6" />
                Get Free Quote
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 text-primary-dark-foreground/80">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-poppins font-medium">Free Consultation Call</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-dark-foreground/80">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-poppins font-medium">Same-Day Booking Available</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-dark-foreground/80">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-poppins font-medium">Quality Service</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <p className="text-primary-dark-foreground/70 font-poppins text-lg mb-4">
              Questions? Call us directly or WhatsApp for instant response
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary font-poppins font-semibold">
              <span className="text-xl">📞 +91 98765 43210</span>
              <span className="hidden sm:block text-primary-dark-foreground/50">•</span>
              <span className="text-xl">💬 WhatsApp: +91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
