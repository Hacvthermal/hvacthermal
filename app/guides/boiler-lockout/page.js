import Link from "next/link";

export const metadata = {
  title: "Boiler Lockout: What It Means & How to Fix It UK 2026 | HVACThermal",
  description:
    "Boiler gone into lockout? Find out what causes boiler lockout in UK homes, how to reset it safely, and when the problem needs a professional.",
};

export default function BoilerLockoutPage() {
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
            Boiler Lockout: What It Means & How to Fix It UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler lockout is a safety feature. When the boiler detects a fault condition, it shuts
            down to protect you and the appliance. In some cases a lockout is caused by something simple
            (like low pressure), but repeated lockouts usually indicate a fault that needs professional
            diagnosis. This guide explains what lockout means, safe checks you can do, and when to call
            a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Causes Boiler Lockout?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Ignition failure:</strong> The boiler can’t light or detect a flame.
              </li>
              <li>
                <strong>Low system pressure:</strong> Common on sealed systems.
              </li>
              <li>
                <strong>Overheating:</strong> Often linked to circulation issues, sludge, or pump problems.
              </li>
              <li>
                <strong>Flue/air pressure safety checks:</strong> The boiler detects unsafe flue conditions.
              </li>
              <li>
                <strong>Sensor faults:</strong> Temperature/pressure sensors may read out of range.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Safe Checks You Can Try
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Start with the basics: confirm power, check the thermostat/programmer demand, and check system
              pressure if you have a sealed system. If pressure is low, topping up via the filling loop may
              restore operation (follow your boiler manual).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Reset a Boiler (Safely)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If there is no gas smell and no visible leak, you can try a single reset using the boiler’s
              reset button or instructions. If it locks out again, do not keep resetting—the boiler is
              signalling a fault that needs investigation.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When Lockout Indicates a Bigger Problem
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Repeated lockouts can be caused by poor circulation (sludge, blocked filters, failing pump),
              ignition components, gas supply issues, or flue safety faults. These require a Gas Safe engineer.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Considering Replacement? Check the Right kW Range
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If lockouts are frequent and the boiler is old, replacement can be sensible. Use our calculator
              to estimate the kW output range your home needs before comparing options.
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
              Is boiler lockout dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Lockout is designed to improve safety by shutting down when faults are detected. The underlying
              fault might be serious, so don’t ignore repeated lockouts.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can low pressure cause lockout?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Many sealed boilers lock out below a minimum pressure. If topping up fixes it, monitor
              pressure over time for leaks.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How many times can I reset the boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Try once. If it locks out again, stop and call an engineer. Repeated resets can mask faults
              and risk worsening damage.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why does my boiler lock out when the heating comes on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can indicate circulation problems, overheating, or pump/valve issues that only occur under
              load.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call a Gas Safe engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If lockout returns after one reset, or if you see an error code you can’t resolve via safe
              checks, call a Gas Safe engineer.
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

