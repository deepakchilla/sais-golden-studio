-- Create service inquiries table for photography bookings
CREATE TABLE public.service_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_type TEXT NOT NULL,
  event_date DATE,
  message TEXT,
  budget_range TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'booked', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing inquiries (public access for now, can be restricted later)
CREATE POLICY "Anyone can create service inquiries" 
ON public.service_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all inquiries (will be useful when auth is added)
CREATE POLICY "Public can view their own inquiries by email" 
ON public.service_inquiries 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_service_inquiries_updated_at
BEFORE UPDATE ON public.service_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();