import Link from "next/link";

export const metadata = {
  title: "Hydrogen Boilers UK: What Are They & When Are They Coming? | HVACThermal",
  description:
    "What is a hydrogen boiler and when will they be available in the UK? Guide covering the hydrogen heating plan, costs, and what it means for homeowners.",
};

export default function HydrogenBoilerUkPage() {
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
            Hydrogen Boilers UK: What Are They & When Are They Coming?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Hydrogen boilers are often described as “drop-in” replacements for gas boilers that could run on hydrogen
            (or blends). The idea is to decarbonise heating without changing radiators and pipework as much as other options.
            In practice, hydrogen heating depends on infrastructure, safety standards, appliance availability, and policy decisions.
            This guide explains what hydrogen boilers are, what “hydrogen-ready” means, and what homeowners should watch for.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a Hydrogen Boiler?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A hydrogen boiler is a boiler designed to burn hydrogen gas (or potentially a blend) instead of natural gas.
              Hydrogen-ready boilers are typically designed to run on natural gas initially and be converted later if hydrogen becomes available.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When Are They Coming?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Timelines depend on UK policy and local network decisions. Some areas may see trials and pilot programmes before any wider rollout.
              For most homeowners, the key is understanding that hydrogen availability is not guaranteed everywhere and may vary by region.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Costs and Practical Considerations
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Costs include the boiler itself, installation, and any conversion work. Running costs depend on fuel pricing and efficiency.
              Regardless of fuel, system cleanliness, controls, and correct sizing remain important.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Homeowners Should Do Now
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Focus on “no-regret” improvements: insulation, heating controls, and keeping the system maintained. If you’re replacing a boiler today,
              compare options based on your current needs, not only a future hydrogen scenario.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Whatever Fuel You Choose, Start With kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Correct output is fundamental for comfort and efficiency. Use our calculator to estimate the boiler kW range your home needs.
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
              What does “hydrogen-ready” mean?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It generally means a boiler designed to run on natural gas now and be converted later to run on hydrogen, depending on availability and standards.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will hydrogen boilers be available everywhere in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not necessarily. Availability depends on network decisions and policy, and could vary by region.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are hydrogen boilers more efficient than gas boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Efficiency depends on appliance design and operation. Correct sizing, controls, and system quality still matter a lot.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I wait for hydrogen instead of replacing my boiler now?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If your boiler is failing, it’s usually better to replace based on current needs. Hydrogen timelines and coverage are uncertain for many homes.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What’s the best “no-regret” upgrade right now?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Insulation, draught proofing, controls, and keeping your heating system clean and serviced.
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

