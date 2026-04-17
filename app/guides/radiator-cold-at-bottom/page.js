import Link from "next/link";

export const metadata = {
  title: "Radiator Cold at Bottom? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Radiator warm at top but cold at bottom? UK guide covering sludge buildup, blocked radiators, and how to fix a radiator cold at the bottom.",
};

export default function RadiatorColdAtBottomPage() {
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
            Radiator Cold at Bottom? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A radiator that’s warm at the top but cold at the bottom is usually a sign of sludge (magnetite)
            restricting flow inside the radiator. Unlike a cold top (often trapped air), a cold bottom often
            points to water-quality and circulation issues. This guide explains the causes and the common fixes
            used in UK homes.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Radiators Go Cold at the Bottom
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Sludge tends to settle at the lowest points in a system—radiator bottoms and low pipe runs. Over time
              it restricts flow and reduces heat transfer, leaving the bottom section cool.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Fix 1: Check Balancing and Valve Settings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Before assuming sludge, confirm the radiator valves are fully open (TRV/lockshield). Poor balancing can
              starve a radiator and make it feel underheated.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Fix 2: System Cleaning (Chemical Flush or Power Flush)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If multiple radiators have cold bottoms or the system water is black, system cleaning is often recommended.
              A chemical flush is lighter; a power flush is deeper. The right choice depends on severity and budget.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Fix 3: Magnetic Filter + Inhibitor
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A magnetic filter can capture ongoing debris and help protect pumps and the boiler heat exchanger. Inhibitor
              reduces corrosion and helps prevent sludge forming again after cleaning.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If several radiators are affected, the boiler is noisy, or heating performance is poor, an engineer can assess
              water quality and recommend the most cost-effective fix.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing the Boiler, Size It Properly
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your system needs major work (flush, filter, radiator replacements), you may also be considering a new boiler.
              Use our calculator to estimate the right kW output for your home.
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
              Why is my radiator cold at the bottom?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Most commonly due to sludge restricting flow and heat transfer in the lower section of the radiator.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will bleeding the radiator fix a cold bottom?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Bleeding helps with trapped air (usually cold at the top). Cold bottoms are usually sludge-related, so bleeding rarely solves it.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a power flush?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not always. If only one radiator is affected, targeted cleaning or replacement may be enough. If many are affected, a flush may be worthwhile.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can a magnetic filter help?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes—filters help capture circulating magnetite and can protect components, especially after cleaning.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If multiple radiators are affected, the boiler is noisy, or heating performance is poor, book an engineer to assess the system.
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

