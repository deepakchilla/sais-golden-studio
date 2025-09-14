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
      title: 'Our Location',
      details: ['123 Photography Street', 'Digital Plaza, 2nd Floor', 'City, State 560001'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 87654 32109', 'Landline: 080-12345678'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@srisaidigital.com', 'bookings@srisaidigital.com', 'support@srisaidigital.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM', 'Emergency shoots: 24/7'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground font-poppins leading-relaxed max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch with us today to discuss your 
            photography needs and book your session.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="elegant-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground font-poppins text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
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