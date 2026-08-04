-- Remove the unused account/role system. No login/signup flow exists anywhere
-- in the app, and both newsletter edge functions (newsletter-unsubscribe,
-- auto-send-blog-email) operate exclusively via the service-role key, which
-- bypasses RLS entirely — so nothing in the app depends on auth.users,
-- user_roles, or has_role().

DROP TRIGGER IF EXISTS on_auth_user_created_grant_admin ON auth.users;
DROP FUNCTION IF EXISTS public.grant_first_user_admin();

DROP POLICY IF EXISTS "Admins can view subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can update subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can delete subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can view sends" ON public.newsletter_sends;

REVOKE SELECT, UPDATE, DELETE ON public.newsletter_subscribers FROM authenticated;
REVOKE SELECT ON public.newsletter_sends FROM authenticated;

DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
DROP TABLE IF EXISTS public.user_roles;
DROP TYPE IF EXISTS public.app_role;
