import Link from "next/link";

export const metadata = {
  title: "Vaillant Boiler Review UK 2025: Pros, Cons & Costs | HVACThermal",
  description:
    "Thinking about a Vaillant boiler? Our UK review covers reliability, prices, warranties, common problems, and how Vaillant compares to Worcester Bosch.",
};

export default function VaillantBoilerReviewPage() {
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
            Vaillant Boiler Review UK 2025: Pros, Cons & Costs
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Vaillant is a premium-leaning boiler brand in the UK, often praised for build quality,
            quiet operation, and strong performance when installed correctly. This guide covers the
            typical pros and cons, what affects installed cost, warranty considerations, common
            issues homeowners should know about, and how Vaillant compares with Worcester Bosch.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Pros: Where Vaillant Tends to Perform Well
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Strong modulation and efficiency:</strong> Helps reduce cycling when sized and set up well.
              </li>
              <li>
                <strong>Wide installer familiarity:</strong> Many UK engineers know the brand and can support it.
              </li>
              <li>
                <strong>Good control ecosystem:</strong> Pairing the right controls can improve comfort and efficiency.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cons: What to Watch Out For
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The main “con” for many households is the installed price compared with budget brands.
              Also, like any boiler, performance depends on system cleanliness and correct setup—no
              brand is immune to problems if installed on a dirty system or incorrectly commissioned.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs: What You’ll Pay in 2025
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Installed cost depends on boiler type (combi/system/regular), kW output, and how much
              work is required (flue route, controls, filter, flush, and any conversions or relocations).
              Compare itemised quotes and consider warranty length and aftercare rather than focusing only on the unit price.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Warranties, Registration, and Servicing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Warranty length varies by model and installer status. Ensure the boiler is registered
              promptly and keep servicing records. Many warranty disputes come down to missing
              paperwork or not meeting servicing requirements.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Vaillant vs Worcester Bosch: Which Is Better?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Both are popular UK choices with good support networks. Differences often come down to
              the specific model range, warranty terms, controls, installer preference, and installed
              price. The best-performing boiler is usually the one that’s correctly sized, installed,
              and commissioned on a clean system.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Calculate the Right Boiler Output (kW)
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Before comparing Vaillant vs Worcester Bosch, work out the kW range your home actually
              needs for heating and (if combi) hot water.
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
              Are Vaillant boilers reliable in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              They’re generally well regarded, but reliability depends on correct sizing, clean system
              water, and quality installation/commissioning.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are Vaillant boilers expensive?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some ranges cost more than budget brands. Compare installed quotes and warranty value to
              judge overall cost-effectiveness.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What common problems do Vaillant boilers have?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No brand is problem-free. Many issues are linked to system contamination, incorrect
              setup, or component wear over time—an annual service helps reduce risk.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can I get a long Vaillant warranty?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes, depending on model range and installer accreditation. Confirm what controls,
              filter, and registration steps are required.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I choose Vaillant or Worcester Bosch?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Choose based on model fit for your property, installed quote, warranty terms, and the
              quality of the installer—sizing and commissioning matter more than the logo.
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

