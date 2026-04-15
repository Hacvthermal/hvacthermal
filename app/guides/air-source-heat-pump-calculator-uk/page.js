import Link from "next/link";

export const metadata = {
  title: "Air Source Heat Pump Calculator UK: Size & Cost Guide | HVACThermal",
  description:
    "Calculate the right size air source heat pump for your UK home. Covers sizing, running costs, installation costs and the £7,500 BUS grant.",
};

export default function AirSourceHeatPumpCalculatorUkPage() {
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
            Air Source Heat Pump Calculator UK: Size & Cost Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Air source heat pumps (ASHPs) extract heat from outside air and “upgrade” it to heat your
            home and hot water. They’re most efficient when designed to run steadily at lower flow
            temperatures, which means <strong>sizing and system design</strong> matter. This guide
            covers how ASHP sizing works, how running costs compare to gas boilers, typical
            installation costs, and how the <strong>£7,500 Boiler Upgrade Scheme (BUS)</strong>{" "}
            grant fits into the picture.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is an Air Source Heat Pump?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              An ASHP is a type of heat pump that uses a refrigeration cycle to move heat from
              outside air into your home. It typically connects to a central heating system (radiators
              or underfloor heating) and usually heats a hot water cylinder. The main advantages are
              lower carbon emissions and potentially lower running costs if the system achieves a good
              seasonal efficiency (SCOP) and your home’s heat loss is managed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              ASHP Sizing Methodology (Heat Loss First)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Correct sizing starts with a heat loss calculation at UK design conditions. Your
              installer should assess insulation, glazing, ventilation, and exposed surfaces to
              estimate how many kilowatts of heat your home needs on the coldest typical days. The
              heat pump is then selected so it can meet that demand while maintaining comfortable
              indoor temperatures and keeping flow temperatures as low as practical.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Emitter checks matter too. If radiators are undersized for low flow temperatures, the
              system may need radiator upgrades or other changes to achieve good efficiency.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Running Costs vs Gas Boilers (What Changes?)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Heat pump running cost depends on two things: your annual heat demand (driven by heat
              loss and how warm you keep the home) and how efficiently the system turns electricity
              into heat (SCOP). A well-designed ASHP system can be cost-competitive with gas,
              particularly in well-insulated homes that can run low flow temperatures.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              If your system needs higher flow temperatures (because of small radiators or high heat
              loss), efficiency can drop and running costs can rise. That’s why sizing and emitter
              suitability are as important as the heat pump unit itself.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Installation Costs and What’s Included
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Typical ASHP installation costs vary based on property size, emitter upgrades,
              cylinder/pipework changes, electrical work, and access. The quote often includes the
              outdoor unit, indoor plumbing kit, hot water cylinder, controls, commissioning, and
              any required upgrades (for example, some radiator replacements).
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A cheaper quote can sometimes omit key improvements that protect performance—like
              emitter upgrades or system balancing—so compare like-for-like and ask what flow
              temperature the design targets.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              The £7,500 BUS Grant (UK)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The Boiler Upgrade Scheme offers a grant towards installing an eligible heat pump
              system in England and Wales. Eligibility and requirements can change, but in general
              you’ll need an MCS-certified installer and a compliant design and commissioning process.
              The grant is typically applied by the installer and deducted from the invoice.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What the Installation Process Looks Like
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Most installs follow a predictable sequence: initial survey and heat loss calculation,
              system design (including emitter checks), agreed quotation and grant paperwork, then
              installation of the outdoor unit, cylinder/indoor components, controls, and finally
              commissioning. A good installer will also explain how to run the system efficiently
              (steady schedules, avoiding frequent on/off, and keeping flow temperatures low where
              possible).
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
              Calculate Your Air Source Heat Pump Size
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Estimate your heat loss and a practical ASHP size range using our UK-focused calculator.
              It’s a great starting point before getting an MCS survey and quote.
            </p>
            <Link
              href="/calculator/heat-pump-size-calculator"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              style={{ backgroundColor: "#E67E22" }}
            >
              Use the Heat Pump Calculator
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Frequently Asked Questions
            </h2>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What size air source heat pump do I need in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on your home’s heat loss, not just bedrooms. Insulation, glazing, property
              type and region are the biggest drivers. Use an estimate to get a range, then confirm
              with an MCS installer’s heat loss calculation.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are air source heat pumps cheaper to run than gas boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can be, especially in well-insulated homes with low flow temperatures and good
              SCOP. If your system needs higher temperatures or your home has high heat loss, running
              costs may be higher than expected.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need new radiators for an ASHP?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often, some upgrades are needed. Heat pumps typically run cooler than boilers, so you
              may need larger radiators (or underfloor heating) to deliver enough heat at lower flow
              temperatures.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How does the £7,500 BUS grant work?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The grant is usually claimed by an MCS-certified installer and deducted from the
              installation cost. Eligibility depends on scheme rules and your property; confirm with
              your installer during the survey/quote process.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How long does it take to install an air source heat pump?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many installations take a few days, but the timeline depends on complexity—cylinder
              changes, electrical work, and radiator upgrades can extend the job. Your installer
              should provide a clear plan after the survey.
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

