export const metadata = {
  title: "About | AI Mastery Step",
  description: "Why AI Mastery Step exists and who it is for."
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
          About AI Mastery Step
        </span>
        <h1 className="font-display text-3xl font-semibold text-ink">About AI Mastery Step</h1>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">Why this exists</h3>
          <p className="text-muted">
            Most small business owners are busy keeping the lights on. AI looks powerful, but also noisy, confusing, and risky. AI Mastery Step exists to close that gap. It turns big ideas into small, clear steps that fit normal businesses.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">Who this is for</h3>
          <ul className="space-y-2 text-muted">
            {[
              "Salon and clinic owners.",
              "Local shop owners and trades.",
              "Coaches, trainers, and solo professionals.",
              "Any owner who wants AI to help, not make life harder."
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">How we teach</h3>
          <ul className="space-y-2 text-muted">
            {[
              "Plain language and real examples.",
              "Short lessons you can finish in one sitting.",
              "Prompts you can copy and adapt for your own work.",
              "Simple habits you can keep for the long term."
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">About the Founder</h3>
          <p className="text-muted">
            AI Mastery Step was created by a small business owner who knows both sides. Running a real business, and learning how to use AI without getting lost in tech talk.
          </p>
          <p className="text-muted">The goal is simple: Help owners feel calm, clear, and in control when they use AI.</p>
        </div>
      </section>
    </div>
  );
}
