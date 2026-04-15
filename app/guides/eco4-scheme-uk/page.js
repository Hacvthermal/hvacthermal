import Link from "next/link";

export const metadata = {
  title: "ECO4 Scheme UK: What Is It & How Do You Apply? | HVACThermal",
  description:
    "What is the ECO4 scheme and who qualifies? Complete UK guide covering eligibility, what you can get, how to apply, and what installers must do.",
};

export default function Eco4SchemeUkPage() {
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
            ECO4 Scheme UK: What Is It & How Do You Apply?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            ECO4 (the Energy Company Obligation) is a UK programme that funds energy efficiency and
            heating improvements—aimed primarily at reducing fuel poverty and improving low efficiency
            homes. It’s often talked about as “free boiler grants”, but in reality ECO4 is usually a
            package approach: insulation, controls, and heating upgrades together. This guide explains
            what ECO4 is, who may qualify, what you can get, how to apply, and what installers must do.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is the ECO4 Scheme?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              ECO4 places an obligation on larger energy suppliers to deliver energy efficiency
              measures to eligible households. The goal is to reduce energy consumption and improve
              comfort—especially in hard-to-heat homes.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              ECO4 Eligibility (High-Level)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Eligibility can depend on household circumstances, benefits/income criteria, and local
              authority routes. It can also depend on the property’s efficiency and what measures are
              appropriate. Because rules evolve, treat any online “instant approval” claims cautiously
              until a proper assessment is completed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Can You Get Through ECO4?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Measures vary by property, but commonly include insulation improvements, heating controls,
              and heating system upgrades. In some cases, a boiler replacement may be included, but
              ECO4 often focuses on reducing heat loss first (insulation) so the heating system can be
              smaller and run more efficiently.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Loft and wall insulation</strong>
              </li>
              <li>
                <strong>Heating controls</strong> (thermostats, programmers, TRVs)
              </li>
              <li>
                <strong>Boiler upgrades</strong> (where appropriate)
              </li>
              <li>
                <strong>Other efficiency measures</strong> depending on property type
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Apply for ECO4
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Application typically starts with an eligibility check and property assessment. You may
              be referred through your energy supplier, an installer network, or a local authority
              route. Expect a survey and documentation requests. Always get a written scope of work
              and confirm who is responsible for aftercare and warranty.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Installers Must Do (Quality and Compliance)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Installers should carry out surveys, recommend suitable measures, and complete work to
              relevant standards. For boiler work, you should still use a Gas Safe engineer and ensure
              commissioning, controls setup, and documentation are completed properly.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If a Boiler Upgrade Is Included, Size It Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              ECO4 measures can reduce heat loss, which can change the ideal boiler kW output. Use our
              calculator to estimate a sensible range before agreeing to a replacement.
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
              Is ECO4 a free boiler scheme?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              ECO4 can fund heating upgrades for eligible households, but it’s broader than boilers and
              often involves a package of measures. Eligibility and contributions vary.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Who qualifies for ECO4?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Qualification depends on household circumstances and property factors. Local authority
              routes may apply. Always confirm via an official or reputable assessment.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What measures does ECO4 cover?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common measures include insulation and heating controls, and in some cases heating system
              upgrades. The exact package depends on what the property needs.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How long does an ECO4 application take?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Timelines vary by provider and survey availability. Expect multiple steps: eligibility
              check, survey, approval, and scheduling installation work.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I avoid ECO4 scams?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Avoid high-pressure sales. Verify installer credentials, insist on a survey and written
              scope, and confirm the scheme route and aftercare arrangements.
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

