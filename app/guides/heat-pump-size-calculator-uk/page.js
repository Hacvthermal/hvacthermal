import Link from "next/link";

export const metadata = {
  title: "Heat Pump Size Calculator UK: What Size Do You Need? | HVACThermal",
  description:
    "Find the right size heat pump for your UK home with our free calculator. Covers air source heat pumps, kW outputs, and key sizing factors.",
};

export default function HeatPumpSizeCalculatorUkPage() {
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
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "#1E3A5F" }}
          >
            Heat Pump Size Calculator UK: What Size Do You Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Heat pump sizing is about matching the heat pump’s capacity (kW) to your home’s{" "}
            <strong>heat loss</strong> so it can keep the property warm on the coldest typical days
            without running inefficiently. Unlike boilers, heat pumps deliver heat most efficiently
            at lower flow temperatures and are designed to run steadily rather than “blast” heat in
            short bursts. This guide explains how sizing works for UK homes, what SCOP means, why
            oversizing can be a problem, and how sizing links to Boiler Upgrade Scheme (BUS) grant
            eligibility.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Heat Pump Sizing Works
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The core input is your property’s heat loss at design conditions (a cold outdoor
              temperature). An installer should calculate this room-by-room as part of an MCS-style
              survey, considering insulation, glazing, ventilation, and exposed surfaces. The heat
              pump is then sized so its output at low outdoor temperatures can meet that heat loss
              while keeping flow temperatures as low as practical.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Most sizing approaches also include a small margin (for uncertainty and warm-up
              periods) but avoid excessive oversizing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is SCOP and Why It Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>SCOP</strong> (Seasonal Coefficient of Performance) estimates how much heat a
              heat pump delivers over a season relative to the electricity it uses. A higher SCOP
              generally means lower running costs for the same heat demand. Real-world SCOP depends
              heavily on system design—especially flow temperature, emitter sizing, and control
              strategy—not just the heat pump model.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Sizing and SCOP are linked: if a system ends up running hotter than planned, SCOP can
              drop. That’s why heat loss, radiators/underfloor, and flow temperature targets should
              be considered together.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Oversizing a Heat Pump Is a Problem
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              With boilers, oversizing is common because modern boilers modulate down. Heat pumps
              also modulate, but oversizing can still hurt performance and cost:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Short-cycling risk:</strong> If the minimum output is too high, the heat
                pump may switch on/off more often in mild weather.
              </li>
              <li>
                <strong>Higher upfront cost:</strong> Larger units and electrical work can cost
                more.
              </li>
              <li>
                <strong>Harder to run at low flow temperatures:</strong> Poor system design can
                force higher temperatures, reducing efficiency.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              A well-sized system aims for steady operation and comfortable indoor temperatures with
              lower flow temperatures.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Factors That Affect Heat Pump Size
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Floor area and layout:</strong> Larger properties and open-plan spaces can
                increase heat loss.
              </li>
              <li>
                <strong>Insulation and glazing:</strong> Loft/wall insulation and double/triple
                glazing reduce the required kW.
              </li>
              <li>
                <strong>Property type:</strong> Detached homes typically need more output than flats
                because of exposed surfaces.
              </li>
              <li>
                <strong>Region and climate:</strong> Colder UK regions increase design heat loss.
              </li>
              <li>
                <strong>Emitter suitability:</strong> Radiator size and underfloor heating affect
                how low you can run flow temperatures for a given comfort level.
              </li>
              <li>
                <strong>Hot water cylinder:</strong> Most heat pump systems use a cylinder; cylinder
                reheat strategy can influence peak demand but is usually designed separately from
                space heating sizing.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              BUS Grant Eligibility and Sizing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The Boiler Upgrade Scheme (BUS) can provide a grant towards installing an air source
              or ground source heat pump. Eligibility depends on property and installation criteria,
              and the final system should be designed and installed by an MCS-certified installer.
              In practice, accurate sizing and a proper heat loss calculation are key parts of a
              compliant design.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A calculator gives a useful estimate, but your installer should confirm sizing with an
              on-site survey before any purchase decision.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Estimate Your Heat Pump Size in Minutes
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our calculator estimates whole-home heat loss using UK-style factors and gives a
              practical heat pump size range to discuss with an MCS installer.
            </p>
            <Link
              href="/calculator/heat-pump-calculator"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              style={{ backgroundColor: "#E67E22" }}
            >
              Use the Heat Pump Calculator
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Frequently Asked Questions
            </h2>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What size heat pump do I need for a typical UK home?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              There’s no one-size answer—heat loss varies massively by insulation, property type and
              region. A well-insulated terrace can need far less kW than an older detached home of
              similar floor area. Use an estimate as a starting point and confirm with a heat loss
              survey.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does heat pump size affect running costs?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Running cost mainly depends on heat loss and system efficiency (SCOP). Poor sizing or
              design can push flow temperatures higher or cause cycling, which can reduce efficiency
              and increase costs.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can a heat pump be “too big”?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Oversizing can increase upfront cost and, if the unit can’t modulate low enough,
              can lead to short-cycling in milder weather. A properly designed system aims for steady
              operation and low flow temperatures.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need bigger radiators for a heat pump?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often, yes—especially in older homes. Heat pumps work best at lower flow temperatures,
              which can reduce radiator output. Many installs include radiator upgrades (or
              underfloor heating) to keep temperatures comfortable without running the heat pump hot.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does the BUS grant require a heat loss calculation?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Installers typically complete a formal heat loss calculation as part of compliant
              design and commissioning. The calculator is helpful for early planning, but the final
              design should be confirmed by an MCS-certified installer.
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

