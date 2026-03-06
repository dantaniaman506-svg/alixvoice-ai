import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const plans = [
  { name: "7-Day Trial", price: "$1", period: "for 7 days", subtitle: "Then $25/month", minutes: 20, popular: false, features: ["AI Virtual Number", "Real-time Calling", "Customer Support AI", "Live Dashboard", "20 Minutes Included"] },
  { name: "Starter", price: "$25", period: "/month", subtitle: null, minutes: 120, popular: false, features: ["AI Virtual Number", "Real-time Calling", "Customer Support AI", "Live Dashboard", "Extra Minutes Available", "120 Minutes Included"] },
  { name: "Pro", price: "$50", period: "/month", subtitle: null, minutes: 300, popular: true, features: ["AI Virtual Number", "Real-time Calling", "Customer Support AI", "Live Dashboard", "Extra Minutes Available", "Priority Support", "300 Minutes Included"] },
  { name: "Elite", price: "$99", period: "/month", subtitle: null, minutes: 700, popular: false, features: ["AI Virtual Number", "Real-time Calling", "Customer Support AI", "Live Dashboard", "Extra Minutes Available", "Priority Support", "Dedicated Account Manager", "700 Minutes Included"] },
];

const PricingSelect = () => {
  const [selecting, setSelecting] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSelect = async (plan: typeof plans[0]) => {
    if (!user) return;
    setSelecting(plan.name);

    try {
      // Create order (payment_status = 'trial' for now since payment not connected yet)
      const { error: orderError } = await supabase.from("orders").insert({
        user_id: user.id,
        plan: plan.name.toLowerCase().replace("-", "_").replace(" ", "_"),
        payment_status: "active",
      });

      if (orderError) throw orderError;

      // Give temporary minutes based on plan
      const { error: minutesError } = await supabase.from("extra_minutes").insert({
        user_id: user.id,
        minutes_added: plan.minutes,
        purchase_price: 0,
      });

      if (minutesError) throw minutesError;

      toast({ title: "Plan activated!", description: `You got ${plan.minutes} minutes. Welcome to AlixVoice!` });
      navigate("/dashboard");
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSelecting(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Choose Your <span className="text-secondary">Plan</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Select a plan to activate your AI agent and get started.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                plan.popular
                  ? "border-secondary bg-gradient-to-b from-card to-secondary/5 shadow-xl shadow-secondary/15"
                  : "border-border bg-card shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary to-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              {plan.subtitle && <p className="mt-1 text-xs font-medium text-secondary">{plan.subtitle}</p>}

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-7 w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                disabled={selecting !== null}
                onClick={() => handleSelect(plan)}
              >
                {selecting === plan.name ? "Activating..." : plan.price === "$1" ? "Start Trial" : "Select Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSelect;
