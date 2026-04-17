import Link from "next/link";

export const metadata = {
  title: "Worcester Bosch vs Vaillant: Which Boiler Is Better UK 2026? | HVACThermal",
  description:
    "Worcester Bosch vs Vaillant — which boiler brand should you choose? UK comparison covering reliability, costs, warranties, and which is best for your home.",
};

export default function WorcesterBoschVsVaillantPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="HVACThermal Home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "#1E3A5F" }} aria-hidden="true">
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
            Worcester Bosch vs Vaillant: Which Boiler Is Better UK 2026?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Worcester Bosch and Vaillant are two of the most popular boiler brands in the UK. Both have strong ranges
            across combi and system boilers, with good efficiency and broad installer support. The best choice usually
            comes down to model fit, warranty, installer quality, and how your system is set up. This comparison highlights
            the main factors to consider in 2026.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Reliability and Parts Support
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Both brands have strong UK presence and parts availability. Reliability is influenced heavily by correct installation,
              system water quality, and annual servicing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Warranty: What Matters Most
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Compare warranty length, what’s required to maintain it (servicing, filter, inhibitor), and who provides support.
              A longer warranty is valuable, but only if the installer registers it properly and you meet maintenance requirements.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs and Value
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Boiler price is only part of the cost—installation complexity can outweigh brand differences. Get like-for-like quotes
              including controls, system cleaning, and filter/inhibitor.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Which Is Best for Your Home?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Choose the model that matches your heat demand and hot water needs, with an installer you trust. A well-installed boiler from either brand
              will usually outperform a poorly installed boiler from “the best” brand.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Compare Brands After You Know Your kW Range
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Before comparing models, estimate the boiler output your home needs. It helps avoid oversizing and keeps quotes comparable.
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
              Is Worcester Bosch better than Vaillant?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Both are strong brands. The best choice depends on the specific model, warranty, and installation quality.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Which brand is cheaper?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Pricing varies by model and installer. Compare total supply-and-fit quotes including controls and system protection.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do they need a magnetic filter?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many installers recommend filters for system protection and to support reliability. Check warranty requirements and installer guidance.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How important is installer quality?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Extremely. Correct sizing, commissioning, flue/condensate setup, and system cleaning often matter more than brand alone.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I ask for in a quote?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Boiler model, warranty length, controls, flush/cleaning, filter/inhibitor, flue work, disposal, and certification.
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

