import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, CalendarDays, Phone, Mail, User, MessageCircle, IndianRupee } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BookingDialogProps {
  serviceTitle: string;
  children: React.ReactNode;
}

const BookingDialog = ({ serviceTitle, children }: BookingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_date: '',
    message: '',
    budget_range: '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('service_inquiries')
        .insert({
          ...formData,
          service_type: serviceTitle,
          event_date: formData.event_date || null,
        });

      if (error) throw error;

      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you within 24 hours to discuss your photography needs.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        event_date: '',
        message: '',
        budget_range: '',
      });
      setOpen(false);
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit booking request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="elegant-card max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-foreground flex items-center gap-2">
            <CalendarDays className="h-6 w-6 text-primary" />
            Book {serviceTitle}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-poppins">
                <User className="h-4 w-4 text-primary" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
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
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="your.email@example.com"
                required
                className="bg-background border-border focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-poppins">
                <Phone className="h-4 w-4 text-primary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="bg-background border-border focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="event_date" className="flex items-center gap-2 text-foreground font-poppins">
                <Calendar className="h-4 w-4 text-primary" />
                Event Date
              </Label>
              <Input
                id="event_date"
                type="date"
                value={formData.event_date}
                onChange={(e) => handleChange('event_date', e.target.value)}
                className="bg-background border-border focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget_range" className="flex items-center gap-2 text-foreground font-poppins">
              <IndianRupee className="h-4 w-4 text-primary" />
              Budget Range
            </Label>
            <Select value={formData.budget_range} onValueChange={(value) => handleChange('budget_range', value)}>
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

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-foreground font-poppins">
              <MessageCircle className="h-4 w-4 text-primary" />
              Additional Details
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your event, special requirements, location, number of guests, etc."
              rows={4}
              className="bg-background border-border focus:ring-primary resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || !formData.name || !formData.email}
              className="flex-1 bg-gradient-gold hover:shadow-gold transition-all duration-300"
            >
              {loading ? 'Sending...' : 'Send Booking Request'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;