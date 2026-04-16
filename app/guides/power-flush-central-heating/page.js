import Link from "next/link";

export const metadata = {
  title: "Power Flush Central Heating UK: Cost, Process & Is It Worth It? | HVACThermal",
  description:
    "What is a power flush and do you need one? UK guide covering costs, what's involved, signs your system needs flushing, and alternatives.",
};

export default function PowerFlushCentralHeatingPage() {
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
            Power Flush Central Heating UK: Cost, Process & Is It Worth It?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A power flush is a deep clean of your central heating system to remove sludge (magnetite),
            debris, and scale. It can improve radiator performance, reduce noise, and protect components
            like pumps and heat exchangers—but it’s not always necessary. This guide explains what a power
            flush is, typical UK costs, how it works, the signs you might need one, and alternatives.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a Power Flush?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A power flush uses a specialist pump to circulate cleaning chemicals and water at high
              velocity through radiators and pipework, dislodging sludge and debris so it can be flushed out.
              After flushing, the system is refilled and treated with inhibitor.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Typical UK Power Flush Cost
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Cost depends on system size, radiator count, access, and how contaminated the system is.
              Quotes can also vary based on whether a magnetic filter is fitted afterwards and whether
              problem radiators need extra work.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Signs Your System Might Need Flushing
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Cold spots:</strong> Radiators cold at the bottom.
              </li>
              <li>
                <strong>Frequent bleeding:</strong> Air and debris issues.
              </li>
              <li>
                <strong>Noisy boiler or pump:</strong> Circulation problems.
              </li>
              <li>
                <strong>Dirty water:</strong> Black water when draining/bleeding.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Alternatives to a Full Power Flush
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Not every system needs a full power flush. Alternatives include a chemical flush, cleaning
              a magnetic filter, replacing a single blocked radiator, or draining and refilling with inhibitor.
              A good engineer will explain why they recommend a flush and what problem it solves.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Is It Worth It?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              It’s most worth it when there is clear evidence of sludge-related performance problems or when
              installing a new boiler on a dirty system. A clean system protects the boiler and can improve
              comfort across the home.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Installing a New Boiler? Check kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you’re flushing as part of a boiler replacement, make sure the new boiler is sized correctly
              for your home before you buy.
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
              How long does a power flush take?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on system size and contamination. Many take several hours; larger or heavily sludged
              systems can take longer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a power flush fix cold radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the cause is sludge restricting flow, it often helps. If the cause is balancing, trapped air,
              or valve issues, those need separate fixes.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a power flush for a new boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not always, but system cleaning is important. Some installers require evidence of cleaning and a
              filter to protect the boiler and warranty.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is a power flush messy?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A competent engineer should protect surfaces and manage water carefully. It can involve draining
              dirty water, so precautions matter.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I do after a power flush?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ensure inhibitor is added, consider fitting a magnetic filter, and keep an eye on pressure and
              radiator performance over the following weeks.
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

