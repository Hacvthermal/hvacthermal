import Link from "next/link";

export const metadata = {
  title: "How to Bleed a Radiator: Step-by-Step UK Guide | HVACThermal",
  description:
    "Learn how to bleed a radiator step by step. Signs you need to bleed, what you need, when to do it, and what to do if it doesn't fix the problem. UK guide.",
};

export default function HowToBleedARadiatorPage() {
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
            How to Bleed a Radiator
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Bleeding a radiator means letting trapped air out of the system so
            hot water can fill the whole radiator. When air builds up at the
            top, that part stays cold and the radiator does not heat the room
            properly. Bleeding is a simple DIY job that can restore even heat
            and reduce noise—no plumber needed. This guide walks you through
            when to do it, what you need, and the steps to do it safely.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Signs Your Radiator Needs Bleeding
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              You usually need to bleed a radiator when you notice one or more
              of the following.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Cold spots at the top:</strong> The top of the radiator stays cold while the bottom gets hot. Air sits at the top and blocks the flow of water.</li>
              <li><strong>Gurgling or knocking noises:</strong> Air moving through the system can cause bubbling or banging sounds when the heating is on.</li>
              <li><strong>Slow to heat up:</strong> The radiator takes much longer than others to get warm, or never gets fully hot.</li>
              <li><strong>Uneven heat across the room:</strong> Some radiators are hot and others are lukewarm or cold, even when the system has been on for a while.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What You Need
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              You only need a few things, most of which you may already have.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Radiator bleed key</strong> (or a flat-head screwdriver for modern radiators with a slot instead of a square nipple). Bleed keys are cheap and sold at DIY stores and online.</li>
              <li><strong>Old towel or cloth</strong> to place under the bleed valve and catch any drips.</li>
              <li><strong>Small container</strong> to catch water if a little comes out before you close the valve—optional but useful.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Step-by-Step Guide to Bleeding a Radiator
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Follow these steps in order. Always let the system cool before you
              open any bleed valve.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 1 — Turn the heating on and identify which radiators need bleeding
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Switch the heating on and wait until the radiators have had time
              to heat up. Feel the top and bottom of each radiator. If the top
              is noticeably colder than the bottom, that radiator needs
              bleeding.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 2 — Turn the heating off and wait for radiators to cool
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn the heating off completely and wait until all radiators are
              cold. Bleeding with the system hot can spray hot, pressurised
              water and cause burns. Cooling also lets air rise to the top of
              each radiator where the bleed valve is.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 3 — Start with radiators furthest from the boiler
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Work from the radiator that is furthest from the boiler toward
              the boiler. That way you push air out in one direction and avoid
              reintroducing air into radiators you have already bled.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 4 — Place a towel under the bleed valve
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The bleed valve is a small square nipple or slotted screw at one
              of the top corners of the radiator (usually opposite the pipes).
              Put an old towel or cloth underneath to catch any water that
              drips when you open it.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 5 — Insert the bleed key and turn anti-clockwise slowly
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Fit the bleed key onto the valve (or use a flat-head screwdriver
              if it has a slot). Turn anti-clockwise slowly—about a quarter
              turn is often enough. You should hear hissing as air escapes. Do
              not unscrew the valve fully or it may come out and water will
              leak.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 6 — When hissing stops and water appears, close the valve
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Once the hissing stops and a steady trickle of water appears,
              turn the valve clockwise immediately to close it. Tighten it
              gently; over-tightening can damage the valve. Wipe any spilled
              water from the radiator.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 7 — Repeat for all radiators that need bleeding
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Go through each radiator that had a cold top, working from
              furthest to nearest the boiler. Bleed each one in turn until
              only water comes out when you open the valve.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 8 — Check boiler pressure after bleeding
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Bleeding releases water from the system, which can lower the
              boiler pressure. When the system is cold, check the pressure
              gauge on your boiler. It should be between 1 and 1.5 bar. If it
              is below 1 bar, repressurise the system using the filling loop
              (see your boiler manual). Do not overfill—staying in the green
              zone is enough.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 9 — Turn the heating back on and check all radiators
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Switch the heating on again and let the system run. Check that
              all radiators heat up evenly from top to bottom and that
              gurgling has stopped. If one radiator is still cold, you may
              need to bleed it again or there could be another issue (see
              below).
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What If Bleeding Doesn&apos;t Fix It?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you have bled the radiators but some are still cold or
              noisy, the cause may be elsewhere. A <strong>stuck TRV
              (thermostatic radiator valve) pin</strong> can stop water
              entering the radiator—gently lifting the pin with pliers
              (with the head removed) can free it. <strong>Sludge or
              corrosion</strong> inside the system can block flow; if
              several radiators stay cold or the water is discoloured, a
              <strong> powerflush</strong> by a qualified engineer may be
              needed. If you are unsure, get a Gas Safe or heating
              engineer to check the system.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Often Should You Bleed Radiators?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              It is a good idea to bleed your radiators at least
              <strong> once a year</strong>, ideally before winter when you
              start using the heating more. You can also bleed whenever you
              notice cold spots at the top of a radiator, gurgling noises, or
              uneven heat. New systems or after a refill may need bleeding
              once or twice in the first few weeks as remaining air finds
              its way out.
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
              Is Your Boiler the Right Size?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If your radiators are still not heating properly after bleeding,
              your boiler might be undersized—or you may have too many or too
              few radiators for your home. Use our free boiler size calculator
              to check the right kW range for your property, radiator count
              and hot water use.
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
              Can I bleed radiators with the heating on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. You should always turn the heating off and wait until the
              radiators are cold before opening a bleed valve. Hot,
              pressurised water can spray out and cause scalding. Let the
              system cool first, then bleed.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What if there is no hissing sound when I open the valve?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you open the bleed valve and water comes out straight away
              with no hissing, there is no trapped air in that radiator—it
              does not need bleeding. Close the valve and move on. If the
              radiator is still cold at the top, the problem may be a stuck
              TRV, sludge, or a different fault; an engineer can help
              diagnose.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Why do my radiators keep needing bleeding?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Frequent air in the system can be caused by a small leak
              (allowing air to be drawn in), a faulty or incorrectly set
              feed-and-expansion tank, or corrosion producing hydrogen. If
              you have to bleed more than once or twice a year, it is worth
              having a heating engineer check for leaks and system
              condition.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do I need a plumber to bleed a radiator?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. Bleeding a radiator is a simple DIY task that does not
              involve gas work. You only need a bleed key (or screwdriver)
              and a cloth. If bleeding does not fix the problem, or you are
              not confident doing it, then a Gas Safe or heating engineer
              can do it and check the rest of the system.
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
