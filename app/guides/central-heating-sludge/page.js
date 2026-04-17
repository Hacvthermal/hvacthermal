import Link from "next/link";

export const metadata = {
  title: "Central Heating Sludge: Signs, Causes & How to Fix It UK | HVACThermal",
  description:
    "Black sludge in your central heating system? UK guide covering what causes it, signs your system is affected, and whether you need a power flush.",
};

export default function CentralHeatingSludgePage() {
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
            Central Heating Sludge: Signs, Causes & How to Fix It UK
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            “Sludge” in central heating usually means magnetite — a black iron oxide that forms when system water
            corrodes steel radiators and components. Over time it restricts flow, causes cold spots, and can damage
            pumps and boiler heat exchangers. This guide covers signs of sludge, what causes it, and the common UK fixes.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Signs You May Have Sludge
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>Radiators cold at the bottom</li>
              <li>Boiler noises or poor circulation</li>
              <li>Frequent pump/valve issues</li>
              <li>Black water when bleeding or draining</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Causes Sludge?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Sludge forms when oxygen enters the system and corrosion products circulate. Common contributors include
              older systems, repeated topping up, missing/low inhibitor, and mixed metals without proper protection.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Fix It
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The right fix depends on severity. Options include a chemical flush, a full power flush, cleaning or replacing
              badly blocked radiators, fitting a magnetic filter, and ensuring inhibitor levels are correct after cleaning.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Do You Need a Power Flush?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Not always. If one radiator is affected, targeted fixes may be enough. If many radiators have cold bottoms
              and the boiler is noisy or overheating, a power flush may be worthwhile.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You Replace the Boiler, Check kW Output
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If sludge has caused repeated boiler issues, you may be considering replacement. Use our calculator to estimate the correct kW range for your home.
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
              What is central heating sludge?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s typically magnetite (black iron oxide) formed by corrosion in the heating system.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can sludge damage my boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. It can reduce flow, cause overheating, and accelerate wear on pumps, valves, and heat exchangers.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is a magnetic filter worth it?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes—especially after cleaning. It helps capture circulating debris and protect components.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will inhibitor stop sludge?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Inhibitor reduces corrosion and helps prevent sludge formation, but it needs correct dosing and a reasonably sealed system.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If multiple radiators are affected, the boiler is noisy/overheating, or performance is poor, book an engineer for assessment.
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

