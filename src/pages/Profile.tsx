import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Camera, 
  Heart, 
  BookOpen, 
  Star,
  Edit,
  Save,
  X
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Profile = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    full_name: '',
    phone: '',
    location: '',
    bio: '',
    preferences: '',
  });
  const [tempProfileData, setTempProfileData] = useState(profileData);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
      
      // Load user profile data (mock data for now since we don't have user profiles table)
      setProfileData({
        full_name: session.user.email?.split('@')[0] || '',
        phone: '+91 98765 43210',
        location: 'Mumbai, Maharashtra, India',
        bio: 'Photography enthusiast who loves capturing life\'s beautiful moments. Frequent client of Sri Sai Digital Studio.',
        preferences: 'Wedding Photography, Portrait Sessions, Outdoor Shoots',
      });
      setTempProfileData({
        full_name: session.user.email?.split('@')[0] || '',
        phone: '+91 98765 43210',
        location: 'Mumbai, Maharashtra, India',
        bio: 'Photography enthusiast who loves capturing life\'s beautiful moments. Frequent client of Sri Sai Digital Studio.',
        preferences: 'Wedding Photography, Portrait Sessions, Outdoor Shoots',
      });
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleSave = async () => {
    try {
      // In a real app, this would save to a user profiles table
      setProfileData(tempProfileData);
      setEditing(false);
      toast({
        title: "Profile updated successfully",
        description: "Your profile information has been saved.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error updating profile",
        description: "There was a problem saving your profile. Please try again.",
      });
    }
  };

  const handleCancel = () => {
    setTempProfileData(profileData);
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warm-gray/30 to-background">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-6 py-3 mb-8">
            <User className="h-5 w-5 text-primary" />
            <span className="text-primary font-poppins font-semibold tracking-wide text-sm">MY PROFILE</span>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-primary-dark-foreground mb-6 leading-tight">
            Welcome Back, <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{profileData.full_name}</span>
          </h1>
          
          <p className="text-lg text-primary-dark-foreground/80 font-poppins max-w-2xl mx-auto">
            Manage your profile information and photography preferences
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="elegant-card sticky top-24">
                <CardContent className="p-8 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/20 mx-auto">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                      <Camera className="h-4 w-4 text-primary-dark" />
                    </div>
                  </div>
                  
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">{profileData.full_name}</h2>
                  <p className="text-muted-foreground font-poppins mb-4">{user?.email}</p>
                  
                  <Badge variant="outline" className="mb-6">
                    <Star className="h-3 w-3 mr-1" />
                    Valued Client
                  </Badge>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-poppins">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-poppins">{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-poppins">Member since 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Personal Information */}
              <Card className="elegant-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-playfair text-2xl">Personal Information</CardTitle>
                  {!editing ? (
                    <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleCancel}>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button variant="default" size="sm" onClick={handleSave}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="full_name" className="text-foreground font-poppins font-medium">Full Name</Label>
                      {editing ? (
                        <Input
                          id="full_name"
                          value={tempProfileData.full_name}
                          onChange={(e) => setTempProfileData({...tempProfileData, full_name: e.target.value})}
                          className="mt-1"
                        />
                      ) : (
                        <p className="mt-1 text-muted-foreground font-poppins">{profileData.full_name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-poppins font-medium">Email Address</Label>
                      <p className="mt-1 text-muted-foreground font-poppins">{user?.email}</p>
                      <span className="text-xs text-muted-foreground">Email cannot be changed</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-poppins font-medium">Phone Number</Label>
                      {editing ? (
                        <Input
                          id="phone"
                          value={tempProfileData.phone}
                          onChange={(e) => setTempProfileData({...tempProfileData, phone: e.target.value})}
                          className="mt-1"
                        />
                      ) : (
                        <p className="mt-1 text-muted-foreground font-poppins">{profileData.phone}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-foreground font-poppins font-medium">Location</Label>
                      {editing ? (
                        <Input
                          id="location"
                          value={tempProfileData.location}
                          onChange={(e) => setTempProfileData({...tempProfileData, location: e.target.value})}
                          className="mt-1"
                        />
                      ) : (
                        <p className="mt-1 text-muted-foreground font-poppins">{profileData.location}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio" className="text-foreground font-poppins font-medium">Bio</Label>
                    {editing ? (
                      <Textarea
                        id="bio"
                        value={tempProfileData.bio}
                        onChange={(e) => setTempProfileData({...tempProfileData, bio: e.target.value})}
                        className="mt-1"
                        rows={3}
                      />
                    ) : (
                      <p className="mt-1 text-muted-foreground font-poppins leading-relaxed">{profileData.bio}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="preferences" className="text-foreground font-poppins font-medium">Photography Preferences</Label>
                    {editing ? (
                      <Input
                        id="preferences"
                        value={tempProfileData.preferences}
                        onChange={(e) => setTempProfileData({...tempProfileData, preferences: e.target.value})}
                        className="mt-1"
                        placeholder="e.g., Wedding Photography, Portraits, Events"
                      />
                    ) : (
                      <p className="mt-1 text-muted-foreground font-poppins">{profileData.preferences}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="elegant-card">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">Activity Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-primary/5 border border-primary/10">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">5</h3>
                      <p className="text-muted-foreground font-poppins text-sm">Total Bookings</p>
                    </div>
                    <div className="text-center p-4 bg-primary/5 border border-primary/10">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-3">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">12</h3>
                      <p className="text-muted-foreground font-poppins text-sm">Favorite Photos</p>
                    </div>
                    <div className="text-center p-4 bg-primary/5 border border-primary/10">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 mb-3">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">4.9</h3>
                      <p className="text-muted-foreground font-poppins text-sm">Average Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;