import Link from "next/link";

export const metadata = {
  title: "LPG Boilers UK: What Are They & Are They Worth It? 2026 | HVACThermal",
  description:
    "What is an LPG boiler and is it right for your UK home? Guide covering how LPG boilers work, running costs, installation, and alternatives.",
};

export default function LpgBoilerUkPage() {
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
            LPG Boilers UK: What Are They & Are They Worth It? 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            LPG (liquefied petroleum gas) boilers are a common heating option for UK homes without mains gas. They work similarly
            to natural gas boilers but use LPG supplied from a tank or cylinders. This guide explains how LPG boilers work, what affects
            running costs in 2026, installation considerations, and alternatives like heat pumps.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How LPG Boilers Work
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              LPG boilers heat water for radiators and hot water, using combustion like natural gas boilers. You’ll need an LPG supply setup
              (tank or cylinders), safe siting, and regular servicing by a qualified engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Running Costs: What Matters
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>LPG price and supplier contract terms</li>
              <li>Home heat demand (insulation and set temperatures)</li>
              <li>Boiler efficiency and controls</li>
              <li>Tank rental/delivery logistics</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros and Cons
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Pros:</strong> familiar wet heating, good heat output, workable in off-gas areas.
              </li>
              <li>
                <strong>Cons:</strong> fuel price volatility, tank siting, delivery dependence, and emissions considerations.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Alternatives
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Alternatives may include heat pumps (often with insulation upgrades), oil in some regions, or improving insulation and controls
              to reduce demand before changing heating type.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Start With the Right kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Correct sizing matters whether you’re using LPG, oil, or switching to a heat pump. Use our calculator to estimate the kW range your home needs.
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
              Is LPG cheaper than electricity for heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on tariffs and fuel prices. For higher heat-demand homes, LPG can be cheaper than direct electric heating, but costs vary.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do LPG boilers need a flue?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. LPG boilers are combustion appliances and need safe flueing and ventilation as required.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is an LPG boiler different from a gas boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They’re similar, but the boiler must be compatible with LPG and correctly set up for that fuel by a qualified engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is switching to a heat pump worth it from LPG?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can be, especially if you improve insulation and can run lower temperatures. A heat loss assessment and system design are key.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What’s the biggest thing to get right?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Correct sizing and good controls, plus a reliable fuel supply arrangement and safe installation.
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

