import Link from "next/link";

export const metadata = {
  title: "What Is a System Boiler? UK Guide 2026 | HVACThermal",
  description:
    "Everything UK homeowners need to know about system boilers — how they work, pros and cons, costs, and whether one is right for your home.",
};

export default function WhatIsASystemBoilerPage() {
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
            What Is a System Boiler?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A system boiler is a popular choice in many UK homes—especially where
            there are multiple bathrooms or higher hot water demand. Unlike a combi
            boiler, a system boiler works with a{" "}
            <strong>hot water cylinder</strong>, which stores hot water so you can
            run multiple taps/showers at once. This guide explains how system boilers
            work, their pros and cons, costs, and how to decide if one is right for
            your home.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How a System Boiler Works
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A system boiler heats water for central heating and also heats water
              stored in a cylinder. The cylinder supplies hot water to taps and
              showers, often allowing better simultaneous hot water performance than
              a combi. Many of the key components (pump, expansion vessel) are built
              into the boiler, which can make installation neater than older regular
              boilers.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Pros of a System Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Better for multiple bathrooms:</strong> Stored hot water can
                supply multiple outlets at the same time.
              </li>
              <li>
                <strong>Works well with low mains pressure:</strong> Depending on
                the system, you may get more consistent hot water performance.
              </li>
              <li>
                <strong>Faster hot water at taps:</strong> Hot water is stored, so
                you don&apos;t rely on instant heating every time.
              </li>
              <li>
                <strong>Simple upgrade path:</strong> If you already have a cylinder,
                replacing a system boiler can be straightforward.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Cons of a System Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>You need space for a cylinder:</strong> Usually an airing
                cupboard or similar.
              </li>
              <li>
                <strong>Hot water can run out:</strong> If the cylinder is depleted,
                you need to wait for it to reheat.
              </li>
              <li>
                <strong>More components:</strong> The cylinder and its controls add
                complexity compared with a combi-only setup.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Typical System Boiler Costs in the UK
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Costs depend on boiler output, brand, whether a new cylinder is
              needed, and the complexity of the job. If you are replacing like for
              like with an existing cylinder, costs can be lower. If you are
              converting from a combi to a system boiler, costs are usually higher
              because the cylinder and extra pipework need installing.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Is a System Boiler Right for You?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              System boilers often suit homes with{" "}
              <strong>two or more bathrooms</strong>, larger households, or where
              simultaneous hot water use is common. If you have limited space and
              modest hot water demand, a combi may be simpler. The best choice
              depends on your property layout, water pressure, and usage patterns.
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
              Whether you choose a combi or system boiler, getting the output right
              is crucial. Our boiler size calculator recommends a sensible kW range
              based on your home and hot water needs—so you can compare quotes and
              avoid oversizing.
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
              What&apos;s the difference between a system boiler and a combi boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A combi provides hot water on demand without a cylinder. A system
              boiler uses a cylinder to store hot water, which can be better for
              multiple bathrooms and simultaneous hot water use.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Do system boilers need a loft tank?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many modern system boilers don&apos;t require a cold water tank in the
              loft, but they do require a hot water cylinder. Your installer can
              confirm the best setup for your home.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can a system boiler run two showers at once?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Often yes, depending on the cylinder size and your plumbing setup.
              Stored hot water can supply multiple outlets more reliably than many
              combi systems.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can I change from a combi to a system boiler?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, but it usually involves fitting a cylinder and additional
              pipework, which increases installation complexity and cost. It can be
              worthwhile for larger homes with high hot water demand.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              What size system boiler do I need?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Boiler sizing depends on your home&apos;s heat loss and your hot water
              demand (including cylinder size and usage). Calculating a sensible
              kW range helps you compare quotes and avoid oversizing.
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
