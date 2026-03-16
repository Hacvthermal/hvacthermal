import Link from "next/link";

export const metadata = {
  title: "What Temperature Should My Boiler Be Set To? UK Guide 2026 | HVACThermal",
  description:
    "Boiler flow temperature guide: recommended settings for radiators, condensing efficiency, hot water safety, and how to save 6-8% on bills. UK 2026.",
};

export default function WhatTemperatureShouldMyBoilerBeSetToPage() {
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
            What Temperature Should My Boiler Be Set To?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            The temperature you set on your boiler affects both your comfort
            and your energy bills. Too high and you waste gas; too low and
            your radiators may not heat the room properly, or your hot water
            may not be safe. Getting the right flow temperature for your
            system—and understanding the difference between flow temperature
            and room temperature—helps you run your boiler efficiently and
            safely. This guide covers recommended settings for different
            systems, how to adjust them, and why lowering the flow
            temperature can save you money.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Recommended Flow Temperature Settings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The right setting depends on your type of system and whether
              you are prioritising maximum efficiency or maximum output.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Traditional radiators (standard systems)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many UK homes have radiators sized for a <strong>70–80°C</strong>{" "}
              flow temperature. If your system was designed for this range,
              the boiler is often set to 70–75°C for heating. This delivers
              plenty of heat but may not allow the boiler to condense fully
              (see below). It is a safe starting point if you have not
              changed the settings before.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Modern condensing boilers for efficiency
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Condensing boilers recover extra heat when the return water is
              cool enough. Running at <strong>60–70°C</strong> flow
              temperature (or lower if your radiators can cope) lets the
              boiler condense more and use less gas. Try reducing from 70°C
              to 65°C, then to 60°C if the house still heats up comfortably.
              Not all systems will perform well at 60°C—it depends on
              radiator size and insulation.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Heat pump compatible or low-temperature systems
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Systems designed for low-temperature operation—such as
              well-insulated homes with large radiators or underfloor
              heating—often run at <strong>45–55°C</strong> flow
              temperature. This is the most efficient range for condensing
              boilers and is similar to heat pump flow temperatures. Only
              reduce to this level if your installer or heat loss design
              allows it; otherwise you may not get enough heat.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Hot water cylinder temperature
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If you have a hot water cylinder (system or regular boiler), the
              cylinder thermostat should be set to a <strong>minimum of
              60°C</strong> to prevent legionella bacteria from multiplying
              in stored water. This is a health and safety requirement. Do not
              lower the hot water temperature below 60°C for stored water;
              combi boilers heat water on demand so the same rule does not
              apply in the same way, but 55–60°C at the tap is typically
              recommended.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Flow Temperature vs Room Temperature — What&apos;s the Difference?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Flow temperature</strong> is the temperature of the
              water leaving the boiler and going into your radiators or
              cylinder. You set this on the boiler itself (often via a
              dial or digital control labelled &quot;central heating
              flow&quot; or &quot;radiator temperature&quot;). It is
              typically between 50°C and 80°C.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Room temperature</strong> is the air temperature in
              your home. You set the desired room temperature on your room
              thermostat (e.g. 18–21°C). The thermostat tells the boiler
              when to turn on or off so that the room reaches and maintains
              that temperature. So: flow temperature is how hot the water
              is; room temperature is how warm you want the room. Lowering
              the flow temperature does not necessarily mean a colder
              home—if the heating runs a bit longer, the room can still
              reach the same thermostat setting, often with less gas used.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How to Set Your Boiler Temperature
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Controls vary by brand and model. On most boilers you will find
              either a dial or a digital menu for central heating flow
              temperature (and a separate one for hot water on combis).
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Worcester Bosch:</strong> Many models have a central heating dial on the front (often marked 1–6 or with a temperature scale). Some use a digital display—consult the manual for the menu path to flow temperature.</li>
              <li><strong>Vaillant:</strong> Flow temperature is usually adjusted via the control panel or a separate programmer; some use a dial on the boiler. Check the user manual for your model.</li>
              <li><strong>Ideal:</strong> Similar mix of dials and digital menus depending on the range. The heating flow temperature may be under a &quot;Settings&quot; or &quot;Installer&quot; menu—refer to the manual.</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If you cannot find the flow temperature setting, your boiler
              manual (often available online) will show the exact location.
              Make small changes (e.g. 5°C at a time) and allow a few days to
              see if the house still heats comfortably before going lower.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Why Lower Flow Temperatures Save Money
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Condensing boilers are most efficient when the return water
              from the radiators is cool enough for the flue gases to
              &quot;condense&quot;—releasing extra heat that would otherwise
              go up the flue. The lower the flow temperature, the cooler the
              return water tends to be, so the boiler spends more time in
              <strong> condensing mode</strong>. At 80°C flow, many boilers
              condense little; at 60°C or below, they can recover
              significantly more energy.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Reducing flow temperature from 75°C to 60°C (where your system
              can still heat the home) can typically <strong>save around
              6–8% on gas bills</strong>, according to industry guidance.
              The exact saving depends on your insulation, radiator sizes
              and how long the heating runs. It is one of the easiest
              changes you can make without replacing any equipment.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Weather Compensation
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Weather compensation</strong> is a feature on some
              boilers that automatically adjusts the flow temperature based
              on the outside temperature. When it is mild outside, the
              boiler runs at a lower flow temperature; when it is very
              cold, it increases the flow temperature so the house can still
              reach the desired room temperature. This avoids running at
              full temperature all the time and improves efficiency. If your
              boiler and thermostat support weather compensation, an
              installer can set it up. Not all systems have it—check your
              boiler manual or ask your engineer.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Common Mistakes
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Setting the flow temperature too high:</strong> Many
              people leave the boiler at 75–80°C &quot;to be safe.&quot; If
              your radiators are adequately sized, this wastes gas. Try
              turning the flow temperature down in steps; if the house still
              reaches the thermostat setpoint, you will save money with no
              loss of comfort.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Setting hot water too low:</strong> For stored hot
              water in a cylinder, keeping the temperature below 60°C to save
              energy is a <strong>health risk</strong>. Legionella can
              multiply in tepid stored water. Always keep the cylinder
              thermostat at 60°C or above. For combi hot water, 55–60°C at
              the tap is usually sufficient and safe for normal use.
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
              A correctly sized boiler works better at lower flow
              temperatures. Use our free boiler size calculator to check
              the right kW range for your property, radiators and hot water
              use—no sign-up required.
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
              What temperature kills legionella?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Legionella bacteria are killed at 60°C and above when water is
              held at that temperature. UK guidance recommends storing hot
              water in cylinders at 60°C or higher to prevent growth. Water
              at the tap can be slightly lower (e.g. 55°C) for comfort, as
              long as the stored water in the cylinder is kept at 60°C. Do
              not set the cylinder thermostat below 60°C.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I turn my boiler down in summer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              You can leave the central heating flow temperature as it is
              when the heating is off—it only affects the system when the
              heating is on. For hot water, keep the same safe temperature
              (60°C for cylinders, or your usual combi setting) year-round.
              There is no need to change boiler settings seasonally unless
              you have weather compensation, which does it automatically.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What is the most efficient boiler temperature?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The most efficient flow temperature is the lowest one that
              still heats your home to the temperature you want. For many
              condensing boilers that is in the 55–65°C range, depending on
              your radiators and insulation. Start at 65°C and try reducing
              by 5°C every few days; if the house still reaches the
              thermostat setpoint, you are saving gas. Stop reducing if
              rooms start to feel cold.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Does flow temperature affect how hot my radiators get?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Lower flow temperature means the water entering the
              radiators is cooler, so the radiators themselves will be less
              hot to the touch. They can still heat the room—they may need
              to run for longer or you may need larger radiators for the
              same output. If you lower the flow temperature and the room
              no longer reaches the thermostat temperature, the flow is too
              low for your current radiator size; turn it back up slightly
              or consider larger radiators if you want to run at lower
              temperatures long term.
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
