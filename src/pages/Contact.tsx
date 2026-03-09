import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactEmails = [
  {
    label: "General Inquiries",
    email: "contact@endlessabyssgames.com",
    description: "For general questions about our studio and games.",
  },
  {
    label: "Press & Media",
    email: "press@endlessabyssgames.com",
    description: "For press inquiries, review copies, and media coverage.",
  },
];

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 sm:pt-32 md:pt-40 section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight mb-4 sm:mb-6">
            Contact
          </h1>
          <p className="text-foreground/50 text-sm font-body leading-relaxed mb-10 sm:mb-12 md:mb-16 max-w-lg">
            Get in touch with us. We'd love to hear from you.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {contactEmails.map(({ label, email, description }) => (
              <div
                key={label}
                className="border-b border-border pb-6 sm:pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-1">
                    {label}
                  </h2>
                  <p className="text-foreground/40 text-sm font-body">{description}</p>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="btn-secondary text-[10px] sm:text-xs py-2.5 sm:py-3 px-4 sm:px-6"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="truncate">{email}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Follow Us
            </h2>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="https://x.com/endless_abyss_g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-foreground/40 hover:text-foreground transition-all duration-300 group"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[10px] sm:text-xs font-display tracking-[0.15em] uppercase">X / Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/@EndlessAbyssGames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-foreground/40 hover:text-foreground transition-all duration-300 group"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path d="M9.545 15.568V8.432L15.818 12z" fill="hsl(var(--background))" />
                </svg>
                <span className="text-[10px] sm:text-xs font-display tracking-[0.15em] uppercase">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
