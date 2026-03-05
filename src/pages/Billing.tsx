import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Billing = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Billing</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your subscription and purchase extra minutes.</p>

        {/* Current plan */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Current Plan</h2>
          <p className="mt-2 text-sm text-muted-foreground">No active subscription. Choose a plan to get started.</p>
          <Button className="mt-4 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
            View Plans
          </Button>
        </div>

        {/* Extra minutes */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Extra Minutes</h2>
          <p className="mt-2 text-sm text-muted-foreground">Purchase additional minutes when you need them.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { min: 40, price: "$3" },
              { min: 100, price: "$7" },
              { min: 250, price: "$16" },
              { min: 500, price: "$29" },
            ].map((pkg) => (
              <div key={pkg.min} className="rounded-xl border border-border p-4 text-center">
                <p className="font-display text-lg font-bold text-foreground">{pkg.min} min</p>
                <p className="text-sm text-muted-foreground">{pkg.price}</p>
                <Button variant="outline" size="sm" className="mt-3 w-full">Buy</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
