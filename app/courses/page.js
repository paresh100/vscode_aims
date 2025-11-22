export const metadata = {
  title: "Courses | AI Mastery Step",
  description: "Learn with clear, practical AI training for small business owners."
};

export default function CoursesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
          Courses
        </span>
        <h1 className="font-display text-3xl font-semibold text-ink">Learn with AI Mastery Step</h1>
        <p className="text-lg text-muted">
          Our courses are built for small business owners who want clear, practical training. Each course focuses on simple steps you can use right away in real work.
        </p>
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-[rgba(93,214,192,0.12)] via-white to-[rgba(255,125,90,0.12)] p-6 shadow-card md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
            Coming Soon
          </span>
          <h3 className="font-display text-2xl font-semibold text-ink">AI Mastery Step Starter Course</h3>
          <p className="text-muted">
            A short, focused course that shows small business owners how to use AI in daily tasks like emails, posts, and offers.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm">Level: Beginner</span>
            <span className="rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-sm">Status: Coming Soon</span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-lg text-ink">Join the waitlist to be first in line when the doors open.</p>
          <button
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent-2 to-[#7ee0d0] px-4 py-3 font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-deep md:w-auto"
            type="button"
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">Who this course is for</h3>
          <p className="text-muted">
            Small business owners who feel lost with AI but want to start using it in a safe and simple way. You do not need tech skills. You only need basic computer and phone use.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">What you will learn</h3>
          <ul className="space-y-2 text-muted">
            {[
              "How to set up a simple AI workspace you can use every day.",
              "How to write prompts that sound like you, not a robot.",
              "How to create emails, posts, and offers without starting from zero.",
              "How to plan a week of content in one short session.",
              "How to avoid sharing the wrong things with AI."
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
          <h3 className="font-display text-xl font-semibold text-ink">Course format</h3>
          <ul className="space-y-2 text-muted">
            {[
              "Short video lessons you can watch on your own time.",
              "Written summaries and prompts under each lesson.",
              "Simple checklists to help you build a steady habit."
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h3 className="font-display text-xl font-semibold text-ink">Expected results</h3>
          <ul className="space-y-2 text-muted">
            {[
              "Spend less time stuck on writing.",
              "Have a small library of prompts that fit your business.",
              "Feel more calm and confident when you open your AI tool."
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
