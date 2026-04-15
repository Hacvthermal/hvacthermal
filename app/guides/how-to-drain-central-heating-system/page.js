import Link from "next/link";

export const metadata = {
  title: "How to Drain a Central Heating System: UK Step-by-Step Guide | HVACThermal",
  description:
    "Step-by-step guide to draining your central heating system in the UK. When to do it, what you need, and how to refill it safely.",
};

export default function HowToDrainCentralHeatingSystemPage() {
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
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "#1E3A5F" }}>
            How to Drain a Central Heating System: UK Step-by-Step Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Draining a central heating system is sometimes necessary for radiator replacement, pipe
            repairs, moving radiators, or fixing persistent issues like sludge and corrosion. Done
            correctly, it’s a manageable DIY task for many UK homes—but it can be messy, and there
            are situations where you should use a professional. This guide explains when to drain
            the system, what you need, and how to refill and repressurise safely afterwards.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When Should You Drain Your Heating System?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Common reasons include replacing a radiator, changing valves, repairing pipework,
              removing a radiator to decorate, or preparing for a power flush. If you only need to
              work on one radiator, you may be able to isolate it instead of draining the full
              system—but not all systems allow this easily.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What You Need
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Hosepipe</strong> long enough to reach an outside drain/gully.
              </li>
              <li>
                <strong>Adjustable spanner</strong> or radiator key (if you’ll bleed radiators).
              </li>
              <li>
                <strong>Bucket and towels</strong> for spills.
              </li>
              <li>
                <strong>Flat-head screwdriver</strong> (some drain cocks need it).
              </li>
              <li>
                <strong>PTFE tape</strong> (helpful when reassembling fittings).
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              Tip: Black water is common and can stain—protect floors and carpets.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step-by-Step: How to Drain the System
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              These steps apply to most sealed systems (combi/system boilers). If you have an older
              open-vented system with a feed and expansion tank, the process can differ.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 1 — Switch the boiler off and let everything cool
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn the boiler and heating off and wait until radiators are cool. Draining hot water
              is risky and can cause scalding.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 2 — Locate the drain cock (usually on the lowest point)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many systems have a drain cock on a downstairs pipe run or on a radiator valve at a
              low point. Attach your hosepipe securely and run it to an external drain.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 3 — Open bleed valves on upstairs radiators
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Opening bleed valves lets air into the system and helps water flow out faster. Start
              upstairs and work down.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 4 — Open the drain cock and monitor the flow
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Slowly open the drain cock. Check for leaks around the hose connection. The system
              may take time to drain fully depending on size and pipework layout.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Step 5 — Confirm the system is drained before starting work
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              When flow stops, gently open a low radiator bleed valve or loosen a fitting over a
              bucket to confirm there’s no trapped water. Some pipe runs can hold water even when
              most of the system is drained.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Refilling and Repressurising Safely
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Once your work is done, close all bleed valves and the drain cock. Refill using the
              boiler’s filling loop and bring pressure back to the normal cold range (often around
              1–1.5 bar). Then bleed radiators again and top up pressure as needed. Keep an eye out
              for leaks after refilling.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you can’t locate a drain cock, valves are seized, you suspect a hidden leak, or you
              have a complex system (multiple zones, underfloor heating, or older open-vented
              layouts), a heating engineer can drain/refill safely and ensure inhibitor is added.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Thinking About a Boiler Replacement?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you’re doing major work on your heating system, it’s a good time to check whether
              your boiler output is right for the property.
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
              Do I have to drain the whole system to change one radiator?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not always. Sometimes you can isolate a radiator by closing both valves, but trapped
              water and valve condition can make this tricky. Draining part or all of the system is
              often the cleaner approach.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Where is the drain cock on a typical UK heating system?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often at the lowest point of the system—commonly on a downstairs radiator valve or a
              low pipe run. Some properties have no obvious drain cock.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why is the heating water black?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Dark water usually indicates corrosion products (magnetite) in the system. It’s common
              in older systems and can be improved with inhibitor, magnetic filtration, and
              sometimes a power flush.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need to add inhibitor after draining?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes. Draining removes some treated water, so topping up inhibitor helps protect
              against corrosion. Follow manufacturer guidance or ask an engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What pressure should the boiler be after refilling?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many sealed systems target around 1–1.5 bar when cold. Check your boiler manual and
              keep an eye on pressure after bleeding radiators.
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

