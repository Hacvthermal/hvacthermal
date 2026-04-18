import Link from "next/link";

export const metadata = {
  title: "How Long Does Boiler Installation Take? UK Guide 2026 | HVACThermal",
  description:
    "How long does it take to install a new boiler in the UK? Complete guide covering installation times for combi, system and conventional boilers and what affects the duration.",
};

export default function BoilerInstallationTimeUkPage() {
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
            <Link
              href="/#calculators"
              className="text-slate-700 hover:text-slate-900"
            >
              Calculators
            </Link>
            <Link
              href="/guides"
              className="text-slate-700 hover:text-slate-900"
            >
              Guides
            </Link>
            <Link
              href="/#features"
              className="text-slate-700 hover:text-slate-900"
            >
              Features
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-slate-900">
              About
            </Link>
            <a
              href="mailto:support@hvacthermal.com"
              className="text-slate-700 hover:text-slate-900"
            >
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
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "#1E3A5F" }}
          >
            How Long Does Boiler Installation Take? UK Guide 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If you are planning a new boiler in 2026, one of the first
            questions is how long the job will take. Installation time depends
            on the boiler type (combi, system or conventional), whether you
            are swapping like-for-like in the same place, and whether pipework,
            flues or controls need changing. This guide sets out typical UK
            durations, what can extend the schedule, and how to keep disruption
            manageable.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Typical Installation Times by Boiler Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              These are <strong>general UK ranges</strong> for a competent Gas
              Safe team on a straightforward job. Your installer should give a
              written estimate after a site survey.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Combi boiler, like-for-like swap</strong> (same
                location, similar flue route, no major pipe changes): often{" "}
                <strong>4–8 hours</strong> in a single day.
              </li>
              <li>
                <strong>System boiler</strong> with separate cylinder: a
                straight swap may take <strong>1–2 days</strong>; more if
                cylinder or controls are upgraded.
              </li>
              <li>
                <strong>Conventional (heat-only) boiler</strong> with tanks in
                the loft: typically <strong>1–2 days</strong> for a swap; longer
                if tanks, pumps or zoning are reworked.
              </li>
              <li>
                <strong>Converting</strong> from system or conventional to combi
                (removing tanks/cylinder, new pipe runs): commonly{" "}
                <strong>2–3 days</strong>, sometimes more in larger homes.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Makes an Install Take Longer?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Several factors add time beyond the boiler change itself. Moving
              the boiler to a new wall or room means new gas runs, flow and
              return pipework, and often a longer flue. Upgrading to a smart
              thermostat with new wiring, adding magnetic filters, powerflushing
              a dirty system, or bringing an old flue up to current standards
              can each add half a day or more. Listed buildings, awkward access,
              or waiting for scaffolding also extend the programme.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Same Day vs Multi-Day Jobs
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Many combi swaps finish in one visit, with heating and hot water
              restored the same evening. Multi-day jobs usually leave you with
              temporary arrangements only if the old system must be drained for
              extended work—your engineer should explain this before work
              starts. In 2026, good practice is still to agree a clear start
              date, expected finish, and who supplies materials (boiler,
              flue kit, controls).
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Gas Safe Registration and Certification
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Only a <strong>Gas Safe registered</strong> engineer may connect
              gas appliances in the UK. After installation you should receive
              documentation including the Building Regulations compliance
              route (for example notification via the Gas Safe register). That
              paperwork is separate from how long the physical install takes,
              but allow a short handover at the end of the job for testing,
              explanation of controls, and registration.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{
              borderColor: "#E67E22",
              backgroundColor: "rgba(230,126,34,0.08)",
            }}
          >
            <h3
              className="text-xl font-bold"
              style={{ color: "#1E3A5F" }}
            >
              Get the Right Boiler Size for Your Home
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Our free boiler size calculator uses your property details,
              radiator count, insulation and hot water needs to recommend a
              suitable kW range. No sign-up required—get results in seconds.
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
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Frequently Asked Questions
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              How long does a combi boiler installation take in the UK?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A simple combi-to-combi replacement in the same position often
              takes between about four and eight hours. If you are changing
              boiler type or location, expect one to three days depending on
              complexity.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can a new boiler be fitted in one day?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, when the survey shows no major alterations—same flue
              category, adequate gas pipe size, and compatible controls. Larger
              homes, conversions to combi, or moving the boiler usually need
              more than one day.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Does installing a system boiler take longer than a combi?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes, because there is a hot water cylinder and more
              pipework to connect and test. A straight swap may still be
              completed in one or two days; replacing the cylinder or adding
              zones adds time.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What delays boiler installation in 2026?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Common delays include discovering corroded pipework, incorrect
              flue termination, undersized gas supply, asbestos in old
              enclosures, or parts that must be ordered after strip-down. A
              thorough survey reduces these surprises.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I book time off work for a boiler install?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Someone usually needs to be at home to give access, agree
              routing decisions, and receive the handover. For a one-day combi
              swap, a single day may be enough; for multi-day work, plan
              according to your installer&apos;s schedule.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              style={{ color: "#1E3A5F" }}
            >
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
