import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Video, User, FileImage, Edit, Book, Building, Star } from 'lucide-react';
import weddingImage from '@/assets/wedding-service.jpg';
import portraitImage from '@/assets/portrait-service.jpg';
import corporateImage from '@/assets/corporate-service.jpg';

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
      name: 'Priya & Rajesh',
      service: 'Wedding Photography',
      text: 'Sri Sai Digital captured our wedding beautifully! The photos are absolutely stunning and we couldn\'t be happier.',
      rating: 5,
    },
    {
      name: 'Arun Kumar',
      service: 'Corporate Headshots',
      text: 'Professional service and excellent quality. The team made me feel comfortable during the entire shoot.',
      rating: 5,
    },
    {
      name: 'Meera Sharma',
      service: 'Family Portraits',
      text: 'Amazing experience! The photographers were patient with our kids and the results exceeded our expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-warm-gray/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              From weddings to corporate events, we provide comprehensive photography services with professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="elegant-card group cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/60 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-primary/90 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-dark" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground font-poppins leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="elegant-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground font-poppins italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-playfair font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-poppins">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary-dark-foreground mb-6">
            Ready to Capture Your <span className="text-primary">Special Moments?</span>
          </h2>
          <p className="text-lg text-primary-dark-foreground/90 mb-8 font-poppins max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Book a Session
            </Button>
            <Button variant="outline-gold" size="xl">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;