import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Award, Users, Heart, Star, Clock } from 'lucide-react';
import studioImage from '@/assets/studio-exterior.jpg';
import portraitImage from '@/assets/portrait-service.jpg';

const About = () => {
  const achievements = [
    {
      icon: Camera,
      number: '500+',
      title: 'Projects Completed',
      description: 'Successfully delivered high-quality photography services',
    },
    {
      icon: Users,
      number: '450+',
      title: 'Happy Clients',
      description: 'Building lasting relationships through exceptional service',
    },
    {
      icon: Award,
      number: '5+',
      title: 'Years Experience',
      description: 'Professional photography expertise and artistic vision',
    },
    {
      icon: Star,
      number: '4.9',
      title: 'Average Rating',
      description: 'Consistently rated excellent by our clients',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We are passionate about creating beautiful, timeless photographs that capture the essence of your special moments.',
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'Your satisfaction is our priority. We work closely with you to understand your vision and exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Reliability & Punctuality',
      description: 'We value your time and ensure timely delivery of services without compromising on quality.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Sri Sai Digital</span> Photo Studio
              </h1>
              <p className="text-lg text-muted-foreground font-poppins mb-6 leading-relaxed">
                Established with a passion for capturing life's most precious moments, Sri Sai Digital Photo Studio 
                has been serving the community with professional photography services that blend artistic vision 
                with technical excellence.
              </p>
              <p className="text-lg text-muted-foreground font-poppins mb-8 leading-relaxed">
                Our journey began with a simple belief: every moment deserves to be captured beautifully. 
                From intimate portraits to grand celebrations, we approach each project with dedication, 
                creativity, and attention to detail that sets us apart.
              </p>
              <Button variant="gold" size="lg">
                View Our Work
              </Button>
            </div>
            <div className="relative">
              <img 
                src={studioImage} 
                alt="Sri Sai Digital Photo Studio"
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              Years of dedication and commitment to excellence have earned us the trust of our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="elegant-card text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                    {achievement.number}
                  </h3>
                  <h4 className="font-poppins font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={portraitImage} 
                alt="Our Photography Style"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent rounded-2xl" />
            </div>
            <div>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground font-poppins mb-6 leading-relaxed">
                Founded by passionate photographers who understand the importance of preserving life's most 
                meaningful moments, Sri Sai Digital Photo Studio combines traditional photography techniques 
                with modern digital artistry.
              </p>
              <p className="text-lg text-muted-foreground font-poppins mb-6 leading-relaxed">
                We believe that every photograph should tell a story, evoke emotions, and stand the test of time. 
                Our team is dedicated to understanding your unique vision and bringing it to life through our lens.
              </p>
              <p className="text-lg text-muted-foreground font-poppins mb-8 leading-relaxed">
                Whether it's the joy of a wedding day, the pride of a corporate achievement, or the love of a 
                family portrait, we're here to capture these precious moments with artistry and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="elegant-card text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-poppins leading-relaxed">
                    {value.description}
                  </p>
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
            Ready to Create <span className="text-primary">Beautiful Memories</span>?
          </h2>
          <p className="text-lg text-primary-dark-foreground/90 mb-8 font-poppins max-w-2xl mx-auto">
            Let's work together to capture your special moments with the artistry and professionalism 
            they deserve. Get in touch today to discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Contact Us Today
            </Button>
            <Button variant="outline-gold" size="xl">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;