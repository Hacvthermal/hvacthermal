import Link from "next/link";

export const metadata = {
  title: "Heat Pump vs Gas Boiler UK — Which Is Right For You? | HVACThermal",
  description:
    "Compare heat pumps and gas boilers for UK homes: how they work, running costs, upfront costs, environmental impact, property suitability, and the £7,500 BUS grant. Free heat pump size calculator.",
};

export default function HeatPumpVsGasBoilerPage() {
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
              href="/calculator/heat-pump-size-calculator"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ backgroundColor: "#E67E22" }}
            >
              Heat Pump Calculator
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
            Heat Pump vs Gas Boiler UK — Which Is Right For You?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Replacing your heating system is a big decision. For most UK
            homeowners, the choice comes down to a gas boiler—the familiar
            option—or a heat pump, which runs on electricity and is being
            pushed by government grants and net-zero targets. Both can heat your
            home and hot water, but they work differently and have very
            different running costs, upfront costs, and environmental impacts.
            This guide compares them so you can decide which is right for your
            property and budget.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Each Works
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Gas Boilers
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A gas boiler burns natural gas (or LPG) to heat water, which is
              then sent to your radiators and, in a combi or system setup, to
              your taps and showers. The boiler typically runs at high flow
              temperatures (e.g. 60–75 °C), so existing radiators often work
              without changes. Gas has been the default for UK central heating
              for decades: installs are well understood, and the fuel has
              historically been relatively cheap. Boilers are efficient—modern
              condensing models can exceed 90% efficiency—but they still
              produce carbon emissions at the point of use and depend on fossil
              fuel.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Heat Pumps
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A heat pump doesn&apos;t burn fuel. It uses electricity to move heat
              from the outside air (air-source) or the ground (ground-source)
              into your home. For every unit of electricity used, a good heat
              pump can deliver several units of heat, so the &quot;efficiency&quot;
              (coefficient of performance, or COP) can be 3 or more. Heat
              pumps work best with lower flow temperatures (e.g. 35–50 °C), so
              they often pair with larger radiators, underfloor heating, or
              both. They need a well-insulated home and careful sizing. In
              return, they can slash carbon emissions and, depending on
              electricity prices, reduce running costs compared to gas.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Running Costs Comparison
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Running costs depend on your tariff, insulation, and how you use
              heating. When gas was much cheaper than electricity per unit of
              energy, gas boilers were usually cheaper to run. In recent years,
              gas prices have risen and electricity prices have been more
              variable; with a heat pump&apos;s high COP, the gap has narrowed and
              in some cases reversed.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A typical comparison: if gas is around 7p/kWh and electricity
              27p/kWh, a 90% efficient boiler uses about 11 kWh of gas to
              deliver 10 kWh of heat. A heat pump with a COP of 3 uses about
              3.3 kWh of electricity for the same 10 kWh of heat. So the
              boiler might cost roughly 77p for that heat, and the heat pump
              about 89p—close. If electricity is cheaper (e.g. on an off-peak
              or heat pump tariff) or gas is dearer, the heat pump can win. The
              only way to know for your home is to use current local prices
              and a proper heat loss figure. Well-insulated homes with
              low-temperature systems get the best results from a heat pump.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Upfront Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A gas boiler replacement—combi or system—typically costs in the
              region of £1,500–£3,500 including installation for an average
              home, depending on the model and complexity. It&apos;s a
              well-established product with plenty of installers and
              competition.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A heat pump installation is usually more expensive. An air-source
              heat pump system—including the unit, hot water cylinder, possible
              radiator or emitter upgrades, and commissioning—might be
              £10,000–£18,000 or more before grants. Ground-source heat pumps
              cost more because of the ground loop. The Boiler Upgrade Scheme
              (BUS) grant of up to £7,500 significantly reduces the net cost
              of an air-source or ground-source heat pump in England and Wales,
              which we cover below. Even with the grant, the outlay is often
              higher than a boiler, so the payback depends on running cost
              savings and how long you stay in the property.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Environmental Impact
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Gas boilers produce carbon dioxide when they burn gas. Even an
              efficient condensing boiler emits around 2–2.5 kg CO₂ per kWh of
              heat (depending on exact efficiency). The UK grid is
              decarbonising, so electricity used by a heat pump is increasingly
              from low-carbon sources. Per kWh of heat delivered, a heat pump
              can have less than half the carbon footprint of a gas boiler, and
              that gap will widen as the grid gets greener.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              If reducing your home&apos;s carbon emissions is a priority, a heat
              pump is the stronger choice. Gas will remain in the mix for years,
              but policy is moving away from new gas heating in the long term.
              Choosing a heat pump now future-proofs your property and can
              improve its appeal to buyers who care about energy and
              sustainability.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Suitability by Property Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Well-insulated, modern homes:</strong> Heat pumps work
              very well. Low heat loss means a smaller heat pump and lower flow
              temperatures, so radiators or underfloor heating can be sized to
              work efficiently. New builds and recently refurbished homes are
              ideal candidates.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Older, less insulated homes:</strong> A heat pump can
              still work, but the heat loss is higher. You may need a larger
              unit, higher flow temperatures, and more radiator or emitter
              upgrades. Running costs can be higher than in a well-insulated
              house. Many installers and the BUS scheme encourage &quot;fabric
              first&quot; improvements (insulation, glazing) before or alongside
              a heat pump to get the best result. A gas boiler remains a
              practical option if you&apos;re not ready to invest in insulation
              and emitter upgrades.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Flats and small homes:</strong> Air-source heat pumps can
              be installed in flats where there is space for an outdoor unit
              (e.g. balcony or communal area) and often a cylinder. Gas may
              still be the default where a gas supply exists and space is
              tight. Each property is different; an MCS installer can advise
              on feasibility.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              The £7,500 Boiler Upgrade Scheme (BUS) Grant
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In England and Wales, the Boiler Upgrade Scheme offers a grant of
              up to <strong>£7,500</strong> towards the cost of an eligible
              air-source or ground-source heat pump installation. The grant is
              paid to the installer, who passes the saving on to you, so the
              amount you pay is the quoted price minus the grant. To qualify,
              you usually need to own your home (or have landlord consent),
              replace an existing fossil fuel heating system, and use an
              MCS-certified installer who will carry out the work to the
              scheme&apos;s standards.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              The BUS grant makes a heat pump much more affordable. A system
              that might cost £14,000 could drop to £6,500 after the grant,
              bringing it closer to the total cost of a premium boiler plus
              cylinder. Funding is limited and applied for on a first-come,
              first-served basis, so check current availability on the
              official BUS pages. Scotland and Northern Ireland run separate
              schemes—check what support is available in your region.
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
              Estimate Your Heat Pump Size
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you&apos;re leaning towards a heat pump, our free calculator
              uses your property type, floor area, insulation, and region to
              suggest a sensible kW range. It&apos;s not a replacement for an
              MCS heat loss survey, but it helps you sanity-check quotes and
              understand what size system you might need.
            </p>
            <Link
              href="/calculator/heat-pump-size-calculator"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              style={{ backgroundColor: "#E67E22" }}
            >
              Use the Heat Pump Size Calculator
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
              Weigh running costs, upfront cost (including BUS if you qualify),
              and environmental impact against your property and plans. Use our
              heat pump size calculator to get a ballpark kW range, then get
              quotes from both gas boiler and MCS heat pump installers. Ask for
              a heat loss survey if you&apos;re serious about a heat pump—it
              will tell you the exact size and whether your radiators need
              upgrading. Whether you choose a heat pump or a gas boiler, a
              well-sized system and a good installer will keep you comfortable
              for years to come.
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
                href="/calculator/heat-pump-size-calculator"
                className="hover:text-slate-900"
              >
                Heat Pump Calculator
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
