import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const RESEND_API_URL = "https://api.resend.com/emails/batch";
const RESEND_BATCH_SIZE = 100; // Resend's batch endpoint accepts at most 100 emails per call
const SITE_URL = "https://endlessabyssgames.com";
const FROM_EMAIL = "Endless Abyss Games <news@endlessabyssgames.com>";

interface FeedPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidPost(p: unknown): p is FeedPost {
  const o = p as Record<string, unknown>;
  return (
    !!o &&
    typeof o.slug === "string" &&
    /^[a-z0-9-]{1,200}$/.test(o.slug) &&
    typeof o.title === "string" &&
    o.title.length > 0 &&
    o.title.length <= 300 &&
    typeof o.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(o.date) &&
    typeof o.excerpt === "string" &&
    o.excerpt.length <= 2000
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // 1. Read the published blog feed (generated at build time from src/data/blog.ts)
    const feedRes = await fetch(`${SITE_URL}/blog-feed.json`, { cache: "no-store" });
    if (!feedRes.ok) {
      const details = await feedRes.text();
      console.error(`Feed fetch failed [${feedRes.status}]: ${details}`);
      return json({ error: "Could not read blog feed", status: feedRes.status }, 502);
    }
    const feed = await feedRes.json().catch(() => null);
    const posts: FeedPost[] = Array.isArray(feed?.posts) ? feed.posts.filter(isValidPost) : [];
    if (posts.length === 0) return json({ sent: [], reason: "no valid posts in feed" });

    // 2. Skip anything already mailed
    const { data: sends, error: sendsError } = await admin
      .from("newsletter_sends")
      .select("post_slug");
    if (sendsError) return json({ error: sendsError.message }, 500);
    const alreadySent = new Set((sends ?? []).map((s) => s.post_slug));

    // Only consider posts published in the last 30 days, oldest first.
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const pending = posts
      .filter((p) => !alreadySent.has(p.slug) && Date.parse(p.date) >= cutoff)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (pending.length === 0) return json({ sent: [] });

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) return json({ error: "Email provider not connected" }, 503);

    const { data: subs, error: subsError } = await admin
      .from("newsletter_subscribers")
      .select("email,unsubscribe_token")
      .eq("status", "subscribed");
    if (subsError) return json({ error: subsError.message }, 500);

    const sentSlugs: string[] = [];

    for (const post of pending) {
      const postUrl = `${SITE_URL}/blog/${post.slug}`;
      let sent = 0;

      for (let i = 0; i < (subs?.length ?? 0); i += RESEND_BATCH_SIZE) {
        const chunk = subs!.slice(i, i + RESEND_BATCH_SIZE);
        const emails = chunk.map((s) => ({
          from: FROM_EMAIL,
          to: [s.email],
          subject: post.title,
          html: `
<!doctype html><html><body style="background:#ffffff;margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
  <div style="max-width:560px;margin:0 auto;">
    <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888888;margin:0 0 16px;">Endless Abyss Games</p>
    <h1 style="font-size:22px;line-height:1.3;margin:0 0 16px;">${escapeHtml(post.title)}</h1>
    <p style="font-size:15px;line-height:1.6;color:#444444;margin:0 0 24px;">${escapeHtml(post.excerpt)}</p>
    <a href="${postUrl}" style="display:inline-block;background:#111111;color:#ffffff;text-decoration:none;padding:12px 22px;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Read the post</a>
    <p style="font-size:11px;color:#999999;margin:32px 0 0;">
      You're receiving this because you subscribed at endlessabyssgames.com.
      <a href="${SITE_URL}/unsubscribe?token=${s.unsubscribe_token}" style="color:#999999;">Unsubscribe</a>.
    </p>
  </div>
</body></html>`,
        }));

        const res = await fetch(RESEND_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify(emails),
        });

        if (!res.ok) {
          const details = await res.text();
          console.error(`Resend send failed [${res.status}]: ${details}`);
          return json({ error: "Provider request failed", status: res.status, details, sent: sentSlugs }, res.status);
        }
        sent += chunk.length;
      }

      await admin
        .from("newsletter_sends")
        .insert({ post_slug: post.slug, recipient_count: sent });
      sentSlugs.push(post.slug);
    }

    return json({ sent: sentSlugs });
  } catch (e) {
    console.error("auto-send-blog-email error", e);
    return json({ error: e instanceof Error ? e.message : "Unexpected error" }, 500);
  }
});
