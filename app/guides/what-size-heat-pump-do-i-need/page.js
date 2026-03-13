import Link from "next/link";

export const metadata = {
  title: "What Size Heat Pump Do I Need? UK Sizing Guide | HVACThermal",
  description:
    "Learn what size heat pump you need for a UK home. Understand floor area, insulation, property age, region, radiator compatibility, flow temperatures, BUS grant eligibility and why you need an MCS heat loss survey.",
};

export default function WhatSizeHeatPumpDoINeedPage() {
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
            What Size Heat Pump Do I Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Moving from a gas or oil boiler to a heat pump is a big step for any
            UK homeowner. One of the first questions people ask is, &quot;What
            size heat pump do I need for my house?&quot; Unlike boilers, which
            are often oversized, a heat pump needs to be carefully matched to
            your property&apos;s actual heat loss. This guide explains how heat
            pump sizing works, what installers look at, and how you can get a
            realistic kW range before you spend thousands of pounds on a
            system.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Heat Pump Sizing Works (and Why It Differs from Boilers)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pumps are usually sized much closer to the true heating
              demand of your home than traditional boilers. A gas boiler can
              modulate down and is often installed with generous oversizing,
              which simply means it cycles on and off more often. While this
              isn&apos;t ideal, it is fairly forgiving. With a heat pump,
              oversizing can increase upfront cost and reduce efficiency, while
              undersizing can leave you relying on expensive electric back-up or
              struggling to maintain comfort in cold snaps.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A correctly sized heat pump is designed to meet your property&apos;s
              heat loss at a chosen design temperature, often around -2 °C to
              -3 °C for much of England and milder parts of the UK, and lower
              for colder regions. The installer calculates how much heat your
              home loses through walls, roof, windows, and ventilation, then
              matches the heat pump&apos;s output at your target flow
              temperature. This is why proper calculations—and not just rules of
              thumb—are so important.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Factors That Affect Heat Pump Size
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Floor Area and Layout
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              As a rough guide, many UK homes fall somewhere between 40 and
              70 watts per square metre of heated floor area, depending on age
              and insulation. A small, well-insulated flat might only need 3–4
              kW, while a larger, leakier detached home might need 10–14 kW or
              more. Open-plan layouts allow heat to move more freely, whereas
              lots of small rooms and corridors can make distribution trickier.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Property Age and Construction
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              New-build homes built to modern standards often have relatively
              low heat loss, so they can be served by smaller heat pumps, even
              if the floor area is quite large. Older solid-wall properties and
              homes with single glazing or uninsulated roofs lose heat more
              quickly, pushing the required kW higher. Knowing whether you have
              cavity or solid walls, and any retrofit insulation, is a key input
              for accurate sizing.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Insulation and Airtightness
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Loft insulation, cavity fill, floor insulation and quality
              windows all reduce the amount of heat your home needs in winter.
              Before investing in a heat pump, many experts recommend tackling
              the &quot;fabric first&quot;: improving insulation and airtightness
              so that you can install a smaller, more efficient unit. This often
              improves comfort straight away and can make the heat pump install
              more straightforward and cost-effective.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Region and Design Temperature
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A mid-terrace in Cornwall experiences very different winter
              conditions to a similar home in the Scottish Highlands. MCS design
              standards use regional weather data to choose an appropriate
              design temperature. Colder regions require higher output, so the
              same house in northern Scotland might need a larger heat pump than
              one in the south of England. This is another reason why
              location-specific calculations matter.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Heat Pump Sizing Table by Property Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The ranges below give a rough idea of typical heat pump sizes for
              UK homes with at least reasonable insulation. They are not a
              substitute for a full heat loss survey, but they can help you
              sense-check quotes and understand where your property might sit.
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
                      Property Type
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Approx. Floor Area
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Typical Heat Pump Size
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">1–2 bed flat (modern)</td>
                    <td className="px-4 py-3">40–70 m²</td>
                    <td className="px-4 py-3">3–5 kW</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2–3 bed terrace / end-terrace</td>
                    <td className="px-4 py-3">70–100 m²</td>
                    <td className="px-4 py-3">5–8 kW</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3–4 bed semi-detached</td>
                    <td className="px-4 py-3">90–130 m²</td>
                    <td className="px-4 py-3">7–10 kW</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">4–5 bed detached</td>
                    <td className="px-4 py-3">130–180 m²</td>
                    <td className="px-4 py-3">9–14 kW</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Large detached / rural home</td>
                    <td className="px-4 py-3">180–250+ m²</td>
                    <td className="px-4 py-3">12–18 kW+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              These figures are indicative only. Actual requirements depend on
              insulation, airtightness, glazing, region, and design flow
              temperature.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Radiator Compatibility and Flow Temperatures
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pumps work best with lower flow temperatures than boilers,
              often in the 35–50 °C range rather than the 70–80 °C many UK
              systems run at. Lower temperatures make the heat pump more
              efficient (higher COP) but require larger heat emitters to deliver
              the same room comfort. That is why many installs include upsizing
              some radiators or adding underfloor heating in key areas.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              During design, your installer will check each room&apos;s heat
              loss and compare it to the output of its radiator at the chosen
              flow temperature. In some rooms you may only need to swap one or
              two radiators for double panels; in others you may already have
              enough surface area. Understanding this link between emitter size
              and flow temperature is crucial—otherwise you may end up running
              the heat pump hotter than ideal, which reduces efficiency and can
              increase running costs.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              BUS Grant Eligibility (£7,500)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In England and Wales, the Boiler Upgrade Scheme (BUS) currently
              offers a grant of up to £7,500 towards the cost of an eligible
              air-source or ground-source heat pump installation. The scheme is
              designed to help homeowners move away from fossil fuel heating.
              To qualify, you usually need to own the property, be replacing an
              existing fossil fuel system, and use an MCS-certified installer.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              While the grant doesn&apos;t directly change your heat pump size,
              it makes properly designed systems much more affordable. A good
              installer will size the heat pump based on a heat loss survey and
              handle the BUS paperwork for you. Scotland and Northern Ireland
              have separate schemes, so always check the latest local support
              available in your region.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Why You Need an MCS Heat Loss Survey
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              For BUS funding and most reputable installations, an MCS-compliant
              heat loss calculation is mandatory. The survey looks at every room
              in your home: floor area, wall construction, glazing, ventilation,
              roof type and more. From this, the designer calculates how many
              kilowatts of heat you need at the design temperature and chooses a
              heat pump model and emitter upgrades to match.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              This process may feel detailed, but it protects you from guesswork
              and ensures your system is sized for real-world conditions, not
              optimistic assumptions. If an installer is prepared to quote
              without a proper survey, that&apos;s a red flag. Ask to see the
              heat loss report and make sure you understand the key numbers: the
              design heat loss in kW and the chosen flow temperature.
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
              Estimate Your Heat Pump Size in Minutes
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free heat pump size calculator uses your property type, floor
              area, insulation level and region to suggest a sensible kW range
              for a UK home. It&apos;s not a replacement for a full MCS survey,
              but it&apos;s a powerful way to sanity-check quotes and understand
              what to expect before you speak to installers.
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
              Start by using an online calculator to get a ballpark kW range,
              then speak to one or more MCS-accredited installers about a full
              heat loss survey. Ask how your existing radiators will perform at
              lower flow temperatures and whether any upgrades are recommended.
              Finally, confirm BUS grant eligibility and total installed cost.
              A well-sized heat pump can provide steady, comfortable warmth with
              lower carbon emissions for many years—getting the sizing right is
              the foundation for a successful project.
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

