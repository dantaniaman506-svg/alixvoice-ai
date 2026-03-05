import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  RefreshCw,
  XCircle,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Call Handling",
    desc: "Your AI receptionist answers every call with natural, human-like conversation tailored to your business.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Automatically collects caller details and books appointments in real time on your dashboard.",
  },
  {
    icon: RefreshCw,
    title: "Rescheduling Detection",
    desc: "AI detects when a customer wants to reschedule and updates the appointment status automatically.",
  },
  {
    icon: XCircle,
    title: "Cancellation Tracking",
    desc: "Cancelled appointments are flagged instantly so you never miss a status change.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    desc: "Monitor calls, appointments, minutes used, and trends from a clean, real-time dashboard.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Forwarding",
    desc: "In urgent situations, the AI provides your emergency number to the caller immediately.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Powerful <span className="text-secondary">Features</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything your business needs to automate customer calls and appointments.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
