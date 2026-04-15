import Link from "next/link";

export const metadata = {
  title: "Boiler Error Codes Explained: UK Guide 2026 | HVACThermal",
  description:
    "What do boiler error codes mean? Complete UK guide covering the most common fault codes for Worcester Bosch, Vaillant, Baxi, and more.",
};

export default function BoilerErrorCodesPage() {
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
            Boiler Error Codes Explained
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler error codes are a quick way for your boiler to tell you what
            it thinks is wrong—anything from low system pressure and ignition
            failures to fan/flue issues. While the exact codes vary by brand
            (Worcester Bosch, Vaillant, Baxi, Ideal and others), many causes and
            first checks are similar across UK boilers. This guide explains what
            boiler error codes usually mean, what you can safely check yourself,
            and when to call a Gas Safe registered engineer.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What an Error Code Is (and What It Isn&apos;t)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              An error code points to a fault the boiler has detected—often a
              sensor reading outside expected limits, a safety shutdown, or a
              failure to ignite. It doesn&apos;t always identify the exact part
              that needs replacing; it&apos;s a starting point for diagnosis.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              The Most Common Causes Behind Boiler Fault Codes
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Low boiler pressure:</strong> Often after bleeding
                radiators or due to a small leak.
              </li>
              <li>
                <strong>Ignition or flame failure:</strong> Can be caused by gas
                supply issues, ignition components, or sensor faults.
              </li>
              <li>
                <strong>Fan or flue issues:</strong> The boiler may shut down if
                it can&apos;t confirm safe ventilation.
              </li>
              <li>
                <strong>Overheating:</strong> Poor circulation, blocked filters,
                pump issues, or scale/sludge can trigger overheat protection.
              </li>
              <li>
                <strong>Water flow/temperature sensors:</strong> Faulty sensors
                can produce codes even if the boiler seems to run.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Safe First Checks Before You Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              These checks are safe for homeowners and can resolve common issues.
              Don&apos;t remove the boiler casing or touch gas components.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Check system pressure:</strong> When cold, many sealed
                systems should be around 1–1.5 bar. If it&apos;s low, you may need
                to top up via the filling loop.
              </li>
              <li>
                <strong>Reset once:</strong> Many boilers have a reset button.
                If the fault was temporary, a single reset can help.
              </li>
              <li>
                <strong>Check the thermostat/programmer:</strong> Make sure it&apos;s
                calling for heat and that timers are correct.
              </li>
              <li>
                <strong>Check obvious leaks:</strong> Radiator valves, pipework,
                and the boiler area for drips/damp.
              </li>
              <li>
                <strong>Check condensate pipe (cold weather):</strong> In winter,
                frozen condensate can cause lockouts on condensing boilers.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Brand Notes (Worcester Bosch, Vaillant, Baxi and More)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Each brand uses its own code format, so the quickest way to get a
              precise meaning is to check your boiler manual or the
              manufacturer&apos;s website for your exact model. If you share the
              code with an engineer, they can often narrow down likely causes
              quickly—especially if you also provide the boiler model, age, and
              any symptoms (pressure drops, noises, no hot water, etc.).
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              When You Should Call a Gas Safe Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call a Gas Safe engineer if the error code returns after a reset,
              if the boiler won&apos;t maintain pressure, if there are signs of a
              leak, if the boiler is overheating, or if the fault relates to the
              flue/fan/combustion side. If you smell gas, follow official gas
              safety advice immediately.
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
              If you&apos;re troubleshooting frequent faults and considering a new
              boiler, sizing is key. Our boiler size calculator recommends a
              sensible kW range based on your home and hot water demand—ideal
              for comparing quotes.
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
              Can I ignore a boiler error code if it clears itself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If it was a one-off and the boiler runs normally afterwards, it
              may have been temporary. If the same code returns, it&apos;s best to
              investigate—recurring lockouts often get worse over time.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What&apos;s the most common boiler error in UK homes?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Low system pressure is one of the most common causes behind
              lockouts and codes, especially after radiator bleeding or where
              there&apos;s a small leak.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is it safe to reset my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Generally yes—resetting once is a normal step. Avoid repeated
              resets if the boiler keeps faulting, as you could be bypassing a
              safety shutdown that needs an engineer.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do error codes mean the boiler needs replacing?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not necessarily. Many codes relate to serviceable parts or simple
              issues (pressure, sensors, blocked components). Replacement is
              usually considered when faults are frequent, repairs are costly,
              and the boiler is older.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What information should I give an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Share the exact error code, boiler make/model, any symptoms (no hot
              water, pressure loss, noises), and when it happens (heating vs hot
              water). A photo of the display can also help.
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
