import Link from "next/link";

export const metadata = {
  title: "Boiler Efficiency Ratings UK: What Do They Mean? 2026 | HVACThermal",
  description:
    "What do boiler efficiency ratings mean in the UK? Guide to ErP ratings, AFUE, condensing boilers, and how efficiency affects your energy bills.",
};

export default function BoilerEfficiencyRatingsPage() {
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
            Boiler Efficiency Ratings UK: What Do They Mean? 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler efficiency ratings can feel confusing because you’ll see different labels depending on where the
            boiler is sold and how it’s tested. In the UK, the most common rating you’ll see is the ErP efficiency label
            (with a letter grade). This guide explains what these ratings mean, how they relate to real-world energy bills,
            and why boiler sizing and controls also matter.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is the ErP Boiler Rating?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              ErP (Energy-related Products) labels provide an efficiency class for space heating and sometimes hot water.
              Higher classes generally mean better tested efficiency under standard conditions, often for condensing boilers.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              AFUE vs UK Ratings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              AFUE is a common metric in the US. In the UK, you’ll more often see ErP classes and seasonal efficiency figures.
              The key idea is the same: how much of the fuel energy is converted into useful heat across typical operation.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Real-World Efficiency Can Be Lower
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Wrong sizing:</strong> oversized boilers can short cycle and waste energy.
              </li>
              <li>
                <strong>High flow temperatures:</strong> reduces condensing time and efficiency.
              </li>
              <li>
                <strong>Poor controls:</strong> weak scheduling/thermostat setups cause unnecessary runtime.
              </li>
              <li>
                <strong>System issues:</strong> sludge and air reduce heat transfer and circulation.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Efficiency Affects Bills
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Higher efficiency generally reduces the gas needed for the same heat output, but the biggest bill drivers
              are still how much heat your home needs (insulation/size) and how you control the heating.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Efficiency Starts With Correct Boiler Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Even a high-efficiency boiler performs poorly if it’s badly sized. Use our calculator to estimate the right kW range for your home.
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
              What’s a good boiler efficiency rating in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Modern condensing boilers typically have high seasonal efficiency figures and strong ErP classes. Focus on correct sizing and controls too.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Are condensing boilers more efficient?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. They recover more heat from the flue gases, especially when operating at lower return temperatures.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does a bigger boiler mean better efficiency?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not necessarily. Oversizing can cause short cycling, which can reduce comfort and efficiency.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can low flow temperatures improve efficiency?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes for condensing boilers, because they condense more and recover more heat.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What else improves efficiency besides the boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Insulation, zoning/TRVs, smart controls, and clean system water all help reduce energy waste.
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

