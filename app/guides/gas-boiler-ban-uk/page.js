import Link from "next/link";

export const metadata = {
  title: "Gas Boiler Ban UK: What It Means for Homeowners 2026 | HVACThermal",
  description:
    "What is the UK gas boiler ban? Find out the timeline, what it means for your home, and what alternatives like heat pumps are available.",
};

export default function GasBoilerBanUKPage() {
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
            Gas Boiler Ban UK: What It Means for Homeowners
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            You may have seen headlines about a “gas boiler ban” in the UK. The
            reality is more nuanced: policy focuses on reducing carbon emissions
            from home heating over time, encouraging low-carbon alternatives in
            certain situations, and tightening efficiency standards. This guide
            explains what the UK gas boiler ban usually refers to, what it means
            for existing homes, and what options like heat pumps look like in
            practice.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Is There a Gas Boiler Ban in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In most cases, the “ban” refers to proposals and timelines aimed at
              reducing installation of new fossil-fuel heating systems—especially
              in new-build homes—while supporting a transition to low-carbon
              heating. For many homeowners, replacing an existing boiler like-for-like
              is still commonly possible, but requirements and incentives can evolve.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What It Means If You Have a Gas Boiler Today
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>You can still maintain and service your boiler:</strong>{" "}
                Regular servicing and repairs remain normal.
              </li>
              <li>
                <strong>Boiler replacements may still be allowed:</strong>{" "}
                Many households replace boilers when they fail, but policies can
                influence future choices and costs.
              </li>
              <li>
                <strong>Efficiency upgrades matter more:</strong>{" "}
                Better insulation and controls reduce demand and make low-carbon
                options easier.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Alternatives to Gas Boilers
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The main alternatives discussed in the UK include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Heat pumps (air source / ground source):</strong> Low-carbon
                heating that works best in well-insulated homes with suitable
                emitters (radiators or underfloor heating).
              </li>
              <li>
                <strong>Hybrid systems:</strong> A heat pump paired with a boiler,
                sharing the load depending on conditions.
              </li>
              <li>
                <strong>Heat networks (in some areas):</strong> Centralised heat
                supplied to multiple homes.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Preparing Your Home: Quick Wins That Help Either Way
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Whether you stick with a boiler for now or move to a heat pump later,
              improving insulation and heating controls is usually the best first
              step. Lower heat demand means lower bills and a wider range of viable
              heating options.
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
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you&apos;re replacing a boiler in the near term, getting the size
              right is one of the easiest ways to protect efficiency and comfort.
              Our boiler size calculator recommends a sensible kW range based on
              your home and hot water needs.
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
              Will I have to remove my gas boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              In most cases, existing boilers can continue to be used and serviced.
              Policy discussions tend to focus on new installations and long-term
              transition rather than forcing immediate removal.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I still replace my boiler if it breaks?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many homeowners replace boilers when they fail. Requirements can change
              over time, so check current guidance and installer advice for your
              specific situation.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Are heat pumps the main alternative?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Heat pumps are one of the most widely promoted low-carbon options. They
              work best in well-insulated homes and can require changes to radiators
              and controls.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What can I do now to prepare for low-carbon heating?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Focus on insulation and airtightness, improve heating controls, and
              ensure your system is clean and balanced. Lower heat demand makes any
              future upgrade easier and cheaper to run.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is there support for switching away from gas?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Support schemes and grants can be available depending on eligibility,
              and they change over time. It&apos;s worth checking current criteria and
              using approved installers when applying.
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
