import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1026] via-[#0f2146] to-[#0a0f24] p-9 text-white shadow-deep md:p-12">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-accent-2/25 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white">
              Practical AI for owners
            </span>
            <div className="space-y-3 max-w-2xl">
              <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Master AI for Your Business, One Simple Step at a Time
              </h1>
              <p className="text-lg text-white/85">
                AI Mastery Step helps small business owners use AI to save time, get clients, and cut boring work. No tech talk. Just clear
                steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/starter-guide"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-[#ff9a6e] px-4 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
              >
                Get the Free AI Starter Guide
              </Link>
              <Link
                href="#intro-lesson"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Watch the Intro Lesson
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {["No jargon, no fluff", "Copy-and-paste prompts"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white/90">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur">
            <h3 className="font-display text-xl font-semibold text-white">Start with calm, clear steps</h3>
            <p className="text-white/80">
              Short lessons, simple prompts, and follow-along walkthroughs that keep your own voice intact.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Pick one real task in your business.",
                "Use the prompt and follow the clicks you see on screen.",
                "Save the result and tweak it so it still sounds like you."
              ].map((item, idx) => (
                <div key={item} className="flex gap-3 text-white/90">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 font-bold">{idx + 1}</span>
                  <div className="flex-1">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            Owners like you
          </span>
          <h2 className="font-display text-3xl font-semibold">Is This You?</h2>
          <p className="text-muted">
            You run a real business. Your time is tight. You keep hearing about AI, but it feels confusing or risky. If any of this sounds familiar, you are in the right place:
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-7 shadow-card backdrop-blur">
            <h3 className="font-display text-xl font-semibold">Common roadblocks</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {[
                "You feel behind when people talk about AI.",
                "You do not want complex tools. You want clear steps.",
                "You write posts, emails, and offers by hand every time.",
                "You are scared of losing your voice or sounding fake.",
                "You want AI to help, not create more work or stress."
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-[#0f172a] p-7 text-white shadow-deep">
            <h3 className="font-display text-xl font-semibold">Built for real work</h3>
            <p className="mt-3 text-lg text-white/85">
              No hype, no jargon. Just straightforward habits that help you write faster, plan better, and keep your voice steady.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            Practical, not noisy
          </span>
          <h2 className="font-display text-3xl font-semibold">How AI Mastery Step Helps You</h2>
          <p className="text-muted">You do not need to become a tech expert. You only need useful habits.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Simple lessons",
              body: "Short lessons that show one skill at a time. Each lesson solves a real task in your business."
            },
            {
              title: "Copy-and-paste prompts",
              body: "Ready prompts you can drop into your AI tool. Edit a few words and use them today."
            },
            {
              title: "Clear follow-along steps",
              body: "Screen walkthroughs and written steps. You see what to click and what to type."
            },
            {
              title: "Real business focus",
              body: "Everything is built for owners. Email, social posts, offers, replies, planning, and more."
            }
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-card backdrop-blur">
              <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="intro-lesson">
        <div className="grid gap-8 rounded-3xl border border-slate-200/70 bg-white/85 p-7 shadow-card backdrop-blur md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
              Intro Lesson Preview
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink">See the simple, first step</h3>
            <p className="text-muted">
              This quick intro lesson shows how to take one business task, add a prompt, and ship a finished draft without losing your voice.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-ink">
              Want the video link? It is included with the free starter guide and emailed to you instantly.
            </p>
            <Link
              href="/starter-guide"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-2 to-[#7ee0d0] px-4 py-3 font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
            >
              Get the Free AI Starter Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            Consistent progress
          </span>
          <h2 className="font-display text-3xl font-semibold">What You Can Expect Over Time</h2>
          <p className="text-muted">You will not master everything in one week. But with steady steps, you can expect:</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Faster writing for emails and posts.",
            "Better ideas for offers and campaigns.",
            "Fewer blank-page moments and less stress.",
            "More time for clients and real work, not admin."
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-card backdrop-blur">
              <span className="mt-1 h-3 w-3 rounded-full bg-accent-2" />
              <div className="text-ink">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            Learn with us
          </span>
          <h2 className="font-display text-3xl font-semibold">Online Courses for Small Business Owners</h2>
          <p className="text-muted">
            Our courses are short, clear, and built for busy owners. You learn one simple skill at a time and see how to use it in real work.
          </p>
        </div>
        <div className="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/85 p-7 shadow-card backdrop-blur md:grid-cols-2 md:items-center">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
              Coming Soon
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink">AI Mastery Step Starter Course</h3>
            <p className="text-muted">
              A focused course that shows small business owners how to use AI in daily tasks like emails, posts, and offers.
            </p>
            <p className="text-sm font-semibold text-muted">Status: Coming Soon</p>
          </div>
          <div className="space-y-3">
            <p className="text-lg text-ink">Join the early waitlist so you get the first invite and the bonus templates.</p>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-2 to-[#7ee0d0] px-4 py-3 font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-10 text-center shadow-card backdrop-blur">
          <div className="relative space-y-4">
            <h2 className="font-display text-3xl font-semibold text-ink">Ready for Your First Simple Step?</h2>
            <p className="text-lg text-muted">
              Start with a free guide that shows real examples and easy wins. You can try each idea in under 10 minutes.
            </p>
            <div className="flex justify-center">
              <Link
                href="/starter-guide"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-[#ff9a6e] px-5 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-deep"
              >
                Get the Free AI Starter Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
