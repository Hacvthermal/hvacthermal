import Link from "next/link";

export const metadata = {
  title: "New Boiler Cost UK 2025: Full Price Guide | HVACThermal",
  description:
    "How much does a new boiler cost in the UK? Complete 2025 price guide covering combi, system and conventional boilers, labour costs, and money-saving tips.",
};

export default function NewBoilerCostUKPage() {
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
            New Boiler Cost UK 2025: Full Price Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Replacing your boiler is one of the biggest home improvements
            you&apos;ll make. This guide gives you 2025 UK prices for a new
            boiler supply and fit, so you can budget and compare quotes with
            confidence.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Introduction: Typical New Boiler Cost Range
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In the UK, a new boiler <strong>supply and fit</strong> typically
              ranges from <strong>£1,500 to £4,000</strong> installed. The exact
              cost depends on boiler type (combi, system or conventional), size
              (kW), brand, and how complex the installation is. A
              straightforward like-for-like combi swap often sits in the
              £2,000–£3,200 range; system and conventional boilers usually
              cost more because of the cylinder and extra pipework. Getting
              at least three quotes from Gas Safe installers is the best way
              to find a fair price for your situation.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Combi Boiler Costs by Home Size
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Combi boilers heat your radiators and hot water from one unit,
              with no separate cylinder. They are the most popular choice and
              often the cheapest to install when replacing an existing combi.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Small home (1–2 bed, one bathroom):</strong> 24–28 kW combi — typically £1,800–£2,800 supply and fit.</li>
              <li><strong>Medium home (3–4 bed, one or two bathrooms):</strong> 28–34 kW combi — typically £2,200–£3,500 supply and fit.</li>
              <li><strong>Large home or high hot water demand:</strong> 35–40 kW combi — typically £2,800–£4,000+ supply and fit.</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              Premium brands (Worcester Bosch, Vaillant, Viessmann) sit at the
              upper end; budget and mid-range brands (Baxi, Ideal, Alpha) at
              the lower end. Moving the boiler or converting from another type
              adds £500–£1,500 or more.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              System Boiler Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              System boilers work with an unvented hot water cylinder. They
              suit larger homes with multiple bathrooms. You pay for the
              boiler, cylinder, controls and installation.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Supply only:</strong> Boiler £750–£2,600; cylinder
              £400–£1,200. <strong>Fully installed:</strong> typically
              £2,800–£5,000 depending on cylinder size, brand and complexity.
              New cylinder and upgraded controls add to the total compared
              with a combi-only install.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Conventional Boiler Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Conventional (heat-only) boilers work with a cylinder and often
              a cold water tank in the loft. They are common in older UK
              properties. Installation is more involved.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Supply only:</strong> £600–£2,000 for the boiler.
              <strong> Fully installed:</strong> typically £3,000–£5,500.
              Like-for-like replacement is at the lower end; converting to a
              combi (removing cylinder and tank) can be £3,500–£5,000
              including the new combi.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Labour and Installation Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Labour usually adds <strong>£600–£1,000</strong> for a
              like-for-like combi swap in the same position. Moving the
              boiler adds <strong>£500–£1,500</strong> for extra pipework,
              flue changes and making good. Converting from one boiler type
              to another (e.g. conventional to combi) can add £1,000–£2,000
              to labour. Gas Safe registered installers set their own rates;
              London and the South East are typically 20–30% higher than the
              national average.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Factors Affecting Price
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Several factors push the total cost up or down.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Boiler type:</strong> Combis are usually cheapest to install; system and conventional cost more due to cylinder and pipework.</li>
              <li><strong>Brand:</strong> Budget brands (Baxi, Alpha) from £600 for the unit; premium (Worcester Bosch, Vaillant, Viessmann) £1,200–£2,500 for the unit.</li>
              <li><strong>Complexity:</strong> Straight swap in same place is cheapest; relocation, type change or new cylinder add cost.</li>
              <li><strong>Region:</strong> Labour rates are higher in London and the South East; Scotland, Midlands and North often lower.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How to Save Money on a New Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li><strong>Get at least three quotes</strong> from Gas Safe registered installers. Prices can vary by hundreds of pounds for the same job.</li>
              <li><strong>Avoid going through your energy supplier</strong> for installation—they often charge above market rates. Use local independent installers.</li>
              <li><strong>Consider mid-range brands</strong> (e.g. Ideal, Baxi) rather than the most expensive—reliability is still good and you save on the unit cost.</li>
              <li><strong>ECO4 scheme:</strong> The Energy Company Obligation (ECO4) can fund or part-fund a boiler replacement for eligible households (certain benefits, low EPC rating). You cannot apply directly—an approved installer assesses and submits on your behalf.</li>
              <li><strong>Boiler Upgrade Scheme (BUS):</strong> BUS offers grants of up to £7,500 for heat pumps, not for gas boilers. If you are considering a heat pump instead of a boiler, your installer can advise on eligibility.</li>
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
              Get the Right Boiler Size Before You Quote
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
              How long does a new boiler installation take?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A like-for-like combi swap usually takes one day. A system or
              conventional boiler install, or a conversion from one type to
              another, often takes two days. Relocating the boiler can add
              extra time depending on pipework and access.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is it worth paying more for a premium boiler brand?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Premium brands typically offer longer warranties and better
              reliability. For a long-term investment, many homeowners find
              it worthwhile. If budget is tight, a mid-range brand can still
              give good service.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do I need to replace my radiators when I get a new boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not usually. Existing radiators can stay if they are in good
              condition. Your installer will advise if any need replacing or
              if the system needs a powerflush.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I get finance for a new boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many installers offer 0% or low-interest finance over 12–60
              months. Always check the total amount repayable and compare
              with other quotes.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What warranty should I expect?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Most new boilers come with 2–10 years warranty depending on
              brand. Longer warranties are often available when installed by
              an accredited installer. Ensure a Gas Safe engineer does the
              work so the warranty stays valid.
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
