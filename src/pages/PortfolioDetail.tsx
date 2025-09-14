import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Tag, Heart, Share2, Download, ZoomIn } from 'lucide-react';
import weddingImage from '/src/assets/wedding-service.jpg';
import portraitImage from '/src/assets/portrait-service.jpg';
import corporateImage from '/src/assets/corporate-service.jpg';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Portfolio items data (same as in Portfolio page)
  const portfolioItems = [
    {
      id: 1,
      title: 'Royal Palace Wedding - Priya & Arjun',
      category: 'Weddings',
      image: weddingImage,
      description: 'Elegant traditional wedding ceremony captured with cinematic excellence at the Royal Palace Gardens',
      fullDescription: 'This magnificent wedding ceremony took place at the historic Royal Palace Gardens, where every moment was captured with cinematic precision. The couple\'s love story unfolded against the backdrop of ancient architecture and lush gardens, creating a perfect blend of tradition and romance. Our team spent the entire day documenting every precious moment, from the intimate getting-ready moments to the grand celebration that followed.',
      tags: ['Traditional', 'Royal', 'Outdoor'],
      client: 'Sharma Family',
      year: '2024',
      location: 'Royal Palace Gardens, Jaipur',
      duration: 'Full Day Coverage',
      gallery: [weddingImage, portraitImage, corporateImage, weddingImage, portraitImage],
      equipment: ['Canon R5', 'Canon RF 24-70mm f/2.8', 'Canon RF 85mm f/1.2', 'Professional Lighting'],
      highlights: ['Traditional Ceremonies', 'Couple Portraits', 'Family Group Photos', 'Reception Coverage'],
    },
    {
      id: 2,
      title: 'Executive Leadership Portraits',
      category: 'Corporate',
      image: corporateImage,
      description: 'Professional executive headshots for Fortune 500 company annual report and marketing materials',
      fullDescription: 'A comprehensive corporate portrait session for senior executives of a leading Fortune 500 company. These professional headshots were created for their annual report, website, and marketing materials. Each portrait was carefully crafted to reflect the executive\'s personality while maintaining the professional standards expected in corporate communications.',
      tags: ['Executive', 'Studio', 'Professional'],
      client: 'TechCorp Industries',
      year: '2024',
      location: 'Corporate Studio',
      duration: 'Half Day Session',
      gallery: [corporateImage, portraitImage, weddingImage, corporateImage, portraitImage],
      equipment: ['Canon R6 Mark II', 'Canon EF 85mm f/1.4', 'Profoto Studio Lighting', 'Gray Backdrop'],
      highlights: ['Executive Headshots', 'Team Group Photos', 'Environmental Portraits', 'Brand Consistency'],
    },
    {
      id: 3,
      title: 'Generational Family Legacy',
      category: 'Portraits',
      image: portraitImage,
      description: 'Multi-generational family portrait session celebrating 50 years of family heritage and love',
      fullDescription: 'A heartwarming portrait session celebrating 50 years of family heritage. This multi-generational shoot brought together grandparents, parents, and children to create lasting memories that will be treasured for generations to come. The session focused on capturing both formal family portraits and candid interactions that showcase the love and bonds within this beautiful family.',
      tags: ['Family', 'Legacy', 'Studio'],
      client: 'Patel Family',
      year: '2024',
      location: 'Home Studio Setup',
      duration: '2 Hours',
      gallery: [portraitImage, weddingImage, corporateImage, portraitImage, weddingImage],
      equipment: ['Canon R5', 'Canon RF 50mm f/1.2', 'Natural Light', 'Reflectors'],
      highlights: ['Multi-Generation Portraits', 'Individual Portraits', 'Candid Moments', 'Heritage Documentation'],
    },
    {
      id: 4,
      title: 'Destination Pre-Wedding - Goa',
      category: 'Weddings',
      image: weddingImage,
      description: 'Romantic beach pre-wedding shoot capturing the essence of love against stunning coastal backdrops',
      fullDescription: 'An enchanting pre-wedding session on the pristine beaches of Goa. This romantic shoot captured the couple\'s love story against stunning coastal backdrops, from golden hour beach walks to intimate moments by the waves. The natural beauty of Goa\'s coastline provided the perfect setting for this dreamy pre-wedding photography session.',
      tags: ['Beach', 'Destination', 'Romantic'],
      client: 'Kapoor Couple',
      year: '2024',
      location: 'Goa Beaches',
      duration: 'Full Day',
      gallery: [weddingImage, portraitImage, corporateImage, weddingImage, portraitImage],
      equipment: ['Canon R6', 'Canon RF 24-105mm f/4', 'Canon RF 85mm f/1.2', 'Natural Light'],
      highlights: ['Beach Portraits', 'Sunset Photography', 'Candid Moments', 'Romantic Poses'],
    },
    {
      id: 5,
      title: 'Annual Conference 2024',
      category: 'Events',
      image: corporateImage,
      description: 'Comprehensive event coverage for international business conference with 500+ attendees',
      fullDescription: 'Complete photographic coverage of a major international business conference hosting over 500 attendees. Our team documented keynote speakers, networking sessions, award ceremonies, and candid moments throughout the three-day event. The photos were used for post-event marketing, social media, and the organization\'s annual report.',
      tags: ['Conference', 'Business', 'Event'],
      client: 'Global Summit Inc',
      year: '2024',
      location: 'Convention Center',
      duration: '3 Days',
      gallery: [corporateImage, weddingImage, portraitImage, corporateImage, weddingImage],
      equipment: ['Canon R5', 'Canon RF 24-70mm f/2.8', 'Canon RF 70-200mm f/2.8', 'Wireless Flash'],
      highlights: ['Keynote Speakers', 'Networking Events', 'Award Ceremony', 'Attendee Coverage'],
    },
    {
      id: 6,
      title: 'Professional Actress Portfolio',
      category: 'Portraits',
      image: portraitImage,
      description: 'High-fashion portrait session for established actress portfolio and promotional materials',
      fullDescription: 'A sophisticated high-fashion portrait session for an established actress updating her professional portfolio. The shoot included various looks and styles to showcase her versatility as a performer. These images will be used for casting submissions, promotional materials, and her professional website.',
      tags: ['Fashion', 'Professional', 'Studio'],
      client: 'Bollywood Talent',
      year: '2024',
      location: 'Fashion Studio',
      duration: '4 Hours',
      gallery: [portraitImage, corporateImage, weddingImage, portraitImage, corporateImage],
      equipment: ['Canon R5', 'Canon EF 85mm f/1.2', 'Canon EF 50mm f/1.2', 'Studio Strobes'],
      highlights: ['Fashion Portraits', 'Character Shots', 'Headshots', 'Dramatic Lighting'],
    },
    {
      id: 7,
      title: 'Grand Reception Celebration',
      category: 'Weddings',
      image: weddingImage,
      description: 'Lavish wedding reception with 800 guests featuring traditional ceremonies and modern celebrations',
      fullDescription: 'A spectacular wedding reception celebrating the union of two families with over 800 guests in attendance. The evening featured traditional ceremonies, cultural performances, and modern celebrations. Our team captured every moment of this grand celebration, from the couple\'s entrance to the final dance of the evening.',
      tags: ['Reception', 'Grand', 'Traditional'],
      client: 'Gupta Wedding',
      year: '2024',
      location: 'Grand Ballroom',
      duration: 'Evening Coverage',
      gallery: [weddingImage, portraitImage, corporateImage, weddingImage, portraitImage],
      equipment: ['Canon R6 Mark II', 'Canon RF 24-70mm f/2.8', 'Canon RF 85mm f/1.2', 'Flash Systems'],
      highlights: ['Grand Entrance', 'Cultural Performances', 'Family Moments', 'Dance Floor'],
    },
    {
      id: 8,
      title: 'C-Suite Executive Branding',
      category: 'Corporate',
      image: corporateImage,
      description: 'Personal branding photography for senior executives including environmental and studio portraits',
      fullDescription: 'Comprehensive personal branding photography for C-suite executives, including both environmental and studio portraits. These images were designed to enhance their professional presence across digital platforms, speaking engagements, and corporate communications. Each portrait was tailored to reflect their leadership style and company culture.',
      tags: ['Branding', 'C-Suite', 'Professional'],
      client: 'Financial Services Ltd',
      year: '2024',
      location: 'Corporate Office & Studio',
      duration: 'Full Day',
      gallery: [corporateImage, portraitImage, weddingImage, corporateImage, portraitImage],
      equipment: ['Canon R5', 'Canon RF 50mm f/1.2', 'Canon RF 85mm f/1.2', 'Professional Lighting'],
      highlights: ['Executive Portraits', 'Environmental Shots', 'Team Leadership', 'Brand Consistency'],
    },
    {
      id: 9,
      title: 'Newborn & Family Lifestyle',
      category: 'Portraits',
      image: portraitImage,
      description: 'Intimate newborn and family lifestyle session capturing precious early moments at home',
      fullDescription: 'An intimate lifestyle session capturing the precious early moments of a new family. Shot in the comfort of their own home, this session focused on the natural interactions between parents and their newborn baby. The relaxed environment allowed for authentic moments that truly represent this special time in their lives.',
      tags: ['Newborn', 'Lifestyle', 'Family'],
      client: 'Johnson Family',
      year: '2024',
      location: 'Client\'s Home',
      duration: '2 Hours',
      gallery: [portraitImage, weddingImage, corporateImage, portraitImage, weddingImage],
      equipment: ['Canon R6', 'Canon RF 35mm f/1.8', 'Canon RF 85mm f/2', 'Natural Light'],
      highlights: ['Newborn Portraits', 'Family Bonding', 'Lifestyle Moments', 'Home Environment'],
    },
  ];

  const item = portfolioItems.find(item => item.id === parseInt(id || '0'));

  useEffect(() => {
    if (!item) {
      navigate('/portfolio');
    }
  }, [item, navigate]);

  if (!item) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 bg-primary-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigate('/portfolio');
                window.scrollTo(0, 0);
              }}
              className="border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-primary-dark font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/90 text-primary-dark px-3 py-1 text-sm font-semibold">
                  {item.category.toUpperCase()}
                </span>
                {item.tags.map((tag) => (
                  <span key={tag} className="bg-background/20 text-primary-dark-foreground px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-dark-foreground mb-4">
                {item.title}
              </h1>
              
              <p className="text-lg text-primary-dark-foreground/90 font-poppins leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-primary-dark-foreground/80">
                  <User className="h-4 w-4 text-primary" />
                  <span>{item.client}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-dark-foreground/80">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="sm" className="text-primary-dark font-semibold">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-primary-dark font-semibold">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-primary-dark font-semibold">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-6">Gallery</h2>
                
                {/* Main Image */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg border border-border">
                  <img
                    src={item.gallery[selectedImage]}
                    alt={`${item.title} - Image ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground border-border hover:bg-background hover:text-foreground"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom
                  </Button>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-3">
                  {item.gallery.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-square overflow-hidden rounded cursor-pointer border-2 transition-all duration-200 ${
                        selectedImage === index 
                          ? 'border-primary shadow-lg' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">About This Project</h3>
                <p className="text-muted-foreground leading-relaxed font-poppins">
                  {item.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {item.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground font-poppins">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <Card className="p-6">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Client:</span>
                    <p className="text-muted-foreground">{item.client}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Location:</span>
                    <p className="text-muted-foreground">{item.location}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Duration:</span>
                    <p className="text-muted-foreground">{item.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Year:</span>
                    <p className="text-muted-foreground">{item.year}</p>
                  </div>
                </div>
              </Card>

              {/* Equipment Used */}
              <Card className="p-6">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-4">Equipment Used</h3>
                <div className="space-y-2">
                  {item.equipment.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground font-poppins">{equipment}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Tags */}
              <Card className="p-6">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full border border-primary/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* CTA */}
              <Card className="p-6 bg-primary-dark">
                <h3 className="font-playfair text-lg font-bold text-primary-dark-foreground mb-3">
                  Interested in Similar Work?
                </h3>
                <p className="text-primary-dark-foreground/90 text-sm mb-4 font-poppins">
                  Get in touch to discuss your photography needs and create beautiful memories together.
                </p>
                <div className="space-y-2">
                  <Link to="/booking" className="block">
                    <Button variant="hero" size="sm" className="w-full text-primary-dark">
                      Book a Session
                    </Button>
                  </Link>
                  <Link to="/contact" className="block">
                    <Button variant="outline" size="sm" className="w-full border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-primary-dark font-semibold">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-warm-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems
              .filter(relatedItem => relatedItem.category === item.category && relatedItem.id !== item.id)
              .slice(0, 3)
              .map((relatedItem) => (
                <Link key={relatedItem.id} to={`/portfolio/${relatedItem.id}`}>
                  <Card className="group cursor-pointer overflow-hidden bg-background border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={relatedItem.image} 
                        alt={relatedItem.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-playfair text-lg font-bold text-white mb-1">
                          {relatedItem.title}
                        </h3>
                        <p className="text-white/90 text-sm font-poppins">
                          {relatedItem.client}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;