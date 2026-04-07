import Link from "next/link";

export const metadata = {
  title: "Central Heating Not Working? Common Causes & Fixes | HVACThermal",
  description:
    "Central heating not working? This UK guide covers the most common causes, simple fixes you can do yourself, and when to call an engineer.",
};

export default function CentralHeatingNotWorkingPage() {
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
            Central Heating Not Working?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your central heating isn&apos;t working, the cause can range from
            simple settings and low pressure to component faults like a failed
            pump or a stuck motorised valve. This UK guide walks through the most
            common causes, safe checks you can do yourself, and clear signs you
            should call a Gas Safe registered engineer.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Quick First Checks (Often Fixes It)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Check thermostat and programmer:</strong> Make sure the
                heating is on, the set temperature is higher than the room temp,
                and any schedules are correct.
              </li>
              <li>
                <strong>Check boiler pressure:</strong> Many sealed systems should
                be around 1–1.5 bar when cold. Low pressure can stop heating.
              </li>
              <li>
                <strong>Check radiator valves:</strong> Ensure TRVs and lockshields
                aren&apos;t fully closed on all radiators.
              </li>
              <li>
                <strong>Reset the boiler once:</strong> If there&apos;s a lockout
                from a temporary issue, a single reset may restore operation.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Common Causes (and What They Look Like)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Symptoms can help narrow down the fault quickly.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Heating off but hot water works:</strong> Often points to a
                thermostat/programmer issue, a motorised valve, or the boiler not
                receiving a heating demand signal.
              </li>
              <li>
                <strong>Some radiators cold:</strong> Could be trapped air, sludge,
                balancing issues, or a circulation problem.
              </li>
              <li>
                <strong>Boiler fires then stops:</strong> Can indicate low pressure,
                flow issues, overheating, or a sensor fault.
              </li>
              <li>
                <strong>Boiler shows an error code:</strong> Use the code as a clue
                and check your manual or manufacturer guidance for your model.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Step-by-Step Troubleshooting (Safe for Homeowners)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Work through these in order. Avoid opening the boiler casing or
              attempting gas-side repairs yourself.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 1 — Confirm the system is calling for heat
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn the thermostat up and set the programmer to heating on. If you
              have a smart thermostat, check it has power and is connected.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 2 — Check boiler pressure and top up if needed
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the boiler pressure is below 1 bar when cold, the boiler may not
              run. Topping up via the filling loop often restores heating—if the
              pressure keeps dropping, investigate for leaks.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 3 — Bleed radiators if there are cold spots
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If radiators are cold at the top and warm at the bottom, trapped air
              may be the issue. After bleeding, re-check boiler pressure and top up
              if necessary.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 4 — Check for obvious leaks
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Look around radiators, valves and visible pipework. Even a small leak
              can cause pressure loss and heating failures over time.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call a Gas Safe engineer if the boiler won&apos;t fire, keeps locking
              out, shows recurring error codes, is overheating, or you suspect a
              pump/valve fault. If you smell gas, follow official gas safety advice
              immediately.
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
              If you&apos;re considering a repair vs replacement decision, knowing a
              sensible kW range helps you compare quotes. Our boiler size calculator
              uses your property details and hot water needs to recommend a suitable
              output.
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
              Why do I have hot water but no heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              This is commonly caused by thermostat/programmer settings or a fault
              with a motorised valve or controls that signal the boiler to run the
              heating circuit.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can low boiler pressure stop central heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Many boilers have a low-pressure cut-out. If pressure is below
              the safe range, the boiler may lock out and stop heating until you top
              up.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Why are some radiators hot and others cold?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Trapped air, sludge, balancing problems, or partially closed valves
              can cause uneven heat. Bleeding and balancing can help, but persistent
              issues may require an engineer.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I reset my boiler if the heating stops?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Resetting once is reasonable if the boiler is in lockout due to a
              temporary issue. Avoid repeated resets if the fault returns quickly.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              When is a heating problem an emergency?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you smell gas, see signs of carbon monoxide concerns, notice burning
              smells, or there is significant leaking or overheating, treat it as an
              emergency and seek professional help immediately.
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
