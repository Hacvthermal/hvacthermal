import Link from "next/link";

export const metadata = {
  title: "Magnetic Filter for Boilers UK: Do You Need One? 2026 | HVACThermal",
  description:
    "What is a magnetic filter and should you fit one to your boiler? UK guide covering how they work, costs, benefits, and the best brands.",
};

export default function MagneticFilterBoilerPage() {
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
            Magnetic Filter for Boilers UK: Do You Need One? 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Magnetic filters capture magnetite sludge (fine black iron oxide) that forms in many central
            heating systems over time. Fitting a filter can improve reliability, protect pumps and heat
            exchangers, and reduce radiator cold spots. This guide explains how magnetic filters work, the
            benefits, typical costs, and what to look for when choosing a brand.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a Magnetic Filter?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A magnetic filter is installed on the heating return pipe and uses strong magnets to catch
              iron-based debris circulating in the system. Many filters also have a mesh to catch non-magnetic
              particles.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Benefits of Fitting One
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Protects the boiler:</strong> Reduces debris reaching the heat exchanger.
              </li>
              <li>
                <strong>Improves circulation:</strong> Less sludge means better radiator performance.
              </li>
              <li>
                <strong>Supports longevity:</strong> Helps protect pumps and valves.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Typical UK Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Cost depends on the filter model and installation access. The best value is often fitting a
              filter during a boiler replacement, system flush, or other plumbing work.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Maintenance: Cleaning the Filter
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Filters need periodic cleaning—often during a boiler service. If a filter is neglected it can
              reduce flow and cause heating performance issues.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Upgrading Your Boiler? Check the kW Range
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Filters are often fitted with new boilers to protect performance. Before choosing a boiler,
              estimate the kW output your home needs.
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
              Do I really need a magnetic filter?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many UK systems benefit, especially older systems or where sludge is present. It’s a relatively
              low-cost protection measure.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will it fix cold radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A filter helps prevent sludge build-up and can improve performance over time, but badly blocked
              radiators may need flushing or replacement.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How often should a magnetic filter be cleaned?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Commonly at annual service, and sometimes more often after installation if the system is very dirty.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I fit one myself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It requires draining/heating pipework work. Many homeowners use a heating engineer or plumber to fit it correctly.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does a filter help protect boiler warranty?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some manufacturers and installers strongly recommend filters and system cleaning. Keeping the system clean supports reliability and reduces warranty disputes.
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

