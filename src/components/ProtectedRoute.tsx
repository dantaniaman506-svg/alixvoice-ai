import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [hasAgent, setHasAgent] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      if (!user) {
        setCheckingOnboarding(false);
        return;
      }

      const agentRes = await supabase
        .from("agents")
        .select("id")
        .eq("user_id", user.id)
        .limit(1);

      setHasAgent((agentRes.data?.length ?? 0) > 0);
      setCheckingOnboarding(false);
    };

    if (!loading) checkStatus();
  }, [user, loading]);

  if (loading || checkingOnboarding) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  if (!hasAgent && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;