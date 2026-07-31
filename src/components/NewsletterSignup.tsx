import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "Enter your email address." })
  .email({ message: "That doesn't look like a valid email." })
  .max(255, { message: "Email is too long." });

interface NewsletterSignupProps {
  source?: string;
  className?: string;
  compact?: boolean;
}

const NewsletterSignup = ({ source = "site", className = "", compact = false }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0].message);
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase(), status: "subscribed", source });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
        setMessage("You're already on the list. Thanks!");
        setEmail("");
        return;
      }
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("You're subscribed. Watch your inbox for new posts.");
    setEmail("");
  };

  return (
    <div className={className}>
      {!compact && (
        <>
          <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-2">
            Get New Posts by Email
          </h2>
          <p className="text-foreground/40 text-sm font-body mb-5 max-w-md">
            Dev logs, announcements, and release news from Endless Abyss Games. No spam, unsubscribe anytime.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-email-${source}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          maxLength={255}
          className="flex-1 bg-transparent border border-border px-4 py-2.5 text-sm font-body text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-secondary text-[10px] sm:text-xs py-2.5 px-6 justify-center disabled:opacity-40"
        >
          {status === "loading" ? "Joining..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={`text-xs font-body mt-3 ${status === "error" ? "text-destructive" : "text-foreground/50"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
