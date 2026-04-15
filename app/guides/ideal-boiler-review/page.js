import Link from "next/link";

export const metadata = {
  title: "Ideal Boiler Review UK 2026: Pros, Cons & Reliability | HVACThermal",
  description:
    "Is an Ideal boiler worth buying in the UK? Our 2026 review covers costs, reliability ratings, warranties, common problems, and alternatives.",
};

export default function IdealBoilerReviewPage() {
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
            Ideal Boiler Review UK 2026: Pros, Cons & Reliability
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Ideal is a major boiler brand in the UK market, often positioned as a strong value option
            with accessible parts and a wide installer base. Like all boilers, the real-world outcome
            depends on correct sizing, system cleanliness, and commissioning quality. This review
            covers typical strengths, trade-offs, warranty considerations, and what to compare when
            weighing Ideal against other brands.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros: Why UK Homeowners Consider Ideal
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Value:</strong> Often competitive installed quotes compared with premium brands.
              </li>
              <li>
                <strong>Installer familiarity:</strong> Many engineers know the range and parts are widely available.
              </li>
              <li>
                <strong>Good performance when set up well:</strong> Modulation and controls matter more than the badge.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cons: Common Trade-Offs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The main trade-offs are usually about model selection and installation quality. A budget
              install that skips proper flushing, a filter, or correct control settings will cause
              problems regardless of brand.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs and Installed Quotes
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Installed price depends on boiler type (combi/system/regular), kW output, and complexity
              (flue route, controls, cylinder work, relocation/conversion). Compare itemised quotes and
              check whether cleaning, filter fitting, inhibitor, and commissioning are included.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Warranties and Servicing Requirements
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Warranty length and coverage vary by model and installer status. Ensure registration is
              completed promptly and keep annual service records. If you’re comparing brands, warranty
              terms are often a major differentiator.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Don’t Guess the kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Correct kW sizing helps efficiency and comfort and can reduce breakdown risk. Use our
              calculator to estimate a suitable output range before choosing a model.
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
              Are Ideal boilers reliable?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They can be, especially when installed on a clean system and sized correctly. Many
              reliability issues are linked to installation and water quality rather than brand.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are Ideal boilers cheaper than Vaillant or Worcester Bosch?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes on unit price, but compare installed quotes including controls, cleaning, and
              warranty value to judge total cost.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What warranty can I get on an Ideal boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It depends on the model and installer. Confirm registration steps and servicing requirements
              so the warranty remains valid.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What are common Ideal boiler problems?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common issues seen across many brands include pressure drops, blockages from system debris,
              and condensate problems in winter. Proper flushing and filtration reduce risk.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I prioritise brand or installer quality?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Installer quality. A competent Gas Safe engineer who sizes, cleans, and commissions properly
              is usually the biggest factor in outcome.
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

