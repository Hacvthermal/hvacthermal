import Link from "next/link";

export const metadata = {
  title: "Frozen Condensate Pipe: How to Thaw It UK Guide 2026 | HVACThermal",
  description:
    "Boiler not working in cold weather? Your condensate pipe may be frozen. UK step-by-step guide to safely thawing it and preventing it happening again.",
};

export default function FrozenCondensatePipePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="HVACThermal Home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "#1E3A5F" }} aria-hidden="true">
              <span className="text-sm font-bold text-white">HT</span>
            </span>
            <span className="text-lg" style={{ color: "#1E3A5F" }}>
              HVACThermal
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link href="/#calculators" className="text-slate-700 hover:text-slate-900">
              Calculators
            </Link>
            <Link href="/guides" className="text-slate-700 hover:text-slate-900">
              Guides
            </Link>
            <Link href="/#features" className="text-slate-700 hover:text-slate-900">
              Features
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-slate-900">
              About
            </Link>
            <a href="mailto:support@hvacthermal.com" className="text-slate-700 hover:text-slate-900">
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/calculator/boiler-size-calculator"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ backgroundColor: "#E67E22" }}
            >
              Boiler Calculator
            </Link>
          </div>
        </div>
      </header>

      <main>
        <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "#1E3A5F" }}>
            Frozen Condensate Pipe: How to Thaw It UK Guide 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            In freezing weather, many UK boiler breakdowns are caused by a frozen condensate pipe. Condensing
            boilers produce acidic condensate water that drains away through a plastic pipe—often to an external
            drain. If that pipe freezes, the boiler may shut down to protect itself. This guide explains how to
            spot a frozen condensate pipe, how to thaw it safely, and how to reduce the chance it happens again.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Signs Your Condensate Pipe Is Frozen
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>The boiler stops during cold weather and may show a fault code.</li>
              <li>You can see ice on an external plastic pipe (often white/grey) from the boiler.</li>
              <li>The pipe feels solid or blocked near the outside wall or at the drain.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Thaw a Frozen Condensate Pipe (Step-by-Step)
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Find the pipe:</strong> locate the plastic condensate pipe leaving the boiler and heading to a drain.
              </li>
              <li>
                <strong>Identify the frozen section:</strong> commonly outside or near the external wall.
              </li>
              <li>
                <strong>Warm it gently:</strong> pour warm (not boiling) water over the frozen section, or use a hot water bottle.
              </li>
              <li>
                <strong>Allow it to drain:</strong> once thawed, water should flow away.
              </li>
              <li>
                <strong>Reset the boiler:</strong> follow the boiler’s reset instructions if it’s in lockout.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-7">
              Avoid boiling water, naked flames, or high-heat tools that could damage plastic pipework.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Prevent It Freezing Again
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Insulate external pipe runs:</strong> especially near the wall and at exposed sections.
              </li>
              <li>
                <strong>Shorten external runs where possible:</strong> internal routing is less prone to freezing.
              </li>
              <li>
                <strong>Keep the heating ticking over:</strong> during severe cold snaps, continuous low heat can help.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you can’t locate the pipe, it refreezes repeatedly, or the boiler still won’t run after thawing,
              book an engineer. Persistent freezing may indicate an installation issue that needs a permanent fix.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing the Boiler, Check kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If winter breakdowns are a recurring theme and the boiler is aging, replacement may be worthwhile.
              Use our calculator to estimate the right kW output for your home.
            </p>
            <Link
              href="/calculator/boiler-size-calculator"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              style={{ backgroundColor: "#E67E22" }}
            >
              Use the Boiler Size Calculator
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Frequently Asked Questions
            </h2>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is a frozen condensate pipe dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s usually not dangerous, but it can stop your boiler working. Thaw it gently and safely, and avoid damaging the pipe.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I use boiling water to thaw it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Avoid boiling water—use warm water to reduce the risk of cracking plastic fittings.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why does it keep freezing every winter?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Long exposed external pipe runs and poor insulation are common causes. Improving routing/insulation can help significantly.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if the boiler still won’t work after thawing?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The blockage may not be fully cleared, or there may be another fault. Check for error codes and book an engineer if it persists.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I insulate the condensate pipe?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes—insulating exposed sections is one of the most effective preventative steps in UK winters.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#1E3A5F" }}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "#1E3A5F" }}>
                <span className="text-sm font-bold text-white">HT</span>
              </span>
              HVACThermal
            </Link>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/#calculators" className="hover:text-slate-900">
                Calculators
              </Link>
              <Link href="/calculator/boiler-size-calculator" className="hover:text-slate-900">
                Boiler Calculator
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} HVACThermal.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

