import Link from "next/link";

export const metadata = {
  title: "Boiler Pressure Too High? How to Fix It UK Guide 2026 | HVACThermal",
  description:
    "Boiler pressure too high? Find out why it happens, how to safely reduce it yourself, and when you need to call an engineer.",
};

export default function BoilerPressureTooHighPage() {
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
            Boiler Pressure Too High?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler pressure is too high, it can trigger safety systems,
            cause the boiler to lock out, or force water out of the pressure
            relief valve. In most UK sealed systems, pressure should be around{" "}
            <strong>1 to 1.5 bar when cold</strong> and may rise when hot. If
            you&apos;re seeing readings near <strong>3 bar</strong> (or higher),
            it&apos;s important to reduce the pressure safely and understand why
            it happened.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Is “Too High” Boiler Pressure?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              On many boilers, pressure above <strong>2.5 bar</strong> when hot
              is a warning sign, and <strong>3 bar</strong> is often the point
              where the boiler may discharge water via the pressure relief valve
              (PRV). If the pressure is above 2 bar when the system is cold, it&apos;s
              usually overfilled.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Common Causes of High Boiler Pressure
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>System overfilled:</strong> Too much water added through
                the filling loop.
              </li>
              <li>
                <strong>Filling loop left open or passing:</strong> A valve that
                isn&apos;t fully closed can keep feeding water into the system.
              </li>
              <li>
                <strong>Expansion vessel issue:</strong> If the vessel has lost
                charge or failed, pressure can rise excessively as the system
                heats.
              </li>
              <li>
                <strong>Pressure relief valve discharged:</strong> Once a PRV has
                opened, it can sometimes weep afterwards, causing pressure swings.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How to Safely Reduce Boiler Pressure (DIY Steps)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The safest way to reduce pressure is to release a small amount of
              water from the heating system. Always work carefully and avoid
              opening the boiler casing.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 1 — Turn the heating off and let it cool
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              High pressure is easier to assess when the system is cold. Let the
              boiler and radiators cool down before releasing any water.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 2 — Check the filling loop is fully closed
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ensure both filling loop valves are fully closed. If a lever or
              screw valve is even slightly open, it can continue adding water and
              push pressure up again.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 3 — Bleed a radiator to release pressure
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Place a cloth/container under the radiator bleed point. Open the
              bleed screw slightly to release a small amount of water (and any
              air). Close it, then re-check the boiler pressure. Repeat until the
              gauge is back around <strong>1 to 1.5 bar</strong> when cold.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 4 — Restart and monitor
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn the boiler back on and monitor pressure as it heats. If it
              climbs rapidly towards 3 bar again, the expansion vessel may need
              attention.
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
              Call an engineer if pressure keeps rising after you reduce it, if
              the PRV discharge pipe is dripping, or if you suspect an expansion
              vessel fault. If you&apos;re not confident bleeding radiators or the
              boiler shows repeated error codes/lockouts, professional diagnosis
              is the safest route.
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
              If you&apos;re troubleshooting repeated pressure issues and thinking
              about replacing your boiler, start with the correct kW range. Our
              boiler size calculator recommends a sensible output based on your
              home and hot water demand.
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
              Is high boiler pressure dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The boiler has safety devices to protect itself, but high pressure
              can lead to leaks or PRV discharge and may indicate a fault. It&apos;s
              best to reduce the pressure and investigate the cause.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Why does my boiler pressure rise when the heating is on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Pressure naturally rises as water heats and expands. The expansion
              vessel absorbs this change. If pressure rises excessively, the
              expansion vessel may be undercharged or faulty.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I reduce boiler pressure by bleeding a radiator?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes—bleeding a small amount of water can reduce system pressure.
              Do it with the system cool, use a container, and re-check the
              gauge regularly to avoid dropping pressure too low.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What if the pressure keeps rising after I reduce it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Repeated rising pressure often points to an expansion vessel issue
              or a filling loop valve that&apos;s passing. An engineer can test and
              fix the underlying fault safely.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I top up pressure again after reducing it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Only if you reduce it too far. Aim for around 1–1.5 bar when cold.
              If you accidentally drop below 1 bar, you may need to repressurise
              via the filling loop.
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
