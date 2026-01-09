import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="text-center glass p-12 rounded-3xl">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-6 text-xl text-foreground/60">Page non trouvée</p>
        <a href="/" className="btn-liquid-primary inline-block">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
