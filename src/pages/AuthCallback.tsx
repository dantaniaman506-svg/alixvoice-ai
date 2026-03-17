import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AuthCallback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      // Wait a brief moment for the auth state to be processed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        // User is authenticated, redirect to dashboard
        navigate("/dashboard");
      } else {
        // No session found, redirect to login
        navigate("/login");
      }
    };

    handleCallback();
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary/20 mb-4">
          <div className="animate-spin h-6 w-6 border-2 border-secondary border-t-transparent rounded-full" />
        </div>
        <p className="text-muted-foreground">Processing your login...</p>
      </div>
    </div>
  );
};

export default AuthCallback;