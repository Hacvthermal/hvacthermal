import Link from "next/link";

export const metadata = {
  title: "Wet Underfloor Heating UK: Costs, Pros, Cons & Is It Worth It? | HVACThermal",
  description:
    "Thinking about wet underfloor heating in your UK home? Complete guide covering installation costs, running costs, compatibility with heat pumps, and pros and cons.",
};

export default function WetUnderfloorHeatingUkPage() {
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
            Wet Underfloor Heating UK: Costs, Pros, Cons & Is It Worth It?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Wet underfloor heating circulates warm water in pipes embedded in floors. It can be comfortable and efficient at low temperatures—especially with heat pumps—when insulation and design are right.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Even heat distribution, frees wall space, and pairs well with low-temperature heat sources when designed correctly.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cons
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Retrofit disruption, slower response than radiators, and higher upfront complexity in some homes.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Costs depend on area, screed, insulation upgrades, manifolds, controls, and integration with the heat source.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Heat Pump Compatibility
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Wet UFH is a strong match for heat pumps because it supports lower flow temperatures across large emitter area.</p>
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
              Is wet UFH worth it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often for new builds; retrofits depend on disruption tolerance and budget.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does UFH work with a combi?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes when designed correctly for flow temperature and output.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is UFH expensive to run?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Depends on insulation and source—well-insulated UFH can be efficient.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a heat pump for UFH?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No—but UFH commonly pairs well with heat pumps.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How long does installation take?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Varies from days to weeks depending on scope and drying times.
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
