import Link from "next/link";

export const metadata = {
  title: "How to Balance Radiators UK: Step-by-Step Guide 2026 | HVACThermal",
  description:
    "Some radiators hot, others cold? Learn how to balance your radiators in the UK. Step-by-step guide covering lockshield valves and thermostatic valves.",
};

export default function HowToBalanceRadiatorsPage() {
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
            How to Balance Radiators UK: Step-by-Step Guide 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If some radiators get hot quickly while others stay lukewarm or cold, your system may be unbalanced.
            Balancing means adjusting the lockshield valves so each radiator gets an appropriate share of the flow.
            This guide explains a practical balancing process for UK homes and when to get professional help.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What You Need Before You Start
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>A small adjustable spanner or radiator valve key (depending on valve caps)</li>
              <li>A thermometer (optional but helpful)</li>
              <li>Patience — balancing can take time</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step-by-Step: How to Balance Radiators
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Open all TRVs fully:</strong> you want a consistent baseline.
              </li>
              <li>
                <strong>Turn heating on:</strong> let radiators warm and note which heat up fastest.
              </li>
              <li>
                <strong>Start with the closest radiator:</strong> slightly close its lockshield to reduce flow.
              </li>
              <li>
                <strong>Work through radiators:</strong> gradually adjust lockshields so far radiators receive enough flow.
              </li>
              <li>
                <strong>Recheck after settling:</strong> small changes can take time to show.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-7">
              Tip: Take note of the number of turns from fully closed for each lockshield, so you can undo changes if needed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Signs It’s Not Just Balancing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If radiators are cold at the bottom, you may have sludge. If they are cold at the top, trapped air may be present.
              If pressure keeps dropping, look for leaks or PRV discharge.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If balancing doesn’t improve performance, or you suspect pump issues or sludge, book a heating engineer to assess the system.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You Upgrade Your Boiler, Size It Correctly
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Even a perfectly balanced system won’t feel right if the boiler is poorly sized. Use our calculator to estimate the right kW output for your home.
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
              What is a lockshield valve?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s the valve (usually under a cap) used to regulate flow through a radiator for balancing. It’s not intended for daily adjustments.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Should I balance radiators with TRVs fitted?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Balance using the lockshield valves, and keep TRVs fully open during the balancing process.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I know if balancing worked?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Radiators should heat more evenly across the home and the furthest radiators should improve. It may still take time for rooms to reach temperature.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will balancing reduce my energy bills?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can improve comfort and reduce wasted heat in some rooms, especially when combined with good controls and TRVs.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call a professional?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the system won’t balance, radiators stay cold, or you suspect sludge/pump issues, book an engineer for diagnosis.
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

