import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        
        // Agent check karo
        const { data: agent } = await supabase
          .from('agents')
          .select('id')
          .eq('user_id', session.user.id)
          .single();

        if (!agent) {
          // Pehli baar — onboarding pe bhejo
          navigate('/onboarding');
          return;
        }

        // Agent hai — dashboard pe bhejo
        navigate('/dashboard');

      } else if (event === 'SIGNED_OUT') {
        navigate('/login');
      }
    });
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

export default AuthCallback;