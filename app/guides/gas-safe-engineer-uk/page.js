import Link from "next/link";

export const metadata = {
  title: "Gas Safe Engineer UK: Why It Matters & How to Find One | HVACThermal",
  description:
    "Why you must use a Gas Safe registered engineer in the UK. How to check registration, find a local engineer, and what to do if work goes wrong.",
};

export default function GasSafeEngineerUkPage() {
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
            Gas Safe Engineer UK: Why It Matters & How to Find One
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            In the UK, gas appliances must be installed and worked on by a Gas Safe registered engineer.
            This isn’t just a formality—gas safety mistakes can lead to carbon monoxide risk, fire, and
            costly damage. This guide explains what Gas Safe registration means, how to check an engineer,
            how to find a reputable local installer, and what to do if you think gas work has been done
            incorrectly.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is Gas Safe?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Gas Safe Register is the official registration body for gas engineers in the UK. Engineers
              must be registered to legally carry out gas work. Registration includes categories of work
              (for example boilers, cookers, fires), so you should check the engineer is registered for
              the specific type of appliance and work you need.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why It Matters (Safety and Compliance)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Correct installation and commissioning includes safe combustion, correct flue setup,
              adequate ventilation where required, and correct controls configuration. Using a registered
              engineer reduces risk and helps ensure you receive proper documentation and warranty support.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Check Gas Safe Registration
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Ask to see the engineer’s Gas Safe ID card and check the back for categories relevant to
              your job. You can also verify registration online via Gas Safe Register. If details don’t
              match, don’t proceed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How to Find a Good Local Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Look for itemised quotes, clear explanations, and evidence of best practice (system flush,
              magnetic filter, correct controls, commissioning). Reviews help, but the best signals are
              professionalism, documentation, and a willingness to explain the approach.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What to Do If Work Goes Wrong
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you suspect unsafe gas work, prioritise safety: ventilate, turn off the appliance,
              and contact a qualified engineer. If the installer isn’t registered or won’t rectify,
              you can report concerns to Gas Safe. Keep documentation and photos where safe to do so.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              When Getting Quotes, Check Your Boiler Size Too
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              A good Gas Safe engineer will size the boiler correctly for your home. Use our calculator
              to estimate a sensible kW range so you can have a better conversation when comparing quotes.
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
              Is it illegal to install a gas boiler without Gas Safe?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Gas work must be carried out by a Gas Safe registered engineer with the correct categories.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              How do I verify an engineer is Gas Safe registered?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Ask to see the Gas Safe ID card and verify details via Gas Safe Register. Check the categories on the card match your job.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do all Gas Safe engineers cover boilers?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Not necessarily. Engineers are registered for specific appliance types, so confirm “boilers” (and the right fuel type) is listed.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What paperwork should I receive after a boiler install?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              You should receive commissioning paperwork and warranty registration details. For many installs, notification/certification is also required.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I do if I suspect unsafe gas work?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Stop using the appliance, ventilate if appropriate, and contact a qualified Gas Safe engineer. Report concerns to Gas Safe if needed.
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

