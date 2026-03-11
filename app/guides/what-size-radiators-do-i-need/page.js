import Link from "next/link";

export const metadata = {
  title: "What Size Radiators Do I Need? UK Sizing Guide | HVACThermal",
  description:
    "UK radiator sizing: BTU and watts, room size, heat loss, insulation, single vs double panel, and heat pump flow temperatures. Table by room type. Free boiler size calculator.",
};

export default function WhatSizeRadiatorsDoINeedPage() {
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
            What Size Radiators Do I Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Choosing the right size radiators keeps your rooms warm and your
            heating system efficient. In the UK, radiator output is usually
            quoted in BTU (British Thermal Units) or watts, and it must match
            the heat loss of each room. This guide explains how radiator sizing
            works, the main factors that affect it, a simple table by room type,
            the difference between single and double panel radiators, and how
            heat pumps change the game—so you can plan a replacement or new
            install with confidence.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Radiator Sizing Works: BTU and Watts
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Radiators are sized by their heat output—how much warmth they
              give out at a given flow temperature. In the UK you&apos;ll see
              output in <strong>BTU per hour (BTU/h)</strong> or{" "}
              <strong>watts (W)</strong>. The conversion is straightforward: 1
              watt ≈ 3.41 BTU/h, so a 1000 W radiator is roughly 3,410 BTU/h.
              The idea is simple: the total output of the radiators in a room
              should meet or slightly exceed the room&apos;s heat loss on a cold
              design day, so the space stays at a comfortable temperature
              (typically 21 °C) when it&apos;s cold outside (e.g. -1 °C to -3 °C
              in much of England).
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Radiator output depends on the flow temperature from the boiler
              or heat pump. Manufacturers publish output at standard conditions
              (e.g. 75 °C flow, 65 °C return for a &quot;Delta T 50&quot; or
              &quot;ΔT50&quot; rating). If your system runs at lower flow
              temperatures—common with heat pumps—the same radiator delivers
              less heat, so you may need a larger radiator or an extra panel.
              Always check the output at the flow temperature you plan to use.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Factors: Room Size, Heat Loss, and Insulation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Room size and volume:</strong> Larger rooms lose more
              heat, so they need more radiator output. Floor area is the usual
              starting point; ceiling height matters too—high or vaulted
              ceilings increase the volume of air to heat.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Heat loss:</strong> Each room loses heat through external
              walls, windows, the roof (if it&apos;s a top-floor room), and the
              floor (if it&apos;s above an unheated space). North-facing rooms
              and those with large windows or poor insulation lose more. A
              proper heat loss calculation multiplies the area of each surface
              by a &quot;U-value&quot; (how easily heat passes through) and
              adds ventilation loss—that gives the room&apos;s heat demand in
              watts or BTU/h.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Insulation:</strong> Well-insulated walls, double glazing,
              and good loft insulation cut heat loss, so you need less radiator
              output. Older solid-wall homes with single glazing need
              significantly more output per square metre than modern
              well-insulated rooms. When you upgrade insulation, you can often
              downsize radiators when you next replace them.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Radiator Sizing Table by Room Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The table below gives typical radiator output ranges for common
              UK room types, assuming average insulation and a boiler flow
              temperature of 70 °C. Use it as a starting point; actual heat
              loss varies with windows, orientation, and construction.
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
                      Approx. Size
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Typical Output Needed
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">Small bedroom / box room</td>
                    <td className="px-4 py-3">8–10 m²</td>
                    <td className="px-4 py-3">600–900 W (2,000–3,100 BTU/h)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Standard bedroom</td>
                    <td className="px-4 py-3">12–16 m²</td>
                    <td className="px-4 py-3">900–1,400 W (3,100–4,800 BTU/h)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bathroom</td>
                    <td className="px-4 py-3">4–8 m²</td>
                    <td className="px-4 py-3">500–1,000 W (1,700–3,400 BTU/h)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living room / lounge</td>
                    <td className="px-4 py-3">18–28 m²</td>
                    <td className="px-4 py-3">1,800–2,800 W (6,100–9,500 BTU/h)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Kitchen</td>
                    <td className="px-4 py-3">10–16 m²</td>
                    <td className="px-4 py-3">800–1,400 W (2,700–4,800 BTU/h)</td>
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
              Single vs Double Panel Radiators
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Single panel radiators</strong> have one layer of
              convector fins behind a single front panel. They are slimmer and
              cheaper but give less output for the same length. They suit
              smaller rooms, narrow walls, or where heat demand is low.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Double panel (or double convector) radiators</strong> have
              two panels and two sets of fins, so they put out more heat for
              the same wall space. A double panel radiator might deliver 50–80%
              more output than a single panel of the same size. They are the
              default choice for most living rooms and bedrooms where you need
              higher output. If you&apos;re short on wall space, going double
              panel lets you meet the room&apos;s heat demand with a shorter or
              smaller radiator. When replacing an old single with a double, you
              can often use a shorter length and still improve output.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Heat Pumps Affect Radiator Sizing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pumps run most efficiently at lower flow temperatures—
              typically 35–45 °C for heating, compared with 60–75 °C for many
              gas boilers. At lower flow temperatures, a given radiator
              delivers less heat, because the difference between the radiator
              surface and the room is smaller. So for the same room heat loss,
              you need either more radiator surface area (e.g. a larger
              radiator, double instead of single, or an extra radiator) or a
              different emitter such as underfloor heating.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              When switching from a gas boiler to a heat pump, installers
              usually do a room-by-room heat loss calculation and then check
              each radiator&apos;s output at the design flow temperature (e.g.
              45 °C). If the existing radiator is too small, they will
              recommend an upgrade. Well-insulated homes need less output per
              room, which makes it easier to keep existing radiators or make
              only small changes. If you&apos;re planning a heat pump, factor in
              possible radiator upgrades when budgeting.
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
              Size Your Boiler to Match Your Radiators
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Your boiler must be able to supply enough heat to all your
              radiators and hot water. Use our free boiler size calculator to
              get a recommended kW range based on your property, radiator
              count, and usage—so your whole system is balanced.
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
              Use the table and factors above to get a ballpark output for each
              room, then check radiator catalogues for models that meet that
              output at your flow temperature. For a new build or major
              refurbishment, ask for a proper heat loss calculation so
              radiators are sized accurately. When replacing a boiler with a
              heat pump, get the installer to confirm whether your existing
              radiators are suitable at low flow temperatures or need upgrading.
              Pair your radiator choices with a correctly sized boiler using
              our calculator—then you&apos;ll have a system that keeps every
              room comfortable without wasting energy.
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
