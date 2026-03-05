import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Phone, Calendar, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Phone className="h-3.5 w-3.5" />
              AI-Powered Phone System
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Never Miss a{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Customer Call
              </span>{" "}
              Again
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              AlixVoice AI answers your business calls 24/7, collects customer details, and books appointments automatically — so you never lose a lead.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all text-base px-8"
                >
                  Get Started for $1
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base border-border/60"
              >
                <Play className="h-4 w-4 text-accent" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Setup in 5 minutes
              </div>
            </div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-1 shadow-2xl shadow-primary/10">
              <div className="rounded-xl bg-gradient-to-br from-primary to-secondary/80 p-6">
                {/* Fake top bar */}
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-accent/80" />
                  <div className="ml-4 h-5 w-48 rounded bg-primary-foreground/20" />
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Phone, label: "Total Calls", val: "1,284" },
                    { icon: Calendar, label: "Appointments", val: "342" },
                    { icon: BarChart3, label: "Minutes Used", val: "89/120" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="rounded-lg bg-primary-foreground/10 p-3 backdrop-blur"
                    >
                      <m.icon className="mb-1.5 h-4 w-4 text-primary-foreground/70" />
                      <p className="text-xs text-primary-foreground/60">{m.label}</p>
                      <p className="font-display text-lg font-bold text-primary-foreground">{m.val}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Fake table */}
                <div className="mt-4 rounded-lg bg-primary-foreground/10 p-3 backdrop-blur">
                  <div className="mb-2 text-xs font-semibold text-primary-foreground/70">Recent Appointments</div>
                  {[
                    { name: "John Smith", service: "AC Repair", status: "confirmed" },
                    { name: "Maria Garcia", service: "Plumbing", status: "rescheduled" },
                    { name: "David Lee", service: "Solar Install", status: "cancelled" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between border-t border-primary-foreground/10 py-2 text-xs text-primary-foreground/80">
                      <span>{row.name}</span>
                      <span className="hidden sm:inline">{row.service}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          row.status === "confirmed"
                            ? "bg-accent/30 text-accent"
                            : row.status === "rescheduled"
                            ? "bg-secondary/30 text-secondary"
                            : "bg-destructive/30 text-destructive"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 rounded-xl border border-border bg-card px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs text-muted-foreground">AI Status</p>
              <p className="font-display text-sm font-bold text-accent">● Active 24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
