import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/brevo";
const SITE_URL = "https://endlessabyssgames.com";
const FROM_EMAIL = "news@endlessabyssgames.com";
const FROM_NAME = "Endless Abyss Games";

function isNonEmptyString(v: unknown, max: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader) return json({ error: "Unauthorized" }, 401);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return json({ error: "Unauthorized" }, 401);

    const admin = createClient(supabaseUrl, serviceKey);
    const { data: roles } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id)
      .eq("role", "admin");
    if (!roles || roles.length === 0) return json({ error: "Forbidden" }, 403);

    const body = await req.json().catch(() => null);
    if (
      !body ||
      !isNonEmptyString(body.slug, 200) ||
      !isNonEmptyString(body.title, 300) ||
      !isNonEmptyString(body.excerpt, 2000)
    ) {
      return json({ error: "slug, title and excerpt are required" }, 400);
    }

    const slug: string = body.slug.trim();
    const title: string = body.title.trim();
    const excerpt: string = body.excerpt.trim();
    const postUrl = `${SITE_URL}/blog/${encodeURIComponent(slug)}`;

    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    const brevoKey = Deno.env.get("BREVO_API_KEY");
    if (!lovableKey || !brevoKey) {
      return json(
        { error: "Email provider is not connected yet. Connect Brevo in the project connectors." },
        503,
      );
    }

    const { data: subs, error: subsError } = await admin
      .from("newsletter_subscribers")
      .select("email,unsubscribe_token")
      .eq("status", "subscribed");
    if (subsError) return json({ error: subsError.message }, 500);
    if (!subs || subs.length === 0) return json({ recipients: 0 });

    let sent = 0;
    const chunkSize = 250;

    for (let i = 0; i < subs.length; i += chunkSize) {
      const chunk = subs.slice(i, i + chunkSize);
      const messageVersions = chunk.map((s) => {
        const unsubUrl = `${SITE_URL}/unsubscribe?token=${s.unsubscribe_token}`;
        return {
          to: [{ email: s.email }],
          htmlContent: `
<!doctype html><html><body style="background:#ffffff;margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
  <div style="max-width:560px;margin:0 auto;">
    <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#888888;margin:0 0 16px;">Endless Abyss Games</p>
    <h1 style="font-size:22px;line-height:1.3;margin:0 0 16px;">${escapeHtml(title)}</h1>
    <p style="font-size:15px;line-height:1.6;color:#444444;margin:0 0 24px;">${escapeHtml(excerpt)}</p>
    <a href="${postUrl}" style="display:inline-block;background:#111111;color:#ffffff;text-decoration:none;padding:12px 22px;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Read the post</a>
    <p style="font-size:11px;color:#999999;margin:32px 0 0;">
      You're receiving this because you subscribed at endlessabyssgames.com.
      <a href="${unsubUrl}" style="color:#999999;">Unsubscribe</a>.
    </p>
  </div>
</body></html>`,
        };
      });

      const res = await fetch(`${GATEWAY_URL}/smtp/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": brevoKey,
        },
        body: JSON.stringify({
          sender: { name: FROM_NAME, email: FROM_EMAIL },
          subject: title,
          messageVersions,
          htmlContent: "<html><body></body></html>",
        }),
      });

      if (!res.ok) {
        const errorBody = await res.text();
        console.error(`Brevo send failed [${res.status}]: ${errorBody}`);
        return json({ error: "Provider request failed", status: res.status, details: errorBody }, res.status);
      }
      sent += chunk.length;
    }

    await admin.from("newsletter_sends").insert({
      post_slug: slug,
      recipient_count: sent,
      sent_by: userData.user.id,
    });

    return json({ recipients: sent });
  } catch (e) {
    console.error("send-blog-email error", e);
    return json({ error: e instanceof Error ? e.message : "Unexpected error" }, 500);
  }
});
