import Link from "next/link";

export const metadata = {
  title: "How to Save Money on Heating Bills: UK Guide 2026 | HVACThermal",
  description:
    "Simple and effective ways to reduce your heating bills in the UK. Covers boiler settings, insulation, smart thermostats, and government grants.",
};

export default function HowToSaveMoneyOnHeatingBillsPage() {
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
            How to Save Money on Heating Bills
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Heating bills can feel painful in winter, but many of the best savings
            come from simple changes: better boiler settings, smarter controls,
            and low-cost insulation improvements. This UK guide covers practical,
            high-impact ways to reduce heating costs, plus a quick overview of
            grants and schemes that can help with upgrades.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Optimise Boiler Flow Temperature
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              For condensing boilers, lower flow temperatures can improve efficiency
              by keeping the boiler in condensing mode. Many UK homes can run at a
              lower flow temperature (especially in mild weather) while staying
              comfortable. If radiators struggle to heat rooms, increase gradually.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Use Smart Controls (or Use Your Existing Controls Better)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Set realistic schedules:</strong> Heat only when you need it,
                and avoid leaving heating on all day if rooms are empty.
              </li>
              <li>
                <strong>Use TRVs:</strong> Lower unused rooms and keep living areas
                comfortable.
              </li>
              <li>
                <strong>Reduce the setpoint slightly:</strong> Even a small reduction
                can cut costs without making the home uncomfortable.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Improve Insulation and Draught Proofing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The cheapest heat is the heat you don&apos;t lose. Loft insulation,
              draught proofing, thick curtains, and sealing gaps around doors and
              windows can make a noticeable difference. If your home has uninsulated
              cavities or older glazing, larger upgrades can provide bigger savings.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Maintain Your Heating System
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A well-maintained boiler and clean heating system can run more
              efficiently. Annual servicing helps catch issues early, while system
              water treatment (inhibitor) and filters can reduce sludge problems that
              limit circulation.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Check Help Available: Grants and Schemes
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Depending on eligibility, UK households may be able to access support
              for insulation and heating upgrades. Schemes can change over time, so
              it&apos;s worth checking current criteria and approved installers before
              committing to work.
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
              Oversized boilers can short-cycle and run less efficiently. Our boiler
              size calculator recommends a sensible kW range based on your home and
              hot water demand—use it before you compare quotes or plan an upgrade.
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
              What&apos;s the quickest way to reduce heating bills?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Start with controls and settings: set a sensible schedule, reduce the
              thermostat slightly, and make sure rooms aren&apos;t being overheated.
              Draught proofing also provides fast wins.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Does lowering boiler flow temperature save money?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can, especially for condensing boilers, because lower flow temps
              can improve efficiency. The right setting depends on your radiators
              and heat loss—adjust gradually and monitor comfort.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Are smart thermostats worth it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can be if they help you heat less without sacrificing comfort
              (better scheduling, remote control, optimisation). Savings depend on
              how you use them and your home&apos;s insulation.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What insulation upgrades give the best return?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Loft insulation and draught proofing are often high value. Cavity wall
              insulation can also help if your property is suitable. Larger upgrades
              like windows can improve comfort but cost more.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can boiler servicing reduce heating costs?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Servicing helps keep the boiler running safely and can prevent issues
              that increase gas use. It also reduces the risk of breakdowns and may
              be required to keep warranties valid.
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
