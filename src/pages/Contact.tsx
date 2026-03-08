import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactEmails = [
  {
    label: "General Inquiries",
    email: "contact@example.com",
    description: "For general questions about our studio and games.",
  },
  {
    label: "Press & Media",
    email: "press@example.com",
    description: "For press inquiries, review copies, and media coverage.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-32 px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-foreground/50 text-sm font-body leading-relaxed mb-16 max-w-lg">
            Get in touch with us. We'd love to hear from you.
          </p>

          <div className="space-y-8">
            {contactEmails.map(({ label, email, description }) => (
              <div
                key={label}
                className="border-b border-border pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-1">
                    {label}
                  </h2>
                  <p className="text-foreground/40 text-sm font-body">{description}</p>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 text-foreground text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300 shrink-0"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
