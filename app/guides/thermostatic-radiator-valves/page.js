import Link from "next/link";

export const metadata = {
  title: "Thermostatic Radiator Valves UK: How They Work & Are They Worth It? | HVACThermal",
  description:
    "Everything UK homeowners need to know about TRVs — how they work, whether they save money, how to set them correctly, and when to replace them.",
};

export default function ThermostaticRadiatorValvesPage() {
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
            Thermostatic Radiator Valves UK: How They Work & Are They Worth It?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Thermostatic radiator valves (TRVs) help control room temperature by regulating how much hot
            water flows through each radiator. They’re one of the simplest upgrades for comfort and can
            reduce wasted heat in less-used rooms. This guide explains how TRVs work, whether they save
            money, how to set them properly, and when to replace them.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a TRV?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A TRV is a valve on the radiator that senses air temperature and opens/closes to maintain
              a target level. It doesn’t directly control the boiler; it controls radiator flow in that room.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How TRVs Work (In Simple Terms)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Inside the TRV head is a sensor (often a wax capsule) that expands as the room warms up. As it
              expands, it pushes a pin that reduces flow through the valve. When the room cools, it contracts
              and flow increases again.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Do TRVs Save Money?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              They can by reducing overheating in rooms that don’t need to be as warm. Savings depend on how
              you use your home and whether you currently heat all rooms equally. TRVs work best alongside a
              main thermostat and good scheduling.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Set TRVs Correctly
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              TRVs are usually numbered. Higher numbers generally mean a warmer target temperature. Avoid
              turning them fully off in rooms where pipes could freeze, and don’t place furniture directly
              over the valve head—blocked airflow can cause inaccurate control.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Living areas:</strong> Medium to higher settings depending on comfort.
              </li>
              <li>
                <strong>Bedrooms:</strong> Often lower for sleeping comfort.
              </li>
              <li>
                <strong>Unused rooms:</strong> Lower, but not necessarily off in cold weather.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Replace a TRV
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Replace TRVs if they stick, leak, or don’t respond to changes. A common issue is a stuck pin
              after summer—sometimes freeing the pin solves it without replacement.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Pair TRVs With the Right Boiler Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Controls help, but if your boiler is badly oversized or undersized, comfort and efficiency
              still suffer. Check your likely kW range with our calculator.
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
              Should every radiator have a TRV?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many systems leave at least one radiator without a TRV (often in a hallway) to help maintain
              flow, especially on older setups. An engineer can advise for your system.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do TRVs work with smart thermostats?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. TRVs control rooms locally while the thermostat controls overall demand. Smart radiator
              valves can add room-by-room automation.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why is my radiator cold when the TRV is on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The TRV pin may be stuck, the valve may be faulty, or the system could be unbalanced or have
              circulation issues.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What number should I set my TRV to?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              There’s no universal number—use comfort as your guide. Start mid-range and adjust based on
              room temperature and usage.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are TRVs worth fitting?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For most homes, yes—especially where room usage varies. They’re a low-cost comfort upgrade that
              can help reduce overheating.
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

