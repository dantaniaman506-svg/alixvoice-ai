import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  { minutes: 40, price: "$3", per: "$0.075/min", popular: false },
  { minutes: 100, price: "$7", per: "$0.070/min", popular: true },
  { minutes: 250, price: "$16", per: "$0.064/min", popular: false },
  { minutes: 500, price: "$29", per: "$0.058/min", popular: false },
];

const ExtraMinutesSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Need More <span className="text-secondary">Minutes?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Add extra minutes anytime. The more you buy, the more you save.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-5 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.minutes}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 text-center transition-all hover:-translate-y-1 ${
                pkg.popular
                  ? "border-secondary bg-gradient-to-b from-card to-secondary/5 shadow-xl shadow-secondary/15"
                  : "border-border bg-card shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[10px] font-bold text-accent-foreground shadow">
                  Most Popular
                </div>
              )}

              <Zap className="mx-auto mb-3 h-6 w-6 text-secondary" />
              <p className="font-display text-2xl font-extrabold text-foreground">{pkg.minutes}</p>
              <p className="text-xs text-muted-foreground">minutes</p>
              <p className="mt-3 font-display text-2xl font-bold text-foreground">{pkg.price}</p>
              <p className="text-[11px] text-muted-foreground">{pkg.per}</p>

              <Button
                size="sm"
                variant={pkg.popular ? "default" : "outline"}
                className={`mt-5 w-full ${
                  pkg.popular
                    ? "bg-gradient-to-r from-secondary to-primary text-primary-foreground"
                    : ""
                }`}
              >
                Buy Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraMinutesSection;
