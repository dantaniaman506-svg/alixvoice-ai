import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
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
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment_status');
    const subscriptionId = params.get('subscription_id');
    const status = params.get('status');

    if (
      paymentStatus === 'succeeded' ||
      status === 'active' ||
      subscriptionId
    ) {
      toast({
        title: "Payment Successful! 🎉",
        description: "Your plan is now active. Welcome to AlixVoice AI!",
      });
      setTimeout(() => {
        window.location.replace('/dashboard');
      }, 500);
    }
  }, []);

  const handleSelect = async (plan: typeof plans[0]) => {
    if (!user) return;
    setSelecting(plan.name);

    try {
      const planKey = plan.name === "7-Day Trial" ? "trial"
        : plan.name === "Starter" ? "starter"
        : plan.name === "Pro" ? "pro"
        : "elite";

      const response = await fetch(
        "https://alixvoice-backend-production.up.railway.app/payments/create-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user.id,
            plan_name: planKey,
            plan_price: plan.price.replace("$", ""),
          }),
        }
      );

      const data = await response.json();

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        throw new Error("Checkout URL not received");
      }

    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
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
                {selecting === plan.name ? "Processing..." : plan.price === "$1" ? "Start Trial" : "Select Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSelect;