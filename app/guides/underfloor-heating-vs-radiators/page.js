import Link from "next/link";

export const metadata = {
  title: "Underfloor Heating vs Radiators: Which Is Better? UK Guide | HVACThermal",
  description:
    "Comparing underfloor heating and radiators for UK homes. Costs, efficiency, comfort, and which system suits your property best.",
};

export default function UnderfloorHeatingVsRadiatorsPage() {
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
            Underfloor Heating vs Radiators: Which Is Better?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If you&apos;re weighing up <strong>underfloor heating or radiators</strong>{" "}
            for a UK home, the right answer depends on budget, disruption, comfort,
            your heat source (gas boiler vs heat pump), and how well-insulated the
            property is. Underfloor heating uses a much larger surface area at a
            lower temperature, while radiators deliver heat quickly from
            wall-mounted emitters. In this guide we go deep on{" "}
            <strong>radiators vs underfloor heating UK</strong> decisions: upfront
            cost, typical running costs, suitability for new builds vs retrofits,
            heat distribution, value-add, and what to expect during installation.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How They Work (Quick Overview)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Radiators</strong> circulate hot water through panels that
              heat the air and surfaces in the room. <strong>Wet underfloor heating</strong>{" "}
              circulates warm water through pipes under the floor, while{" "}
              <strong>electric underfloor</strong> uses heating mats or cables. The
              “wet” type is typically considered for whole-home systems, while
              electric UFH is often used in small areas like bathrooms.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              The key practical difference is <strong>water temperature</strong>.
              Traditional radiator systems often run at higher flow temperatures,
              whereas wet UFH is designed to deliver similar room comfort at a
              lower flow temperature (because the floor area is so large). That
              makes UFH a natural match for heat pumps, and it can also help a
              condensing boiler stay in its most efficient mode more often.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Comfort and Heat Distribution
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Underfloor heating tends to feel more even because you&apos;re warming
              the room from a large surface. You usually notice{" "}
              <strong>less draughty air movement</strong> and fewer cold spots,
              especially in open-plan spaces. Radiators can produce warmer areas
              near the emitter and cooler areas further away, but in many UK homes
              that difference is modest once the system is balanced and the room
              is well insulated.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Response time matters too. Radiators typically{" "}
              <strong>warm up faster</strong> and suit “on-demand” heating (for
              example heating a spare room quickly). UFH often has more thermal
              mass (especially in screeded floors), so it rewards{" "}
              <strong>steady scheduling</strong> rather than frequent on/off
              cycles. Low-profile retrofit UFH can respond faster than deep
              screed, but it still tends to be slower than radiators.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Efficiency and Running Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The phrase people search most is{" "}
              <strong>cost of running underfloor heating vs radiators</strong>, and
              the honest answer is: it depends more on heat source and insulation
              than on emitters alone. Wet UFH often runs at lower flow
              temperatures than standard radiators, which can improve efficiency—
              especially with heat pumps and modern condensing boilers. But total
              running cost still comes down to heat loss (insulation, glazing,
              ventilation), thermostat strategy, zoning, and your tariff.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Electric UFH is different: it converts electricity directly into
              heat (near 100% at point of use), but electricity is typically much
              more expensive per kWh than gas in the UK. That is why electric UFH
              is most commonly used as a comfort feature in small areas (like a
              bathroom) rather than as whole-home heating.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Underfloor Heating vs Radiators Cost (UK)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you&apos;re comparing <strong>underfloor heating vs radiators cost</strong>,
              split it into two parts: <strong>installation</strong> (materials +
              labour + disruption) and <strong>running costs</strong> (your heat
              source, temperatures, and controls). The UK ranges below are
              practical ballparks for 2026 projects; your actual quote will vary
              with floor construction, number of zones, access, and whether you
              are renovating anyway.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-slate-700">
                    <th className="px-4 py-3 font-semibold">System (UK)</th>
                    <th className="px-4 py-3 font-semibold">Typical install cost</th>
                    <th className="px-4 py-3 font-semibold">Typical running cost</th>
                    <th className="px-4 py-3 font-semibold">Best use-case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Wet UFH</strong> (hydronic)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      New build / major renovation: roughly{" "}
                      <strong>£70–£120/m²</strong> supplied &amp; fitted. Retrofit
                      low-profile systems often{" "}
                      <strong>£90–£160/m²</strong> due to extra labour and floor
                      build-up work.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Usually <strong>lower</strong> than radiators when paired
                      with a heat pump (low flow temps). With a condensing gas
                      boiler, often similar to radiators, with savings coming
                      mainly from better controls and zoning.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Whole-floor comfort, open-plan spaces, extensions, new
                      builds, heat pump systems.
                    </td>
                  </tr>

                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Electric UFH</strong> (mats/cables)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Often <strong>£50–£100/m²</strong> installed for small areas
                      (bathrooms/kitchens), plus flooring work. Whole-home use is
                      uncommon due to running costs.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Typically <strong>highest</strong> on standard UK tariffs
                      because it runs on electricity. Best treated as a comfort
                      top-up or time-limited zone.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Small rooms, quick retrofit where plumbing changes aren&apos;t
                      practical.
                    </td>
                  </tr>

                  <tr className="align-top">
                    <td className="px-4 py-4 text-slate-900">
                      <strong>Radiators</strong> (water-based)
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      New/replace radiators and adjust pipework: often{" "}
                      <strong>£150–£400 per radiator</strong> fitted (wide range by
                      size and access). Full system re-pipe typically costs more,
                      but is still usually less disruptive than retrofit UFH.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Often <strong>good</strong> with gas boilers. With heat pumps,
                      radiators may need to be upsized (or replaced with low-temp
                      emitters) to keep flow temperatures down.
                    </td>
                    <td className="px-4 py-4 text-slate-600 leading-6">
                      Cost-sensitive upgrades, faster response, easier room-by-room
                      changes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-slate-600 leading-7">
              A realistic way to compare is to ask each installer for: (1) total
              installed cost, (2) expected design flow temperature, (3) number of
              zones, and (4) expected warm-up strategy. That makes comparisons
              between <strong>underfloor heating or radiators</strong> much fairer
              than comparing product prices alone.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Compatibility With Heat Pumps vs Gas Boilers
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you&apos;re planning an air source heat pump, wet UFH is often the
              easiest path to high efficiency because heat pumps are happiest at
              <strong>lower flow temperatures</strong>. Radiators can still work
              well with heat pumps in UK homes, but you may need to{" "}
              <strong>upsize radiators</strong>, improve insulation, or accept a
              warmer flow temperature (which can reduce heat pump efficiency).
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              With a modern condensing gas boiler, both emitters can work well.
              Radiators are common and straightforward. Wet UFH can also run on a
              boiler, typically via a manifold and controls that keep UFH flow
              temperatures appropriate for the floor. The biggest win with either
              system usually comes from <strong>good zoning</strong> and controls.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Which Is Better for Different Property Types?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              “Best” depends on how much disruption you can tolerate and what you
              are trying to optimise (comfort, aesthetics, or cost).
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>New build (UK)</strong>: Wet UFH is often ideal because the
                floor build-up and insulation can be designed around it, and it
                pairs well with heat pumps. Radiators are still fine if you prefer
                faster response or lower complexity.
              </li>
              <li>
                <strong>Retrofit / renovation</strong>: Radiators usually win on
                disruption and cost. UFH can still make sense in a ground-floor
                extension or when you&apos;re already replacing floors. Low-profile
                retrofit UFH is a good compromise where floor heights allow.
              </li>
              <li>
                <strong>Flats</strong>: Electric UFH can be attractive for a single
                bathroom/kitchen refurb, but running costs can be high if used as
                main heating. Radiators (or fan coils in some apartments) are often
                more economical when connected to a boiler or central system.
              </li>
              <li>
                <strong>Large houses</strong>: Zoning becomes critical. Wet UFH
                downstairs with radiators upstairs is a common UK approach that
                balances comfort and cost. In bigger properties, installer design
                quality matters more than emitter choice.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Planning and Installation Time
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Radiator replacements can often be staged room-by-room and completed
              relatively quickly, especially if pipework is already in the right
              places. Whole-system changes (new pipe runs, moving radiators, adding
              zones) take longer, but disruption is still mostly contained to
              walls, floors at pipe routes, and the boiler cupboard.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Wet UFH planning needs more up-front design: manifold location,
              zoning, floor build-up, insulation under the pipes, and floor
              coverings. New build UFH can be quick to lay, but programmes can be
              driven by screed drying times or floor finishes. Retrofit UFH often
              takes longer because existing floors may need removal or levelling,
              plus door thresholds and skirting adjustments.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Which Adds More Value to a UK Home?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Underfloor heating can be a premium feature in UK listings because it
              improves aesthetics (clear walls, no bulky radiators) and comfort.
              It tends to add the most perceived value in open-plan kitchens,
              extensions, and higher-end renovations where buyers expect modern
              finishes.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              That said, a well-designed radiator system with modern controls,
              upgraded insulation, and an efficient heat source can also be very
              attractive—especially if it keeps bills low. If you are renovating on
              a tight budget, focusing on insulation, zoning and a properly sized
              boiler/heat pump often delivers a better return than emitters alone.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Quick Decision Guide
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Choose radiators</strong> for the lowest disruption and
                simpler upgrades, and if you value faster response time.
              </li>
              <li>
                <strong>Choose wet UFH</strong> for the most even comfort, premium
                aesthetics, and best synergy with heat pumps.
              </li>
              <li>
                <strong>Choose electric UFH</strong> for small rooms as a comfort
                upgrade, not as whole-home heating on standard tariffs.
              </li>
              <li>
                <strong>Hybrid approach</strong> (UFH downstairs, radiators upstairs)
                is a common and sensible middle ground in many UK projects.
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
            <h3
              className="text-xl font-bold"
              style={{ color: "#1E3A5F" }}
            >
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Whether you heat with radiators, underfloor heating, or both, the
              boiler still needs to be sized sensibly for your home and hot water
              demand. Use our free boiler size calculator to get a recommended kW
              range before you compare quotes.
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
              Is underfloor heating cheaper to run than radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes. Wet UFH can be cheaper to run when it lets a heat pump
              operate at lower flow temperatures, or when zoning and controls reduce
              wasted heating. But for many gas-boiler homes, the difference between
              UFH and radiators is often smaller than people expect—insulation and
              control strategy usually dominate.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Does underfloor heating work well with boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. A modern condensing boiler can run efficiently with UFH, but it
              should be set up with the right controls and mixing to achieve the
              lower flow temperatures UFH needs.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is underfloor heating suitable for retrofit?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes, but it can be disruptive because floor height and
              construction matter. Low-profile retrofit systems can help, but costs
              are typically higher than replacing radiators.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do radiators heat a room faster than underfloor heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Usually yes. UFH has more thermal mass and a slower response, which is
              why consistent scheduling works well. Radiators respond faster to
              quick changes.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I mix underfloor heating and radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, it&apos;s common to use UFH in key areas (kitchen/diner, extension)
              and radiators elsewhere. The system needs appropriate controls to
              manage different temperature requirements.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Underfloor heating vs radiators cost: which is cheaper overall?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Radiators are usually cheaper to install in UK retrofits, especially
              if pipework is already in place. Wet UFH tends to cost more upfront,
              but can deliver comfort and efficiency benefits—particularly with a
              heat pump or in a renovation where floors are being replaced anyway.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What is the cost of running underfloor heating vs radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For wet systems on a boiler, running costs are often similar for a
              given heat demand, with differences mostly coming from controls and
              flow temperature. For heat pumps, wet UFH often reduces running costs
              because it can achieve comfort at lower temperatures. Electric UFH is
              usually the most expensive to run on standard tariffs, so it&apos;s best
              used in small zones and timed schedules.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Radiators vs underfloor heating UK: which is better for a heat pump?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Wet underfloor heating is often best for heat pumps because it is
              designed for lower flow temperatures. Radiators can still work well
              in UK homes if they are sized for low-temperature operation and the
              home has decent insulation—your heat loss calculation should guide
              the design.
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
