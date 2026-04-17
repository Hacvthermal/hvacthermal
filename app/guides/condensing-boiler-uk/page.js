import Link from "next/link";

export const metadata = {
  title: "Condensing Boilers UK: What Are They & Are They Better? | HVACThermal",
  description:
    "What is a condensing boiler and are they more efficient? UK guide covering how they work, why they are now standard, and their pros and cons.",
};

export default function CondensingBoilerUkPage() {
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
            Condensing Boilers UK: What Are They & Are They Better?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A condensing boiler is designed to recover more heat from the flue gases than older non-condensing models.
            That improves efficiency and can reduce running costs for the same heat demand. In the UK, condensing boilers
            are the standard for replacements. This guide explains how they work, why they’re more efficient, and the main pros and cons.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What “Condensing” Means
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              When a boiler burns gas, the flue gases contain water vapour. A condensing boiler cools those gases enough for the vapour
              to condense into liquid water. That releases additional heat, which is transferred into your heating system.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Flow Temperature Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Condensing is strongest when return water temperatures are lower. If the system runs at very high temperatures,
              the boiler may condense less often and efficiency gains reduce.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros and Cons
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Pros:</strong> higher efficiency, lower fuel use for the same heat output, modern controls and modulation.
              </li>
              <li>
                <strong>Cons:</strong> needs a condensate drain, can be affected by freezing condensate pipes in winter if poorly routed.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Are They Better for Hot Water Too?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Efficiency gains apply across heating and hot water production, but hot water performance (especially for combis)
              also depends on the boiler’s output and your household demand.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Get the Boiler kW Output Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              The best-performing condensing boiler still needs the right output for your home. Use our calculator to estimate the correct kW range.
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
              Do all new boilers in the UK have to be condensing?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              In most cases, replacement boilers are condensing models because they meet modern efficiency standards.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why do condensing boilers produce water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The “water” is condensate formed when water vapour in flue gases condenses. It drains away through a condensate pipe.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can a condensate pipe freeze?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, especially if the pipe runs externally without insulation. Proper routing and insulation reduce the risk.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are condensing boilers more expensive?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They are standard now, so pricing varies mainly by brand, output, warranty, and installation complexity.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I get the best efficiency from a condensing boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Use good controls, keep the system clean, and aim for sensible flow temperatures so the boiler can condense more often.
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

