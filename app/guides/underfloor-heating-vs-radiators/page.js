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
            Underfloor heating and radiators can both heat UK homes effectively,
            but they do it in different ways. Underfloor heating uses a large
            surface area at a lower temperature, while radiators deliver heat more
            quickly from wall-mounted emitters. This guide compares costs,
            efficiency, comfort, and which option is best for your property and
            heating system.
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
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Comfort and Heat Distribution
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Underfloor heating tends to feel more even and comfortable because
              it warms a larger area gently. Radiators can create warmer spots near
              the radiator and cooler areas elsewhere, but they also respond faster
              when you need heat quickly.
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
              Wet underfloor heating often runs at lower flow temperatures than
              radiators, which can improve efficiency—especially with heat pumps
              and modern condensing boilers. However, overall running cost depends
              on insulation, controls, heat demand, and your energy tariff.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Installation Cost and Disruption
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Radiator systems are usually cheaper and less disruptive to install
              or upgrade. Underfloor heating can be ideal in new builds or major
              renovations, but retrofits can require floor build-up changes and
              more labour. Electric UFH is easier to install in small areas, but
              can be more expensive to run than wet systems.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Which Is Better for UK Homes?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Choose radiators</strong> if you want lower install costs,
                faster warm-up, and easier upgrades.
              </li>
              <li>
                <strong>Choose underfloor heating</strong> if you&apos;re renovating,
                want even comfort, and want a system that pairs well with heat pumps.
              </li>
              <li>
                <strong>Consider a hybrid approach</strong>: UFH downstairs and
                radiators upstairs is common in UK renovations.
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
              It can be, because wet UFH often runs at lower temperatures. But the
              real difference depends on insulation, controls, heat source, and how
              you use the system.
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
