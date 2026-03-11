import Link from "next/link";

export const metadata = {
  title: "Combi Boiler vs System Boiler — Which Do You Need? | HVACThermal",
  description:
    "Compare combi and system boilers for UK homes. How they work, pros and cons, property size, hot water demand, cost differences, and a comparison table. Free boiler size calculator.",
};

export default function CombiBoilerVsSystemBoilerPage() {
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
            Combi Boiler vs System Boiler — Which Do You Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            When it&apos;s time to replace your boiler, two options dominate the UK
            market: the combi boiler and the system boiler. Both provide central
            heating and hot water, but they work in different ways and suit
            different homes. This guide explains how each type works, their pros
            and cons, and how to choose based on your property size and hot
            water demand—so you can make an informed decision before you get
            quotes.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Each Type Works
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Combi Boilers
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A combination (combi) boiler is an all-in-one unit that heats your
              radiators and provides hot water on demand. There is no separate
              hot water cylinder or cold water tank in the loft. When you turn
              on a tap or shower, the boiler fires up and heats the water as it
              passes through a heat exchanger, so you get instant hot water
              without storing it. Central heating works in the same way as with
              any boiler: the combi heats water that is pumped around the
              radiators and returns to the boiler. Because everything is in one
              compact box, combis are popular in flats and smaller homes where
              space is limited.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              System Boilers
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A system boiler heats your radiators in the same way but works
              with a separate unvented (pressurised) hot water cylinder, usually
              in an airing cupboard or utility room. The boiler heats water that
              is stored in the cylinder, so when you open a tap you draw from
              that store. System boilers are &quot;sealed&quot; systems: they
              don&apos;t need a cold water tank in the loft, unlike older
              regular (heat-only) boilers. The cylinder holds a large volume of
              hot water, which makes system boilers a strong choice for homes
              with multiple bathrooms or high simultaneous hot water demand.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Pros and Cons of Each
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Combi Boiler: Advantages and Drawbacks
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              <strong>Pros:</strong> Combi boilers are compact and need no
              cylinder or loft tanks, so they free up space and are often
              cheaper to install in a like-for-like swap. You get hot water on
              demand, so there&apos;s no risk of running out of stored water—though
              the flow rate is limited by the boiler&apos;s output, so running
              several taps at once can reduce pressure. They are generally
              efficient because there are no cylinder heat losses. Maintenance
              is straightforward with a single appliance to service.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Cons:</strong> Flow rate is finite; in larger homes with
              two or more bathrooms, a combi may struggle to supply a powerful
              shower and a hot tap at the same time. Performance depends on
              incoming mains pressure. If your mains flow is weak, a combi won&apos;t
              fix that. Combi boilers are also less suitable if you want to add
              solar thermal or other stored-hot-water solutions later, as there
              is no cylinder to integrate with.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              System Boiler: Advantages and Drawbacks
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              <strong>Pros:</strong> The cylinder can store a large amount of
              hot water, so you can run multiple showers and taps at once
              without a drop in flow. System boilers suit larger families and
              homes with several bathrooms. They work well with high-flow
              showers and baths. You can often add solar thermal or other
              renewable inputs to the cylinder. There is no dependence on
              instant boiler output for hot water at peak times.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Cons:</strong> You need space for the cylinder (and
              possibly an expansion vessel). Installation is usually more
              involved and can cost more than a combi swap. The cylinder loses
              some heat over time, so you may use a bit more energy than with a
              combi if hot water demand is low. The cylinder needs occasional
              maintenance (e.g. checking the pressure relief valve and anode).
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Which Is Best by Property Size and Hot Water Demand?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Small flats and 1–2 bedroom homes with one bathroom:</strong> A
              combi is usually the best fit. Space is limited, hot water demand
              is modest, and a 24–28 kW combi can supply a single shower and
              tap without issue. You avoid the cost and space of a cylinder.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>3–4 bedroom homes with one bathroom:</strong> A combi can
              still work well if your mains pressure is good and you don&apos;t
              often run multiple hot outlets at once. Choose a model with
              sufficient kW (often 30–35 kW) for heating and hot water. A system
              boiler becomes attractive if you want a powerful shower and the
              option to run a bath and a tap at the same time.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Larger homes with two or more bathrooms:</strong> A system
              boiler with an appropriately sized cylinder is often the better
              choice. It delivers strong flow to several outlets at once and
              avoids the risk of one shower going cold when someone else turns
              on a tap. Combi boilers can be used in larger properties, but you
              may need to accept lower flow when demand is high or consider
              multiple combis (more complex and costly).
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Combi vs System Boiler: Comparison Table
            </h2>
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
                      Factor
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Combi
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">Hot water</td>
                    <td className="px-4 py-3">On demand, no cylinder</td>
                    <td className="px-4 py-3">Stored in cylinder</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Space needed</td>
                    <td className="px-4 py-3">Boiler only</td>
                    <td className="px-4 py-3">Boiler + cylinder</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Multiple bathrooms</td>
                    <td className="px-4 py-3">Can struggle at peak demand</td>
                    <td className="px-4 py-3">Good for high simultaneous use</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Install complexity</td>
                    <td className="px-4 py-3">Often simpler</td>
                    <td className="px-4 py-3">Cylinder + pipework</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Solar / renewables</td>
                    <td className="px-4 py-3">Harder to integrate</td>
                    <td className="px-4 py-3">Cylinder can accept solar input</td>
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
              Cost Differences
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Combi boilers are often cheaper to buy and install when replacing
              an existing combi or when no cylinder is present. You are fitting
              one appliance and connecting it to the heating system and mains
              cold water. Installation costs vary by region and property, but a
              straightforward combi swap might be in the range of £1,500–£2,500
              including the boiler (excluding high-end models).
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              System boilers typically cost more upfront: you have the boiler
              plus a cylinder, expansion vessel, and additional controls and
              pipework. A full system boiler installation might be £2,500–£4,000
              or more including a quality cylinder. Running costs can be
              slightly higher than a combi due to cylinder heat losses, though
              for a busy household the difference may be small. The right
              choice depends on your hot water usage and whether the extra
              capacity and flow are worth the extra outlay.
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
              Size Your Boiler in Minutes
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Whether you choose a combi or a system boiler, you still need the
              right kW for your heating and hot water demand. Our free boiler
              size calculator uses your property details, radiators, and usage
              to suggest a suitable range—so you can compare quotes with
              confidence.
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
              Use this guide and the comparison table to decide whether a combi
              or system boiler fits your property and lifestyle. Then run your
              details through our boiler size calculator to get a ballpark kW
              range. Get at least three quotes from Gas Safe registered
              installers and ask them to confirm both the boiler type and the
              size they recommend. A well-chosen combi or system boiler will
              keep you warm and supplied with hot water for years to come.
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
