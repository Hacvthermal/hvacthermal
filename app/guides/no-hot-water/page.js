import Link from "next/link";

export const metadata = {
  title: "No Hot Water? Common Causes & Fixes UK 2026 | HVACThermal",
  description:
    "No hot water from your boiler? Find out the most common UK causes, what you can check yourself, and when you need a Gas Safe engineer.",
};

export default function NoHotWaterPage() {
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
            No Hot Water? Common Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            No hot water is one of the most frustrating boiler problems—especially in winter. The cause
            depends on your system type: combi boilers heat water on demand, while system and regular
            boilers usually use a hot water cylinder and controls. This guide covers the most common UK
            causes, safe checks you can do yourself, and when you need a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step 1: Identify Your System Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you have a combi boiler, hot water issues often relate to boiler settings, pressure,
              flow rate, or internal components. If you have a cylinder (system/regular), the issue could
              be the programmer, cylinder thermostat, motorised valve, or immersion heater.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Programmer or Hot Water Schedule (Cylinder Systems)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Check the programmer is set to provide hot water and the time is correct (power cuts can
              reset clocks). If the schedule is off, the cylinder may simply be cold.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Boiler Pressure Too Low (Sealed Systems)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Low pressure can prevent a boiler from operating correctly. Check the pressure gauge when
              the system is cold; many UK sealed systems target around 1–1.5 bar. If it’s low, topping up
              via the filling loop may restore hot water.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Flow Rate Too High (Combi)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If hot water goes lukewarm, your tap flow may be too high for the boiler to heat it properly.
              Try reducing the flow at the tap. If it improves, it may be a flow/temperature rise issue.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 4: Lockout or Error Code
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the boiler is in lockout, it may stop producing hot water. You can try one reset if
              it’s safe and there are no signs of gas smell or leaks. If it returns to lockout, book an engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call a Gas Safe Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call an engineer if the boiler repeatedly locks out, you can’t restore pressure (or pressure
              keeps dropping), you suspect a leak, or hot water is inconsistent despite basic checks. Never
              remove the boiler case or attempt internal repairs yourself.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Upgrading Your Boiler? Get the kW Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Hot water performance (especially for combis) is closely linked to boiler output and your
              household demand. Use our calculator to estimate a suitable kW range.
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
              Why do I have heating but no hot water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              On cylinder systems, it’s often a programmer/hot water setting, cylinder thermostat, or
              a motorised valve issue. On combis, it can be a diverter valve or hot water flow/temperature problem.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why do I have hot water but no heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              That’s commonly a thermostat/programmer issue or a heating-side component issue (like a valve or pump).
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Could low pressure cause no hot water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes on many sealed systems. If pressure is below the minimum threshold, the boiler may refuse to operate.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is it safe to reset the boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s usually safe to try one reset if there’s no gas smell or visible leak. Repeated lockouts
              indicate a fault that needs professional diagnosis.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If basic checks don’t restore hot water, pressure keeps dropping, or you see repeated lockouts,
              call a Gas Safe engineer.
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

