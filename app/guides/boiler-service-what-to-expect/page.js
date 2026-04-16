import Link from "next/link";

export const metadata = {
  title: "Boiler Service: What to Expect on the Day UK 2026 | HVACThermal",
  description:
    "What actually happens during a boiler service? UK guide covering exactly what the engineer checks, how long it takes, and what to do if a fault is found.",
};

export default function BoilerServiceWhatToExpectPage() {
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
            Boiler Service: What to Expect on the Day UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A boiler service should be a structured safety and performance check, not just a quick look at
            the display. Knowing what to expect helps you spot a thorough job and understand what the engineer
            is checking. This guide explains what typically happens during a UK boiler service, how long it
            takes, and what to do if the engineer finds a fault.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Before the Engineer Arrives: Quick Prep
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Access:</strong> Clear space around the boiler and any cylinder/controls.
              </li>
              <li>
                <strong>Paperwork:</strong> Have the last service record and boiler manual if possible.
              </li>
              <li>
                <strong>Tell them symptoms:</strong> Noises, pressure drops, hot water issues, radiator cold spots.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Gets Checked During a Service
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Exact steps vary by boiler and manufacturer instructions, but typical checks include visual inspection,
              basic safety and combustion checks, checking pressure/expansion behaviour, flue condition, and key component
              inspection/cleaning where appropriate.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Flue and ventilation:</strong> Condition, integrity, and safe termination.
              </li>
              <li>
                <strong>Gas safety:</strong> Leak checks and safe operation checks.
              </li>
              <li>
                <strong>Combustion:</strong> Analysis and adjustments where required by the model.
              </li>
              <li>
                <strong>System pressure:</strong> For sealed systems, confirming correct range.
              </li>
              <li>
                <strong>Condensate:</strong> Drain condition and potential freezing risk points.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Long Does It Take?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many services take around 30–60 minutes, but complex systems, access issues, or additional cleaning can
              take longer. If the engineer finds faults, diagnosis and repair time is separate.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What If a Fault Is Found?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Minor issues might be fixed immediately if parts are available, but some repairs require a follow-up.
              If the boiler is deemed unsafe, the engineer may label it and advise next steps.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing Your Boiler, Size It Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your engineer flags major faults or poor efficiency, a replacement might be next. Use our calculator
              to estimate the kW output your home needs.
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
              Is a boiler service the same as a boiler repair?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. A service is a routine check and maintenance. A repair is fault-finding and fixing a specific issue.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a service every year?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Annual servicing is common advice for safety and reliability, and it can support warranty requirements.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will the engineer clean the boiler during a service?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some components may be cleaned depending on model and condition. The service should follow manufacturer guidance.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I turn the heating on during the appointment?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The engineer will usually run the boiler as part of checks. You can mention any symptoms you’ve noticed under load.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What paperwork should I get?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              You should receive a service record/invoice and any test results or advisories the engineer provides.
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

