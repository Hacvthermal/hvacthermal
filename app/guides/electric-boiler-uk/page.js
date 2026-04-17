import Link from "next/link";

export const metadata = {
  title: "Electric Boilers UK: Are They Worth It? 2026 Guide | HVACThermal",
  description:
    "Are electric boilers any good for UK homes? Guide covering how they work, running costs vs gas, best brands, and when an electric boiler makes sense.",
};

export default function ElectricBoilerUkPage() {
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
            Electric Boilers UK: Are They Worth It? 2026 Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Electric boilers heat water using electric elements rather than burning gas or oil. They can be compact,
            quiet, and simpler to install in some properties, but running costs can be higher than gas depending on your
            tariff and heat demand. This guide explains how electric boilers work, when they make sense in the UK in 2026,
            and what to consider before choosing one.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Electric Boilers Work
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Electric boilers use electrical resistance to heat water for central heating (and sometimes hot water via a cylinder).
              They don’t need a flue and don’t produce combustion gases, but they still need correct sizing and controls.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Running Costs vs Gas
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Running costs depend heavily on electricity prices. While electric boilers can be very efficient at converting electricity into heat,
              the unit price of electricity can make them costly for high heat-demand homes.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When an Electric Boiler Can Make Sense
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>Small, well-insulated properties with lower heat demand</li>
              <li>Homes without a gas connection</li>
              <li>Situations where flue/combustion constraints make gas difficult</li>
              <li>Properties considering solar + suitable tariffs (case-by-case)</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Alternatives to Consider
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Depending on your home, alternatives could include a heat pump, LPG/oil (where available), or improving insulation and controls first to reduce heat demand.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Start With the Right Heat Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Correct sizing matters for all heating options. Use our calculator to estimate the kW output range your home needs before choosing a system.
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
              Are electric boilers expensive to run?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can be, especially in larger or poorly insulated homes. Costs depend on electricity tariffs and heat demand.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do electric boilers need a flue?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. They don’t burn fuel, so there are no combustion gases to vent.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can an electric boiler run radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, if it’s correctly sized and connected to a wet heating system. Performance depends on heat demand and radiator sizing.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is an electric boiler the same as a heat pump?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. Heat pumps move heat and can deliver multiple units of heat per unit of electricity, while electric boilers convert electricity directly into heat.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When is an electric boiler a good option?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often in smaller, well-insulated properties or where gas isn’t available and a heat pump isn’t suitable for practical reasons.
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

