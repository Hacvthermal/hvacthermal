import Link from "next/link";

export const metadata = {
  title: "Boiler Not Working? Common Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Boiler stopped working? This UK guide covers the most common reasons your boiler won't fire up, simple fixes you can try, and when to call an engineer.",
};

export default function BoilerNotWorkingPage() {
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
            Boiler Not Working? Common Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler won’t fire up, the cause is often something simple like low system pressure,
            a tripped fuse, a thermostat/programmer setting, or a lockout that needs a reset. This UK
            guide covers the most common reasons a boiler stops working, safe checks you can do yourself,
            and when it’s time to call a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              First: Check if It’s Just Heating, Hot Water, or Both
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The fastest way to narrow it down is to see what’s affected. If you have no heating but
              hot water works, the issue may be controls, thermostat, motorised valve, or circulation.
              If you have neither, power, gas supply, pressure, or lockout becomes more likely.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Boiler Pressure Too Low (Sealed Systems)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many UK combi and system boilers are sealed systems and need adequate pressure to run.
              If pressure is below the safe cold range (often around 1–1.5 bar), the boiler may not fire.
              You may need to top up using the filling loop (follow your manual).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Power, Fused Spur, or Tripped Breaker
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Check the boiler’s fused spur (usually near the boiler) and your consumer unit for tripped
              breakers. If the boiler display is off, power is the first thing to confirm. If you suspect
              an electrical fault, stop and call an electrician or engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Thermostat or Programmer Settings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Schedules, incorrect time settings after a power cut, or a low thermostat setpoint can make
              it seem like the boiler isn’t working. Try setting the thermostat higher and switching the
              programmer to “on” or “override” to test.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 4: Boiler Lockout or Error Code
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boilers lock out to protect themselves after detecting faults (like ignition failure, flame
              detection problems, low pressure, or overheating). If it’s safe, you can try a single reset.
              If it locks out again, stop resetting and book an engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call a Gas Safe engineer if you smell gas, see repeated lockouts, suspect a leak, hear unusual
              noises, or if basic checks (pressure/power/controls) don’t restore operation. Don’t remove the
              boiler case or attempt internal repairs.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing the Boiler, Size It Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your boiler is repeatedly failing, replacement might be more cost-effective. Use our free
              calculator to estimate the right kW output range for your home.
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
              Why won’t my boiler fire up?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common causes include low pressure, a power issue, thermostat/programmer settings, or a lockout
              condition. Start with safe checks before calling an engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is low boiler pressure dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Low pressure usually isn’t dangerous; the boiler may shut down for protection. The underlying
              cause (like a leak) may need attention if pressure drops repeatedly.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I reset my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              You can try one reset if the boiler indicates lockout and there’s no sign of gas smell or leaks.
              If it locks out again, stop resetting and contact a Gas Safe engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why does my boiler keep switching off?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Repeated switching off can be caused by pressure issues, poor circulation, overheating, faulty
              sensors, or control problems. An engineer can diagnose if basic checks don’t help.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I replace my boiler instead of repairing?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If it’s old, repairs are frequent, or parts are costly, replacement can make sense—especially if
              efficiency and reliability are poor.
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

