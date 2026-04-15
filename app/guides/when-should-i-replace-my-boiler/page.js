import Link from "next/link";

export const metadata = {
  title: "When Should I Replace My Boiler? UK Guide 2026 | HVACThermal",
  description:
    "Not sure if you need a new boiler? Find out the key signs your boiler needs replacing and whether repair or replacement makes more sense.",
};

export default function WhenShouldIReplaceMyBoilerPage() {
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
            When Should I Replace My Boiler?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            If your boiler is getting older, breaking down more often, or your
            bills are creeping up, you may be wondering whether it&apos;s time for
            a replacement. In many UK homes, a well-maintained boiler lasts about
            10–15 years, but the right decision depends on reliability, repair
            costs, and efficiency. This guide explains the key signs it&apos;s time
            to replace, and how to decide between repair and replacement.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Old Is Your Boiler?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Age isn&apos;t the only factor, but it matters. As boilers get older,
              parts wear out, breakdowns become more likely, and some spares can
              become harder to source. If your boiler is <strong>over 10–12 years</strong>{" "}
              old and becoming unreliable, it&apos;s worth comparing repair quotes
              to the cost (and benefits) of replacement.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Key Signs You Should Replace Your Boiler
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Frequent breakdowns:</strong> If you&apos;re calling an engineer
                regularly, those costs add up quickly.
              </li>
              <li>
                <strong>Expensive repairs:</strong> Main PCB, heat exchanger, fan,
                or multiple component failures can be costly on older units.
              </li>
              <li>
                <strong>Leaks or corrosion:</strong> Persistent leaks can indicate
                failing internal components or casing issues.
              </li>
              <li>
                <strong>Inconsistent heating/hot water:</strong> Lockouts, slow hot
                water, or struggling radiators can suggest bigger problems.
              </li>
              <li>
                <strong>High bills:</strong> An older or poorly running boiler can
                waste gas, especially compared with a modern condensing model.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Repair vs Replace: A Practical Rule of Thumb
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If the boiler is relatively new and the fix is minor, repairing is
              usually the sensible choice. If the boiler is old and the repair is
              expensive, replacement often makes more sense. A simple rule of thumb
              is: if the repair cost is <strong>more than half</strong> the cost of
              a replacement, and the boiler is already over 10 years old, lean
              towards replacing.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Efficiency and Comfort Benefits of Replacing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Modern A-rated condensing boilers are significantly more efficient
              than older non-condensing models. Replacing can reduce gas use and
              improve comfort, especially if your old boiler short-cycles or can&apos;t
              modulate well. You also benefit from a new warranty and fewer
              unexpected repairs.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Avoid One Common Mistake: Oversizing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              When replacing, many homes end up with an oversized boiler “just in
              case”. Oversizing can reduce efficiency and increase wear from
              short-cycling. A better approach is to calculate a sensible output
              range based on your home and hot water needs.
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
              Before you get quotes, use our free boiler size calculator. It
              recommends a kW range based on your property details and hot water
              demand—so you can avoid oversizing and compare installers fairly.
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
              What age should a boiler be replaced?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Many boilers last 10–15 years. If yours is older and becoming
              unreliable or expensive to repair, it&apos;s worth considering
              replacement.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Is it worth replacing a boiler that still works?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If it&apos;s old and you&apos;re facing frequent breakdowns or poor
              efficiency, replacement can be cheaper long-term. If it&apos;s
              reliable and efficient, servicing and monitoring may be enough.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I repair my boiler or buy a new one?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Compare the repair quote to the cost of replacement, consider the
              boiler&apos;s age, and factor in efficiency benefits and warranty. If
              repairs are recurring or costly on an older boiler, replacement often
              wins.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can a new boiler reduce my gas bills?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Potentially, especially if you&apos;re upgrading from an older
              non-condensing boiler or one that&apos;s running inefficiently. Savings
              depend on your current system and usage.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              How do I choose the right boiler size?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The right size depends on your home&apos;s heat loss and hot water
              demand. Calculating a sensible kW range helps avoid oversizing and
              improves efficiency.
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
