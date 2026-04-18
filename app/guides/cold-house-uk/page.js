import Link from "next/link";

export const metadata = {
  title: "Cold House? How to Heat Your Home More Efficiently UK 2026 | HVACThermal",
  description:
    "Is your home always cold? UK guide covering the most common reasons and practical fixes including insulation, heating controls, and boiler issues.",
};

export default function ColdHouseUkPage() {
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
            Cold House? How to Heat Your Home More Efficiently UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Persistent cold rooms usually combine heat loss, poor controls, circulation issues, or undersized heat emitters. This 2026 UK guide prioritises practical fixes in the right order.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Insulation and Draughts
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Loft and wall insulation, curtains, and draught proofing often deliver the biggest comfort gains per pound.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Controls and Setpoints
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Check schedules, TRVs, balancing, and thermostat placement. Avoid heating unused spaces excessively.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Boiler and System Health
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Low pressure, sludge, airlocks, and pump issues reduce heat delivery—service and cleaning may help.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Emitter Sizing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">If radiators are undersized for the room heat loss, the house can feel cold even when the boiler runs.</p>
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
              Why is my house always cold?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often insulation, controls, balancing, or emitter sizing.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I turn the boiler temperature up?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Higher flow temperatures can help short term but reduce efficiency on condensing boilers—fix root causes too.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need bigger radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes—especially after insulation upgrades or with heat pumps.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is a bigger boiler the answer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not usually—oversizing can worsen cycling.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I do first in 2026?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Draught proofing, loft insulation review, then heating system checks.
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
