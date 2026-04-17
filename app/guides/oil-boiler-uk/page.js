import Link from "next/link";

export const metadata = {
  title: "Oil Boilers UK: Costs, Pros, Cons & Alternatives 2026 | HVACThermal",
  description:
    "Everything UK homeowners need to know about oil boilers — how they work, costs, efficiency, and whether to switch to a heat pump or gas alternative.",
};

export default function OilBoilerUkPage() {
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
            Oil Boilers UK: Costs, Pros, Cons & Alternatives 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Oil boilers are common in UK homes without a mains gas connection, especially rural properties. They can deliver strong
            heating performance, but running costs depend on oil prices and delivery logistics. This guide explains how oil boilers work,
            what affects costs and efficiency, and when alternatives like heat pumps may be worth considering in 2026.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Oil Boilers Work
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Oil boilers burn heating oil to heat water for radiators and (often) a hot water cylinder. They typically require an oil tank,
              a suitable flue, and regular servicing to keep combustion efficient and safe.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs: What Affects the Price
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>Boiler type and output</li>
              <li>Oil tank condition and location</li>
              <li>Flue and installation access</li>
              <li>Fuel pricing and delivery frequency</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros and Cons
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Pros:</strong> strong heat output, familiar wet heating systems, common in off-gas areas.
              </li>
              <li>
                <strong>Cons:</strong> fuel price volatility, storage tank requirements, servicing needs, and emissions considerations.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Alternatives to Oil Boilers
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Alternatives may include heat pumps (especially with insulation upgrades), LPG in some areas, or biomass in niche cases.
              The best alternative depends on your property, heat demand, and available infrastructure.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Start With Your Home’s kW Heat Requirement
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Whether you stay with oil or switch to another system, correct sizing matters. Use our calculator to estimate the kW output range your home needs.
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
              Are oil boilers efficient?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Modern oil boilers can be efficient, but real-world performance depends on servicing, correct sizing, and system setup.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a hot water cylinder with an oil boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many oil systems use a cylinder, especially system/regular setups. Some configurations can vary by property.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is switching to a heat pump worth it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can be, especially if you improve insulation and can run lower flow temperatures. A proper heat loss assessment is key.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How often should an oil boiler be serviced?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Annual servicing is commonly recommended for safety and efficiency.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What’s the biggest downside of oil heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Fuel price volatility and storage logistics are common drawbacks, along with emissions considerations.
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

