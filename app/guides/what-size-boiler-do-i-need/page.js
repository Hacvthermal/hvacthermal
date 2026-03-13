import Link from "next/link";

export const metadata = {
  title: "What Size Boiler Do I Need? UK Guide 2026 | HVACThermal",
  description:
    "Find the right boiler size for your UK home. Learn about radiators, insulation, property type, and combi vs system boilers. Use our free calculator for accurate sizing.",
};

export default function WhatSizeBoilerDoINeedPage() {
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
            What Size Boiler Do I Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Choosing the right boiler size for your UK home is one of the most
            important decisions you&apos;ll make when replacing or upgrading your
            heating system. Get it wrong and you could face cold radiators,
            lukewarm showers, or—just as bad—sky-high energy bills from an
            oversized boiler. Many homeowners rely on installer estimates alone,
            but understanding the basics yourself helps you spot over-sizing and
            ask the right questions. This guide walks you through the key
            factors and gives you a practical starting point, so you can make an
            informed choice before speaking to installers.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Why Boiler Size Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boiler size is measured in kilowatts (kW). It reflects how much
              heat the boiler can deliver to your radiators and hot water. Too
              small, and your home won&apos;t reach a comfortable temperature on cold
              days; you may also run out of hot water when multiple taps or
              showers are in use. Too large, and the boiler will cycle on and
              off more often, wasting gas and shortening its lifespan. An
              oversized boiler also costs more upfront and can lead to uneven
              heating. For UK homeowners, getting the size right means better
              comfort, lower bills, and a system that lasts. A properly sized
              boiler runs more efficiently and can save you hundreds of pounds
              a year compared to one that&apos;s too big for your needs.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Factors That Affect Boiler Sizing
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Number of Radiators
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Each radiator needs a certain amount of heat. A rough rule of
              thumb is 1–1.5 kW per radiator, depending on size and output. A
              small flat with 5 radiators might need around 10–15 kW for
              heating alone; a large detached house with 15+ radiators could
              need 25–35 kW or more. Always add extra capacity if you plan to add
              radiators later.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              House Age and Construction
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Older UK homes—especially pre-1930s solid-wall properties—lose
              heat quickly. They typically need more kW per square metre than
              modern homes with cavity walls and better insulation. New-build
              homes built to current Building Regulations are far more
              efficient, so a smaller boiler can often do the job.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Insulation
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Loft insulation, double glazing, and cavity or solid wall
              insulation all reduce heat loss. A well-insulated home needs less
              boiler output than a similar-sized property with poor insulation.
              If you&apos;ve recently upgraded your insulation, you may be able to
              downsize when replacing your boiler.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Bathrooms and Hot Water Demand
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Combi boilers heat water on demand, so the more bathrooms and
              showers you have, the higher the flow rate you need. A single
              bathroom might be fine with a 24–28 kW combi; two or more
              bathrooms often need 30–35 kW or more to run a shower and tap
              simultaneously. System and regular boilers use a hot water cylinder
              and are sized differently—capacity depends on cylinder size and
              recovery time.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Boiler Sizing Table by Property Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Use this table as a rough guide. Actual requirements vary with
              insulation, ceiling height, and hot water use. Always get a
              proper heat loss calculation for a final decision.
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
                      Typical Size
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Suggested Boiler (kW)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">1–2 bed flat</td>
                    <td className="px-4 py-3">50–80 m²</td>
                    <td className="px-4 py-3">24–28</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2–3 bed terrace</td>
                    <td className="px-4 py-3">70–100 m²</td>
                    <td className="px-4 py-3">28–30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3–4 bed semi-detached</td>
                    <td className="px-4 py-3">90–120 m²</td>
                    <td className="px-4 py-3">30–35</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">4–5 bed detached</td>
                    <td className="px-4 py-3">150–200 m²</td>
                    <td className="px-4 py-3">35–42</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Large detached (5+ beds)</td>
                    <td className="px-4 py-3">200+ m²</td>
                    <td className="px-4 py-3">40–50</td>
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
              Combi vs System Boilers: Which Affects Sizing?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Combi boilers</strong> provide central heating and hot
              water from a single unit, with no separate cylinder. They&apos;re
              compact and popular in UK homes with limited space. Sizing is
              driven by both heating demand and hot water flow—you need enough
              kW to heat multiple taps or showers at once. A 24 kW combi suits
              smaller homes with one bathroom; 30–35 kW is common for 3–4 bed
              homes with two bathrooms.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>System boilers</strong> work with an unvented hot water
              cylinder, so hot water capacity is separate from heating. The
              boiler size is mainly about heating your radiators; the cylinder
              handles showers and taps. System boilers suit larger homes with
              higher hot water demand and multiple bathrooms. They can be more
              efficient for big families, as the cylinder can store plenty of
              hot water for peak times.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Regular (heat-only) boilers</strong> also use a cylinder
              and often a cold water tank in the loft. They&apos;re typically
              found in older properties. Sizing follows similar principles to
              system boilers, with heating load as the main driver.
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
              Get a Precise Boiler Size in Minutes
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free boiler size calculator uses your property details,
              radiator count, insulation, and hot water needs to recommend a
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
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Next Steps
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Use the sizing table and factors above as a starting point, then
              run your numbers through our calculator for a tailored
              recommendation. When you&apos;re ready, get quotes from at least
              three Gas Safe registered installers. They should perform a proper
              heat loss survey to confirm the right boiler size for your home.
              Don&apos;t be afraid to question a recommendation that seems much
              larger than our calculator suggests—sometimes installers default to
              bigger boilers for a safety margin. Getting the size right from
              the start will keep you warm and your bills manageable for years
              to come.
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
