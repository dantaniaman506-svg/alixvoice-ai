import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Phone, Calendar, Clock, BarChart3 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { user } = useAuth();
  const [totalCalls, setTotalCalls] = useState(0);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [minutesUsed, setMinutesUsed] = useState(0);
  const [minutesTotal, setMinutesTotal] = useState(0);
  const [virtualNumber, setVirtualNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      // Users table se minutes nikalo
      const { data: userData } = await supabase
        .from('users')
        .select('minutes_used, minutes_total, subscription_plan')
        .eq('id', user.id)
        .single();

      if (userData) {
        setMinutesUsed(userData.minutes_used || 0);
        setMinutesTotal(userData.minutes_total || 0);
      }

      // Virtual number nikalo
      const { data: numberData } = await supabase
        .from('virtual_numbers')
        .select('phone_number')
        .eq('user_id', user.id)
        .single();

      if (numberData) {
        setVirtualNumber(numberData.phone_number);
      }

      // Appointments nikalo
      const { data: appointmentsData } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', user.id)
        .order('appointment_date', { ascending: false });

      if (appointmentsData) {
        setAppointments(appointmentsData);
      }

      // Call logs nikalo
      const { data: callsData } = await supabase
        .from('call_logs')
        .select('id')
        .eq('user_id', user.id);

      if (callsData) {
        setTotalCalls(callsData.length);
      }

      setLoading(false);
    };

    fetchData();
  }, [user]);

  const getStatusColor = (status: string) => {
    if (status === 'confirmed') return 'bg-green-100 text-green-700';
    if (status === 'cancelled') return 'bg-red-100 text-red-700';
    if (status === 'rescheduled') return 'bg-blue-100 text-blue-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Welcome to your AlixVoice AI control panel.</p>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Calls</p>
                <p className="font-display text-xl font-bold text-foreground">{totalCalls}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Appointments</p>
                <p className="font-display text-xl font-bold text-foreground">{appointments.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Minutes Used</p>
                <p className="font-display text-xl font-bold text-foreground">{minutesUsed} / {minutesTotal}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Minutes Left</p>
                <p className="font-display text-xl font-bold text-foreground">{minutesTotal - minutesUsed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Number */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">Your AI Virtual Number</h2>
          {virtualNumber ? (
            <p className="mt-2 text-2xl font-bold text-secondary">{virtualNumber}</p>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">No number assigned yet. Complete onboarding and subscribe to receive your dedicated AI number.</p>
          )}
        </div>

        {/* Appointments */}
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
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-muted-foreground">
                      No appointments yet. They'll appear here when your AI books them.
                    </td>
                  </tr>
                ) : (
                  appointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-border">
                      <td className="py-3">{apt.customer_name}</td>
                      <td className="py-3">{apt.customer_phone}</td>
                      <td className="py-3">{apt.service_type}</td>
                      <td className="py-3">{apt.appointment_date}</td>
                      <td className="py-3">{apt.appointment_time}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(apt.status)}`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;