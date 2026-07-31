import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<"idle" | "working" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUnsubscribe = async () => {
    setState("working");
    const { data, error } = await supabase.functions.invoke("newsletter-unsubscribe", {
      body: { token },
    });
    if (error || data?.error) {
      setState("error");
      setMessage("We couldn't process that unsubscribe link. It may already have been used.");
      return;
    }
    setState("done");
    setMessage("You've been unsubscribed. Sorry to see you go.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 section-padding-x">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-foreground uppercase tracking-tight mb-4">
            Unsubscribe
          </h1>

          {!token && (
            <p className="text-foreground/40 text-sm font-body">
              This unsubscribe link is missing its token.
            </p>
          )}

          {token && state !== "done" && (
            <>
              <p className="text-foreground/50 text-sm font-body mb-6">
                Confirm that you'd like to stop receiving blog updates from Endless Abyss Games.
              </p>
              <button
                onClick={handleUnsubscribe}
                disabled={state === "working"}
                className="btn-secondary text-[10px] sm:text-xs py-2.5 px-6 disabled:opacity-40"
              >
                {state === "working" ? "Working..." : "Confirm Unsubscribe"}
              </button>
            </>
          )}

          {message && <p className="text-foreground/50 text-sm font-body mt-6">{message}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
