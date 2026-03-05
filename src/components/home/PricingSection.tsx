import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "7-Day Trial",
    price: "$1",
    period: "for 7 days",
    subtitle: "Then $25/month",
    minutes: "20 minutes",
    popular: false,
    features: [
      "AI Virtual Number",
      "Real-time Calling",
      "Customer Support AI",
      "Live Dashboard",
      "20 Minutes Included",
    ],
  },
  {
    name: "Starter",
    price: "$25",
    period: "/month",
    subtitle: null,
    minutes: "120 minutes",
    popular: false,
    features: [
      "AI Virtual Number",
      "Real-time Calling",
      "Customer Support AI",
      "Live Dashboard",
      "Extra Minutes Available",
      "120 Minutes Included",
    ],
  },
  {
    name: "Pro",
    price: "$50",
    period: "/month",
    subtitle: null,
    minutes: "300 minutes",
    popular: true,
    features: [
      "AI Virtual Number",
      "Real-time Calling",
      "Customer Support AI",
      "Live Dashboard",
      "Extra Minutes Available",
      "Priority Support",
      "300 Minutes Included",
    ],
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    subtitle: null,
    minutes: "700 minutes",
    popular: false,
    features: [
      "AI Virtual Number",
      "Real-time Calling",
      "Customer Support AI",
      "Live Dashboard",
      "Extra Minutes Available",
      "Priority Support",
      "Dedicated Account Manager",
      "700 Minutes Included",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Transparent <span className="text-secondary">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with a $1 trial. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              {plan.subtitle && (
                <p className="mt-1 text-xs text-secondary font-medium">{plan.subtitle}</p>
              )}

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/signup" className="mt-7 block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "$1" ? "Start Trial" : "Get Started"}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
