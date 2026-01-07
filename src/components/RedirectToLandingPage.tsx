import { useEffect } from "react";
import { LANDING_PAGES } from "@/config/landingPages";

interface RedirectToLandingPageProps {
  url: string;
}

const RedirectToLandingPage = ({ url }: RedirectToLandingPageProps) => {
  useEffect(() => {
    // Redireciona para a landing page externa
    window.location.href = url;
  }, [url]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <p className="mb-4 text-xl text-muted-foreground">Redirecionando para a landing page...</p>
      </div>
    </div>
  );
};

export default RedirectToLandingPage;

