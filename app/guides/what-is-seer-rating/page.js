import Link from "next/link";

export const metadata = {
  title: "What Is SEER Rating? AC Efficiency Guide | HVACThermal",
  description:
    "Learn what SEER rating means, how it's calculated, why it matters for AC running costs, US minimum SEER by region, SEER2, and a comparison table. Free BTU calculator.",
};

export default function WhatIsSEERRatingPage() {
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
            What Is SEER Rating?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            When you shop for an air conditioner or heat pump in the US, you&apos;ll
            see SEER on the label—and often SEER2 as well. SEER tells you how
            efficiently the system turns electricity into cooling over a full
            season, which directly affects your energy bills. This guide
            explains what SEER means, how it&apos;s calculated, why it matters, how
            US minimums vary by region, and how SEER2 fits in—so you can compare
            units and make a smarter choice for your home.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What SEER Means and How It&apos;s Calculated
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              SEER stands for <strong>Seasonal Energy Efficiency Ratio</strong>.
              It measures how much cooling (in BTU) a central air conditioner or
              air-source heat pump delivers over a typical cooling season,
              divided by how much electrical energy (in watt-hours) it uses in
              that same period. The formula is: total cooling output (BTU) ÷
              total electrical input (watt-hours). So a unit that delivers
              36,000 BTU of cooling while using 3,000 watt-hours of electricity
              has a SEER of 12. The higher the SEER, the more cooling you get
              per unit of electricity—so a SEER 18 system is more efficient
              than a SEER 14 system.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              SEER is a &quot;seasonal&quot; average because it assumes a range of
              outdoor temperatures and part-load operation over a representative
              season, not just one test condition. That makes it a more
              realistic efficiency number for comparing systems. In the US,
              SEER is determined under federal test procedures so that
              different brands and models can be compared fairly. Ductless
              mini-splits and central systems both carry SEER ratings when
              they fall under the same regulations.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Why SEER Matters for Running Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A higher SEER rating means the system uses less electricity to
              produce the same amount of cooling. For a given cooling load and
              number of run hours, a SEER 18 unit will use roughly 20% less
              electricity than a SEER 15 unit, and about 33% less than a SEER
              12. Over the life of the system, that difference can add up to
              hundreds or thousands of dollars in savings, depending on your
              climate, electricity rate, and usage.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              SEER doesn&apos;t tell you the right size (BTU) for your home—you
              still need to match capacity to your cooling load. But once you
              know the size you need, choosing a higher SEER within your budget
              will reduce your annual cooling cost. In hot climates where the
              AC runs for many hours, investing in a higher SEER often pays
              back quickly; in milder regions the payback may be longer but
              efficiency still lowers bills and carbon impact.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Minimum SEER Requirements by US Region
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              US federal standards set minimum SEER levels for central air
              conditioners and air-source heat pumps. As of January 2023, the
              nationwide minimum for new split-system central AC and heat pumps
              is <strong>14 SEER</strong> in the North and <strong>15 SEER</strong> in
              the South and Southwest (the &quot;South&quot; region includes
              states where cooling load is high). So you cannot legally install
              a new central system below those levels—older units with lower
              SEER can remain in use until they are replaced.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Many states adopt the federal minimums; some have no additional
              requirements. A few states or localities set stricter efficiency
              or environmental rules. When in doubt, check with your
              contractor or state energy office. For ductless mini-splits,
              minimum SEER levels also apply and align with the same regional
              split. Choosing a system at or above the minimum is the baseline;
              going higher (e.g. SEER 16–20+) further cuts running costs if it
              fits your budget.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              SEER Rating Comparison and Annual Savings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The table below gives a rough idea of how different SEER ratings
              compare in efficiency and relative annual electricity use.
              &quot;Estimated annual savings&quot; is versus a baseline SEER 14
              system (same cooling load and run hours). Actual savings depend on
              your climate, thermostat settings, and electricity rate.
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
                      SEER Rating
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Relative Efficiency
                    </th>
                    <th
                      className="px-4 py-3 font-semibold"
                      style={{ color: "#1E3A5F" }}
                    >
                      Est. Annual Savings vs SEER 14
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">SEER 14</td>
                    <td className="px-4 py-3">Baseline</td>
                    <td className="px-4 py-3">—</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">SEER 16</td>
                    <td className="px-4 py-3">~13% less energy</td>
                    <td className="px-4 py-3">~$80–$150</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">SEER 18</td>
                    <td className="px-4 py-3">~22% less energy</td>
                    <td className="px-4 py-3">~$140–$260</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">SEER 20</td>
                    <td className="px-4 py-3">~30% less energy</td>
                    <td className="px-4 py-3">~$190–$360</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Savings ranges assume a typical 3–4 ton central AC in a
              moderate-to-hot climate; adjust for your system size and local
              electricity rates.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              SEER2 Explained
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>SEER2</strong> is an updated US federal test procedure
              that took effect for most new central AC and heat pump systems in
              2023. The test uses slightly different conditions (including
              higher external static pressure to reflect real ductwork) so that
              the reported efficiency is closer to what you get in a real
              installation. As a result, SEER2 numbers are typically a bit
              lower than the old SEER numbers for the same unit—often around
              5–8% lower. So a system that was rated 16 SEER might be around
              14.5–15 SEER2.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Federal minimums are now expressed in SEER2: the North minimum is
              <strong> 13.4 SEER2</strong> and the South minimum is{" "}
              <strong>14.3 SEER2</strong> for split-system central AC and heat
              pumps. When you see both SEER and SEER2 on a label or spec sheet,
              use SEER2 for comparing new equipment, since that&apos;s the
              current standard. The same logic applies: higher SEER2 means
              better efficiency and lower running cost.
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
              Size Your AC Before You Compare SEER
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Efficiency (SEER) matters most when the system is correctly
              sized. Use our free BTU calculator to estimate the cooling
              capacity you need for your room or home—then compare SEER and
              SEER2 ratings among units in that size range to balance upfront
              cost and long-term savings.
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
              Use SEER and SEER2 as a filter when comparing central AC and heat
              pumps: meet the minimum for your region, then go as high as your
              budget allows for lower bills. Run our BTU calculator to get a
              cooling capacity range for your space, then ask contractors for
              quotes that include both size (tons/BTU) and efficiency (SEER2).
              A properly sized, higher-SEER system will keep you comfortable
              while reducing electricity use and cost for the life of the
              unit.
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
