import Link from "next/link";

export const metadata = {
  title: "Boiler Pressure Keeps Dropping? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Boiler pressure keeps dropping in your UK home? Find out all the common causes, how to fix them yourself, and when you need an engineer.",
};

export default function BoilerPressureKeepsDroppingPage() {
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
            Boiler Pressure Keeps Dropping? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler pressure keeps dropping, it usually means water is leaving the system or pressure
            isn’t being managed correctly. In many UK homes this is caused by a leak, a faulty pressure relief
            valve, or an expansion vessel issue. This guide explains the most common causes, safe checks you can
            do yourself, and when you need an engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Boiler Pressure Should Be
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Most sealed systems sit around 1–1.5 bar when cold (check your manual). Pressure rises when the
              heating is on. If it regularly drops below the boiler’s minimum, the boiler may shut down or lock out.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 1: A Leak Somewhere in the System
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Even small leaks at radiator valves, pipe joints, or under floors can reduce pressure over time.
              Look for damp patches, corrosion marks, staining around valves, or frequent need to top up.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 2: Pressure Relief Valve (PRV) Discharge
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the system pressure gets too high, the PRV releases water via an external pipe. A dripping
              discharge pipe (often outside) can slowly drop your pressure. PRVs can also weep after they’ve
              opened and may need replacing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Cause 3: Expansion Vessel Problems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The expansion vessel absorbs pressure changes as water heats and expands. If it’s failed or
              incorrectly charged, pressure can swing high when hot and then fall low when cold, often triggering
              PRV discharge.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Safe Checks You Can Do
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Check visible leaks:</strong> radiators, valves, and accessible pipework.
              </li>
              <li>
                <strong>Check the discharge pipe:</strong> look for dripping outside when the heating is on.
              </li>
              <li>
                <strong>Note pressure pattern:</strong> does it rise a lot when hot and drop when cold?
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              Avoid repeatedly topping up without addressing the cause—fresh water introduces oxygen and increases
              corrosion risk.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you can’t find a leak, the PRV is discharging, or pressure swings wildly, book a heating engineer.
              Expansion vessel and PRV issues usually require professional tools and safe procedures.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Considering a Replacement Boiler?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your boiler is old and you’re dealing with repeated faults, replacement can be more cost-effective.
              Use our calculator to estimate the right kW output range for your home.
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
              How quickly should boiler pressure drop?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It shouldn’t drop quickly on a healthy sealed system. Slow drops over days/weeks can still indicate a leak or PRV weep.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is it okay to keep topping up the boiler pressure?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Occasional topping up may be fine, but frequent topping up suggests a fault. It can increase corrosion risk over time.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Could bleeding radiators cause pressure to drop?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Bleeding releases air and a small amount of water, which can reduce pressure on sealed systems.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if my pressure rises a lot when heating is on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Large hot-pressure rises often point to an expansion vessel issue and can lead to PRV discharge.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call a professional?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If pressure keeps dropping after topping up, you see PRV discharge, or you can’t find a leak, book an engineer.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#1E3A5F" }}>
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

