import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the $1 trial work?",
    a: "You pay just $1 to try AlixVoice AI for 7 days with 20 minutes of call time and a dedicated virtual number. After 7 days, your plan automatically converts to the $25/month Starter plan unless you cancel.",
  },
  {
    q: "How does the AI know about my business?",
    a: "During onboarding, you provide your business name, services, hours, FAQs, and more. The AI uses all of this to answer calls naturally and accurately, as if it's part of your team.",
  },
  {
    q: "Can customers tell they're talking to an AI?",
    a: "Our AI uses advanced ElevenLabs voice technology that sounds remarkably human. Most callers don't realize they're speaking with an AI receptionist.",
  },
  {
    q: "What happens if I run out of minutes?",
    a: "You can purchase extra minute packs anytime starting from $3 for 40 minutes. Your AI will continue handling calls seamlessly.",
  },
  {
    q: "Can the AI handle appointment cancellations and rescheduling?",
    a: "Yes! The AI automatically detects when a caller wants to cancel or reschedule an appointment. Your dashboard updates in real time with status changes.",
  },
  {
    q: "What phone number do I get?",
    a: "You receive a dedicated US virtual number in your preferred area code. This number is exclusively yours and connected to your AI agent.",
  },
  {
    q: "Is there an emergency call forwarding option?",
    a: "Absolutely. You can set an emergency number during onboarding. If a situation requires human attention, the AI will provide your emergency number to the caller.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time from your billing page. There are no long-term contracts or hidden fees.",
  },
];

const FAQSection = () => {
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
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display text-sm font-semibold text-foreground hover:no-underline sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
