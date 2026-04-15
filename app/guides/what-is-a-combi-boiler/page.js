import Link from "next/link";

export const metadata = {
  title: "What Is a Combi Boiler? Complete UK Guide 2026 | HVACThermal",
  description:
    "Everything you need to know about combi boilers - how they work, pros and cons, costs, and whether one is right for your home.",
};

export default function WhatIsACombiBoilerPage() {
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
            What Is a Combi Boiler?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A combi (combination) boiler is the most common type of boiler in UK
            homes. It provides <strong>central heating</strong> and{" "}
            <strong>instant hot water</strong> from one compact unit, without a
            separate hot water cylinder or cold water tank in the loft. This
            guide explains how combi boilers work, their pros and cons, typical
            costs, and how to decide if a combi is right for your home.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How a Combi Boiler Works
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A combi boiler heats water directly from the mains. When you turn
              on a hot tap, the boiler detects demand and diverts heat to a
              plate heat exchanger so hot water flows instantly. When you turn
              on the heating, it circulates hot water through the radiators via
              a pump. Because it uses mains pressure, hot water flow depends on
              your incoming water pressure and the boiler&apos;s hot water output.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Pros of a Combi Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>No hot water cylinder:</strong> Frees up airing cupboard
                space and makes installation simpler in many homes.
              </li>
              <li>
                <strong>Instant hot water:</strong> Hot water on demand (no need
                to wait for a cylinder to reheat).
              </li>
              <li>
                <strong>Good efficiency:</strong> Modern A-rated condensing
                combis are efficient and can reduce bills compared with older
                boilers.
              </li>
              <li>
                <strong>Typically lower install cost:</strong> Often cheaper
                than switching to a system boiler if you don&apos;t already have a
                cylinder and tanks.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Cons of a Combi Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Hot water flow can be limited:</strong> If multiple taps
                or showers run at once, flow/temperature can drop unless you
                have a higher-output model and strong mains pressure.
              </li>
              <li>
                <strong>No stored hot water:</strong> If the boiler breaks down,
                you lose both heating and hot water.
              </li>
              <li>
                <strong>Hard water scaling:</strong> In hard water areas, the
                plate heat exchanger can scale up, affecting hot water
                performance without proper maintenance.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Combi Boiler Costs in the UK (Typical Ranges)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Costs vary by brand, output, complexity of the job, and where you
              live. As a broad guide, a combi boiler replacement in the UK often
              falls in the <strong>£1,800–£3,500</strong> range, with higher costs
              for premium models, major pipework changes, or relocating the
              boiler. Always get multiple quotes from Gas Safe registered
              installers.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Is a Combi Boiler Right for Your Home?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Combi boilers are a great fit for many small-to-medium homes with
              <strong> one bathroom</strong> and moderate hot water demand. If
              you have multiple bathrooms and often run showers and taps at the
              same time, a system boiler with a cylinder can deliver better
              simultaneous hot water. Mains water pressure is also important—a
              combi performs best with a decent flow rate.
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
              Not sure what kW output you need? Our free boiler size calculator
              uses your home, radiators, insulation and hot water needs to
              recommend a sensible boiler size range—so you can compare quotes
              and avoid oversizing.
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
              What does “combi” mean?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It stands for combination boiler: one appliance provides both
              central heating and hot water, without a separate cylinder.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can a combi boiler run two showers at once?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes, but it depends on the boiler&apos;s hot water output and
              your mains flow rate. In many homes, running two showers will
              reduce flow or temperature. If you often need simultaneous hot
              water, a system boiler with a cylinder may be better.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do combi boilers need a hot water tank?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. That&apos;s one of their main benefits—hot water is produced on
              demand, so there&apos;s usually no cylinder or loft tank required.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Are combi boilers good for large houses?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can be, but large houses often have higher hot water demand
              (multiple bathrooms). If simultaneous hot water use is common, a
              system boiler and cylinder is often the better choice.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What size combi boiler do I need?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on your home&apos;s heat loss and your hot water demand.
              The best approach is to calculate a suitable range based on your
              property, radiators, insulation, and how many showers/bathrooms
              you have.
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
