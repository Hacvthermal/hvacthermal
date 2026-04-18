import Link from "next/link";

export const metadata = {
  title: "Hive Thermostat Review UK 2026: Pros, Cons & Costs | HVACThermal",
  description:
    "Is the Hive thermostat worth it in the UK? Our honest review covers costs, installation, energy savings, compatibility, and how Hive compares to Nest.",
};

export default function HiveThermostatReviewUkPage() {
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
            Hive Thermostat Review UK 2026: Pros, Cons & Costs
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Hive Active Heating is a popular UK smart thermostat, often associated with British Gas. This 2026 review covers pros and cons, typical costs, installation, realistic savings, compatibility with combi and system boilers, and how Hive compares to Nest.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Hive Offers
            </h2>
            <p className="mt-4 text-slate-600 leading-7">App control, schedules, optional radiator thermostats, and ecosystem features. Compatibility depends on your boiler and wiring—verify before purchase.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs and Installation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Budget for hardware and professional installation if you are not confident with mains wiring. Some installs need extra modules depending on the heating system.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Energy Savings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Savings come from better schedules and avoiding overheating. Pair with TRVs and sensible setpoints for best results in 2026.</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Hive vs Nest
            </h2>
            <p className="mt-4 text-slate-600 leading-7">Hive suits Hive-centric and some British Gas customers; Nest suits Google Home users. Compare total cost, features, and installer familiarity.</p>
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
              Is Hive worth it in 2026?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes for straightforward UK installs. Compare subscription features if applicable.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does Hive work with combi boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Frequently yes when compatible—check Hive and boiler documentation.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need professional installation?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Recommended for safety if wiring is unfamiliar.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will Hive slash my bills?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Expect modest gains unless schedules and insulation improve.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How does Hive compare to Nest?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ecosystem and wiring compatibility usually decide—both are widely used.
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
