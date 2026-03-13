import Link from "next/link";

export const metadata = {
  title: "How to Reduce Heating Bills in Winter — 10 Proven Tips | HVACThermal",
  description:
    "Cut winter heating costs with boiler and thermostat tips, insulation, draught proofing, smart thermostats, radiator maintenance, and hot water settings. UK and global advice.",
};

export default function HowToReduceHeatingBillsPage() {
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
            How to Reduce Heating Bills in Winter
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Winter heating can take a big bite out of your budget, whether you
            use a gas boiler, heat pump, or other system. The good news is that
            a mix of quick wins and longer-term improvements can cut your bills
            without sacrificing comfort. This guide gives you 10 proven tips:
            boiler and thermostat optimisation, insulation, draught proofing,
            smart thermostats, radiator maintenance, hot water settings, and
            more—so you can keep warm for less.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Boiler and Thermostat Optimisation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>1. Service your boiler annually.</strong> A well-maintained
              boiler runs more efficiently and is less likely to waste fuel.
              Get a Gas Safe (or equivalent) engineer to check it each year:
              they&apos;ll clean key parts, check pressures and flue, and spot
              issues before they hit your wallet or safety.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>2. Turn down the flow temperature.</strong> Many boilers
              are set to 70–75 °C for heating. If you have a condensing boiler,
              running at 60–65 °C (or lower if your radiators can cope) lets it
              condense more and use less gas. Try lowering by a few degrees;
              if the house still warms up comfortably, leave it there.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>3. Set the room thermostat wisely.</strong> Each degree
              you lower the thermostat can save a few percent on heating use.
              Aim for 18–19 °C when you&apos;re at home and awake; many people
              set 15–17 °C when out or at night. Avoid cranking the thermostat
              up to &quot;heat the room faster&quot;—it only heats to the same
              temperature and can waste energy.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Insulation Improvements
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>4. Top up loft insulation.</strong> Heat rises, and an
              under-insulated loft is one of the biggest sources of loss. In
              the UK, 270 mm (or more) of loft insulation is recommended. If
              you have less, topping up is often a low-cost, high-impact
              improvement. Same idea applies elsewhere: the better the roof and
              walls hold heat, the less you need to run the heating.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>5. Consider cavity or solid wall insulation.</strong> If
              your home has unfilled cavity walls, cavity wall insulation can
              cut heat loss significantly. Solid-wall homes can be insulated
              internally or externally—more disruptive and costly, but the
              savings over time can be substantial. Get a few quotes and check
              for any grants or schemes in your area.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Draught Proofing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>6. Seal gaps and draughts.</strong> Draughts from doors,
              windows, letterboxes, and loft hatches let cold air in and warm
              air out. Use draught excluders on external doors, seal gaps
              around window frames and skirting with appropriate tape or
              sealant, and fit a letterbox brush or cover. Don&apos;t block
              intentional ventilation (e.g. trickle vents in rooms with
              combustion appliances or in very airtight homes)—balance comfort
              with safety.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Smart Thermostats
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>7. Use a smart or programmable thermostat.</strong> A
              thermostat that lets you set different temperatures by time of
              day and day of week avoids heating an empty house. Smart
              thermostats can learn your routine, allow remote control, and
              some integrate with weather or occupancy. Even a simple
              programmable thermostat set to lower the temperature when you&apos;re
              out or asleep can trim 5–15% off heating use if you currently
              leave the heating on at a constant level.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Radiator Maintenance
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>8. Bleed radiators and balance the system.</strong> Air
              trapped in radiators stops them heating evenly and forces the
              boiler to work harder. Bleed each radiator until no more air
              comes out and the water runs steadily. If some radiators get hot
              and others stay cool, the system may need balancing—adjusting
              the lockshield valves so flow is distributed properly. Your
              engineer can do this at the next service. Also keep radiators
              clear of furniture and long curtains so heat can circulate.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Hot Water Cylinder Settings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>9. Set the cylinder thermostat to 60 °C.</strong> If you
              have a hot water cylinder (system or regular boiler), the
              cylinder thermostat controls how hot the stored water gets. 60 °C
              is usually enough for taps and showers and helps limit the
              growth of legionella. Higher settings waste energy; much lower
              may not be safe. If you have a combi boiler, you&apos;ll have a
              dial for hot water temperature—again, 55–60 °C is typically
              sufficient.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>10. Time hot water to match use.</strong> If your cylinder
              is on a timer, set it so water is heated only when you need it
              (e.g. morning and evening), rather than 24/7. That cuts standby
              losses and avoids reheating water that sits unused for hours.
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
              Is Your Boiler the Right Size?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              An oversized boiler can cost more to run; an undersized one
              struggles to keep you warm. Use our free boiler size calculator
              to check the right kW range for your property—then compare with
              your current boiler or get a quote that matches your needs.
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
              Next Steps
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Start with the quick wins: thermostat setting, draught proofing,
              and bleeding radiators. Then plan an annual service, look into
              loft and cavity insulation, and consider a smart or programmable
              thermostat. Adjust cylinder and boiler flow temperatures with
              care, and use our boiler size calculator when you&apos;re
              replacing your boiler so you don&apos;t over- or under-size.
              Small changes add up—you can cut your winter heating bills
              without turning the heating off.
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
