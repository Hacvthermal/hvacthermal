import Link from "next/link";

export const metadata = {
  title: "Smart Thermostats UK: Are They Worth It? 2026 Guide | HVACThermal",
  description:
    "Are smart thermostats worth it in the UK? We cover costs, energy savings, top brands like Nest and Hive, and whether one is right for your home.",
};

export default function SmartThermostatUkPage() {
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
            Smart Thermostats UK: Are They Worth It? 2026 Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A smart thermostat can make your heating easier to control and, in the right home, help
            reduce wasted heat. But “worth it” depends on your heating system, how predictable your
            routine is, and whether your home loses heat quickly. This guide explains how smart
            thermostats work in UK homes, typical costs, realistic savings, and what to look for in
            popular brands like Nest and Hive.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a Smart Thermostat?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A smart thermostat is a heating control that lets you manage your boiler (or heat
              source) using an app, schedules, and automation features. Most models can adjust set
              points, create time/temperature schedules, and provide usage insights. Many also
              support features like geofencing, learning routines, and multi-room control (when
              paired with smart radiator valves).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Do Smart Thermostats Save Money in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              They can, but the savings are mostly about reducing “accidental” heating—like leaving
              the heating on too long, heating an empty home, or overheating rooms. If you already
              run tight schedules and have good habits, the savings may be smaller. Homes with
              irregular routines, higher heat loss, or multiple zones/rooms to control tend to see
              more benefit.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              The best results typically come from combining smart control with sensible boiler flow
              temperatures, good insulation, and emitter balancing—controls can’t fix a badly sized
              or poorly set-up system on their own.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs: Device, Installation, and Ongoing Fees
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In the UK, the cost is usually split into the thermostat kit plus installation. DIY
              is possible for some setups, but many people prefer a qualified installer—especially
              where wiring or boiler controls are unfamiliar. Some platforms offer optional
              subscriptions (for advanced features or extended warranty), but most core functions
              work without a monthly fee.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Nest vs Hive vs Others: What Actually Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Brand features vary, but the practical decision points are usually:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Compatibility:</strong> Works with your boiler and existing controls
                (combi/system/regular, and whether you have a hot water cylinder).
              </li>
              <li>
                <strong>Zoning:</strong> Whether you can control multiple zones or rooms, and whether
                smart radiator valves are supported.
              </li>
              <li>
                <strong>Ease of use:</strong> Clear schedules, quick overrides, and a reliable app.
              </li>
              <li>
                <strong>Smart home integration:</strong> Works with voice assistants or platforms
                you already use.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If you want room-by-room control, check the cost of smart radiator valves, because that
              can be a bigger part of the total spend than the thermostat itself.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Who Should (and Shouldn’t) Buy One?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A smart thermostat is most worth it if you have an irregular schedule, frequently
              forget to adjust heating, want easier control when away, or you’re improving your
              system step-by-step (insulation, radiator upgrades, better settings). It may be less
              compelling if your system is already optimised with tight schedules and you rarely
              deviate.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Check Your Boiler Output While You Optimise Controls
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Smart controls work best when your boiler is correctly sized. Use our free calculator
              to estimate the right kW range for your home.
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
              Do smart thermostats work with combi boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, most do. The key is compatibility with your boiler’s control wiring/protocol and
              whether you need hot water cylinder control (combis typically don’t).
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a smart thermostat reduce my bills automatically?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not automatically. It can reduce waste, but you usually still need to set sensible
              schedules, temperatures, and room targets for best results.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need smart radiator valves as well?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not necessarily. A thermostat improves whole-home control, while smart radiator valves
              enable room-by-room control. They’re helpful in larger homes or where rooms are used
              differently.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is installation difficult in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It varies. Some homes have simple thermostat wiring; others have older control
              systems, cylinders, or zone valves. If you’re unsure, a qualified installer is the
              safer choice.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are Nest and Hive the best options?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They’re popular, but “best” depends on your compatibility needs, desired features,
              and whether you want room-by-room control. Compare based on your home rather than the
              brand name alone.
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

