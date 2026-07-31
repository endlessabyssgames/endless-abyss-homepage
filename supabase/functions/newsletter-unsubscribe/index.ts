import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body = await req.json().catch(() => null);
    const token = body?.token;
    if (typeof token !== "string" || !UUID_RE.test(token)) {
      return json({ error: "Invalid unsubscribe link." }, 400);
    }

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await admin
      .from("newsletter_subscribers")
      .update({ status: "unsubscribed", unsubscribed_at: new Date().toISOString() })
      .eq("unsubscribe_token", token)
      .select("id");

    if (error) return json({ error: error.message }, 500);
    if (!data || data.length === 0) return json({ error: "Invalid unsubscribe link." }, 404);

    return json({ ok: true });
  } catch (e) {
    console.error("newsletter-unsubscribe error", e);
    return json({ error: "Unexpected error" }, 500);
  }
});
