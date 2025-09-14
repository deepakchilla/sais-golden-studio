import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, Phone, Camera, Heart, Video, Building, FileImage, Edit, Book, IndianRupee, MapPin, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_date: '',
    event_time: '',
    location: '',
    message: '',
    budget_range: '',
    guest_count: '',
  });
  const { toast } = useToast();

  const services = [
    {
      id: 'wedding',
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding coverage from engagement to reception',
      startingPrice: '₹25,000',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Candid moments', 'Traditional poses', 'Album creation']
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Videography Services',
      description: 'Cinematic wedding videos and event coverage',
      startingPrice: '₹20,000',
      features: ['Cinematic videos', 'Drone coverage', 'Multiple angles', 'Professional editing', 'Same-day highlights', 'HD quality']
    },
    {
      id: 'portrait',
      icon: User,
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals and families',
      startingPrice: '₹2,500',
      features: ['Studio portraits', 'Outdoor shoots', 'Family portraits', 'Individual sessions', 'Group photography', 'Retouching included']
    },
    {
      id: 'corporate',
      icon: Building,
      title: 'Corporate Photography',
      description: 'Professional headshots and business photography',
      startingPrice: '₹3,000',
      features: ['Professional headshots', 'Corporate events', 'Product photography', 'Team photos', 'LinkedIn photos', 'Business portraits']
    },
    {
      id: 'passport',
      icon: FileImage,
      title: 'Passport & ID Photos',
      description: 'Quick professional ID photos with same-day delivery',
      startingPrice: '₹200',
      features: ['Passport photos', 'Visa photos', 'ID card photos', 'Same-day delivery', 'Digital copies', 'Multiple prints']
    },
    {
      id: 'editing',
      icon: Edit,
      title: 'Photo Editing',
      description: 'Professional editing and retouching services',
      startingPrice: '₹100/photo',
      features: ['Color correction', 'Skin retouching', 'Background removal', 'Photo enhancement', 'Artistic effects', 'Quick turnaround']
    },
    {
      id: 'printing',
      icon: Book,
      title: 'Album Printing',
      description: 'Premium photo albums and canvas prints',
      startingPrice: '₹1,500',
      features: ['Premium albums', 'Canvas prints', 'Photo frames', 'Custom designs', 'High-quality printing', 'Various sizes']
    }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setFormData(prev => ({ ...prev, service_type: service.title }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      toast({
        variant: "destructive",
        title: "Service Required",
        description: "Please select a service before submitting your booking request.",
      });
      return;
    }

    setLoading(true);
    try {
      const selectedServiceData = services.find(s => s.id === selectedService);
      const { error } = await supabase
        .from('service_inquiries')
        .insert({
          ...formData,
          service_type: selectedServiceData?.title,
          event_date: formData.event_date || null,
        });

      if (error) throw error;

      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you within 24 hours to discuss your photography needs and confirm the details.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_date: '',
        event_time: '',
        location: '',
        message: '',
        budget_range: '',
        guest_count: '',
      });
      setSelectedService('');
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit booking request. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 mb-6">
            <Camera className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-primary-dark-foreground mb-6">
            Book Your <span className="text-primary">Photography Session</span>
          </h1>
          <p className="text-lg text-primary-dark-foreground/90 font-poppins leading-relaxed max-w-2xl mx-auto">
            Ready to capture your special moments? Select a service below and fill out the booking form. 
            We'll get back to you within 24 hours to discuss details and confirm your session.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Service</span>
            </h2>
            <p className="text-muted-foreground font-poppins max-w-2xl mx-auto">
              Select the photography service you're interested in to get started with your booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`elegant-card cursor-pointer transition-all duration-300 hover:shadow-gold ${
                  selectedService === service.id 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : ''
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-poppins mb-3">
                    {service.description}
                  </p>
                  <p className="text-primary font-poppins font-semibold">
                    Starting from {service.startingPrice}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedServiceData && (
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground flex items-center gap-3">
                  <selectedServiceData.icon className="h-6 w-6 text-primary" />
                  {selectedServiceData.title} - {selectedServiceData.startingPrice}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-poppins mb-4">{selectedServiceData.description}</p>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedServiceData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="elegant-card">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground text-center">
                Complete Your Booking Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-poppins">
                      <User className="h-4 w-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-poppins">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-poppins">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget_range" className="flex items-center gap-2 text-foreground font-poppins">
                      <IndianRupee className="h-4 w-4 text-primary" />
                      Budget Range
                    </Label>
                    <Select value={formData.budget_range} onValueChange={(value) => handleInputChange('budget_range', value)}>
                      <SelectTrigger className="bg-background border-border focus:ring-primary">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                        <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event_date" className="flex items-center gap-2 text-foreground font-poppins">
                      <Calendar className="h-4 w-4 text-primary" />
                      Event Date
                    </Label>
                    <Input
                      id="event_date"
                      type="date"
                      value={formData.event_date}
                      onChange={(e) => handleInputChange('event_date', e.target.value)}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="event_time" className="flex items-center gap-2 text-foreground font-poppins">
                      <Clock className="h-4 w-4 text-primary" />
                      Preferred Time
                    </Label>
                    <Input
                      id="event_time"
                      type="time"
                      value={formData.event_time}
                      onChange={(e) => handleInputChange('event_time', e.target.value)}
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2 text-foreground font-poppins">
                      <MapPin className="h-4 w-4 text-primary" />
                      Event Location
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, venue, or address"
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guest_count" className="flex items-center gap-2 text-foreground font-poppins">
                      <User className="h-4 w-4 text-primary" />
                      Number of Guests
                    </Label>
                    <Input
                      id="guest_count"
                      type="number"
                      value={formData.guest_count}
                      onChange={(e) => handleInputChange('guest_count', e.target.value)}
                      placeholder="Approximate number"
                      className="bg-background border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground font-poppins">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    Additional Details
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your event, special requirements, style preferences, or any questions you have..."
                    rows={4}
                    className="bg-background border-border focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email || !formData.phone || !selectedService}
                    className="flex-1 bg-gradient-gold hover:shadow-gold transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    {loading ? 'Sending Request...' : 'Send Booking Request'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-semibold text-primary-dark-foreground mb-6">
            Need to Discuss Your Requirements?
          </h2>
          <p className="text-primary-dark-foreground/90 font-poppins leading-relaxed mb-8">
            Have specific questions or need a custom package? Contact us directly and we'll help you 
            create the perfect photography solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 98765 43210
            </Button>
            <Button variant="outline-gold" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;