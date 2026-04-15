import Link from "next/link";

export const metadata = {
  title: "How to Turn Off a Boiler: UK Guide 2025 | HVACThermal",
  description:
    "Need to turn off your boiler? Step-by-step guide covering how to safely switch off combi, system and conventional boilers in UK homes.",
};

export default function HowToTurnOffABoilerPage() {
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
            How to Turn Off a Boiler: UK Guide 2025
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Sometimes you need to switch your boiler off—during a holiday, when doing DIY, if you’ve
            spotted a leak, or while waiting for an engineer. The safest way depends on what you’re
            trying to achieve: turning off heating only, turning off hot water, or fully shutting
            down the boiler (and in some cases, isolating water/gas/electric). This guide covers the
            safest steps for combi, system and conventional boilers in UK homes.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Before You Start: What “Turning Off” Means
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boilers can be switched off in a few different ways:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Controls off (standby):</strong> Use the programmer/thermostat to stop demand.
              </li>
              <li>
                <strong>Boiler power off:</strong> Switch off at the boiler or fused spur.
              </li>
              <li>
                <strong>Isolate services:</strong> Turn off water supply and/or gas in an emergency.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If you smell gas, hear hissing near pipework, or suspect a gas leak, don’t follow a
              normal shutdown routine—see the emergency guidance below.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step-by-Step: How to Turn Off Your Boiler Safely
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              These steps work for most modern UK boilers. If your controls look different, refer to
              your manual.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 1 — Turn heating demand off at the thermostat/programmer
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Set the thermostat to a low temperature (or “off”) and turn schedules off on the
              programmer. This prevents the boiler firing due to heating demand.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 2 — Turn hot water demand off (system/conventional)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you have a hot water cylinder, switch the hot water schedule to “off” on the
              programmer. Combi boilers typically don’t have a cylinder schedule, but you can usually
              disable hot water preheat modes in the boiler menu if needed.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 3 — Switch the boiler off at the boiler controls (optional)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you want the boiler fully off, use the on/off button or selector on the boiler
              fascia. Some boilers have a “standby” mode which is effectively off but still powered.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 4 — Turn power off at the fused spur (full shutdown)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For a full shutdown, switch off at the fused spur (usually a wall switch near the
              boiler). This cuts electrical power to the boiler.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 5 — Isolate water (only if needed)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you’re dealing with a leak, you may need to isolate the boiler’s water supply (and
              in severe cases, the mains stopcock). If you’re unsure, a plumber can advise—don’t
              overtighten valves.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Combi vs System vs Conventional: What’s Different?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The shutdown steps are broadly similar, but system and conventional boilers usually
              have a hot water cylinder and therefore a separate hot water schedule. Combi boilers
              heat hot water on demand, so you mainly control heating demand and optionally disable
              any comfort/preheat settings.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When Not to Turn It Off (Frost Protection)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In winter, fully switching off the boiler can remove frost protection. If you’re away
              for a short time, many households use a low thermostat setpoint or a frost mode rather
              than a full shutdown. If you do fully power off in freezing conditions, understand the
              risk of frozen pipework.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Emergency: If You Smell Gas
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you suspect a gas leak, do not operate electrical switches. Ventilate the property,
              get everyone outside, and follow UK emergency gas advice (contact the National Gas
              Emergency Service). Only turn off the gas at the emergency control valve if it’s safe
              to do so.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Planning a Boiler Upgrade?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you’re turning off the boiler because it’s unreliable or inefficient, check your
              ideal boiler kW range first. A correctly sized boiler can improve comfort and reduce
              cycling.
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
              Is it safe to turn my boiler off at the wall?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Generally yes—switching off at the fused spur is a normal full shutdown method. Just be
              mindful of frost protection in cold weather.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I turn off the gas to my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not usually for routine shutdowns. Gas isolation is mainly for emergencies, suspected
              leaks, or when instructed by a professional.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I turn off hot water on a system boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn off the hot water schedule on the programmer. If you have a cylinder thermostat,
              lowering it can also reduce demand, but the schedule is the main control.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I leave my boiler off for weeks?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              You can, but consider frost risk and whether you want periodic heating/hot water. Some
              people use holiday mode or a low setpoint instead of fully powering off.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if I need to turn it off because of a leak?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Switch off power at the fused spur, then isolate water if needed. If the leak is near
              electrical parts or you’re unsure, call an engineer or plumber promptly.
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

