import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import portfolioBg from '/src/assets/portfolio-bg.jpg';
import weddingImage from '/src/assets/wedding-service.jpg';
import portraitImage from '/src/assets/portrait-service.jpg';
import corporateImage from '/src/assets/corporate-service.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Weddings', 'Portraits', 'Corporate', 'Events'];

  // Enhanced portfolio items with more realistic content
  const portfolioItems = [
    {
      id: 1,
      title: 'Royal Palace Wedding - Priya & Arjun',
      category: 'Weddings',
      image: weddingImage,
      description: 'Elegant traditional wedding ceremony captured with cinematic excellence at the Royal Palace Gardens',
      tags: ['Traditional', 'Royal', 'Outdoor'],
      client: 'Sharma Family',
      year: '2024',
    },
    {
      id: 2,
      title: 'Executive Leadership Portraits',
      category: 'Corporate',
      image: corporateImage,
      description: 'Professional executive headshots for Fortune 500 company annual report and marketing materials',
      tags: ['Executive', 'Studio', 'Professional'],
      client: 'TechCorp Industries',
      year: '2024',
    },
    {
      id: 3,
      title: 'Generational Family Legacy',
      category: 'Portraits',
      image: portraitImage,
      description: 'Multi-generational family portrait session celebrating 50 years of family heritage and love',
      tags: ['Family', 'Legacy', 'Studio'],
      client: 'Patel Family',
      year: '2024',
    },
    {
      id: 4,
      title: 'Destination Pre-Wedding - Goa',
      category: 'Weddings',
      image: weddingImage,
      description: 'Romantic beach pre-wedding shoot capturing the essence of love against stunning coastal backdrops',
      tags: ['Beach', 'Destination', 'Romantic'],
      client: 'Kapoor Couple',
      year: '2024',
    },
    {
      id: 5,
      title: 'Annual Conference 2024',
      category: 'Events',
      image: corporateImage,
      description: 'Comprehensive event coverage for international business conference with 500+ attendees',
      tags: ['Conference', 'Business', 'Event'],
      client: 'Global Summit Inc',
      year: '2024',
    },
    {
      id: 6,
      title: 'Professional Actress Portfolio',
      category: 'Portraits',
      image: portraitImage,
      description: 'High-fashion portrait session for established actress portfolio and promotional materials',
      tags: ['Fashion', 'Professional', 'Studio'],
      client: 'Bollywood Talent',
      year: '2024',
    },
    {
      id: 7,
      title: 'Grand Reception Celebration',
      category: 'Weddings',
      image: weddingImage,
      description: 'Lavish wedding reception with 800 guests featuring traditional ceremonies and modern celebrations',
      tags: ['Reception', 'Grand', 'Traditional'],
      client: 'Gupta Wedding',
      year: '2024',
    },
    {
      id: 8,
      title: 'C-Suite Executive Branding',
      category: 'Corporate',
      image: corporateImage,
      description: 'Personal branding photography for senior executives including environmental and studio portraits',
      tags: ['Branding', 'C-Suite', 'Professional'],
      client: 'Financial Services Ltd',
      year: '2024',
    },
    {
      id: 9,
      title: 'Newborn & Family Lifestyle',
      category: 'Portraits',
      image: portraitImage,
      description: 'Intimate newborn and family lifestyle session capturing precious early moments at home',
      tags: ['Newborn', 'Lifestyle', 'Family'],
      client: 'Johnson Family',
      year: '2024',
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Enhanced Header Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${portfolioBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/70 to-primary-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
        

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">

          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-dark-foreground mb-8 leading-tight">
            Our <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl">Portfolio</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-dark-foreground/90 font-poppins leading-relaxed max-w-4xl mx-auto mb-8">
            Explore our collection of <span className="text-primary font-semibold">extraordinary photography work</span> spanning 
            weddings, portraits, corporate events, and lifestyle sessions. Each image tells a unique story of 
            <span className="text-primary font-semibold">artistry and emotion</span>.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">Featured Shots</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-2">8+</h3>
              <p className="text-primary-dark-foreground/80 font-poppins font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-warm-gray border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "gold" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-24 bg-gradient-to-br from-background via-warm-gray/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group cursor-pointer overflow-hidden bg-background border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Clean Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-primary/95 backdrop-blur-sm px-3 py-1">
                    <span className="text-primary-dark font-poppins text-xs font-bold tracking-wider">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Year Badge - Top Right */}
                  <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm px-3 py-1">
                    <span className="text-primary font-poppins text-xs font-semibold">{item.year}</span>
                  </div>
                  
                  {/* Hover Button - Bottom Center */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to={`/portfolio/${item.id}`}>
                      <Button variant="hero" size="sm" className="bg-primary hover:bg-primary/90 text-primary-dark font-semibold border-0 shadow-lg">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          }
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/20 mb-6">
                <Camera className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                No Portfolio Items Found
              </h3>
              <p className="text-muted-foreground font-poppins text-lg mb-8">
                No portfolio items found for the selected category. Please try a different filter.
              </p>
              <Button variant="gold" onClick={() => setActiveFilter('All')}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary-dark-foreground mb-6">
            Like What You See?
          </h2>
          <p className="text-lg text-primary-dark-foreground/90 mb-8 font-poppins">
            Ready to create beautiful memories together? Let's discuss your photography needs 
            and plan your perfect photo session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="lg">
                Book a Session
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-gold" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;