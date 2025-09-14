import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, Camera, CreditCard, Calendar, AlertTriangle, Mail } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: Camera,
      title: 'Photography Services',
      content: [
        'All photography services are subject to availability and booking confirmation',
        'Service packages and pricing are as outlined in your signed contract',
        'Additional requests beyond the agreed package may incur extra charges',
        'We reserve the right to refuse service that violates our policies',
        'Weather conditions may affect outdoor shoots - alternative arrangements will be made',
        'Client must provide accurate event details and timelines for proper service delivery'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        'A 50% deposit is required to confirm your booking',
        'Final payment is due before or on the day of service delivery',
        'Late payment fees may apply for overdue accounts',
        'Refunds are subject to our cancellation policy',
        'All prices include applicable taxes unless otherwise stated',
        'Payment can be made via cash, bank transfer, or digital payment methods'
      ]
    },
    {
      icon: Calendar,
      title: 'Booking & Cancellation',
      content: [
        'Bookings are confirmed only upon receipt of signed contract and deposit',
        'Cancellations made 30+ days before event: 75% refund of deposit',
        'Cancellations made 15-29 days before: 50% refund of deposit', 
        'Cancellations made less than 15 days: No refund',
        'Rescheduling is allowed once without charge (subject to availability)',
        'Force majeure events may require rescheduling without penalty to either party'
      ]
    },
    {
      icon: FileText,
      title: 'Usage Rights & Copyright',
      content: [
        'Sri Sai Digital retains copyright to all photographs taken',
        'Clients receive usage rights for personal, non-commercial use',
        'Commercial use requires separate licensing agreement',
        'We reserve the right to use images for portfolio and marketing purposes',
        'Clients may not alter, edit, or manipulate images without permission',
        'High-resolution images are provided as per the agreed package'
      ]
    }
  ];

  const additionalTerms = [
    {
      title: 'Client Responsibilities',
      items: [
        'Provide accurate contact information and event details',
        'Ensure all necessary permissions for photography at venues',
        'Inform us of any specific requirements or restrictions',
        'Be punctual for scheduled appointments and sessions',
        'Provide safe working conditions for our team'
      ]
    },
    {
      title: 'Our Commitments',
      items: [
        'Deliver professional, high-quality photography services',
        'Maintain confidentiality of your personal information',
        'Provide images in the agreed format and timeline',
        'Bring backup equipment to ensure service continuity',
        'Respect your privacy and event requirements'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground font-poppins leading-relaxed max-w-2xl mx-auto">
            Please read these terms carefully before booking our photography services. 
            By engaging our services, you agree to these terms and conditions.
          </p>
          <p className="text-sm text-muted-foreground font-poppins mt-4">
            Last updated: September 2024
          </p>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Additional Terms */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalTerms.map((term, index) => (
              <Card key={index} className="elegant-card">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    {term.title}
                  </h3>
                  <ul className="space-y-2">
                    {term.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        <p className="text-muted-foreground font-poppins text-sm leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="elegant-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4 flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    Important Disclaimers
                  </h3>
                  <div className="space-y-3 text-muted-foreground font-poppins text-sm">
                    <p>
                      <strong>Limitation of Liability:</strong> Our liability is limited to the total amount paid for services. 
                      We are not responsible for missed moments due to technical failures or circumstances beyond our control.
                    </p>
                    <p>
                      <strong>Equipment Failure:</strong> While we carry backup equipment, we cannot guarantee against all technical 
                      failures. Alternative arrangements will be made when possible.
                    </p>
                    <p>
                      <strong>Image Delivery:</strong> Images are delivered in digital format unless physical prints are specifically 
                      ordered. We recommend backing up your photos immediately upon receipt.
                    </p>
                    <p>
                      <strong>Model Releases:</strong> By booking our services, you grant permission for us to photograph all 
                      attendees and use images for business purposes unless explicitly restricted.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-semibold text-primary-dark-foreground mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-primary-dark-foreground/90 font-poppins leading-relaxed mb-8">
            If you have any questions about these terms or need clarification on any aspect of our services, 
            we're here to help. Contact us before booking to discuss any concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/services">
                <Camera className="h-4 w-4 mr-2" />
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;