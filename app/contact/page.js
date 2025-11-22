export const metadata = {
  title: "Contact | AI Mastery Step",
  description: "Get in touch with AI Mastery Step."
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
          Contact
        </span>
        <h1 className="font-display text-3xl font-semibold text-ink">Contact AI Mastery Step</h1>
        <p className="text-muted">
          Have a question about the site, the guide, or the courses? Send a message and we will get back to you as soon as we can.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="contact-name" className="font-semibold text-ink">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="contact-email" className="font-semibold text-ink">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="business-type" className="font-semibold text-ink">
              Business type
            </label>
            <input
              id="business-type"
              name="business"
              type="text"
              placeholder="Salon, coaching, local shop..."
              className="w-full rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="font-semibold text-ink">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              className="h-32 w-full resize-vertical rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-[#ff9a6e] px-4 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-deep md:w-auto"
          >
            Send Message
          </button>
        </form>
        <p className="mt-3 text-sm text-muted">
          You can also reach us by email or on social media if that is easier for you.
        </p>
      </section>
    </div>
  );
}
