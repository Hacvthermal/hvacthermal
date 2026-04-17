import Link from "next/link";

export const metadata = {
  title: "Radiator Cold at Top? How to Bleed It UK Guide 2026 | HVACThermal",
  description:
    "Radiator cold at the top but warm at the bottom? You probably need to bleed it. UK step-by-step guide to bleeding radiators and fixing cold spots.",
};

export default function RadiatorColdAtTopPage() {
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
            Radiator Cold at Top? How to Bleed It UK Guide 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If a radiator is cold at the top but warm at the bottom, trapped air is the most common cause. Air
            prevents hot water reaching the top of the radiator, reducing heat output and comfort. This UK guide
            explains how to bleed a radiator safely and what to do if the problem comes back.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What You’ll Need
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>Radiator bleed key (or screwdriver depending on valve type)</li>
              <li>Cloth/towel</li>
              <li>Small container to catch water</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Step-by-Step: How to Bleed a Radiator
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Turn heating off:</strong> let radiators cool so you don’t release hot water under pressure.
              </li>
              <li>
                <strong>Place a cloth and container:</strong> under the bleed valve.
              </li>
              <li>
                <strong>Open the bleed valve slowly:</strong> you should hear a hiss as air escapes.
              </li>
              <li>
                <strong>Close when water flows steadily:</strong> once the hissing stops and water runs without spurting.
              </li>
              <li>
                <strong>Check boiler pressure:</strong> sealed systems may need topping up afterwards.
              </li>
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              If the Radiator Still Has Cold Spots
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Cold bottoms often point to sludge rather than air. If only one radiator is affected, it might also be a
              stuck TRV or balancing issue.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you repeatedly need to bleed radiators, pressure keeps dropping, or you hear gurgling/banging in the system,
              it can indicate air ingress or broader system issues. An engineer can check for leaks and recommend a longer-term fix.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You’re Replacing the Boiler, Check Output First
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Heating problems can be a prompt to upgrade. Use our calculator to estimate the right boiler kW output for your home.
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
              Why is my radiator cold at the top?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Trapped air is the most common reason. Bleeding releases that air so hot water can fill the radiator fully.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need to turn the heating off to bleed radiators?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s recommended so you’re not dealing with hot water and so pressure behaviour is more predictable.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Will bleeding reduce boiler pressure?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can on sealed systems. Check the boiler gauge afterwards and top up if needed.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if no air comes out?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The radiator might not be getting flow due to a valve issue, balancing, or sludge. Check TRVs/lockshields and consider a system check.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why do I need to bleed radiators so often?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Frequent air can indicate a leak, pressure problems, or ongoing corrosion. If it keeps happening, book an engineer.
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

