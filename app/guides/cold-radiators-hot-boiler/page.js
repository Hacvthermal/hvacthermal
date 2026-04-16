import Link from "next/link";

export const metadata = {
  title: "Cold Radiators but Boiler Working? Causes & Fixes UK | HVACThermal",
  description:
    "Boiler firing but radiators cold? UK guide covering all the common causes including airlocks, sludge, pump failure, and how to fix each one.",
};

export default function ColdRadiatorsHotBoilerPage() {
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
            Cold Radiators but Boiler Working? Causes & Fixes UK
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If the boiler is firing but your radiators stay cold, the issue is usually circulation or
            controls rather than the boiler “not working”. The fix depends on whether some radiators get warm,
            whether hot water works, and whether you have TRVs and motorised valves. This guide covers the most
            common UK causes and what you can safely check.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Quick Checks to Narrow It Down
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Are any radiators warm?</strong> If only a few are cold, it may be balancing or TRVs.
              </li>
              <li>
                <strong>Is hot water working?</strong> If yes, boiler may be fine and the issue is heating-side.
              </li>
              <li>
                <strong>Is the thermostat calling for heat?</strong> Increase the setpoint and check schedules.
              </li>
              <li>
                <strong>Check boiler pressure:</strong> Low pressure can stop circulation on sealed systems.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Air in Radiators or Airlock
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Trapped air reduces heat transfer and can prevent circulation. If radiators are cold at the top
              but warmer at the bottom, bleeding may help. After bleeding, recheck pressure on sealed systems.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Sludge Restricting Flow
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Sludge tends to settle at the bottom of radiators, causing cold lower sections and poor circulation.
              A chemical flush, targeted radiator clean, or a full power flush may be recommended depending on severity.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Pump or Valve Problems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the boiler fires but water isn’t being pushed around the system, a pump fault can be the cause.
              On some systems, a stuck motorised valve can also prevent heat reaching radiators. These typically
              require an engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 4: TRVs or Balancing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              TRVs can stick after summer, and poor balancing can starve radiators further from the boiler.
              If a single radiator stays cold, check the TRV is open and not stuck (without forcing anything).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If pressure keeps dropping, multiple radiators stay cold after bleeding, or you suspect pump/valve
              issues, call a heating engineer. Don’t keep resetting the boiler if it locks out.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You Replace the Boiler, Get the Output Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your heating system needs major work, you may also be considering a new boiler. Use our calculator
              to estimate the right kW output for your home.
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
              Why are my radiators cold but the boiler is on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The most common reasons are trapped air, sludge, a circulation pump issue, a stuck valve, or a control
              setting that isn’t calling for heat correctly.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I bleed the radiators first?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If radiators are cold at the top, bleeding is a sensible first step. Always check pressure afterwards
              on sealed systems.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can low pressure cause cold radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Many sealed systems won’t circulate properly below a minimum pressure threshold.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a power flush fix it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If sludge is the cause, it can help. If the issue is balancing, valves, or a pump, those need different fixes.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call a professional?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If multiple radiators stay cold after basic checks, or you suspect pump/valve faults, book an engineer.
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

