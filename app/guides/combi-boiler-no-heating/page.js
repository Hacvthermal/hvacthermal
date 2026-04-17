import Link from "next/link";

export const metadata = {
  title: "Combi Boiler No Heating? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Combi boiler producing hot water but no heating? UK guide covering all common causes, simple checks, and when to call a Gas Safe engineer.",
};

export default function CombiBoilerNoHeatingPage() {
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
            Combi Boiler No Heating? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your combi boiler gives hot water but your radiators stay cold, the boiler can usually fire
            and the issue is often controls or heating-side circulation. This guide covers the most common UK
            causes, safe checks you can do, and when to call a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              First: Confirm the Boiler Is Actually Being Asked to Heat
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Turn the room thermostat up and check the programmer/schedule is set to heating “on”. After a power
              cut, clocks and schedules can be wrong. If you have smart controls, try a manual override.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Diverter Valve Problems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Combi boilers use a diverter valve to send heat either to hot water or the heating circuit. If the
              valve sticks on hot water, radiators may not warm up. This usually needs an engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Low System Pressure (Sealed Systems)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many combi boilers are sealed systems. If pressure is too low, the boiler may protect itself and
              restrict heating. Check the gauge when cold and top up via the filling loop if needed (follow your manual).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Pump, Airlocks, or Poor Circulation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the boiler fires but heat isn’t circulating, the pump could be stuck/failing or there may be air in the
              system. If radiators are cold at the top, bleeding may help. Persistent circulation problems need diagnosis.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 4: TRVs, Balancing, or a Single Cold Radiator
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If only some radiators are cold, it may be TRVs stuck closed, poor balancing, or sludge restricting flow.
              Try opening TRVs and checking the lockshield positions (mark settings before changes).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call a Gas Safe Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If safe checks don’t help, the diverter valve, pump, sensors, or internal controls may need repair.
              Don’t remove the boiler case or attempt internal fixes.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Upgrading Your Combi? Check the kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If heating problems are frequent and the boiler is aging, replacement might make sense. Use our calculator to estimate the right kW range for your home.
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
              Why do I have hot water but no heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common causes include heating controls not calling for heat, diverter valve faults, low pressure, or circulation problems.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can low pressure stop heating but not hot water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can. Some boilers behave differently across modes, but low pressure often triggers protective shutdowns that affect heating.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Could it just be the thermostat?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Incorrect schedules, flat batteries, mis-pairing, or a low setpoint can all prevent heating demand.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I bleed radiators if heating isn’t working?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If radiators have cold tops, bleeding may help. Always recheck boiler pressure afterwards on sealed systems.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If safe checks don’t restore heating, or the boiler shows recurring error codes/lockouts, book a Gas Safe engineer.
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

