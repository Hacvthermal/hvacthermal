import Link from "next/link";

export const metadata = {
  title: "Pilot Light Keeps Going Out? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Pilot light keeps going out on your boiler? UK guide covering all the common causes, how to relight it safely, and when to call a Gas Safe engineer.",
};

export default function PilotLightKeepsGoingOutPage() {
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
            Pilot Light Keeps Going Out? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Modern boilers often use electronic ignition instead of a permanent pilot light, but some
            older UK boilers still have a pilot that can go out. If your pilot keeps extinguishing, it
            can indicate a safety issue, a gas supply problem, or a failing component. This guide
            explains common causes, how to relight safely (at a high level), and when to call a Gas Safe
            engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Safety First
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you smell gas, do not attempt to relight the pilot. Ventilate the area and follow UK
              gas emergency guidance. Never remove the boiler case or bypass safety devices.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: Thermocouple Issues (Older Boilers)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many pilot-light boilers use a thermocouple to prove the flame is present. If it’s worn,
              dirty, or failing, it can shut off the gas supply and the pilot will go out. This is a
              common cause and typically needs an engineer to replace or service.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Poor Gas Supply or Low Pressure
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Interrupted gas supply, a partially closed isolation valve, or supply issues can stop the
              pilot staying lit. If other gas appliances are also affected, it’s more likely a supply
              problem than a boiler-only fault.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Flue or Ventilation Problems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boilers need safe flueing. Issues like poor draught, blocked flues, or ventilation
              problems can cause safety shutoffs. Treat these as urgent and use a qualified engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Relight Safely (High-Level)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Follow your boiler’s manual. Typically you switch the control to pilot, hold the ignition
              control while lighting, then keep holding briefly so the thermocouple warms. If it won’t
              stay lit after a couple of attempts, stop and call an engineer.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Replacing an Older Boiler? Start With kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Persistent pilot problems can be a sign it’s time to upgrade. Use our calculator to
              estimate the right kW range before comparing replacement boilers.
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
              Do modern boilers have pilot lights?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Most modern boilers use electronic ignition and don’t have a permanent pilot. Pilot issues
              usually apply to older models.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why does my pilot light go out when the boiler turns on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can be thermocouple issues, airflow/flue problems, or gas supply instability. An engineer
              can test safely.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is it safe to relight a pilot light myself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many homeowners relight using the manual instructions, but if there’s any gas smell, repeated
              failures, or you’re unsure, call a Gas Safe engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can a blocked flue cause pilot issues?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Flue safety issues can trigger shutoff. Treat flue concerns as urgent and get professional
              help.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I replace the boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If it’s old, inefficient, and repeatedly failing or parts are costly, replacement can be a
              better long-term decision.
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

