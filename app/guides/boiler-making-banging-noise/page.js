import Link from "next/link";

export const metadata = {
  title: "Boiler Making Banging Noise? Causes & Fixes UK 2026 | HVACThermal",
  description:
    "Loud banging from your boiler? UK guide covering kettling, water hammer, loose pipes, and all other causes of banging noises from boilers.",
};

export default function BoilerMakingBangingNoisePage() {
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
            Boiler Making Banging Noise? Causes & Fixes UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A banging noise from a boiler can be alarming. It may be “kettling” from limescale or sludge,
            water hammer in pipework, trapped air, pump issues, or expanding pipes. Some causes are minor,
            but others can damage the boiler if ignored. This guide covers common UK causes and what to do next.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              First: When Does the Banging Happen?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Note whether it happens when the heating turns on, when hot water starts, or when valves close.
              Timing helps distinguish kettling (boiler-side) from water hammer (pipework-side).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cause 1: Kettling (Scale/Sludge Restriction)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Kettling is a rumbling/banging caused by restricted flow and localized overheating, often due to
              limescale or sludge. It’s more common in hard-water areas and older systems. Treatment may include
              cleaning, system flushing, or fitting a filter/inhibitor.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cause 2: Water Hammer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Water hammer is a loud bang when a valve closes quickly and pressure waves travel through pipework.
              It can be triggered by fast-closing valves or poor pipe support. An engineer can recommend flow adjustments
              or arrestors depending on the setup.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Cause 3: Air in the System or Pump Problems
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Trapped air can cause noisy operation and poor circulation. If radiators have cold tops, bleeding may help.
              Pumps can also become noisy or fail, especially if system water quality is poor.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call an engineer if the noise is new and loud, the boiler locks out, pressure changes abnormally, or you suspect kettling.
              Don’t remove the boiler case or attempt internal repairs.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Replacing the Boiler? Size It Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If repair costs are rising or the boiler is inefficient, replacement may be the best route. Use our calculator
              to estimate the kW output range for your home.
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
              Is a banging boiler dangerous?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not always, but it can indicate faults that damage the boiler if ignored. If there are lockouts, leaks, or overheating signs, get it checked.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What is kettling?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Kettling is noise caused by restricted flow and localized boiling/overheating, commonly linked to scale or sludge in the heat exchanger.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can bleeding radiators stop boiler noises?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the noise is caused by trapped air and poor circulation, bleeding can help. If the noise is kettling, bleeding won’t solve the root cause.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does sludge cause banging?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sludge can restrict flow and contribute to overheating and kettling-style noises.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When should I call an engineer?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the noise is persistent, loud, or associated with lockouts, pressure problems, or performance issues, book an engineer.
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

