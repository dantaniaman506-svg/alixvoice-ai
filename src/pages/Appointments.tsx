import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Appointments</h1>
        <p className="mt-1 text-sm text-muted-foreground">View and manage all appointments booked by your AI.</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Client Name</th>
                  <th className="pb-3 font-medium text-muted-foreground">Phone</th>
                  <th className="pb-3 font-medium text-muted-foreground">Email</th>
                  <th className="pb-3 font-medium text-muted-foreground">Service</th>
                  <th className="pb-3 font-medium text-muted-foreground">Address</th>
                  <th className="pb-3 font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 font-medium text-muted-foreground">Time</th>
                  <th className="pb-3 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="py-16 text-center text-muted-foreground">
                    No appointments yet. They'll appear here in real time when your AI books them.
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

export default Appointments;
