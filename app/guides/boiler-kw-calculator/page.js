import Link from "next/link";

export const metadata = {
  title: "Boiler kW Calculator: What Output Does My Boiler Need? | HVACThermal",
  description:
    "Work out the right boiler kW output for your home. Free UK guide covering how to calculate boiler output, what affects it, and how to avoid common mistakes.",
};

export default function BoilerKwCalculatorPage() {
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
            <Link href="/#calculators" className="text-slate-700 hover:text-slate-900">
              Calculators
            </Link>
            <Link href="/guides" className="text-slate-700 hover:text-slate-900">
              Guides
            </Link>
            <Link href="/#features" className="text-slate-700 hover:text-slate-900">
              Features
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-slate-900">
              About
            </Link>
            <a href="mailto:support@hvacthermal.com" className="text-slate-700 hover:text-slate-900">
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
            Boiler kW Calculator: What Output Does My Boiler Need?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler output is measured in <strong>kilowatts (kW)</strong>. Choosing the right kW is
            one of the most important decisions when replacing a boiler, because it affects comfort,
            hot water performance (especially for combi boilers), efficiency and running costs. This
            guide explains what boiler kW means, how to estimate heat loss, what happens when the
            boiler is the wrong size, and a simple guide by property size to help you sanity-check
            results.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Boiler kW Output Actually Represents
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              kW output is the rate of heat delivery. For space heating, the required kW is driven by
              how much heat your home loses through walls, roofs, floors, windows and ventilation. For
              combi boilers, the hot water requirement can push kW higher because higher output can
              support a better hot water flow rate.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Calculate Boiler Output (Heat Loss Basics)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The most accurate approach is a room-by-room heat loss calculation, but you can get a
              practical estimate using property-level inputs:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Floor area:</strong> Larger homes generally have higher heat loss.
              </li>
              <li>
                <strong>Insulation and glazing:</strong> Better insulation reduces heat loss per m².
              </li>
              <li>
                <strong>Property type:</strong> Detached homes lose more than terraces/flats.
              </li>
              <li>
                <strong>Radiator output:</strong> Radiators limit how much heat can be emitted at a
                given flow temperature.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              A practical estimate then adds a small margin (often ~10–15%) to account for cold snaps,
              warm-up, and uncertainties—without defaulting to excessive oversizing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Happens If the Boiler Is the Wrong Size?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Undersized boiler:</strong> Can struggle on the coldest days, run constantly,
                and may not recover temperature quickly after setbacks.
              </li>
              <li>
                <strong>Oversized boiler:</strong> Can short-cycle, potentially reducing seasonal
                efficiency and increasing wear; may also cost more upfront.
              </li>
              <li>
                <strong>Combi hot water mismatch:</strong> Too low an output can mean weaker flow;
                too high doesn’t help if your mains flow/pressure is the limiting factor.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Boiler kW Guide by Property Size (UK Sanity Check)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Use this as a rough sense-check only—insulation and property type can shift needs a lot.
              For combi boilers, hot water demand can dominate the final kW selection.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Small flat / 1–2 bed:</strong> Often lower space-heating demand, but combi hot
                water can still push kW higher.
              </li>
              <li>
                <strong>Typical 2–3 bed terrace/semi:</strong> Mid-range heat loss depending on
                insulation; radiator count is a helpful practical input.
              </li>
              <li>
                <strong>4+ bed or detached:</strong> Higher heat loss and more radiators; insulation
                upgrades can reduce required kW significantly.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If your estimate looks dramatically higher than expected, check insulation assumptions,
              property type, and whether you’re “double counting” hot water requirements.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Calculate Your Boiler kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Use our boiler size calculator to estimate the kW range based on your radiators,
              insulation, property type and hot water needs.
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
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Frequently Asked Questions
            </h2>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is boiler kW the same as BTU?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They measure the same thing (heat output) in different units. kW is common in the UK
              for boilers; BTU/hr is often used for heating/cooling output in other contexts.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I choose boiler kW based on the number of bedrooms?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Bedrooms can be a rough proxy for size, but it’s not reliable on its own. A well-insulated
              3-bed terrace may need less than a poorly insulated 2-bed detached. Radiators, insulation,
              and property type are better inputs.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why do combi boilers often have higher kW ratings?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The hot water side needs higher output to deliver a useful flow rate at a comfortable
              temperature rise. That higher figure doesn’t necessarily mean your home “needs” that much
              kW for space heating.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a bigger boiler heat my home faster?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes, but the difference is often smaller than people expect. Radiator size, system
              balancing, controls, and heat loss usually matter more. Oversizing can also reduce
              efficiency if it causes cycling.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I size a new boiler differently after insulation upgrades?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Loft/wall insulation and better glazing reduce heat loss, so you may be able to size
              closer to actual demand. It’s worth reassessing rather than automatically replacing like-for-like.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#1E3A5F" }}>
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

