import Link from "next/link";

export const metadata = {
  title: "Free AI Starter Guide | AI Mastery Step",
  description: "10 simple ways to use AI in your business this week."
};

export default function StarterGuidePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            Free resource
          </span>
          <h1 className="font-display text-3xl font-semibold text-ink">Free AI Starter Guide for Small Business Owners</h1>
          <p className="text-lg text-muted">
            Learn 10 simple ways to use AI in your business this week. No fluff. No jargon.
          </p>
          <p className="text-muted">
            This guide is for real owners who feel lost with AI. You will see clear examples that fit normal businesses, not just tech companies.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
              What’s Inside
            </span>
            <h2 className="font-display text-2xl font-semibold text-ink">What’s inside the guide</h2>
          </div>
          <ul className="space-y-3 text-muted">
            {[
              "10 copy-and-paste prompts for emails, posts, and offers.",
              "A simple checklist to make AI part of your weekly routine.",
              "Examples of how salons, coaches, and local shops can use AI.",
              "A short list of common mistakes and how to avoid them."
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <p className="text-muted">
            Enter your name and email to get the guide by email. You can start using the prompts today.
          </p>
          <form className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="font-semibold text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-[#f9fbff] px-3 py-2 text-sm text-ink shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-[#ff9a6e] px-4 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
            >
              Send Me the Starter Guide
            </button>
          </form>
          <p className="text-sm text-muted">
            Thanks. Your guide is on its way to your inbox. While you wait, see how the first course will help you go deeper with simple,
            step-by-step lessons.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-accent-2/15 via-white to-accent/15 p-6 shadow-card">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold text-ink">Ready for the course?</h3>
            <p className="text-muted">Join the waitlist to go deeper with step-by-step lessons.</p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-2 to-[#7ee0d0] px-4 py-3 font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
          >
            View the Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
