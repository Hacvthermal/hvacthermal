import Link from "next/link";

export const metadata = {
  title: "Radiator Not Heating Up? Causes & Fixes UK Guide | HVACThermal",
  description:
    "Radiator cold at the top or bottom? This UK guide covers all the common causes, simple fixes you can do yourself, and when to call an engineer.",
};

export default function RadiatorNotHeatingUpPage() {
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
            Radiator Not Heating Up? Causes & Fixes UK Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If a radiator stays cold (or only warms up in parts), the problem is usually air in the
            system, a stuck valve, poor balancing, low boiler pressure, or sludge restricting flow.
            The good news is many fixes are simple DIY checks. This guide walks through the most
            common UK causes, what the symptoms mean (cold at the top vs cold at the bottom), and
            when you should call a heating engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Quick Diagnosis: What Pattern Do You See?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Cold at the top, warm at the bottom:</strong> Often air trapped in the
                radiator (needs bleeding).
              </li>
              <li>
                <strong>Cold at the bottom, warm at the top:</strong> Often sludge/magnetite
                restricting flow.
              </li>
              <li>
                <strong>Only one radiator cold:</strong> Often a stuck TRV/pin, closed lockshield, or
                local blockage.
              </li>
              <li>
                <strong>Several radiators cold:</strong> Could be low pressure, pump issues, zone
                valve problems, or system balancing.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Fix 1: Bleed the Radiator (Air in the System)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the radiator is cold at the top, bleeding is the first thing to try. Turn heating
              off, let the radiator cool, then use a radiator key to release trapped air until water
              appears. After bleeding, check boiler pressure—sealed systems may need repressurising.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Fix 2: Check Boiler Pressure (Sealed Systems)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Low boiler pressure can reduce circulation and leave radiators cold. Many UK sealed
              systems should sit around 1–1.5 bar when cold. If it’s below that, top up using the
              filling loop (following your boiler manual) and recheck radiators.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Fix 3: Free a Stuck TRV Pin
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If one radiator stays cold, the thermostatic radiator valve (TRV) pin can stick—often
              after summer. Turn the TRV to max, remove the head (usually a collar nut), then gently
              press the small metal pin in and out until it springs freely. Refit the head and test
              again.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Fix 4: Balance the System (Radiators Heat Unevenly)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If some radiators get hot while others are lukewarm, the system may be unbalanced.
              Balancing adjusts lockshield valves so flow is shared more evenly. It takes patience,
              but it can dramatically improve comfort without changing the boiler.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Fix 5: Sludge and Blockages (Cold at the Bottom)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If radiators are cold at the bottom, sludge can restrict water flow. A first step is
              checking for a magnetic filter and cleaning it (if you have one). If the issue is
              widespread, a professional power flush or targeted radiator removal and cleaning may
              be recommended. Adding inhibitor afterwards helps slow future corrosion.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call an engineer if boiler pressure keeps dropping, you suspect pump/zone valve faults,
              multiple radiators stay cold after bleeding and balancing, or you see leaks. If you
              have a gas safety concern, always use a Gas Safe registered engineer.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Make Sure Your Boiler Isn’t Undersized
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If radiators routinely struggle to heat up (especially after upgrades or extensions),
              it’s worth checking whether your boiler output matches your home’s demand.
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
              Why is my radiator cold at the top?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              That’s usually trapped air. Bleeding the radiator is the first step, then check boiler
              pressure if you have a sealed system.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why is my radiator cold at the bottom?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often sludge/magnetite restricting flow. Cleaning a magnetic filter can help, but
              persistent issues may need a flush or radiator cleaning.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              One radiator is cold but the others are hot—what does that mean?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common causes are a stuck TRV pin, closed lockshield valve, or a local blockage. Try
              freeing the TRV pin and checking valves first.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need to bleed radiators often?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not usually. If you’re bleeding frequently, air is entering the system or pressure is
              dropping—both warrant further checks.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can low boiler pressure make radiators cold?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Low pressure reduces circulation. If your pressure is below the recommended cold
              range, top up via the filling loop and monitor if it drops again.
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

