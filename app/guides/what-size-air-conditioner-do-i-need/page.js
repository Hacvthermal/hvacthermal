import Link from "next/link";

export const metadata = {
  title: "What Size Air Conditioner Do I Need? BTU Sizing Guide | HVACThermal",
  description:
    "Find the right air conditioner size for your room. Learn how BTU and tonnage work, key sizing factors, a room-type table, and window vs split vs central AC. Free BTU calculator.",
};

export default function WhatSizeAirConditionerDoINeedPage() {
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
              href="/#guides"
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
              href="/calculator/btu-calculator"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ backgroundColor: "#E67E22" }}
            >
              BTU Calculator
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
            What Size Air Conditioner Do I Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Choosing the right size air conditioner is one of the most important
            steps when cooling a single room or a whole home. Too small, and the
            unit runs non-stop without ever reaching the temperature you want. Too
            large, and you get short cycles, poor humidity control, and higher
            upfront and running costs. This guide explains how AC sizing works,
            how BTU and tonnage relate, and what to consider so you can pick a
            unit that fits your space and climate—whether you&apos;re in the US or
            elsewhere.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Air Conditioner Sizing Works
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Air conditioners are sized by their cooling capacity: how much heat
              they can remove from the indoor air per hour. That capacity is
              expressed in BTU per hour (BTU/h) in the US and many other
              countries, or in kilowatts (kW) in metric markets. The idea is to
              match the unit&apos;s capacity to the cooling load of the space—the
              heat that enters the room from the sun, outdoor air, people,
              lights, and appliances. When capacity and load are well matched,
              the AC runs in longer, steady cycles, keeps humidity under
              control, and uses energy efficiently.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Sizing is not about making the room cold as fast as possible. An
              oversized unit will cool the air quickly and then shut off, often
              before it has removed enough moisture, so the room can feel damp
              and clammy. A correctly sized system runs more of the time at a
              moderate rate, which improves comfort and equipment life. That&apos;s
              why taking room size, insulation, climate, and sun exposure into
              account matters more than picking the biggest unit that fits your
              budget.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              BTU vs Tonnage Explained
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In the US, you&apos;ll often see air conditioners described in
              &quot;tons&quot; as well as BTU. One ton of cooling equals 12,000
              BTU per hour—a unit left over from the days when cooling was
              measured by the amount of ice (in tons) that would melt in a day
              to produce the same cooling effect. So a 1.5-ton AC has a capacity
              of 18,000 BTU/h, a 2-ton unit is 24,000 BTU/h, and a 3-ton system
              is 36,000 BTU/h.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Window units and smaller ductless mini-splits are usually sold in
              BTU (e.g. 6,000, 8,000, 12,000 BTU). Central air systems are
              often discussed in tons because they serve the whole house. When
              comparing units, convert to the same unit: divide BTU by 12,000 to
              get tons, or multiply tons by 12,000 to get BTU. Our BTU
              calculator works in BTU and helps you find a suitable range
              regardless of whether you end up with a window unit, a split, or
              central AC.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Factors That Affect AC Size
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Room Size
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The main driver of cooling load is floor area. A common rule of
              thumb is about 20 BTU per square foot of living space for
              average conditions—so a 200 ft² room might need around 4,000 BTU,
              and a 400 ft² room roughly 8,000 BTU. High ceilings increase the
              volume of air to cool, so you may need to step up capacity for
              vaulted or double-height spaces.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Climate
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Hotter, more humid climates put a higher load on the AC. A room
              in Arizona or Florida will need more BTU than the same room in
              the Pacific Northwest or northern Europe. Design temperatures and
              local standards vary by region; a good calculator or installer
              will use climate-appropriate assumptions so you don&apos;t
              undersize in a hot area or oversize in a mild one.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Insulation and Windows
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Well-insulated walls and roofs and modern, low-e windows reduce
              heat gain from outside. Poor insulation, single-pane windows, and
              large areas of glass—especially facing south or west—add
              significant load. If your room has big windows or weak insulation,
              aim toward the upper end of the BTU range for that size, or use a
              calculator that asks about insulation and sun exposure.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Sun Exposure
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Rooms that get direct afternoon sun gain much more heat than
              shaded rooms. A south- or west-facing bedroom or living room often
              needs 10–20% more capacity than a similar north-facing room.
              Consider orientation and shading when choosing your BTU range.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              AC Sizing Table by Room Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The table below gives typical BTU ranges for common room types
              under average conditions. Use it as a starting point; adjust up for
              hot climates, strong sun, or poor insulation, and use a BTU
              calculator for a more accurate estimate.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr
                    className="border-b border-slate-200"
                    style={{ backgroundColor: "rgba(30,58,95,0.08)" }}
                  >
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Room Type
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Approx. Area
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Suggested BTU Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">Small bedroom / office</td>
                    <td className="px-4 py-3">Up to 150 ft² (≈14 m²)</td>
                    <td className="px-4 py-3">5,000–6,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Standard bedroom</td>
                    <td className="px-4 py-3">150–250 ft² (≈14–23 m²)</td>
                    <td className="px-4 py-3">6,000–8,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living room / lounge</td>
                    <td className="px-4 py-3">250–400 ft² (≈23–37 m²)</td>
                    <td className="px-4 py-3">8,000–12,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Open-plan kitchen–living</td>
                    <td className="px-4 py-3">400–550 ft² (≈37–51 m²)</td>
                    <td className="px-4 py-3">12,000–16,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Large open space / small flat</td>
                    <td className="px-4 py-3">550–800 ft² (≈51–74 m²)</td>
                    <td className="px-4 py-3">16,000–24,000 BTU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Happens If You Undersize or Oversize?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              An undersized air conditioner never quite catches up with the
              heat load. It may run continuously on hot days while the
              temperature slowly creeps up. That leads to discomfort, higher
              electricity use as the compressor never cycles off, and extra wear
              on the equipment. In very hot or humid regions, undersizing can
              make the space feel sticky and unpleasant even when the unit is
              running at full blast.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              An oversized unit cools the air so quickly that it satisfies the
              thermostat in short bursts. It doesn&apos;t run long enough to
              remove much humidity, so the room can feel cold and damp. Short
              cycling also wastes energy and can shorten the life of the
              compressor. The goal is a unit that runs in longer cycles,
              maintains steady temperature and humidity, and matches your
              actual cooling load—which is why using a calculator or a proper
              load calculation is better than guessing high.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Window vs Split vs Central AC: How Sizing Differs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Window units</strong> are typically used for a single
              room. You size them by the room&apos;s BTU requirement—use the
              same factors (size, sun, insulation) and the table or calculator
              to pick a BTU rating. They are sold in fixed steps (e.g. 5,000,
              6,000, 8,000, 10,000, 12,000 BTU). Choose the size that best
              matches your calculated need; avoid going much higher &quot;to be
              safe.&quot;
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Ductless mini-splits (split systems)</strong> can cool one
              or several rooms. For a single indoor head, size the unit to that
              room&apos;s load, same as a window unit. For multiple heads, a
              qualified installer will perform a whole-home or multi-room load
              calculation and size the outdoor unit and each head accordingly.
              Oversizing one head in a multi-zone system can cause short
              cycling and uneven comfort.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Central air conditioning</strong> serves the entire
              house through ductwork. Sizing is based on the total cooling load
              of all conditioned spaces and is usually expressed in tons (e.g.
              2, 2.5, 3 tons). This requires a proper load calculation—often
              using Manual J in the US or equivalent standards elsewhere—rather
              than simple square-foot rules. Contractors use software that
              accounts for orientation, insulation, windows, and local climate.
              Our BTU calculator can still help you understand the ballpark
              total BTU your home might need, which you can convert to tons
              (divide by 12,000) for initial planning.
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
              Get a BTU Recommendation for Your Room
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free BTU calculator uses your room size, ceiling height,
              insulation, windows, and sun exposure to suggest a suitable BTU
              range for your space. It works for window units, single-room
              splits, and gives you a starting point for larger projects. US and
              international units supported.
            </p>
            <Link
              href="/calculator/btu-calculator"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              style={{ backgroundColor: "#E67E22" }}
            >
              Use the BTU Calculator
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
              Use the table and factors above to narrow down a BTU range for
              your room, then run the numbers through our calculator for a more
              tailored result. For a single room, that’s often enough to choose
              a window unit or mini-split size. For whole-house central AC,
              treat the calculator as a sanity check and always get a proper
              load calculation from a qualified HVAC contractor before
              installing. A correctly sized air conditioner will keep you
              comfortable, control humidity, and run efficiently for years.
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
              <Link href="/calculator/btu-calculator" className="hover:text-slate-900">
                BTU Calculator
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
