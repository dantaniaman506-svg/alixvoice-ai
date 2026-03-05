import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const steps = ["Agent Setup", "Business Info", "Your Details"];

const Onboarding = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navbar />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        {/* Progress */}
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
                <Input placeholder="e.g. Sarah" className="mt-1.5" />
              </div>
              <div>
                <Label className="text-sm">Voice Type</Label>
                <Select>
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
              <div><Label className="text-sm">Business Name</Label><Input placeholder="Thompson Plumbing Co." className="mt-1.5" /></div>
              <div>
                <Label className="text-sm">Business Type</Label>
                <Select>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    {["Plumbing", "HVAC", "Solar", "Dental", "Healthcare", "Painting", "Carpentry", "Real Estate", "Home Repair", "Other"].map(t => (
                      <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div><Label className="text-sm">Website (optional)</Label><Input placeholder="https://yourbusiness.com" className="mt-1.5" /></div>
              <div><Label className="text-sm">Business Location</Label><Input placeholder="City, State" className="mt-1.5" /></div>
              <div><Label className="text-sm">Working Hours</Label><Input placeholder="Mon-Fri 8AM-6PM" className="mt-1.5" /></div>
              <div><Label className="text-sm">Services (comma separated)</Label><Input placeholder="AC Repair, Installation, Maintenance" className="mt-1.5" /></div>
              <div><Label className="text-sm">Emergency Number (optional)</Label><Input placeholder="+1 (555) 000-0000" className="mt-1.5" /></div>
              <div><Label className="text-sm">About Your Business & FAQ (optional)</Label><Textarea placeholder="Tell us more about your business..." className="mt-1.5" rows={4} /></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-foreground">Your Details</h2>
              <div><Label className="text-sm">Full Name</Label><Input placeholder="John Smith" className="mt-1.5" /></div>
              <div><Label className="text-sm">Country</Label><Input placeholder="United States" className="mt-1.5" /></div>
              <div><Label className="text-sm">Area Code</Label><Input placeholder="212" className="mt-1.5" /></div>
              <div><Label className="text-sm">Phone Number</Label><Input placeholder="+1 (555) 123-4567" className="mt-1.5" /></div>
              <div><Label className="text-sm">Email (optional)</Label><Input type="email" placeholder="you@example.com" className="mt-1.5" /></div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              Back
            </Button>
            <Button
              onClick={() => step < 2 ? setStep(step + 1) : null}
              className="bg-gradient-to-r from-secondary to-primary text-primary-foreground"
            >
              {step === 2 ? "Continue to Pricing" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
