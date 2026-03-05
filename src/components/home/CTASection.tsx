import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary/80 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Never Miss a Call?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-primary-foreground/80">
            Join hundreds of businesses using AlixVoice AI to automate their customer calls and boost appointments.
          </p>
          <Link to="/signup">
            <Button
              size="lg"
              className="mt-8 bg-accent text-accent-foreground shadow-xl shadow-accent/25 hover:bg-alix-emerald-light text-base px-10"
            >
              Get Started for $1
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
