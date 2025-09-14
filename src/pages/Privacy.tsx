import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number) when you contact us or book our services',
        'Event details (dates, locations, preferences) for photography sessions',
        'Payment information for billing purposes (processed securely through third-party providers)',
        'Website usage data through cookies and analytics tools',
        'Photos and content you share with us for editing or album creation services'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and deliver our photography services',
        'To communicate with you about bookings, appointments, and service updates',
        'To process payments and maintain billing records',
        'To improve our services and website functionality',
        'To send promotional materials (only with your consent)',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Information Protection',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All payment processing is handled through secure, PCI-compliant systems',
        'Your photos are stored securely and accessed only by authorized personnel',
        'We do not sell, rent, or share your personal information with third parties',
        'Regular security audits and updates to our systems',
        'Staff training on data protection and privacy practices'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Right to access: You can request a copy of your personal data',
        'Right to correction: You can request corrections to inaccurate information',
        'Right to deletion: You can request deletion of your personal data',
        'Right to portability: You can request transfer of your data',
        'Right to object: You can object to certain uses of your information',
        'Right to withdraw consent: You can withdraw consent for marketing communications'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground font-poppins leading-relaxed max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Sri Sai Digital Photo Studio 
            collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-muted-foreground font-poppins mt-4">
            Last updated: September 2024
          </p>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="elegant-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-playfair text-2xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-muted-foreground font-poppins leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="elegant-card">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Cookies & Tracking
                </h3>
                <p className="text-muted-foreground font-poppins text-sm leading-relaxed mb-4">
                  We use cookies to improve your browsing experience and analyze website traffic. 
                  You can control cookie settings through your browser preferences.
                </p>
                <Button variant="outline-gold" size="sm">
                  Cookie Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="elegant-card">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Third-Party Services
                </h3>
                <p className="text-muted-foreground font-poppins text-sm leading-relaxed mb-4">
                  We may use third-party services for analytics, payment processing, and marketing. 
                  These services have their own privacy policies.
                </p>
                <Button variant="outline-gold" size="sm">
                  View Partners
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-semibold text-foreground mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-muted-foreground font-poppins leading-relaxed mb-8">
            If you have any questions about this Privacy Policy or how we handle your personal information, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button variant="outline-gold" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;