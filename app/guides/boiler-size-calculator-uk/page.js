import Link from "next/link";

export const metadata = {
  title: "Boiler Size Calculator UK: Find the Right kW Output | HVACThermal",
  description:
    "Use our free boiler size calculator to find the right kW output for your home. Covers combi, system and conventional boilers for UK properties.",
};

export default function BoilerSizeCalculatorUkPage() {
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
            Boiler Size Calculator UK: Find the Right kW Output
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler sizing is about matching your boiler’s output (measured in{" "}
            <strong>kilowatts, kW</strong>) to the heat your home needs for space heating and, if
            you choose a combi, hot water. Too small and rooms may struggle to warm up in cold
            weather or you may run out of hot water; too large and you can pay more upfront and run
            less efficiently through short-cycling. This guide explains what kW output means, what
            affects boiler size in UK homes, and how to avoid the most common sizing mistakes.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Does Boiler kW Output Mean?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A boiler’s kW rating is the amount of heat it can deliver per unit of time. In simple
              terms, higher kW means the boiler can provide more heat. Most boilers have two
              “demands”:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Central heating (space heating):</strong> Heat delivered to radiators and
                underfloor heating.
              </li>
              <li>
                <strong>Domestic hot water (DHW):</strong> Heat used to warm water at taps and
                showers (especially relevant for combi boilers).
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              A common misconception is that a bigger boiler always makes a home warmer. In reality,
              the right size depends on your home’s heat loss and how your heating system is set up.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Boiler Sizing Works in UK Homes
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Proper sizing starts with estimating how much heat your home loses on a cold day (heat
              loss). A boiler needs enough output to replace that heat loss so indoor temperatures
              stay stable. Installers may use a heat loss calculation, radiator outputs, and
              practical rules-of-thumb based on property type and insulation.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              For combi boilers, sizing also accounts for hot water demand. Hot water output is
              often the reason combis in small homes still have relatively high kW ratings: higher
              output improves hot water flow rate.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Key Factors That Affect Boiler Size
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The “right” kW range is driven by your home and how you use hot water. Here are the
              biggest inputs that typically move the recommendation up or down.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Bedrooms and floor area:</strong> Larger homes typically have higher heat
                loss and more radiator output installed.
              </li>
              <li>
                <strong>Radiator count and size:</strong> Radiators are the “emitters” that release
                heat. A system with more/larger radiators can require more output.
              </li>
              <li>
                <strong>Insulation and glazing:</strong> Loft insulation, cavity wall insulation,
                double/triple glazing, and airtightness can significantly reduce heat loss.
              </li>
              <li>
                <strong>Property type:</strong> Detached homes lose more heat than flats or
                mid-terraces because they have more exposed walls.
              </li>
              <li>
                <strong>Boiler type (combi, system, conventional):</strong> Combi sizing is strongly
                influenced by hot water flow rate; system/conventional rely on a cylinder for hot
                water, so space heating tends to dominate the kW requirement.
              </li>
              <li>
                <strong>Hot water usage:</strong> Number of bathrooms and whether you run multiple
                showers at once can push you towards a higher-output combi or a cylinder-based
                system boiler.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Getting Boiler Size Right Matters
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Correct sizing affects comfort, efficiency, and long-term reliability. An oversized
              boiler can cycle on and off more often (short-cycling), which may reduce efficiency
              and increase wear on components. An undersized boiler may run continuously in cold
              weather, struggle to recover temperature after setbacks, and can leave hot water
              lacking on combi systems.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Boiler Sizing Mistakes
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Replacing like-for-like without reassessing:</strong> Extensions, insulation
                upgrades, or radiator changes can make an old size inappropriate.
              </li>
              <li>
                <strong>Ignoring hot water demand:</strong> Combi boilers need enough output for
                decent flow rates, especially with 2+ bathrooms.
              </li>
              <li>
                <strong>Assuming “bigger is safer”:</strong> Oversizing can cost more and run less
                efficiently if the boiler can’t modulate down low enough.
              </li>
              <li>
                <strong>Not considering property type:</strong> Flats and terraces can need less
                output than detached homes with the same floor area.
              </li>
              <li>
                <strong>Skipping a sanity check against radiators:</strong> Even if the boiler is
                capable, undersized radiators can limit real-world comfort at lower flow
                temperatures.
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
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Use the Boiler Size Calculator (UK)
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Get a fast kW recommendation using your radiator count, insulation level, property
              type and hot water needs. It’s a practical starting point before speaking to an
              installer.
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
              What boiler size (kW) do most UK homes need?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many UK homes fall into a mid-range for space heating, but the “right” kW varies with
              insulation, radiator output and whether you need combi hot water flow. Use a sizing
              estimate and then validate with an installer survey.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is a higher kW boiler always better for hot water?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For combi boilers, higher output can improve hot water flow rate, but it does not
              guarantee better performance if your mains water pressure/flow is limited. For high
              hot water demand, a system boiler with a cylinder can be a better fit.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What happens if my boiler is oversized?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Oversizing can lead to short-cycling, potentially lower seasonal efficiency, and
              higher upfront cost. Modern boilers modulate, but there is still a practical range
              where sizing closer to demand generally performs better.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What happens if my boiler is undersized?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              An undersized boiler may struggle in cold weather, take longer to heat the home, and
              can lead to lukewarm radiators at peak demand. For combis, hot water can also feel
              weak if output is too low for your usage.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a heat loss calculation for a new boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A proper heat loss calculation is the best way to size accurately, especially for
              unusual layouts, very well-insulated homes, or major upgrades. A calculator is a
              useful starting point, but a professional survey is still recommended before buying.
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

