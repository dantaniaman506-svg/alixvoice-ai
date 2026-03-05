import { motion } from "framer-motion";
import { Settings, Phone, Bot } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Customize Your AI Agent",
    desc: "Enter your business details, services, hours, and FAQs. Choose a voice and name for your AI receptionist.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Get Your Virtual Number",
    desc: "We assign a dedicated AI phone number for your area. Customers call this number to reach your AI receptionist.",
  },
  {
    icon: Bot,
    step: "03",
    title: "AI Answers Calls 24/7",
    desc: "Your AI handles calls, books appointments, and collects customer info — all shown on your live dashboard.",
  },
];

const HowItWorksSection = () => {
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
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get your AI receptionist up and running in under 5 minutes.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary text-primary-foreground shadow-lg shadow-primary/20">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Step {s.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
