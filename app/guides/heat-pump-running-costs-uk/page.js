import Link from "next/link";

export const metadata = {
  title: "Heat Pump Running Costs UK 2026: What to Expect | HVACThermal",
  description:
    "How much does a heat pump cost to run in the UK? 2026 guide covering running costs vs gas boilers, factors affecting efficiency, and how to reduce bills.",
};

export default function HeatPumpRunningCostsUkPage() {
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
            Heat Pump Running Costs UK 2026: What to Expect
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Heat pump running costs depend on your home’s heat demand, your electricity tariff, and the heat pump’s real-world efficiency.
            A well-designed system running at low temperatures in an insulated home can be cost-competitive, while a poorly designed
            or oversized system can be expensive. This guide explains what affects running costs in the UK and how to reduce bills in 2026.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Drives Heat Pump Running Costs?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Heat demand:</strong> insulation, draughts, size, and set temperatures.
              </li>
              <li>
                <strong>SCOP/efficiency:</strong> how much heat you get per unit of electricity over a season.
              </li>
              <li>
                <strong>Flow temperature:</strong> higher temperatures usually reduce efficiency.
              </li>
              <li>
                <strong>Tariff:</strong> unit rate and any time-of-use options.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Heat Pump vs Gas Boiler: Running Cost Comparison
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A direct comparison depends on electricity and gas prices and the effective efficiency of each system. A modern condensing boiler can be
              efficient, but a well-run heat pump can deliver multiple units of heat per unit of electricity.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Reduce Heat Pump Bills
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>Improve insulation and draught proofing first.</li>
              <li>Run lower flow temperatures where possible.</li>
              <li>Use sensible schedules and avoid rapid temperature swings.</li>
              <li>Maintain the system (filters, airflow, defrost performance).</li>
            </ul>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Still Choosing Heating? Start With Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Whether you choose a boiler or heat pump, correct sizing is crucial. Use our calculator to estimate the kW output your home needs.
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
              Are heat pumps cheaper to run than gas boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes. It depends on electricity vs gas prices, and the heat pump’s seasonal efficiency in your home.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What is SCOP and why does it matter?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              SCOP reflects seasonal efficiency. Higher SCOP generally means lower running costs for the same heat demand.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does underfloor heating reduce running costs?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can because it often works at lower flow temperatures, which helps heat pump efficiency.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a bigger heat pump cost more to run?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Oversizing can lead to inefficient cycling. Correct design and controls matter as much as headline size.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How can I lower my heat pump bills quickly?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Reduce heat demand (insulation/draughts), keep flow temperatures sensible, and use stable setpoints rather than big swings.
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

