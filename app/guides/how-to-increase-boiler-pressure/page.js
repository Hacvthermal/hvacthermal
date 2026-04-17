import Link from "next/link";

export const metadata = {
  title: "How to Increase Boiler Pressure UK: Step-by-Step Guide | HVACThermal",
  description:
    "Step-by-step guide to increasing boiler pressure in UK homes. How to use the filling loop safely, what pressure it should be, and when to call an engineer.",
};

export default function HowToIncreaseBoilerPressurePage() {
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
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "#1E3A5F" }}>
            How to Increase Boiler Pressure UK: Step-by-Step Guide
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Low boiler pressure is one of the most common reasons a sealed-system boiler stops working.
            The fix is often straightforward: topping up using the filling loop. This guide explains how
            to increase boiler pressure safely in UK homes, what pressure it should be, and when you should
            stop and call an engineer.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Pressure Should My Boiler Be?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many sealed systems target around 1–1.5 bar when cold, rising when hot. Your boiler manual is
              the best reference. If pressure is too low, the boiler may shut down or show an error code.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step-by-Step: How to Top Up Using a Filling Loop
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Turn heating off and let it cool:</strong> topping up is easiest and safest when the system is cool.
              </li>
              <li>
                <strong>Find the pressure gauge:</strong> usually on the boiler display or a dial underneath.
              </li>
              <li>
                <strong>Locate the filling loop:</strong> often a braided silver hose under the boiler (internal or external loop).
              </li>
              <li>
                <strong>Open the valve(s) slowly:</strong> you should hear water entering the system.
              </li>
              <li>
                <strong>Watch the gauge:</strong> stop around the recommended cold pressure (commonly 1–1.5 bar).
              </li>
              <li>
                <strong>Close the valve(s) fully:</strong> don’t leave the filling loop open.
              </li>
              <li>
                <strong>Restart the boiler if needed:</strong> some models require a reset after pressure is restored.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-7">
              If you’re unsure about valve positions or your boiler uses a different setup, follow the boiler
              manual or get professional help.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What If Pressure Keeps Dropping After You Top Up?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Repeated drops usually indicate a leak, PRV discharge, or expansion vessel issue. Avoid constant
              topping up; it can accelerate corrosion and mask the real problem.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call a heating engineer if you can’t locate the filling loop, pressure drops again quickly,
              or the boiler shows persistent errors. If you see leaks or the PRV discharge pipe is dripping,
              book a professional.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing the Boiler, Start With kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If low pressure is part of wider boiler reliability problems, a replacement might be on the horizon.
              Use our calculator to estimate the right boiler kW for your home.
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
              Is it safe to increase boiler pressure myself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              In many homes, yes—if you follow the manual and move valves slowly while watching the gauge.
              If you’re unsure, call an engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What happens if I overfill the boiler pressure?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              High pressure can trigger the PRV to release water. You may need to bleed a radiator slightly to reduce pressure, but don’t guess—follow guidance.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why does pressure drop after bleeding radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Bleeding releases air and a small amount of water, which can reduce pressure in sealed systems.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How often should I need to top up pressure?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ideally rarely. Regular top-ups often mean a leak or a component problem that needs diagnosis.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if I can’t find the filling loop?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Some systems have internal filling loops or different arrangements. Check the manual or book an engineer to avoid mistakes.
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

