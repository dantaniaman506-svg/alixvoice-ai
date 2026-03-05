import Navbar from "@/components/Navbar";
import { Phone, Calendar, Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { icon: Phone, label: "Total Calls", value: "0", color: "text-secondary" },
  { icon: Calendar, label: "Appointments", value: "0", color: "text-accent" },
  { icon: Clock, label: "Minutes Used", value: "0 / 0", color: "text-secondary" },
  { icon: BarChart3, label: "Minutes Left", value: "0", color: "text-accent" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Welcome to your AlixVoice AI control panel.</p>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <m.icon className={`h-5 w-5 ${m.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="font-display text-xl font-bold text-foreground">{m.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Number */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Your AI Virtual Number</h2>
          <p className="mt-2 text-sm text-muted-foreground">No number assigned yet. Complete onboarding and subscribe to receive your dedicated AI number.</p>
        </div>

        {/* Appointments table shell */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Recent Appointments</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Name</th>
                  <th className="pb-3 font-medium text-muted-foreground">Phone</th>
                  <th className="pb-3 font-medium text-muted-foreground">Service</th>
                  <th className="pb-3 font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 font-medium text-muted-foreground">Time</th>
                  <th className="pb-3 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted-foreground">
                    No appointments yet. They'll appear here when your AI books them.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
