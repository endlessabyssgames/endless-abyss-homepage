import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin", { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setNotice("");
    setLoading(true);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      setLoading(false);
      if (error) return setError(error.message);
      navigate("/admin", { replace: true });
    } else {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setLoading(false);
      if (error) return setError(error.message);
      setNotice("Account created. Check your email if confirmation is required, then sign in.");
      setMode("signin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 section-padding-x">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            Studio Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className="w-full bg-transparent border border-border px-4 py-2.5 text-sm font-body text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              className="w-full bg-transparent border border-border px-4 py-2.5 text-sm font-body text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-secondary w-full text-[10px] sm:text-xs py-2.5 justify-center disabled:opacity-40"
            >
              {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {error && <p className="text-xs font-body text-destructive mt-4">{error}</p>}
          {notice && <p className="text-xs font-body text-foreground/50 mt-4">{notice}</p>}

          <button
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError("");
            }}
            className="text-[10px] font-display tracking-[0.15em] uppercase text-foreground/30 hover:text-foreground transition-colors duration-300 mt-6"
          >
            {mode === "signin" ? "Need an account?" : "Have an account?"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
