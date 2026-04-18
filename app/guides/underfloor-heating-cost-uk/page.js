import Link from "next/link";

export const metadata = {
  title: "Underfloor Heating Cost UK 2026: Installation & Running Costs | HVACThermal",
  description:
    "How much does underfloor heating cost in the UK? Complete 2026 guide covering wet and electric UFH installation costs, running costs, and whether it is worth it.",
};

export default function UnderfloorHeatingCostUkPage() {
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
            Underfloor Heating Cost UK 2026: Installation & Running Costs
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Underfloor heating can be wet (piped) or electric (mats/cables). This 2026 UK guide explains what drives installation and running costs, and when UFH is worth the investment.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Wet vs Electric
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Wet UFH suits new builds or major refurbishments with screed. Electric UFH suits small zones but whole-house electric running costs can be high if poorly insulated.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Installation Cost Drivers
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Floor area, insulation upgrades, screed, manifold location, controls, and heat source suitability all affect quotes.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Running Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Running cost depends on fuel or electricity prices, insulation, and flow/operating temperature. Low-temperature operation pairs well with heat pumps when designed correctly.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Is UFH Worth It?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">UFH improves comfort and frees wall space. Retrofits can be disruptive—compare against upgrading radiators and controls.</p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free boiler size calculator uses your property details,
              radiator count, insulation and hot water needs to recommend a
              suitable kW range. No sign-up required—get results in seconds.
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
              How much does UFH cost UK 2026?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Costs vary widely—always get itemised quotes for your floor type and heat source.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is wet UFH cheaper to run than electric?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often for whole-house heating, but design and insulation matter most.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does UFH work with a combi?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Wet UFH can work with a combi when designed with correct flow temperatures and output.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does UFH work with heat pumps?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes—UFH is a good match for low-temperature heat pump operation when insulated.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will UFH heat a room quickly?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              UFH is slower to respond than radiators; plan schedules accordingly.
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
              <Link href="/#calculators" className="hover:text-slate-900">Calculators</Link>
              <Link href="/calculator/boiler-size-calculator" className="hover:text-slate-900">Boiler Calculator</Link>
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
