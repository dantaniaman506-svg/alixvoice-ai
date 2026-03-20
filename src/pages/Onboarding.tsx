import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const steps = ["Agent Setup", "Business Info", "Your Details"];

const FEMALE_VOICE_ID = "ecp3DWciuUyW7BYM7II1";
const MALE_VOICE_ID = "nzFihrBIvB34imQBuxub";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [existingAgentId, setExistingAgentId] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [agentName, setAgentName] = useState("");
  const [voiceType, setVoiceType] = useState("female");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [services, setServices] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loadExistingAgent = async () => {
      if (!user) return;

      const { data: agent } = await supabase
        .from("agents")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (agent) {
        setExistingAgentId(agent.id);
        setAgentName(agent.agent_name || "");
        setVoiceType(agent.voice_type || "female");
        setBusinessName(agent.business_name || "");
        setBusinessType(agent.business_type || "");
        setWebsite(agent.website || "");
        setLocation(agent.location || "");
        setWorkingHours(agent.working_hours || "");
        setServices(agent.services || "");
        setEmergencyNumber(agent.emergency_number || "");
        setBusinessDescription(agent.business_description || "");
      }

      const { data: userData } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (userData) {
        setCountry(userData.country || "");
        setAreaCode(userData.area_code || "");
      }
    };

    loadExistingAgent();
  }, [user]);

  const handleSubmit = async () => {
    if (!user) return;
    setSaving(true);

    try {
      const voiceId = voiceType === "female" ? FEMALE_VOICE_ID : MALE_VOICE_ID;

      const agentData = {
        user_id: user.id,
        agent_name: agentName,
        voice_type: voiceType,
        vapi_agent_id: voiceId,
        business_name: businessName,
        business_type: businessType,
        website: website || null,
        location: location || null,
        working_hours: workingHours || null,
        services: services || null,
        emergency_number: emergencyNumber || null,
        business_description: businessDescription || null,
      };

      if (existingAgentId) {
        const { error } = await supabase
          .from("agents")
          .update(agentData)
          .eq("id", existingAgentId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("agents")
          .insert(agentData);
        if (error) throw error;
      }

      // Users table update karo — error ignore karo
      await supabase
        .from("users")
        .update({
          area_code: areaCode || '212',
          country: country || 'US',
        })
        .eq("id", user.id);

      toast({
        title: existingAgentId ? "Agent updated!" : "Agent created!",
        description: "Now select your plan."
      });
      navigate("/pricing-select");

    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navbar />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="mb-10 flex items-center justify-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${i <= step ? "bg-gradient-to-r from-secondary to-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {i + 1}
              </div>
              <span className={`hidden text-sm sm:inline ${i <= step ? "font-medium text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`h-px w-8 ${i < step ? "bg-secondary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-foreground">Setup Your AI Agent</h2>
              <div>
                <Label className="text-sm">Agent Name</Label>
                <Input placeholder="e.g. Sarah" className="mt-1.5" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
              </div>
              <div>
                <Label className="text-sm">Voice Type</Label>
                <Select value={voiceType} onValueChange={setVoiceType}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select voice" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-foreground">Business Information</h2>
              <div><Label className="text-sm">Business Name</Label><Input placeholder="Thompson Plumbing Co." className="mt-1.5" value={businessName} onChange={(e) => setBusinessName(e.target.value)} /></div>
              <div>
                <Label className="text-sm">Business Type</Label>
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    {["Plumbing", "HVAC", "Solar", "Dental", "Healthcare", "Painting", "Carpentry", "Real Estate", "Home Repair", "Other"].map(t => (
                      <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div><Label className="text-sm">Website (optional)</Label><Input placeholder="https://yourbusiness.com" className="mt-1.5" value={website} onChange={(e) => setWebsite(e.target.value)} /></div>
              <div><Label className="text-sm">Business Location</Label><Input placeholder="City, State" className="mt-1.5" value={location} onChange={(e) => setLocation(e.target.value)} /></div>
              <div><Label className="text-sm">Working Hours</Label><Input placeholder="Mon-Fri 8AM-6PM" className="mt-1.5" value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} /></div>
              <div><Label className="text-sm">Services (comma separated)</Label><Input placeholder="AC Repair, Installation, Maintenance" className="mt-1.5" value={services} onChange={(e) => setServices(e.target.value)} /></div>
              <div><Label className="text-sm">Emergency Number (optional)</Label><Input placeholder="+1 (555) 000-0000" className="mt-1.5" value={emergencyNumber} onChange={(e) => setEmergencyNumber(e.target.value)} /></div>
              <div><Label className="text-sm">About Your Business & FAQ (optional)</Label><Textarea placeholder="Tell us more about your business..." className="mt-1.5" rows={4} value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)} /></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-foreground">Your Details</h2>
              <div><Label className="text-sm">Full Name</Label><Input placeholder="John Smith" className="mt-1.5" value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
              <div><Label className="text-sm">Country</Label><Input placeholder="United States" className="mt-1.5" value={country} onChange={(e) => setCountry(e.target.value)} /></div>
              <div><Label className="text-sm">Area Code</Label><Input placeholder="212" className="mt-1.5" value={areaCode} onChange={(e) => setAreaCode(e.target.value)} /></div>
              <div><Label className="text-sm">Phone Number</Label><Input placeholder="+1 (555) 123-4567" className="mt-1.5" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
              <div><Label className="text-sm">Email (optional)</Label><Input type="email" placeholder="you@example.com" className="mt-1.5" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              Back
            </Button>
            <Button
              onClick={() => step < 2 ? setStep(step + 1) : handleSubmit()}
              className="bg-gradient-to-r from-secondary to-primary text-primary-foreground"
              disabled={saving || (step === 0 && !agentName) || (step === 1 && (!businessName || !businessType)) || (step === 2 && !fullName)}
            >
              {saving ? "Saving..." : step === 2 ? "Continue to Pricing" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;