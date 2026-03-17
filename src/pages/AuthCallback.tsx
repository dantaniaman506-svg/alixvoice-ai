import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // Check karo user ne onboarding ki hai ya nahi
        const { data: agent } = await supabase
          .from('agents')
          .select('id')
          .eq('user_id', session.user.id)
          .single();

        if (agent) {
          // Onboarding ho chuki hai
          navigate('/dashboard');
        } else {
          // Pehli baar login — onboarding pe bhejo
          navigate('/onboarding');
        }
      } else {
        navigate('/login');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Setting up your account...</p>
      </div>
    </div>
  );
};