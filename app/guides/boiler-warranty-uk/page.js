import Link from "next/link";

export const metadata = {
  title: "Boiler Warranty UK: What's Covered & How Long It Lasts | HVACThermal",
  description:
    "Everything UK homeowners need to know about boiler warranties — what's covered, how long they last, how to register, and what voids a warranty.",
};

export default function BoilerWarrantyUkPage() {
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
            Boiler Warranty UK: What's Covered & How Long It Lasts
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Boiler warranties can look simple—“5 years”, “10 years”—but the fine print matters. What’s
            covered, what you must do to keep the warranty valid, and who you should call when things go
            wrong can vary by manufacturer and installer status. This guide explains the basics UK
            homeowners need to know about boiler warranties, including registration, servicing, and the
            most common reasons warranties get voided.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Does a Boiler Warranty Usually Cover?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Most manufacturer warranties cover parts and sometimes labour for certain faults within
              the warranty term, provided conditions are met. Coverage may exclude consumables, system
              issues outside the boiler, and damage caused by poor installation or contaminated system water.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              How Long Do Boiler Warranties Last in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Warranty length varies by brand and model range. Some models come with a standard warranty
              that can be extended when installed by an accredited installer and paired with specific
              controls and filters. Always confirm the exact term in writing and keep proof of registration.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Registration: The Step People Forget
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many warranties must be registered within a set time after installation. Sometimes the
              installer registers it; sometimes you must. Ask for confirmation and keep the warranty
              certificate/registration email.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Servicing Requirements
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Annual servicing is commonly required to keep the warranty valid. Keep service records and
              ensure the engineer is appropriately qualified. Missing a service can cause warranty
              disputes even if the fault isn’t directly related.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Voids a Boiler Warranty?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Not registering in time</strong>
              </li>
              <li>
                <strong>Skipping required servicing</strong>
              </li>
              <li>
                <strong>Poor installation or unsafe modifications</strong>
              </li>
              <li>
                <strong>Contaminated system water</strong> (no filter/flush/inhibitor)
              </li>
              <li>
                <strong>Using non-approved parts</strong> or incorrect controls where required
              </li>
            </ul>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Correct Sizing Helps Reduce Warranty Claims
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Oversizing can lead to short-cycling and wear. Before choosing a boiler with a long warranty,
              estimate the kW output your home actually needs.
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
              Do I need a boiler service every year to keep the warranty?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes. Many manufacturers require annual servicing. Keep receipts and service records.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What’s the difference between warranty and guarantee?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The terms are often used interchangeably in consumer language. What matters is the written
              policy: what’s covered, for how long, and under what conditions.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Who do I contact if my boiler breaks under warranty?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Usually the manufacturer’s warranty line (or the installer if they manage warranty calls).
              Keep the model/serial number and proof of registration.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can a warranty be transferred when selling a house?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Sometimes, depending on the manufacturer. Check the policy—some allow transfer with paperwork,
              others don’t.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Does sludge or dirty system water void warranties?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It can. Many manufacturers expect adequate cleaning, filtration, and inhibitor use. Dirty
              water can cause blockages and component failures that may be excluded from warranty coverage.
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

