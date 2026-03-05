import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Update your profile and AI agent configuration.</p>

        {/* Profile */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Profile</h2>
          <div className="mt-4 space-y-4">
            <div><Label className="text-sm">Full Name</Label><Input className="mt-1.5" placeholder="Your name" /></div>
            <div><Label className="text-sm">Email</Label><Input className="mt-1.5" type="email" placeholder="you@email.com" disabled /></div>
            <div><Label className="text-sm">Phone</Label><Input className="mt-1.5" placeholder="+1 (555) 123-4567" /></div>
            <Button className="bg-gradient-to-r from-secondary to-primary text-primary-foreground">Save Changes</Button>
          </div>
        </div>

        {/* Agent config */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">AI Agent Configuration</h2>
          <div className="mt-4 space-y-4">
            <div><Label className="text-sm">Agent Name</Label><Input className="mt-1.5" placeholder="Sarah" /></div>
            <div><Label className="text-sm">Business Description</Label><Textarea className="mt-1.5" rows={3} placeholder="About your business..." /></div>
            <div><Label className="text-sm">Services</Label><Input className="mt-1.5" placeholder="Plumbing, AC Repair..." /></div>
            <div><Label className="text-sm">Working Hours</Label><Input className="mt-1.5" placeholder="Mon-Fri 8AM-6PM" /></div>
            <Button className="bg-gradient-to-r from-secondary to-primary text-primary-foreground">Update Agent</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
