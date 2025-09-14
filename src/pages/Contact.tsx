import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: [
        'Sri Sai Digital Photo Studio',
        'Digital Plaza, 2nd Floor, Shop #23-25',
        'MG Road, Bangalore, Karnataka 560001'
      ],
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: [
        'Primary: +91 98765 43210',
        'Secondary: +91 87654 32109', 
        'Landline: 080-2234-5678'
      ],
    },
    {
      icon: Mail,
      title: 'Email Contacts',
      details: [
        'Bookings: bookings@srisaidigital.com',
        'General: info@srisaidigital.com',
        'Support: support@srisaidigital.com'
      ],
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        'Mon-Sat: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM',
        'Emergency shoots: Available 24/7'
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary-dark overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Contact Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-8 py-4 mb-10">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-primary font-poppins font-bold tracking-wider text-base">GET IN TOUCH WITH US</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark-foreground mb-8 leading-tight">
            Contact <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl">Us</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-dark-foreground/90 font-poppins leading-relaxed max-w-4xl mx-auto mb-12">
            Ready to capture your <span className="text-primary font-semibold">special moments</span>? 
            Get in touch with us today to discuss your photography needs and 
            <span className="text-primary font-semibold">book your perfect session</span>.
          </p>
          
          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">&lt; 2hrs</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">Response Time</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">WhatsApp Support</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">Free</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">Consultation Call</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-24 bg-gradient-to-br from-background via-warm-gray/30 to-background relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group bg-background/95 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 mb-6 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                    <info.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground font-poppins text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* Action Button based on card type */}
                  {info.title.includes('Phone') && (
                    <Button variant="outline" size="sm" className="mt-4 w-full group-hover:border-primary group-hover:text-primary transition-all duration-300">
                      Call Now
                    </Button>
                  )}
                  {info.title.includes('Email') && (
                    <Button variant="outline" size="sm" className="mt-4 w-full group-hover:border-primary group-hover:text-primary transition-all duration-300">
                      Send Email
                    </Button>
                  )}
                  {info.title.includes('Location') && (
                    <Button variant="outline" size="sm" className="mt-4 w-full group-hover:border-primary group-hover:text-primary transition-all duration-300">
                      Get Directions
                    </Button>
                  )}
                  {info.title.includes('Hours') && (
                    <Button variant="outline" size="sm" className="mt-4 w-full group-hover:border-primary group-hover:text-primary transition-all duration-300">
                      Book Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="elegant-card">
              <CardContent className="p-8">
                <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-poppins font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-poppins font-medium">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-poppins font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="font-poppins font-medium">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring font-poppins"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="corporate">Corporate Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="videography">Videography</option>
                      <option value="passport">Passport Photos</option>
                      <option value="editing">Photo Editing</option>
                      <option value="printing">Album Printing</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-poppins font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your photography needs, preferred dates, budget, etc."
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Quick Actions */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <Card className="elegant-card">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                    Find Us Here
                  </h2>
                  <div className="bg-warm-gray rounded-lg h-64 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-poppins">
                        Interactive Google Map
                      </p>
                      <p className="text-sm text-muted-foreground font-poppins mt-2">
                        123 Photography Street, Digital Plaza
                      </p>
                    </div>
                  </div>
                  <Button variant="outline-gold" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="elegant-card">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                    Quick Actions
                  </h2>
                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: +91 98765 43210
                    </Button>
                    <Button variant="elegant" size="lg" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp: +91 98765 43210
                    </Button>
                    <Button variant="outline-gold" size="lg" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary-dark-foreground mb-6">
            Need <span className="text-primary">Urgent</span> Photography Services?
          </h2>
          <p className="text-lg text-primary-dark-foreground/90 mb-8 font-poppins">
            We're available for emergency and last-minute bookings. Call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Emergency Hotline
            </Button>
            <Button variant="outline-gold" size="lg">
              24/7 WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;