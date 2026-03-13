import Link from "next/link";

export const metadata = {
  title: "How Much Does a Heat Pump Cost UK? 2026 Price Guide | HVACThermal",
  description:
    "UK heat pump costs 2026: air-source and ground-source supply and install prices, running costs vs gas, the £7,500 BUS grant, and factors that affect your quote. Free heat pump size calculator.",
};

export default function HeatPumpCostUKPage() {
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
            How Much Does a Heat Pump Cost in the UK?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Heat pumps are a key part of the UK&apos;s move away from gas and oil
            heating, but the upfront cost can feel daunting. Understanding what
            you&apos;re likely to pay—and how the £7,500 Boiler Upgrade Scheme
            grant can help—makes it easier to plan. This guide covers typical
            supply and install costs for air-source and ground-source heat
            pumps, how running costs compare to a gas boiler, how to apply for
            the grant, and the main factors that affect your final quote.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Average Supply and Install Costs by Heat Pump Type
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Air-Source Heat Pumps
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              An air-source heat pump (ASHP) takes heat from the outside air and
              upgrades it for your central heating and hot water. It&apos;s the
              most common type installed in UK homes. A full system typically
              includes the outdoor unit, an indoor unit or hydraulic module, a
              hot water cylinder, controls, and any radiator or emitter
              upgrades. For an average three- or four-bedroom house, expect to
              pay roughly <strong>£10,000–£18,000</strong> for supply and
              installation before any grants. Smaller properties might come in
              at £8,000–£12,000; larger or more complex homes can exceed
              £20,000. The range reflects different equipment quality, property
              size, and whether you need significant radiator or underfloor
              heating work.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Ground-Source Heat Pumps
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ground-source heat pumps (GSHPs) use pipes buried in the ground
              (horizontal trenches or vertical boreholes) to extract heat. They
              are generally more efficient than air-source in cold weather but
              need more space or drilling, so installation is more involved and
              costly. Supply and install for a typical home often runs from
              <strong> £18,000–£35,000</strong> or more before grants. Borehole
              systems are usually at the upper end because of drilling and
              groundworks. Ground-source is most common in new builds or
              properties with plenty of land; many existing UK homes suit an
              air-source pump and cylinder instead.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Running Cost Comparison vs Gas Boiler
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Whether a heat pump saves you money on bills depends on your
              electricity and gas tariffs and how well your home is insulated.
              Heat pumps use electricity but deliver several units of heat for
              each unit of electricity (a typical COP might be 2.5–3.5). Gas
              boilers are efficient but burn gas, so when gas is cheap and
              electricity is expensive, a boiler can still be cheaper to run.
              When the gap between electricity and gas prices narrows—or you use
              a competitive or off-peak electricity tariff—a heat pump can match
              or beat gas running costs, especially in well-insulated homes
              with low flow temperatures.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              As a rough illustration: at 28p/kWh electricity and 7p/kWh gas, a
              heat pump with a COP of 3 might cost a similar amount per kWh of
              heat as a 90% efficient boiler. Real bills depend on your usage,
              insulation, and exact tariffs. Getting a heat loss survey and
              installer advice will give you a clearer picture. The key point
              is that running costs are no longer automatically higher with a
              heat pump, and they improve as the grid gets greener and heat
              pump tariffs become more common.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              The £7,500 BUS Grant and How to Apply
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The Boiler Upgrade Scheme (BUS) in England and Wales offers a
              grant of up to <strong>£7,500</strong> towards the cost of an
              eligible air-source or ground-source heat pump installation. The
              grant is paid to your installer, who deducts it from the price
              they quote you, so you pay the balance. For example, a system
              quoted at £14,000 might cost you £6,500 after the grant—bringing
              it much closer to the cost of a premium gas boiler and cylinder.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>How to apply:</strong> You don&apos;t apply for the grant
              yourself. You choose an MCS-certified installer who is registered
              for BUS. They will carry out the heat loss survey, design the
              system, and apply for the grant on your behalf. You must own the
              property (or have the owner&apos;s consent), be replacing existing
              fossil fuel heating (e.g. gas or oil boiler), and meet the
              scheme&apos;s eligibility rules. Funding is limited and allocated
              on a first-come, first-served basis, so confirm with your
              installer that they have applied and that the grant is reserved
              before you commit. Scotland and Northern Ireland run separate
              grant schemes—check the latest guidance for your region.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Factors That Affect Your Heat Pump Cost
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Property Size and Heat Loss
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Larger homes with higher heat loss need a larger heat pump and
              more emitters, which increases the equipment and labour cost. A
              small, well-insulated flat might need a 5 kW unit and minimal
              changes; a large detached house might need 12–15 kW and more
              radiator or underfloor upgrades. A proper heat loss survey (MCS
              style) will determine the right size and help you avoid
              over- or under-spending.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Insulation and Fabric
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Improving insulation and airtightness before or alongside a heat
              pump install can reduce the size of the unit you need and the
              flow temperature it must run at. That often means lower upfront
              cost and better running costs. Some installers and schemes
              encourage a &quot;fabric first&quot; approach: loft insulation,
              cavity or solid wall insulation, and better windows can make the
              heat pump install simpler and more effective.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Radiator and Emitter Upgrades
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Heat pumps run most efficiently at lower flow temperatures (e.g.
              35–45 °C). Many existing UK radiators were sized for boiler flow
              at 60–70 °C, so they may need to be replaced or upgraded (e.g.
              double or triple panels, or larger sizes) to deliver enough heat at
              lower temperatures. The cost of radiator upgrades varies by room
              count and existing layout; your installer should include this in
              the quote. Underfloor heating is an alternative that works very
              well with heat pumps but adds to the project cost if retrofitted.
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
              Get a Ballpark Heat Pump Size Before You Quote
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free heat pump size calculator uses your property type, floor
              area, insulation and region to suggest a kW range. Use it to
              sense-check installer quotes and understand what size system your
              home might need—then get a proper MCS heat loss survey for a
              final design.
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
              Next Steps for UK Homeowners
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Use the cost ranges and grant information above to set your
              expectations, then get at least three quotes from MCS-certified
              installers. Ask each for a written quote that includes the heat
              pump, cylinder, controls, and any radiator or other upgrades, and
              confirm whether the £7,500 BUS grant is included in the price
              they give you. Run your property details through our heat pump
              size calculator to get a rough kW range before you meet
              installers—it will help you judge whether their recommendations
              are in the right ballpark. A well-sized heat pump, installed to
              MCS standards, can provide reliable heating and hot water for
              years while cutting your carbon footprint and potentially your
              running costs.
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
