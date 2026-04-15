import Link from "next/link";

export const metadata = {
  title: "How to Improve Home Energy Efficiency UK: 2026 Guide | HVACThermal",
  description:
    "Practical ways to make your home more energy efficient in the UK. Covers insulation, heating controls, grants, and quick wins to cut bills.",
};

export default function HomeEnergyEfficiencyUKPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label="HVACThermal Home"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#1E3A5F" }}
              aria-hidden="true"
            >
              <span className="text-sm font-bold text-white">HT</span>
            </span>
            <span className="text-lg" style={{ color: "#1E3A5F" }}>
              HVACThermal
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link
              href="/#calculators"
              className="text-slate-700 hover:text-slate-900"
            >
              Calculators
            </Link>
            <Link
              href="/guides"
              className="text-slate-700 hover:text-slate-900"
            >
              Guides
            </Link>
            <Link
              href="/#features"
              className="text-slate-700 hover:text-slate-900"
            >
              Features
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-slate-900">
              About
            </Link>
            <a
              href="mailto:support@hvacthermal.com"
              className="text-slate-700 hover:text-slate-900"
            >
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
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "#1E3A5F" }}
          >
            How to Improve Home Energy Efficiency UK
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Improving energy efficiency is one of the best ways to cut bills and
            make your home more comfortable. In the UK, the biggest wins usually
            come from reducing heat loss (insulation and draught proofing) and
            improving how you control heat (thermostats, TRVs, and better boiler
            settings). This guide covers practical upgrades, quick wins, and where
            to look for support and grants.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Start With Insulation (Highest Impact)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If your home leaks heat, you have to pay to replace it. Loft
              insulation, cavity wall insulation (where suitable), and sealing
              obvious draughts can reduce heat loss dramatically and improve comfort
              quickly.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Upgrade Heating Controls
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Use schedules:</strong> Heat rooms when you need them, not
                all day by default.
              </li>
              <li>
                <strong>Use TRVs:</strong> Lower temperatures in unused rooms.
              </li>
              <li>
                <strong>Consider smart controls:</strong> If they help you avoid
                overheating and improve scheduling.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Optimise Boiler and Heating Settings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many homes run boilers hotter than necessary. For condensing boilers,
              lowering the flow temperature can improve efficiency when radiators
              can still keep rooms warm. Keeping the system clean (filters,
              inhibitor) and servicing annually also helps performance.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Windows, Doors and Draught Proofing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Draughts make homes feel colder than the thermostat suggests. Simple
              fixes like door seals, letterbox brushes and curtain linings can
              improve comfort. Double or triple glazing can help, but it&apos;s often
              a bigger investment—prioritise insulation first if budgets are tight.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Grants and Support in the UK
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Depending on your situation, you may be eligible for support with
              insulation and heating upgrades. Schemes change over time, so check
              current criteria and approved installers before committing.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3
              className="text-xl font-bold"
              style={{ color: "#1E3A5F" }}
            >
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you&apos;re improving efficiency and considering a boiler upgrade,
              the right size is crucial. Our boiler size calculator recommends a
              sensible kW range based on your home and hot water needs.
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
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Frequently Asked Questions
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What are the best energy efficiency upgrades for a UK home?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Loft insulation, draught proofing and better heating controls are
              often top value. If suitable, cavity wall insulation can be another
              big win.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I focus on insulation or a new boiler first?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Insulation usually comes first because it reduces heat demand and
              makes any heating system cheaper to run. If your boiler is failing,
              you may need to replace sooner, but don&apos;t skip insulation long-term.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do smart thermostats really save money?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can if they reduce heating time and prevent overheating. Savings
              depend on how you use them and how insulated your home is.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is lowering boiler flow temperature worth it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes for condensing boilers, because it can improve efficiency.
              The best setting depends on your radiator sizing and heat loss.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Where can I find grants for home energy upgrades?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Eligibility varies and schemes change over time. Check current UK
              government and local authority guidance and use approved installers
              where required.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1E3A5F" }}
              >
                <span className="text-sm font-bold text-white">HT</span>
              </span>
              HVACThermal
            </Link>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/#calculators" className="hover:text-slate-900">
                Calculators
              </Link>
              <Link
                href="/calculator/boiler-size-calculator"
                className="hover:text-slate-900"
              >
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
