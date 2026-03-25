import Link from "next/link";

export const metadata = {
  title: "Why Is My Boiler Losing Pressure? Causes & Fixes | HVACThermal",
  description:
    "Boiler keeps losing pressure? Find out why and how to fix it. Complete UK guide covering all common causes and step-by-step solutions.",
};

export default function WhyIsMyBoilerLosingPressurePage() {
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
            Why Is My Boiler Losing Pressure?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler pressure keeps dropping, the boiler may lock out, the
            heating can stop, and you&apos;ll find yourself topping it up more
            often than you should. In a sealed central heating system, pressure
            does not normally disappear—so a recurring drop usually points to a
            leak, a faulty component, or an issue with the expansion vessel.
            This guide covers the most common UK causes and practical next steps
            to diagnose and fix the problem safely.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Pressure Should Your Boiler Be?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              On most modern combi and system boilers, the pressure should be
              around <strong>1 to 1.5 bar when cold</strong> (heating off for a
              while). When the heating is running and the system is hot, it
              often rises to <strong>around 1.5 to 2 bar</strong>. If the
              pressure drops below <strong>1 bar</strong> when cold, many
              boilers will display a low-pressure error and may stop running.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Common Causes of Pressure Loss
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              These are the most likely reasons a sealed system loses pressure
              over days or weeks.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Small leak on pipework or radiators:</strong> Even a
                slow weep at a joint, radiator valve, or under a floorboard can
                drop pressure over time.
              </li>
              <li>
                <strong>Radiator bleed valve or valve gland leaking:</strong>{" "}
                A tiny drip after bleeding can be enough to cause a noticeable
                drop.
              </li>
              <li>
                <strong>Pressure relief valve (PRV) discharging:</strong> If
                the system pressure gets too high, the PRV releases water to
                protect the boiler. This can happen intermittently.
              </li>
              <li>
                <strong>Expansion vessel fault:</strong> If the expansion
                vessel has lost its air charge or the diaphragm has failed,
                pressure can swing too high when hot, triggering the PRV, and
                then appear low when cold.
              </li>
              <li>
                <strong>Filling loop left open or passing:</strong> A partly
                open or faulty filling loop can cause pressure issues and (in
                some cases) lead to PRV discharge.
              </li>
              <li>
                <strong>Recent work or radiator bleeding:</strong> Bleeding
                radiators releases water/air and often needs a top-up after.
                If you&apos;ve bled frequently, repeated top-ups can mask a
                leak.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Step-by-Step Checks You Can Do
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              You can often narrow down the cause with a few safe checks. Do
              not remove the boiler casing or touch any gas components.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 1 — Note the pressure cold vs hot
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Check the gauge when the heating has been off for a while, then
              again when the system is fully warm. Big jumps upward when hot
              can suggest an expansion vessel problem.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 2 — Check radiators and visible pipework for leaks
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Look for damp patches, staining, green/white residue at joints,
              or corrosion around radiator valves. Check under radiators and
              around any exposed pipework, especially where it enters walls or
              floors.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 3 — Inspect the pressure relief discharge pipe (outside)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many boilers have a copper pipe that exits outside. If it&apos;s
              wet, dripping, or shows signs of regular discharge, the PRV may
              have released water—often due to overpressure from an expansion
              vessel issue or overfilling.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 4 — Confirm the filling loop valves are fully closed
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The filling loop should be closed after topping up. If your
              system has a removable filling loop, ensure it is disconnected
              and capped as per the manufacturer instructions.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              When to Call a Gas Safe Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call an engineer if pressure drops quickly (hours to a couple of
              days), if you can&apos;t find any leaks, if the pressure relief
              pipe is discharging, or if the boiler repeatedly locks out. A Gas
              Safe engineer can pressure-test the system, locate hidden leaks,
              check/charge the expansion vessel, and replace faulty valves
              safely.
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
              If you&apos;re troubleshooting an older boiler and weighing up
              repair vs replacement, knowing the right kW range helps you
              compare quotes. Our free boiler size calculator recommends a
              sensible output based on your home and hot water needs.
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
              Is it normal for boiler pressure to drop slightly?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A small change between hot and cold is normal, but a steady drop
              over days/weeks usually indicates water is leaving the sealed
              system. If you&apos;re topping up regularly, it&apos;s best to
              find the cause rather than repeatedly repressurising.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can low pressure damage my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Low pressure typically makes the boiler shut down to protect
              itself, so damage is unlikely from low pressure alone. The bigger
              issue is the underlying cause (like a leak) and the inconvenience
              of losing heating/hot water.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Why does my pressure drop after bleeding radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Bleeding releases air and a small amount of water, so the system
              pressure often falls afterwards. Topping up via the filling loop
              is normal—if it keeps dropping repeatedly, investigate for leaks.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What does a faulty expansion vessel do?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The expansion vessel absorbs the increase in pressure as water
              heats up. If it&apos;s faulty or needs recharging, pressure can
              rise too high when hot, triggering the pressure relief valve to
              dump water, then appear low again when cold.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              How often is “too often” to top up boiler pressure?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you need to top up more than once every few months, or you see
              pressure dropping week to week, it&apos;s worth getting the system
              checked. Regular top-ups can increase corrosion risk and may hide
              a leak that should be fixed.
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
