import Link from "next/link";

export const metadata = {
  title: "Underfloor Heating Cost UK 2026: Installation & Running Costs | HVACThermal",
  description:
    "How much does underfloor heating cost in the UK? Complete 2026 guide covering wet and electric UFH installation costs, running costs, and whether it is worth it.",
};

export default function UnderfloorHeatingCostUkPage() {
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
            Underfloor Heating Cost UK 2026: Installation & Running Costs
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Underfloor heating (UFH) is one of the most requested upgrades in UK
            renovations, but the price can vary massively depending on whether you
            choose <strong>wet UFH</strong> (pipes with warm water) or{" "}
            <strong>electric UFH</strong> (mats/cables), and whether you&apos;re doing
            a new build or a retrofit. As a quick headline for 2026 UK projects:
            wet UFH typically lands at around <strong>£50–£150 per m²</strong>{" "}
            installed, while electric UFH is often{" "}
            <strong>£20–£50 per m²</strong> for supply (with installation extra).
            This guide breaks down costs in a practical, quote-ready way: per m²
            ranges, example totals for 20m²/50m²/100m², room-by-room examples,
            running costs, and when UFH is (and isn&apos;t) worth it in the UK.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              1) Wet vs Electric Underfloor Heating (What You’re Paying For)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Wet UFH</strong> (hydronic) uses a manifold, pipe loops and a
              pump/mixing setup (or direct low-temperature feed) to circulate warm
              water beneath the floor. It has higher installation cost and is most
              cost-effective when installed during a new build or major renovation
              (or in a ground-floor extension). It is also a strong match for{" "}
              <strong>heat pumps</strong> because it can deliver comfort at lower
              flow temperatures.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Electric UFH</strong> uses heating mats/cables controlled by
              a thermostat. It is often cheaper and faster to install in small
              rooms (bathrooms, kitchens), but it generally costs more to run per
              kWh than gas. That&apos;s why electric UFH is usually best as a{" "}
              <strong>small-zone comfort upgrade</strong>, not whole-house heating
              on a standard UK tariff.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              2) Underfloor Heating Cost Breakdown (UK Table)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The table below shows realistic 2026 UK cost ranges. Quotes vary by
              region and floor build-up, but these numbers are useful for budgeting
              and for spotting quotes that are missing key items (insulation,
              manifolds, controls, levelling/screed, etc.).
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-slate-700">
                    <th className="px-4 py-3 font-semibold">System</th>
                    <th className="px-4 py-3 font-semibold">Supply cost (per m²)</th>
                    <th className="px-4 py-3 font-semibold">Install cost (per m²)</th>
                    <th className="px-4 py-3 font-semibold">Typical total (per m²)</th>
                    <th className="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Electric UFH mat</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£20–£50</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£20–£60</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£40–£110</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Often best for bathrooms/kitchens. Thermostat and electrical
                      work can shift totals.
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH (new build)</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£25–£60</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£25–£70</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£50–£130</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Lowest-cost wet UFH scenario because floors are being built
                      anyway and access is easy.
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH (retrofit)</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£30–£70</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£40–£90</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      <strong>£70–£160</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Higher labour due to floor removal, levelling, thresholds,
                      skirting/doors, and access constraints.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Typical total costs by floor area
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              These totals assume the per-m² ranges above and include typical
              materials + labour for the UFH system itself (not a full kitchen
              refit, flooring, or major structural work). Use them to sanity-check
              quotes for <strong>20m²</strong>, <strong>50m²</strong> and{" "}
              <strong>100m²</strong>.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-slate-700">
                    <th className="px-4 py-3 font-semibold">System</th>
                    <th className="px-4 py-3 font-semibold">20m² total</th>
                    <th className="px-4 py-3 font-semibold">50m² total</th>
                    <th className="px-4 py-3 font-semibold">100m² total</th>
                    <th className="px-4 py-3 font-semibold">Typical scenario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Electric UFH</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£800–£2,200</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£2,000–£5,500</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£4,000–£11,000</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      Best for small/medium areas; whole-house electric is rarely
                      cost-effective to run.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH (new build)</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£1,000–£2,600</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£2,500–£6,500</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£5,000–£13,000</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      Most cost-effective wet UFH install environment.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH (retrofit)</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£1,400–£3,200</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£3,500–£8,000</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      <strong>£7,000–£16,000</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      Higher disruption: floor prep and access drive labour.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              3) Room-by-Room Cost Examples (UK)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Below are practical examples using the totals above. They are meant
              to help you sanity-check quotes and decide where UFH makes the most
              sense (often bathrooms, kitchens, extensions, and open-plan spaces).
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Kitchen (20m²)</strong>: Electric UFH typically{" "}
                <strong>£800–£2,200</strong>. Wet UFH new build equivalent{" "}
                <strong>£1,000–£2,600</strong>. Wet UFH retrofit often{" "}
                <strong>£1,400–£3,200</strong> if floors need lifting/levelling.
              </li>
              <li>
                <strong>Living room (30m²)</strong>: Electric UFH typically{" "}
                <strong>£1,200–£3,300</strong>. Wet UFH new build{" "}
                <strong>£1,500–£3,900</strong>. Wet UFH retrofit{" "}
                <strong>£2,100–£4,800</strong>.
              </li>
              <li>
                <strong>Whole ground floor (60m²)</strong>: Electric UFH typically{" "}
                <strong>£2,400–£6,600</strong> (install may be feasible, but
                running cost is the issue). Wet UFH new build{" "}
                <strong>£3,000–£7,800</strong>. Wet UFH retrofit{" "}
                <strong>£4,200–£9,600</strong>.
              </li>
              <li>
                <strong>Whole house (100m²)</strong>: Electric UFH typically{" "}
                <strong>£4,000–£11,000</strong> but is rarely sensible to run as
                the sole heat source. Wet UFH new build{" "}
                <strong>£5,000–£13,000</strong>. Wet UFH retrofit{" "}
                <strong>£7,000–£16,000</strong>.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              4) Running Costs Comparison (Per Hour, Per Day, Per Year)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Running costs depend on heat loss, setpoint temperature, hours of
              operation, and energy price. To give you a practical comparison,
              we&apos;ll use typical UK unit prices as a working example:
              <strong> electricity ~28p/kWh</strong> and <strong>gas ~7p/kWh</strong>.
              For heat pumps, we&apos;ll assume a seasonal efficiency of{" "}
              <strong>COP ~3</strong> (so 1kWh of electricity delivers about 3kWh
              of heat). Your tariff and your home&apos;s heat loss will change the
              totals, but the relative picture is usually consistent.
            </p>

            <h3 className="mt-10 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Electric UFH (typical small zone)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many electric mats are around 150W/m² at peak output. If a{" "}
              <strong>10m² bathroom</strong> has 150W/m² installed, the peak power
              is 1.5kW. In real use it cycles on and off; a typical average might
              be 30–60% duty depending on insulation and setpoint.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Per hour (average 0.75kW)</strong>: about{" "}
                <strong>£0.21/hour</strong> at 28p/kWh.
              </li>
              <li>
                <strong>Per day (4 hours)</strong>: about <strong>£0.84/day</strong>.
              </li>
              <li>
                <strong>Per year (4 hours/day, 180 days)</strong>: about{" "}
                <strong>£151/year</strong> for that one 10m² zone.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              Scale matters. Whole-home electric UFH can be very expensive unless
              the property is exceptionally efficient or on a very favourable
              tariff and schedule.
            </p>

            <h3 className="mt-10 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Wet UFH running costs (gas boiler vs heat pump)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Wet UFH is just a way of delivering heat; the cost depends on the
              heat source. In a typical UK home, a well-controlled wet UFH system
              on a condensing boiler can be similar to radiators for the same heat
              demand. Where wet UFH really shines is with heat pumps because it
              reduces the required flow temperature, improving seasonal efficiency.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-slate-700">
                    <th className="px-4 py-3 font-semibold">Heating setup</th>
                    <th className="px-4 py-3 font-semibold">Useful heat delivered</th>
                    <th className="px-4 py-3 font-semibold">Approx cost per kWh of heat</th>
                    <th className="px-4 py-3 font-semibold">Example annual cost*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH + gas boiler</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      12,000kWh heat/year (example home)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>7–9p</strong> (depends on boiler efficiency)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>£840–£1,080/year</strong>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH + heat pump</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      12,000kWh heat/year (example home)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>9–11p</strong> (28p/kWh ÷ COP 2.5–3.2)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>£1,080–£1,320/year</strong>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Radiators (typical) + gas boiler</strong>
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      12,000kWh heat/year (example home)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>7–10p</strong> (depends on design temperature and efficiency)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      ~<strong>£840–£1,200/year</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-6">
              *Example annual cost assumes 12,000kWh of useful heat delivered for
              space heating. Your home could be materially higher or lower.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              5) Factors That Affect UFH Installation Cost (What Moves Quotes)
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Floor type</strong>: Screeded floors in new builds are often
                simplest for wet UFH. Timber joists and existing floors can require
                plates, overlay boards, levelling, and more labour.
              </li>
              <li>
                <strong>Wet vs electric</strong>: Wet UFH needs manifolds, pipe loops,
                hydraulic balancing and integration to the heat source; electric UFH
                needs electrical work and thermostats (and can be cheaper to fit).
              </li>
              <li>
                <strong>New build vs retrofit</strong>: Retrofit typically costs more
                because of floor removal, height build-up constraints, thresholds,
                skirting/doors, and working around occupied rooms.
              </li>
              <li>
                <strong>Number of zones</strong>: More zones mean more loops, actuators,
                wiring and commissioning time. Zoning can reduce running costs but
                increases install cost.
              </li>
              <li>
                <strong>Thermostat controls</strong>: Simple thermostats are cheaper;
                smart zoning and app control add cost but can improve comfort and reduce
                wasted heating.
              </li>
              <li>
                <strong>Labour costs by region</strong>: London and the South East are
                typically higher. Access (parking, stairs, restricted hours) can
                add labour time.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              6) Is Underfloor Heating Worth It in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              UFH can be worth it for comfort, aesthetics, and future-proofing—especially
              in homes moving toward low-temperature heating. But it isn&apos;t always the
              best spend.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold" style={{ color: "#1E3A5F" }}>
                  Pros
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600 leading-7">
                  <li>Even, comfortable heat distribution</li>
                  <li>Free wall space (no radiators)</li>
                  <li>Excellent match for heat pumps</li>
                  <li>Great for open-plan kitchens/extensions</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold" style={{ color: "#1E3A5F" }}>
                  Cons
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600 leading-7">
                  <li>Higher upfront cost (especially retrofit wet UFH)</li>
                  <li>Can be disruptive: floor build-up, thresholds, drying times</li>
                  <li>Slower response time than radiators in many installations</li>
                  <li>Floor covering choices can limit output</li>
                </ul>
              </div>
            </div>
            <h3 className="mt-10 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Which property types benefit most?
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>New builds</strong> and major refurbishments</li>
              <li><strong>Ground-floor extensions</strong> and open-plan spaces</li>
              <li><strong>Homes installing heat pumps</strong> (or preparing to)</li>
            </ul>
            <h3 className="mt-10 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When it does NOT make sense
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                If you&apos;re not renovating floors and the retrofit disruption is too high
              </li>
              <li>
                If you need very fast on/off heating and don&apos;t want to schedule
              </li>
              <li>
                If you plan whole-house <strong>electric UFH</strong> on a standard tariff
                in an average-insulated home (running costs can be steep)
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              7) Underfloor Heating With Heat Pumps (Why It’s a Perfect Match)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pumps are most efficient at lower flow temperatures. Wet UFH is
              designed to provide comfortable room temperatures with lower flow
              temperatures than many traditional radiator systems, so the heat pump
              can operate with a higher seasonal COP and lower running cost per kWh
              of heat.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Flow temperature requirements</strong> depend on design, but the
              principle is simple: the lower the flow temperature needed to maintain
              comfort, the more efficiently the heat pump runs. UFH helps because the
              floor area is huge compared to wall emitters. If you&apos;re moving to a heat
              pump, UFH (or appropriately sized low-temperature radiators) should be
              designed from a heat loss calculation rather than guesswork.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Cost savings potential</strong> comes from better seasonal
              efficiency and zoning. The biggest wins are usually achieved when UFH
              is paired with good insulation and smart controls—not simply by changing
              emitters.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              8) How to Save Money on UFH Installation
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Get 3 quotes</strong> and compare like-for-like: number of zones,
                insulation included, manifold/controls included, floor build-up detail.
              </li>
              <li>
                <strong>Install during a new build or renovation</strong> when floors are
                already being replaced—this is usually the cheapest time to add wet UFH.
              </li>
              <li>
                <strong>Use electric UFH for small areas only</strong> (bathrooms) and
                keep it on timers rather than running as whole-house heating.
              </li>
            </ul>
          </section>
          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free boiler size calculator uses your property details,
              radiator count, insulation and hot water needs to recommend a
              suitable kW range. No sign-up required—get results in seconds.
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
              How much does underfloor heating cost per m² in the UK (2026)?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              As a practical budgeting range, wet UFH is often around{" "}
              <strong>£50–£150 per m² installed</strong> (new build at the lower end,
              retrofit at the higher end). Electric UFH mats are often{" "}
              <strong>£20–£50 per m²</strong> to supply, with installation and controls
              bringing typical installed totals to roughly <strong>£40–£110 per m²</strong>.
              Your floor type, zones, and region can shift the final quote.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is wet UFH cheaper to run than electric UFH?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              In most UK homes, yes—especially for whole-house heating. Wet UFH is
              typically powered by gas (boiler) or a heat pump, both of which usually
              deliver heat at a lower cost per kWh than direct electric heating on a
              standard tariff. Electric UFH is best used for small zones and timed
              comfort, not as the main heating source for a typical house.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does wet underfloor heating work with a combi boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Wet UFH can work with a combi boiler when the system is designed
              correctly: appropriate floor output, correct flow temperatures, and the
              right manifold/controls (often including mixing). The installer should
              base the design on a heat loss calculation rather than rules of thumb.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How much does it cost to run electric underfloor heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on the area, the installed wattage (often ~150W/m²), insulation,
              and how many hours it runs. As a quick example, a 10m² zone averaging
              0.75kW would cost about <strong>21p per hour</strong> at 28p/kWh, or about{" "}
              <strong>£0.84/day</strong> if run for 4 hours. Whole-house electric UFH can
              become expensive quickly, which is why it is typically used in smaller rooms.
            </p>
            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is underfloor heating cheaper than radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Installation is usually <strong>more expensive</strong> than radiators in a UK
              retrofit, because floors are involved. Running costs can be similar on a gas
              boiler for the same heat demand, but wet UFH can be cheaper with heat pumps
              because it supports lower flow temperatures and higher seasonal efficiency.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does underfloor heating add value to a house in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can, particularly in higher-end renovations, open-plan kitchens, and
              extensions where comfort and clean wall lines matter to buyers. However, value
              uplift depends on overall finish quality and the rest of the heating system
              (controls, insulation, efficient heat source). Think of UFH as a premium comfort
              feature rather than a guaranteed ROI.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is underfloor heating a good match for heat pumps?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Wet UFH is often considered a perfect match because it can deliver comfort
              with lower flow temperatures, allowing a heat pump to run more efficiently. You
              still need a proper heat loss calculation and good insulation to get the best
              performance.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What is the cheapest way to install underfloor heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The cheapest time is during a new build or major renovation when floors are being
              built or replaced. For retrofits, keep zones targeted (for example the kitchen
              extension), use low-profile systems where appropriate, and get itemised quotes so
              you can compare like-for-like.
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
              <Link href="/#calculators" className="hover:text-slate-900">Calculators</Link>
              <Link href="/calculator/boiler-size-calculator" className="hover:text-slate-900">Boiler Calculator</Link>
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
