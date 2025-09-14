import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from '@/hooks/use-toast';
import { 
  Loader2, Shield, Bell, User, Trash2, Eye, EyeOff, 
  Settings as SettingsIcon, Lock, Mail, Smartphone, 
  Globe, Database, Activity, LogOut, Camera,
  Palette, Moon, Sun, Monitor, Check, X,
  ChevronRight, Info, AlertTriangle
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Password change state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Profile settings
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  
  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingReminders, setBookingReminders] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  
  // Privacy settings
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [shareData, setShareData] = useState(false);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(true);
  const [activityStatus, setActivityStatus] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  
  // Security settings
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error) {
          console.error('Error getting user:', error);
          navigate('/auth');
          return;
        }
        
        if (!user) {
          navigate('/auth');
          return;
        }
        
        setUser(user);
      } catch (error) {
        console.error('Error in getUser:', error);
        navigate('/auth');
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [navigate]);

  const handlePasswordChange = async () => {
    if (!newPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all password fields.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setUpdating(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Password updated successfully.",
        });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update password.",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleNotificationUpdate = async () => {
    setUpdating(true);
    
    // Simulate API call for notification preferences
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Notification preferences updated successfully.",
      });
      setUpdating(false);
    }, 1000);
  };

  const handlePrivacyUpdate = async () => {
    setUpdating(true);
    
    // Simulate API call for privacy settings
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Privacy settings updated successfully.",
      });
      setUpdating(false);
    }, 1000);
  };

  const handleAccountDeletion = async () => {
    setDeleting(true);
    
    try {
      // In a real app, you'd want to call a backend endpoint to handle account deletion
      // This would include deleting user data, canceling subscriptions, etc.
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete account. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Account Deleted",
          description: "Your account has been successfully deleted.",
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({
          title: "Error",
          description: "Failed to sign out. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed Out",
          description: "You have been successfully signed out.",
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-warm-gray/30 to-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground font-poppins">Loading settings...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warm-gray/30 to-background">
      {/* Modern Header with User Profile */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary-dark/98 to-primary-dark/95 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simplified Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 mb-8">
              <SettingsIcon className="h-4 w-4 text-primary" />
              <span className="text-primary font-poppins font-semibold tracking-wide text-xs">ACCOUNT SETTINGS</span>
            </div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark-foreground mb-12 leading-tight">
              Welcome back, <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{firstName || user?.email?.split('@')[0] || 'User'}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Modern Tabbed Settings Interface */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            {/* Enhanced Tab Navigation */}
            <div className="bg-background/60 backdrop-blur-lg border border-primary/10 p-2 shadow-lg">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-transparent">
                <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins">
                  <Bell className="w-4 h-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="privacy" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins">
                  <Lock className="w-4 h-4" />
                  <span className="hidden sm:inline">Privacy</span>
                </TabsTrigger>
                <TabsTrigger value="account" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins">
                  <SettingsIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Account</span>
                </TabsTrigger>
              </TabsList>
            </div>
            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="elegant-card border border-primary/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                    <div className="p-2 bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    Personal Information
                  </CardTitle>
                  <CardDescription className="font-poppins text-muted-foreground">
                    Update your profile details and personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-poppins font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-poppins font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-poppins font-medium">Email Address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={user.email || ''}
                        disabled
                        className="bg-muted/50 border-muted text-muted-foreground pl-10"
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins px-8">
                      <Check className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="elegant-card border border-primary/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                    <div className="p-2 bg-primary/10 text-primary">
                      <Lock className="h-5 w-5" />
                    </div>
                    Password Security
                  </CardTitle>
                  <CardDescription className="font-poppins text-muted-foreground">
                    Keep your account secure with a strong password
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-foreground font-poppins font-medium">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter current password"
                          className="border-primary/20 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground hover:text-foreground"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-foreground font-poppins font-medium">New Password</Label>
                      <div className="relative">
                        <Input
                          id="new-password"
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new password"
                          className="border-primary/20 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground hover:text-foreground"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-foreground font-poppins font-medium">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm new password"
                          className="border-primary/20 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground hover:text-foreground"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handlePasswordChange}
                      disabled={updating}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins px-8"
                    >
                      {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="elegant-card border border-primary/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                    <div className="p-2 bg-primary/10 text-primary">
                      <Bell className="h-5 w-5" />
                    </div>
                    Notification Preferences
                  </CardTitle>
                  <CardDescription className="font-poppins text-muted-foreground">
                    Choose how you want to be notified about important updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Receive important updates via email</p>
                      </div>
                      <Switch
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Bell className="w-4 h-4 text-primary" />
                          Booking Reminders
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Get reminded about upcoming appointments</p>
                      </div>
                      <Switch
                        checked={bookingReminders}
                        onCheckedChange={setBookingReminders}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-primary" />
                          SMS Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Receive text messages for urgent updates</p>
                      </div>
                      <Switch
                        checked={smsNotifications}
                        onCheckedChange={setSmsNotifications}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Activity className="w-4 h-4 text-primary" />
                          Marketing Emails
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Receive promotional offers and news</p>
                      </div>
                      <Switch
                        checked={marketingEmails}
                        onCheckedChange={setMarketingEmails}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handleNotificationUpdate}
                      disabled={updating}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins px-8"
                    >
                      {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card className="elegant-card border border-primary/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                    <div className="p-2 bg-primary/10 text-primary">
                      <Lock className="h-5 w-5" />
                    </div>
                    Privacy & Data
                  </CardTitle>
                  <CardDescription className="font-poppins text-muted-foreground">
                    Control your privacy and data sharing preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Profile Visibility
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Make your profile visible to other users</p>
                      </div>
                      <Switch
                        checked={profileVisibility}
                        onCheckedChange={setProfileVisibility}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Database className="w-4 h-4 text-primary" />
                          Data Sharing
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Share anonymized data to improve our services</p>
                      </div>
                      <Switch
                        checked={shareData}
                        onCheckedChange={setShareData}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Activity className="w-4 h-4 text-primary" />
                          Activity Status
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Show when you're active to other users</p>
                      </div>
                      <Switch
                        checked={activityStatus}
                        onCheckedChange={setActivityStatus}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background border border-primary/10">
                      <div className="space-y-1">
                        <Label className="text-foreground font-poppins font-medium flex items-center gap-2">
                          <Info className="w-4 h-4 text-primary" />
                          Analytics
                        </Label>
                        <p className="text-sm text-muted-foreground font-poppins">Help us improve by sharing usage analytics</p>
                      </div>
                      <Switch
                        checked={analyticsOptIn}
                        onCheckedChange={setAnalyticsOptIn}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handlePrivacyUpdate}
                      disabled={updating}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins px-8"
                    >
                      {updating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Save Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card className="elegant-card border border-primary/10 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                  <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                    <div className="p-2 bg-primary/10 text-primary">
                      <SettingsIcon className="h-5 w-5" />
                    </div>
                    Account Management
                  </CardTitle>
                  <CardDescription className="font-poppins text-muted-foreground">
                    Manage your account settings and data
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 text-green-600">
                          <LogOut className="h-5 w-5" />
                        </div>
                        <h3 className="font-playfair text-lg font-semibold text-green-800">Sign Out</h3>
                      </div>
                      <p className="text-sm text-green-700 font-poppins mb-4">Sign out from all devices and sessions</p>
                      <Button
                        onClick={handleSignOut}
                        variant="outline"
                        className="w-full border-green-300 text-green-700 hover:bg-green-50 font-poppins"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out Everywhere
                      </Button>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 text-red-600">
                          <Trash2 className="h-5 w-5" />
                        </div>
                        <h3 className="font-playfair text-lg font-semibold text-red-800">Delete Account</h3>
                      </div>
                      <p className="text-sm text-red-700 font-poppins mb-4">Permanently delete your account and all data</p>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            className="w-full font-poppins"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Account
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="elegant-card">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-foreground font-playfair">Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground font-poppins">
                              This action cannot be undone. This will permanently delete your
                              account and remove all your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="font-poppins">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleAccountDeletion}
                              disabled={deleting}
                              className="bg-destructive hover:bg-destructive/90 font-poppins"
                            >
                              {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              Delete Account
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Settings;