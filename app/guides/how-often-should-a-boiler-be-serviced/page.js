import Link from "next/link";

export const metadata = {
  title: "How Often Should a Boiler Be Serviced? UK Guide 2025 | HVACThermal",
  description:
    "Find out how often you should service your boiler, why it matters, and what happens if you skip it. Essential guide for UK homeowners.",
};

export default function HowOftenShouldABoilerBeServicedPage() {
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
            How Often Should a Boiler Be Serviced?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            For most UK homes, the simple answer is <strong>once a year</strong>.
            Annual servicing helps keep your boiler running safely, protects
            efficiency, reduces the risk of winter breakdowns, and is often a
            requirement for warranties and boiler cover. This guide explains the
            recommended frequency, what can change it, and what happens if you
            skip it.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              The Standard Recommendation: Every 12 Months
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Most manufacturers and Gas Safe engineers recommend servicing your
              boiler every 12 months. It&apos;s not just about preventing faults:
              a service includes safety checks (combustion, flue, ventilation,
              and key controls) and basic cleaning/inspection that helps the
              boiler run reliably.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Why Servicing Matters
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Safety:</strong> The engineer checks the flue and
                combustion to help reduce risks such as carbon monoxide issues.
              </li>
              <li>
                <strong>Reliability:</strong> Small issues (worn seals, debris,
                ignition problems) are often spotted before they cause a
                breakdown.
              </li>
              <li>
                <strong>Efficiency:</strong> A clean, well-tuned boiler tends
                to run more efficiently, which helps keep bills down.
              </li>
              <li>
                <strong>Warranty and cover:</strong> Many warranties and boiler
                cover policies expect evidence of annual servicing.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              When You Might Need a Service More Often
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Annual is the norm, but in some cases it makes sense to service
              more frequently.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Older boilers:</strong> If your boiler is 10+ years old
                or has a history of faults, a mid-season check can be
                worthwhile.
              </li>
              <li>
                <strong>Hard water areas:</strong> Limescale can stress heat
                exchangers (especially on combi boilers), so maintenance matters
                more.
              </li>
              <li>
                <strong>After installation or major work:</strong> If the system
                has been drained/refilled or modified, it&apos;s wise to ensure
                pressure, inhibitor levels, and operation are correct.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              What Happens If You Skip Servicing?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Skipping a service doesn&apos;t guarantee a breakdown, but it
              increases the chances of issues building up unnoticed. You may
              see more lockouts, noisier operation, pressure problems, higher
              bills, and in the worst case a safety risk if flue/combustion
              problems go undetected. You could also run into warranty or cover
              disputes if there&apos;s no proof of maintenance.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Best Time of Year to Book a Boiler Service
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Late summer to early autumn is a great time to book: engineers are
              often less busy than in winter, and you reduce the risk of your
              boiler failing when you need it most. If you have a service plan,
              try to schedule it before cold weather starts.
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
              If you&apos;re planning a replacement, sizing matters as much as
              brand. Our boiler size calculator recommends a sensible kW range
              based on your home, radiators, insulation and hot water needs—so
              you can compare quotes confidently.
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
              Is an annual boiler service a legal requirement?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              For homeowners, it&apos;s not generally a legal requirement. For
              landlords, there are legal gas safety obligations (e.g. annual gas
              safety checks) and your agent/engineer can advise what documentation
              you need.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Will a boiler service improve efficiency?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A service won&apos;t turn an old boiler into a new one, but cleaning
              and checks can help it run more smoothly and avoid issues that
              increase fuel use (like poor combustion or restricted components).
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is a boiler service the same as a boiler repair?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. A service is preventative maintenance and safety checks. If a
              fault is found, repairs (parts and labour) are usually quoted and
              charged separately unless you&apos;re on a cover plan.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What should I do before the engineer arrives?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Make sure the boiler is accessible, clear the area around it, and
              note any symptoms (noise, pressure drops, error codes). If you
              have the manual or service history, keep it handy.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              How long does a boiler service take?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many services take around 30–60 minutes, but it varies by boiler
              type, access, and what checks are needed. Older or problematic
              boilers can take longer.
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
              <Link
                href="/calculator/boiler-size-calculator"
                className="hover:text-slate-900"
              >
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
