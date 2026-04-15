import Link from "next/link";

export const metadata = {
  title: "Central Heating System Types UK: Which Is Right for You? | HVACThermal",
  description:
    "Guide to all central heating system types available in the UK — combi, system, heat only, underfloor, and heat pumps — with pros, cons and costs.",
};

export default function CentralHeatingSystemTypesUkPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="HVACThermal Home">
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
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "#1E3A5F" }}>
            Central Heating System Types UK: Which Is Right for You?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            UK homes use a mix of central heating system types—combi boilers, system boilers with
            cylinders, heat-only (regular) boilers, underfloor heating, and increasingly heat pumps.
            The “right” choice depends on property size, hot water demand, space for a cylinder, and
            budget. This guide explains the main types, how they work, the key pros/cons, and the
            cost factors that typically change the final installed price.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Combi Boiler Systems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Combi boilers heat water on demand and typically don’t need a hot water cylinder. They’re
              popular in smaller homes and where space is limited. The trade-off is hot water flow rate
              can be limited for multiple simultaneous showers depending on mains supply and boiler output.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              System Boiler + Hot Water Cylinder
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              System boilers work with a hot water cylinder, which helps serve higher hot water demand
              (2+ bathrooms). They can be a good fit for larger homes, though they require space for the
              cylinder and proper controls.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Heat-Only (Regular) Boiler Systems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat-only boilers typically work with a cylinder and sometimes a header tank. They’re
              common in older installations and can be chosen for retrofit compatibility. Costs and
              complexity depend on whether you keep the existing layout or convert to a different system.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Underfloor Heating (UFH)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Underfloor heating is an emitter system rather than a heat source. It can pair well with
              boilers or heat pumps and often runs at lower flow temperatures. Installation cost depends
              on whether it’s retrofit or new build, the floor construction, and zoning/controls.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Heat Pumps (Air Source / Ground Source)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pumps are a low-carbon alternative that can be efficient in well-designed systems,
              especially with good insulation and appropriately sized radiators/UFH. Upfront costs can
              be higher, but grants may be available and running costs depend heavily on system efficiency.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Which System Type Is Best for You?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              As a quick rule: combis suit smaller homes with one bathroom and limited space; system
              boilers suit higher hot water demand; regular boilers suit certain older layouts; UFH is
              great for comfort and low temps; heat pumps suit homes with lower heat loss or upgraded emitters.
              A professional survey is always recommended.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Choosing a Boiler System, Start With kW
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Whatever system type you choose, the boiler output should match your property’s needs.
              Use our calculator to estimate a sensible kW range before comparing models and quotes.
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
              Is a combi boiler or system boiler better?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on hot water demand and space. Combi suits smaller homes; system suits higher hot water usage with a cylinder.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a hot water cylinder in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not if you have a combi boiler, but cylinders are common with system/regular boilers and most heat pump installs.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can underfloor heating work with a boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. UFH often runs at lower temperatures and can improve comfort. It needs correct design and controls.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are heat pumps suitable for most UK homes?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many homes can be made suitable, but performance depends on heat loss and emitter sizing. Surveys and upgrades may be needed.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I choose the right system type?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Start with your hot water demand and space constraints, then consider efficiency, costs, and future plans. Get professional advice for final selection.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#1E3A5F" }}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "#1E3A5F" }}>
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

