import Link from "next/link";

export const metadata = {
  title: "Boiler Grants UK 2025: Free & Funded Boiler Schemes | HVACThermal",
  description:
    "Could you get a free or subsidised boiler in the UK? Complete guide to boiler grants including ECO4, the Warm Home Discount, and how to apply.",
};

export default function BoilerGrantUkPage() {
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
            Boiler Grants UK 2025: Free & Funded Boiler Schemes
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler is old, unreliable, or expensive to run, you may be able to get support
            through UK schemes that fund heating and energy efficiency improvements. Some households
            can qualify for heavily subsidised (and in some cases free) upgrades through energy
            supplier obligations and local programmes. This guide explains the main boiler grant
            routes people commonly ask about in 2025, how eligibility generally works, and how to
            apply safely.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Boiler Grants Exist in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              “Boiler grants” is a catch-all phrase. In reality, support usually sits within broader
              programmes focused on reducing household energy use and fuel poverty. These may fund
              boiler replacements, heating controls, insulation, or low-carbon alternatives depending
              on circumstances.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              ECO4 (Energy Company Obligation)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              ECO4 is a major route for funded energy improvements. Eligibility typically depends on
              household circumstances, property characteristics, and your local authority’s criteria.
              It often supports a package of measures (like insulation plus heating upgrades) rather
              than only swapping a boiler.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Warm Home Discount and Other Support
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The Warm Home Discount is primarily a bill support scheme rather than a boiler grant,
              but it’s often mentioned alongside grant options. Local authority programmes and charity
              support may also exist depending on your area.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Apply (Safely)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Start with official guidance and reputable installers/assessors. Be cautious of cold
              callers promising “free boilers” without explaining eligibility, surveys, or what
              measures are included. Always check credentials and confirm what work is covered before
              agreeing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              If You’re Replacing a Boiler: Don’t Oversize
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Grant-funded or not, boiler sizing still matters. Replacing like-for-like without
              reassessing can lead to inefficiency and cycling—especially if you’ve improved
              insulation or changed radiators.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Check the Right Boiler Size (kW)
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you’re applying for a funded boiler replacement, use our free calculator to estimate
              a sensible kW range so you can sanity-check recommendations.
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
              Can I get a free boiler in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some households may qualify for heavily subsidised upgrades through schemes like ECO4,
              but eligibility depends on your circumstances and property. Always confirm via official
              routes and a proper survey.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is ECO4 the same as a boiler grant?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              ECO4 is a broader energy efficiency obligation that can fund heating upgrades, often as
              part of a package of measures rather than a simple boiler swap.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need to be on benefits to qualify?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many programmes use income/benefit-related eligibility criteria, but local authority
              schemes can vary. Check current guidance for your area.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will a grant cover boiler servicing or repairs?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Grants usually focus on upgrades and replacements rather than routine servicing. If
              your boiler is unsafe or failing, ask an engineer about repair vs replacement options.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I avoid scams?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Be wary of high-pressure sales and vague promises. Verify credentials, get written
              details of what’s included, and use official scheme information to confirm eligibility.
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

