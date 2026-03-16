import Link from "next/link";

export const metadata = {
  title: "How to Repressurise a Boiler: Step-by-Step UK Guide | HVACThermal",
  description:
    "Learn how to repressurise a combi or system boiler. Correct pressure range, signs of low pressure, filling loop steps, and when to call an engineer. UK guide.",
};

export default function HowToRepressuriseABoilerPage() {
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
            How to Repressurise a Boiler
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler pressure is the pressure of the water inside your sealed
            central heating system. It needs to be high enough for the boiler
            to circulate hot water to your radiators and (on a combi) to heat
            your taps, but not so high that it risks damage. Pressure can drop
            over time—for example after bleeding radiators, or because of a
            small leak—and when it gets too low the boiler may cut out or
            refuse to fire. Repressurising (filling the system via the filling
            loop) is a simple DIY task on most combi and system boilers. This
            guide explains the correct pressure, when to top up, and the steps
            to do it safely.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Is the Correct Boiler Pressure?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              When the system is <strong>cold</strong> (heating has been off
              for a while), the pressure gauge on your boiler should read
              between <strong>1 and 1.5 bar</strong>. Many boilers have a
              green zone on the gauge indicating the safe range. When the
              heating is on and the water is hot, pressure will rise—typically
              to around <strong>1.5 to 2 bar</strong>, sometimes a little
              higher. That is normal. If the pressure is below 1 bar when
              cold, you need to repressurise. If it regularly goes above 3 bar
              when hot, or the pressure relief valve discharges, the system may
              be overfilled or there may be a fault; see the section below on
              high pressure.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Signs Your Boiler Pressure Is Too Low
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              You may need to repressurise if you notice any of the following.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Boiler cuts out or will not fire:</strong> Many boilers have a low-pressure cut-out and will switch off or show an error code when pressure is too low.</li>
              <li><strong>No heating or hot water:</strong> The boiler may not run at all until the system is repressurised.</li>
              <li><strong>Pressure gauge below 1 bar:</strong> When the system is cold, the needle or digital readout is in the red or below the green zone (often marked below 1 bar).</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If you have recently bled radiators, pressure often drops
              because you have released water from the system. Topping up via
              the filling loop is the normal next step.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What You Need
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Repressurising is done using the <strong>filling loop</strong>—a
              flexible hose (usually silver braided) that connects the cold
              mains to the heating system. On many boilers it is permanently
              fitted under or next to the boiler; on others it is a separate
              kit that you attach when needed. You may also need a{" "}
              <strong>flat-head screwdriver</strong> to open the valves on
              some filling loops (others have lever-style valves you can turn
              by hand). Check your boiler manual if you are not sure where the
              filling loop is or how the valves work.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Step-by-Step Guide to Repressurising
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Follow these steps in order. If your boiler or filling loop
              looks different from this description, refer to your boiler
              manual before proceeding.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 1 — Turn the boiler off and let it cool
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Switch the boiler off at the control panel or programmer and
              wait until the system has cooled down. Repressurising when the
              system is cold gives you an accurate reading on the pressure
              gauge and avoids handling hot components.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 2 — Locate the filling loop under the boiler
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The filling loop is usually under the boiler. It connects two
              pipes (typically one from the cold mains and one into the
              heating return) and has one or two valves—either small taps or
              screwdriver-operated slots. On integrated filling loops, the
              hose is already in place; you only need to open the valves.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 3 — Attach the filling loop if it is not permanently fitted
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If your boiler uses a separate filling loop kit, connect it
              between the two filling loop connections (as shown in your
              manual) and ensure the connections are tight. Do not open the
              valves until the loop is properly attached.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 4 — Open both valves slowly
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Open both valves on the filling loop slowly. You will hear
              water entering the system. Keep an eye on the pressure gauge
              on the boiler front—it will start to rise.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 5 — Stop when the pressure reaches 1.5 bar
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              When the gauge reads about <strong>1.5 bar</strong> (or the
              middle of the green zone), stop. Do not overfill—pressure will
              increase further when the heating is on. Closing the valves
              promptly once you reach 1.5 bar is enough.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 6 — Close both valves fully
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Turn both valves fully clockwise (or close the levers) so that
              no more water can enter the system. A small amount of water may
              drip from the valves when closing—this is normal. Ensure they
              are fully closed to avoid a continuous leak.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 7 — Remove the filling loop if it was a temporary one
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you used a separate filling loop kit, disconnect it from both
              connections and store it safely. Some systems have caps or
              blanks that should be refitted to the connection points. If the
              filling loop is permanently fitted, leave it in place with both
              valves closed.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Step 8 — Turn the boiler back on and reset if needed
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Switch the boiler back on. If it was in lockout or showing an
              error due to low pressure, you may need to press the reset
              button (see your manual). The boiler should fire and the
              pressure should stay stable when the heating runs. If it drops
              again quickly, see the section below on recurring low pressure.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What If Pressure Keeps Dropping?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you repressurise and the pressure falls again within days or
              weeks, there is likely a <strong>leak</strong> somewhere in the
              system. Check radiator valves (including bleed valves—ensure
              they are closed), visible pipework and any areas that have been
              recently worked on. Even a small leak can cause a gradual drop.
              If you cannot find the leak, or the pressure drops quickly, call
              a <strong>Gas Safe registered engineer</strong>. They can
              locate the fault and repair it safely. Do not keep topping up
              indefinitely without finding the cause—it can lead to corrosion
              and further damage.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What If Pressure Is Too High?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the pressure gauge reads <strong>above 3 bar</strong> when
              the system is hot, or the pressure relief valve (usually a
              small pipe outside) has discharged water, the system may be
              overfilled. You can often reduce pressure by <strong>bleeding
              a radiator</strong>—letting a small amount of water (and air)
              out until the gauge drops to around 1.5 bar when the system has
              cooled. Do not bleed when the system is hot, and catch the
              water in a container. If pressure rises again quickly after
              bleeding, or you are not confident doing it, contact a Gas Safe
              engineer—there may be a fault with the expansion vessel or
              filling loop.
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
              Our free boiler size calculator uses your property details,
              radiator count, insulation and hot water needs to recommend a
              suitable kW range. No sign-up required—get results in seconds.
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
              How often should I repressurise my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              There is no fixed schedule. You repressurise when the pressure
              drops below the safe range—typically after bleeding radiators,
              or if a small leak has caused a gradual fall. A well-maintained
              system with no leaks may only need topping up once a year or
              less. If you need to repressurise every few weeks, have the
              system checked for leaks.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is low boiler pressure dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Low pressure itself is not dangerous—the boiler will usually
              shut off to protect itself. The risk is having no heating or
              hot water until you repressurise. Very low pressure can
              sometimes allow air to enter the system, which may cause
              noise or cold spots in radiators. Repressurising to the
              correct range restores normal operation.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I repressurise my boiler myself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Repressurising via the filling loop is a DIY task and does
              not require a Gas Safe engineer, as long as you follow the
              steps in your boiler manual and do not open any gas-carrying
              parts. If you are unsure where the filling loop is or how to
              use it, or if your boiler is in a difficult position, an
              engineer can do it for you and show you for next time.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Call a Gas Safe engineer if: pressure keeps dropping and you
              suspect a leak you cannot find; the pressure relief valve keeps
              discharging; the pressure is very high and bleeding does not
              bring it down; the boiler will not reset after repressurising;
              or you see water leaking from the boiler or pipework. For any
              work on the gas side of the boiler, or if you are not
              confident, always use a Gas Safe registered engineer.
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
