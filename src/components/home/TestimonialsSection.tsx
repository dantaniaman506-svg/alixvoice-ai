import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Thompson",
    role: "Owner, Thompson Plumbing Co.",
    text: "AlixVoice AI changed my business. I used to miss 40% of calls while on jobs. Now every call gets answered and appointments are booked automatically.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Manager, CoolAir HVAC Services",
    text: "Our booking rate increased by 60% in the first month. The AI sounds so natural that customers don't even realize they're talking to a bot.",
    rating: 5,
  },
  {
    name: "Dr. James Patel",
    role: "Dentist, Patel Family Dental",
    text: "We no longer need a full-time receptionist for after-hours calls. AlixVoice handles everything — scheduling, rescheduling, even cancellations.",
    rating: 5,
  },
  {
    name: "Carlos Rodriguez",
    role: "CEO, SunPower Solar Solutions",
    text: "The $1 trial convinced me instantly. Within a week, the AI booked 23 appointments that would have been missed calls. Best ROI ever.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Loved by <span className="text-secondary">Business Owners</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See what real business owners say about AlixVoice AI.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary font-display text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
