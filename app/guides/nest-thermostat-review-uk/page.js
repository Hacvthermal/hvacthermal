import Link from "next/link";

export const metadata = {
  title: "Nest Thermostat Review UK 2026: Is It Worth It? | HVACThermal",
  description:
    "Honest Nest thermostat review for UK homes. Covers costs, installation, energy savings, compatibility with combi boilers, and how it compares to Hive.",
};

export default function NestThermostatReviewUkPage() {
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
            Nest Thermostat Review UK 2026: Is It Worth It?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Google Nest Learning Thermostat and Nest Thermostat E are popular in
            the UK for app control, scheduling, and learning behaviour. This
            honest review covers typical costs, installation considerations,
            realistic energy savings, compatibility with combi boilers and
            heating systems, and how Nest compares to Hive in 2026.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Features UK Homeowners Care About
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Nest devices offer app-based control, geolocation-style features
              where supported, and integration with Google Home. Compatibility
              depends on your existing wiring (common wire, heat link, or
              third-gen wiring) and whether you have a combi, system, or heat-only
              setup. Always check compatibility for your boiler model before buying.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Installation and Costs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many UK homeowners use a professional installer for Nest, especially
              if wiring is unfamiliar or you need a Heat Link for certain boilers.
              DIY is possible for confident users with suitable wiring. Total cost
              includes the device plus any professional installation and optional
              accessories.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Energy Savings: What Is Realistic?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Savings come from better scheduling, away modes, and avoiding
              overheating—not from the brand alone. Well-insulated homes with
              sensible setpoints see modest bill reductions; high setpoints and
              poor insulation limit gains regardless of smart thermostat choice.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Nest vs Hive (Brief Comparison)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Hive integrates tightly with British Gas ecosystems and offers
              straightforward app control. Nest leans into Google Home and
              learning-style automation. Both can work with many UK combi boilers
              when installed correctly; the better pick is often the ecosystem you
              already use and installer familiarity with your boiler.
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
              Is Nest worth it in the UK in 2026?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can be if you want Google Home integration, app control, and your
              system is compatible. Compare total cost and features with Hive and
              Tado before deciding.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Does Nest work with combi boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes, when wired correctly and the boiler supports the control
              protocol. Always verify compatibility for your specific boiler and
              wiring before purchase.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do I need professional installation?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Recommended if you are unsure about mains wiring or boiler
              connections. Incorrect wiring can be unsafe or damage equipment.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Will Nest save a lot on gas bills?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Modest savings are realistic for many homes through better schedules
              and reduced overheating. Insulation and boiler efficiency matter more
              for large savings.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              How does Nest compare to Hive?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Hive suits some British Gas customers and simple setups; Nest suits
              Google-centric homes. Feature sets overlap—compare app, price, and
              installer advice for your boiler.
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
