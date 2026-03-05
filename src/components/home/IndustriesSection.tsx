import { motion } from "framer-motion";
import {
  Wrench,
  Wind,
  Sun,
  Stethoscope,
  Home,
  Paintbrush,
  Hammer,
  Building2,
} from "lucide-react";

const industries = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Wind, label: "HVAC & AC" },
  { icon: Sun, label: "Solar Panel" },
  { icon: Stethoscope, label: "Dental & Healthcare" },
  { icon: Building2, label: "Real Estate" },
  { icon: Paintbrush, label: "Painting" },
  { icon: Hammer, label: "Carpentry" },
  { icon: Home, label: "Home Repair" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Built for <span className="text-secondary">Your Industry</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            AlixVoice AI is designed specifically for US service businesses across all trades.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 text-secondary transition-all group-hover:from-secondary group-hover:to-primary group-hover:text-primary-foreground">
                <ind.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm font-semibold text-foreground">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
