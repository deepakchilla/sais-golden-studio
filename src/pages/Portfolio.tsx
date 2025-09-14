import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import portfolioBg from '@/assets/portfolio-bg.jpg';
import weddingImage from '@/assets/wedding-service.jpg';
import portraitImage from '@/assets/portrait-service.jpg';
import corporateImage from '@/assets/corporate-service.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Weddings', 'Portraits', 'Corporate', 'Events'];

  // Sample portfolio items - in real app these would come from a database
  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding Ceremony',
      category: 'Weddings',
      image: weddingImage,
      description: 'Beautiful traditional wedding photography capturing precious moments',
    },
    {
      id: 2,
      title: 'Professional Headshots',
      category: 'Corporate',
      image: corporateImage,
      description: 'Corporate portrait session for business professionals',
    },
    {
      id: 3,
      title: 'Family Portrait Session',
      category: 'Portraits',
      image: portraitImage,
      description: 'Outdoor family portrait session with natural lighting',
    },
    {
      id: 4,
      title: 'Pre-Wedding Shoot',
      category: 'Weddings',
      image: weddingImage,
      description: 'Romantic pre-wedding photography in scenic locations',
    },
    {
      id: 5,
      title: 'Corporate Event Coverage',
      category: 'Events',
      image: corporateImage,
      description: 'Professional event photography for corporate functions',
    },
    {
      id: 6,
      title: 'Individual Portrait',
      category: 'Portraits',
      image: portraitImage,
      description: 'Studio portrait session with creative lighting',
    },
    {
      id: 7,
      title: 'Wedding Reception',
      category: 'Weddings',
      image: weddingImage,
      description: 'Candid moments from wedding reception celebration',
    },
    {
      id: 8,
      title: 'Executive Portraits',
      category: 'Corporate',
      image: corporateImage,
      description: 'High-end executive portrait photography',
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${portfolioBg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg text-primary-dark-foreground/90 font-poppins leading-relaxed max-w-2xl mx-auto">
            Explore our collection of beautiful photography work spanning weddings, portraits, 
            corporate events, and more. Each image tells a unique story.
          </p>
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

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="elegant-card overflow-hidden group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary-dark-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-dark-foreground/90 font-poppins text-sm">
                        {item.description}
                      </p>
                      <Button variant="hero" size="sm" className="mt-4">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full">
                    <span className="text-primary-dark font-poppins text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-poppins text-lg">
                No portfolio items found for the selected category.
              </p>
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
            <Button variant="hero" size="lg">
              Book a Session
            </Button>
            <Button variant="outline-gold" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;