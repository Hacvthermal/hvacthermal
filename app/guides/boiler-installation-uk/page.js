import Link from "next/link";

export const metadata = {
  title: "Boiler Installation UK: Costs, Process & What to Expect | HVACThermal",
  description:
    "Everything you need to know about boiler installation in the UK. Average costs, how long it takes, what's involved, and how to choose a Gas Safe engineer.",
};

export default function BoilerInstallationUkPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="HVACThermal Home">
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
            Boiler Installation UK: Costs, Process & What to Expect
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Installing a new boiler is one of the biggest home upgrades most UK households make. The
            final cost and timeline depend on the boiler type, whether you’re swapping like-for-like,
            and how much pipework and controls need changing. This guide explains typical installation
            costs, what happens on the day, how long it takes, and how to choose a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Average Boiler Installation Costs in the UK
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boiler installation quotes usually include the boiler, labour, standard controls,
              flushing/commissioning, and basic fittings. Costs increase if you need a conversion
              (e.g., regular to combi), relocation, new flue route, new pipework, a hot water cylinder,
              or radiator upgrades.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              The best way to compare quotes is to ask what’s included (controls, filter, flush type,
              warranty length, and whether any extras are “assumed” rather than itemised).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Long Does Boiler Installation Take?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A straightforward like-for-like replacement can often be completed in a day. Conversions
              and relocations can take longer because of pipework, cylinder work, and flue changes.
              Your installer should give you a clear schedule before starting.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              The Boiler Installation Process (Step by Step)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              While details vary, most UK installs follow a similar pattern.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Survey and sizing:</strong> Confirm boiler type, output, flue route, and controls.
              </li>
              <li>
                <strong>Isolation and draining:</strong> Shut down services and drain the system if required.
              </li>
              <li>
                <strong>Remove old boiler:</strong> Disconnect safely and remove the old unit.
              </li>
              <li>
                <strong>Fit new boiler and flue:</strong> Install to manufacturer instructions and regulations.
              </li>
              <li>
                <strong>Flush and filter:</strong> Clean the system and fit a magnetic filter where appropriate.
              </li>
              <li>
                <strong>Commissioning:</strong> Set gas/air ratio (if needed), check combustion, set controls.
              </li>
              <li>
                <strong>Handover:</strong> Explain controls, register warranty, provide paperwork.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Choosing a Gas Safe Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Gas boiler installation must be done by a Gas Safe registered engineer. Look for clear
              itemised quotes, proven experience with your boiler type, and a commissioning approach
              that includes system cleaning, correct control setup, and warranty registration.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Extras That Affect Price
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Boiler relocation</strong> and new flue route
              </li>
              <li>
                <strong>Conversion</strong> (regular ↔ system ↔ combi)
              </li>
              <li>
                <strong>New controls</strong> (smart thermostat, zoning, weather compensation)
              </li>
              <li>
                <strong>Radiator upgrades</strong> or pipework corrections
              </li>
              <li>
                <strong>Power flush</strong> vs chemical flush
              </li>
            </ul>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Size Your Boiler Before You Buy
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Correct sizing improves comfort and efficiency and can prevent short-cycling. Use our
              free calculator to estimate the right kW range before comparing models and quotes.
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
              How much does a boiler installation cost in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Costs vary by boiler type and complexity. Like-for-like swaps are usually cheaper than
              conversions, relocations, or installs needing new controls/cylinder/pipework.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How long will I be without heating or hot water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For many replacements, you’ll be without heating/hot water for part of a day. More complex
              work can take longer; your installer should explain the downtime upfront.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a power flush when installing a new boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not always, but system cleaning is important. Some homes need a power flush (heavy sludge),
              while others can be adequately cleaned with a chemical flush and filter.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a new boiler come with a warranty?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, most new boilers include a manufacturer warranty, often extended when installed by an
              approved installer and when controls/filters meet requirements.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I choose a Gas Safe engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Check Gas Safe registration, ask for itemised quotes, confirm what cleaning/commissioning is
              included, and compare warranty terms and aftercare.
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

