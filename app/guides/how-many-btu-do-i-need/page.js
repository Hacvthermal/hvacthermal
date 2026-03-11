import Link from "next/link";

export const metadata = {
  title: "How Many BTU Do I Need? Room Size Guide | HVACThermal",
  description:
    "Learn how many BTU you need for your room. Clear BTU sizing guidance by room size, ceiling height, insulation level, sun exposure, and windows, plus a free BTU calculator.",
};

export default function HowManyBTUDoINeedPage() {
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
            How Many BTU Do I Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If you are choosing an air conditioner, heat pump, or portable unit,
            the question “how many BTU do I need?” is the best place to start.
            BTU capacity determines whether a room actually reaches the
            temperature you set—or struggles on the hottest days. This guide
            explains what BTU means, the main factors that affect how much you
            need, and gives practical ranges for common room types so you can
            pick a sensible size before you buy.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What BTU Means and Why It Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              BTU stands for British Thermal Unit. In home cooling and heating,
              BTU per hour (BTU/h) measures how much heat an air conditioner or
              heat pump can remove from a space. A 12,000 BTU unit can remove
              roughly twice as much heat as a 6,000 BTU unit in the same time.
              The goal is to match the unit&apos;s BTU output to the amount of
              heat your room gains from the sun, people, appliances, and warm
              outdoor air leaking in.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              When BTU is sized correctly, the system runs steadily and
              efficiently. The room reaches and maintains a comfortable
              temperature without big swings, even during hot afternoons. If the
              BTU rating is too low, the unit runs constantly and still
              struggles on extreme days. If it&apos;s much too high, it may cool
              the air quickly but won&apos;t run long enough to remove humidity,
              leaving the space cold and clammy. Getting BTU sizing right is
              essential for comfort, energy efficiency, and equipment life.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Factors That Affect BTU Requirements
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Room Size (Floor Area)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The starting point is the room&apos;s floor area. In many
              climates, you&apos;ll often see rules of thumb around 20 BTU per
              square foot (roughly 215 BTU per square metre) for typical
              residential spaces. A 250 ft² bedroom might therefore need
              approximately 5,000 BTU, while a 400 ft² living room could need
              closer to 8,000 BTU. Large open-plan rooms and combined spaces
              will need more.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Ceiling Height
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Most quick BTU guides assume a standard ceiling height of around
              8 feet (2.4 m). If your home has high ceilings, vaulted ceilings,
              or double-height spaces, there is more air to condition. In those
              cases you&apos;ll usually want to step up a size or choose a unit
              with additional BTU capacity to match the larger volume.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Insulation and Air Tightness
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Well-insulated homes with modern windows and good air sealing hold
              cool air in and keep hot air out. Older or poorly insulated homes
              lose cool air faster and gain more heat from outside. If your
              space has little insulation, single-glazed windows, or many gaps
              and drafts, expect to move toward the higher end of the BTU range
              for a given room size.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Sun Exposure
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Rooms that face south or west (in the northern hemisphere) receive
              intense afternoon sun, especially if they have large windows.
              These spaces gain much more heat than shaded bedrooms on the
              north side of the home. Sunny rooms often need an extra 10–20%
              BTU capacity compared to shaded rooms of the same size.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Windows and Internal Loads
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Large areas of glass, especially older single-pane windows, allow
              heat to pour into a room. Likewise, equipment and people add
              internal heat. Home offices with multiple monitors, gaming
              setups, or rooms that regularly host several people may need
              additional BTU capacity compared with a lightly used guest room.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              BTU Sizing Table by Room Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The ranges below assume typical ceiling heights, average
              insulation, and mixed sun exposure. If your room is very sunny,
              poorly insulated, or has high ceilings, aim toward the upper end
              of the range—or use the BTU calculator for a more tailored
              result.
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
                    <td className="px-4 py-3">Large bedroom / small living room</td>
                    <td className="px-4 py-3">250–350 ft² (≈23–33 m²)</td>
                    <td className="px-4 py-3">8,000–10,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Living room / lounge</td>
                    <td className="px-4 py-3">350–450 ft² (≈33–42 m²)</td>
                    <td className="px-4 py-3">10,000–12,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Open-plan kitchen–diner</td>
                    <td className="px-4 py-3">400–600 ft² (≈37–56 m²)</td>
                    <td className="px-4 py-3">12,000–18,000 BTU</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Large open-plan living space</td>
                    <td className="px-4 py-3">600–800 ft² (≈56–74 m²)</td>
                    <td className="px-4 py-3">18,000–24,000 BTU</td>
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
              What Happens If You Oversize or Undersize?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              An undersized unit simply does not have enough capacity to keep up
              with the heat entering the room. It may run constantly on hot
              days, yet the temperature still drifts higher than you would like.
              This leads to poor comfort, faster wear on the equipment, and a
              feeling that the system is always &quot;struggling.&quot;
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Oversizing comes with its own problems. A much larger BTU rating
              can cool the air quickly but will often shut off before removing
              enough humidity. That leaves the room cool but damp, which many
              people find uncomfortable. Short run times can also reduce
              efficiency and place extra stress on compressors and fans as they
              start and stop more frequently. In some cases, an oversized unit
              can create drafts and uneven temperatures within the same space.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              The sweet spot is a unit that has enough BTU capacity to handle
              the hottest realistic days in your climate, while still running
              long enough cycles to dehumidify the air. That balance is easier
              to achieve when you use a calculator that accounts for room size,
              location, and other real-world factors instead of relying only on
              generic charts.
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
              Calculate Your Exact BTU Requirement
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free BTU calculator considers your room size, ceiling height,
              insulation, windows, and sun exposure to estimate a suitable BTU
              range for your space. It works for US and international
              homeowners, with both imperial and metric inputs.
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
              Use the table above to find a starting BTU range for your room,
              then plug your details into the calculator for a more precise
              result. If you are installing a split system or whole-home heat
              pump, always ask a qualified contractor to carry out a proper load
              calculation using recognised methods. A unit that is correctly
              sized for your home will run more efficiently, last longer, and
              keep you comfortable through heatwaves and everyday summer
              weather.
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

