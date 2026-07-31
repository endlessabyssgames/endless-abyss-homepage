import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

interface Subscriber {
  id: string;
  email: string;
  status: string;
  source: string | null;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [selectedSlug, setSelectedSlug] = useState(blogPosts[0]?.slug ?? "");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  const loadSubscribers = useCallback(async () => {
    const { data } = await supabase
      .from("newsletter_subscribers")
      .select("id,email,status,source,created_at")
      .order("created_at", { ascending: false });
    setSubscribers((data as Subscriber[]) ?? []);
  }, []);

  useEffect(() => {
    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id);
      const admin = (roles ?? []).some((r) => r.role === "admin");
      setIsAdmin(admin);
      if (admin) await loadSubscribers();
      setChecking(false);
    })();
  }, [navigate, loadSubscribers]);

  const handleSend = async () => {
    const post = blogPosts.find((p) => p.slug === selectedSlug);
    if (!post) return;
    setSending(true);
    setResult("");
    const { data, error } = await supabase.functions.invoke("send-blog-email", {
      body: { slug: post.slug, title: post.title, excerpt: post.excerpt },
    });
    setSending(false);
    if (error) {
      setResult(`Send failed: ${error.message}`);
      return;
    }
    if (data?.error) {
      setResult(`Send failed: ${data.error}`);
      return;
    }
    setResult(`Sent to ${data?.recipients ?? 0} subscribers.`);
  };


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const activeCount = subscribers.filter((s) => s.status === "subscribed").length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-32 section-padding-x pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-foreground uppercase tracking-tight">
              Newsletter
            </h1>
            <button
              onClick={handleSignOut}
              className="text-[10px] font-display tracking-[0.15em] uppercase text-foreground/30 hover:text-foreground transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>

          {checking && <p className="text-foreground/40 text-sm font-body">Loading...</p>}

          {!checking && !isAdmin && (
            <p className="text-foreground/40 text-sm font-body">
              This account doesn't have admin access.
            </p>
          )}

          {!checking && isAdmin && (
            <>
              <div className="border border-border p-6 mb-10">
                <h2 className="text-base font-display font-bold text-foreground uppercase tracking-tight mb-4">
                  Send a Post
                </h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={selectedSlug}
                    onChange={(e) => setSelectedSlug(e.target.value)}
                    className="flex-1 bg-transparent border border-border px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:border-foreground/40"
                  >
                    {blogPosts.map((post) => (
                      <option key={post.slug} value={post.slug} className="bg-background">
                        {post.title}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleSend}
                    disabled={sending || activeCount === 0}
                    className="btn-secondary text-[10px] sm:text-xs py-2.5 px-6 justify-center disabled:opacity-40"
                  >
                    {sending ? "Sending..." : `Send to ${activeCount}`}
                  </button>
                </div>
                {result && <p className="text-xs font-body text-foreground/50 mt-4">{result}</p>}
              </div>

              <h2 className="text-base font-display font-bold text-foreground uppercase tracking-tight mb-4">
                Subscribers ({activeCount})
              </h2>
              <div className="border-t border-border">
                {subscribers.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between border-b border-border py-3 gap-4"
                  >
                    <span className="text-sm font-body text-foreground/70 truncate">{s.email}</span>
                    <span className="text-[10px] font-display tracking-[0.15em] uppercase text-foreground/30 shrink-0">
                      {s.status} · {new Date(s.created_at).toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {subscribers.length === 0 && (
                  <p className="text-foreground/30 text-sm font-body py-6">No subscribers yet.</p>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
