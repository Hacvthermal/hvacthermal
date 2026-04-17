import Link from "next/link";

export const metadata = {
  title: "Boiler Keeps Switching Off? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Boiler keeps cutting out? UK guide covering all the reasons a boiler switches itself off, how to fix them, and when to call an engineer.",
};

export default function BoilerKeepsSwitchingOffPage() {
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
            Boiler Keeps Switching Off? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A boiler that keeps switching off (cutting out) can be caused by overheating, low pressure,
            ignition/flame issues, condensate problems, or controls behaving unexpectedly. Sometimes it’s
            normal “cycling”, but frequent short cycling or shutdowns often indicate a fault. This guide
            explains common UK causes, safe checks, and when to call an engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Normal Cycling vs a Fault
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boilers often cycle on and off to maintain temperature—especially in mild weather. Warning
              signs include frequent lockouts, error codes, loud noises, or heating/hot water not staying consistent.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Low Boiler Pressure
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              On sealed systems, low pressure can trigger protective shutdowns. Check the gauge when cold and
              top up via the filling loop if needed (follow your manual). If pressure keeps dropping, suspect a leak or PRV discharge.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Overheating or Poor Circulation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Sludge, airlocks, a stuck pump, or closed valves can reduce circulation. The boiler may overheat and shut down.
              If radiators have cold spots or the boiler is noisy, circulation issues become more likely.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Frozen/Blocked Condensate Pipe (Cold Weather)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Condensing boilers produce condensate. In freezing weather, external condensate runs can freeze,
              causing the boiler to stop. If it fails mainly during cold snaps, investigate condensate routing and protection.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 4: Controls and Thermostat Issues
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Incorrect schedules, thermostat misconfiguration, or smart control dropouts can appear as the boiler “switching off”.
              Try a manual override and confirm the correct time/program settings.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call an engineer if there are repeated lockouts, overheating symptoms, error codes, or you can’t
              restore normal operation with basic checks. Don’t keep resetting a boiler that repeatedly locks out.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You Replace the Boiler, Get the kW Output Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Short cycling can also happen with poorly sized boilers. Use our calculator to estimate the kW output your home needs before choosing a replacement.
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
              Why does my boiler keep turning itself off?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Causes include low pressure, overheating from poor circulation, condensate issues, ignition problems, or control settings.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is boiler cycling normal?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some cycling is normal, especially in mild weather. Frequent short bursts with poor comfort can indicate short cycling or a fault.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Could low pressure cause it to cut out?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Many boilers shut down below minimum pressure. If it keeps dropping, investigate the cause rather than repeatedly topping up.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I do if it shows an error code?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Note the code and check the manual for safe steps. If it returns after a reset, book an engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If basic checks don’t help, or the boiler repeatedly locks out/cuts out, arrange a professional diagnosis.
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

