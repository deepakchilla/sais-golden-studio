import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Video, User, FileImage, Edit, Book, Building, Heart, Briefcase } from 'lucide-react';
import weddingImage from '@/assets/wedding-service.jpg';
import portraitImage from '@/assets/portrait-service.jpg';
import corporateImage from '@/assets/corporate-service.jpg';
import BookingDialog from '@/components/BookingDialog';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding & Event Photography',
      description: 'Complete wedding coverage from engagement shoots to reception. We capture every precious moment with artistic flair and emotional depth.',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Candid moments', 'Traditional poses', 'Album creation'],
      price: 'Starting from ₹25,000',
      image: weddingImage,
    },
    {
      icon: Video,
      title: 'Videography Services',
      description: 'Cinematic wedding videos and event coverage that tell your story beautifully with professional editing and color grading.',
      features: ['Cinematic videos', 'Drone coverage', 'Multiple camera angles', 'Professional editing', 'Same-day highlights', 'HD quality'],
      price: 'Starting from ₹20,000',
      image: weddingImage,
    },
    {
      icon: User,
      title: 'Portrait Photography',
      description: 'Professional portrait sessions for individuals, families, and groups. Indoor studio and outdoor location shoots available.',
      features: ['Studio portraits', 'Outdoor shoots', 'Family portraits', 'Individual sessions', 'Group photography', 'Retouching included'],
      price: 'Starting from ₹2,500',
      image: portraitImage,
    },
    {
      icon: FileImage,
      title: 'Passport & ID Photos',
      description: 'Quick and professional passport photos, visa photos, and ID pictures with same-day delivery and digital copies.',
      features: ['Passport size photos', 'Visa photos', 'ID card photos', 'Same-day delivery', 'Digital copies', 'Multiple prints'],
      price: 'Starting from ₹200',
      image: portraitImage,
    },
    {
      icon: Edit,
      title: 'Photo Editing & Retouching',
      description: 'Professional photo editing services including color correction, retouching, and enhancement for all types of photography.',
      features: ['Color correction', 'Skin retouching', 'Background removal', 'Photo enhancement', 'Artistic effects', 'Quick turnaround'],
      price: 'Starting from ₹100 per photo',
      image: corporateImage,
    },
    {
      icon: Book,
      title: 'Album Printing',
      description: 'Premium quality photo albums, canvas prints, and frames. Custom designs available for weddings and special events.',
      features: ['Premium albums', 'Canvas prints', 'Photo frames', 'Custom designs', 'High-quality printing', 'Various sizes'],
      price: 'Starting from ₹1,500',
      image: weddingImage,
    },
    {
      icon: Building,
      title: 'Corporate Photography',
      description: 'Professional corporate headshots, event coverage, and business photography for companies and professionals.',
      features: ['Professional headshots', 'Corporate events', 'Product photography', 'Team photos', 'LinkedIn photos', 'Business portraits'],
      price: 'Starting from ₹3,000',
      image: corporateImage,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Professional Photography <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground font-poppins leading-relaxed max-w-2xl mx-auto">
            From intimate portraits to grand weddings, we offer comprehensive photography services 
            to capture your most precious moments with artistic excellence and professional quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="elegant-card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-dark/50 group-hover:bg-primary-dark/40 transition-all duration-300" />
                  <div className="absolute top-6 left-6 bg-primary/90 p-4 rounded-xl">
                    <service.icon className="h-8 w-8 text-primary-dark" />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-primary-dark/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-primary font-poppins font-semibold">{service.price}</span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground font-poppins mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <BookingDialog serviceTitle={service.title}>
                    <Button variant="gold" className="w-full">
                      Book This Service
                    </Button>
                  </BookingDialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary-dark-foreground mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-lg text-primary-dark-foreground/90 mb-8 font-poppins">
            We offer customized photography packages to suit your specific needs and budget. 
            Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline-gold" size="lg">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;