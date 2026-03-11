import Link from "next/link";

export const metadata = {
  title: "How Long Does a Boiler Last? UK Boiler Lifespan Guide | HVACThermal",
  description:
    "UK boiler lifespan by type, signs you need a new boiler, how servicing extends life, repair vs replace, and efficiency savings. Free boiler size calculator.",
};

export default function HowLongDoesABoilerLastPage() {
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
              href="/#guides"
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
            How Long Does a Boiler Last?
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A boiler is one of the most expensive items in your home, so
            knowing how long it should last—and when to repair versus
            replace—helps you plan and avoid nasty surprises. Lifespan varies by
            boiler type, how well it&apos;s been maintained, and how heavily it&apos;s
            used. This guide covers typical lifespans for UK boilers, warning
            signs that replacement is due, how servicing can extend life, the
            repair-vs-replace decision, and why a modern efficient boiler can
            save you money even when your old one still runs.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Average Boiler Lifespan by Type
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Combi boilers</strong> are the most common in UK homes.
              A well-maintained combi typically lasts <strong>10–15 years</strong>,
              though some run reliably for longer. Combis have more internal
              parts (e.g. diverter valve, plate heat exchanger) that can wear
              or fail, so they tend to need more attention as they age. Quality
              of install and water quality (hard water can cause scale) also
              affect how long they last.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>System boilers</strong> work with a separate hot water
              cylinder. They often have a slightly longer lifespan than combis—
              <strong> 12–18 years</strong> is a reasonable expectation—because
              the boiler itself has a simpler job (mainly heating the central
              heating circuit and the cylinder). The cylinder may need
              replacement or maintenance (e.g. anode) separately.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Regular (heat-only) boilers</strong>, often found in
              older properties with a cylinder and cold water tank, can last
              <strong> 15–20 years or more</strong> when well looked after.
              They have been around for decades and many components are
              straightforward to repair. The downside is lower efficiency
              compared with modern condensing boilers, so running costs are
              higher even when the boiler is still working.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Signs Your Boiler Needs Replacing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Age and repeated breakdowns:</strong> If your boiler is
              over 12–15 years old and you&apos;re calling the engineer every year
              for faults, replacement is often more cost-effective than another
              repair. Parts become harder to find for very old models, and
              labour costs add up.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Strange noises, leaks, or smell:</strong> Kettling
              (banging or rumbling from limescale), visible leaks, or a smell
              of gas or burning should be investigated immediately. Sometimes
              the fix is a component or a flush; sometimes the heat exchanger
              or casing is failing and the boiler is no longer safe or
              economical to repair.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Poor performance:</strong> If radiators don&apos;t get hot
              enough, hot water is inconsistent, or the boiler keeps locking
              out, the cause might be fixable (e.g. low pressure, pump, or
              sludge). If your engineer has tried the usual fixes and the
              boiler is old, a new system may be the better long-term option.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              <strong>Yellow flame instead of blue:</strong> A gas boiler
              flame should be blue. A yellow or orange flame can indicate
              incomplete combustion or a blocked flue—get a Gas Safe
              engineer in straight away; they may advise replacement if the
              boiler is unsafe or obsolete.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              How Servicing Extends Boiler Lifespan
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              An annual service by a Gas Safe registered engineer is one of the
              best ways to keep your boiler running safely and for longer. The
              engineer will check the flue, burners, heat exchanger, and
              safety devices; clean key parts; and spot small issues before
              they turn into breakdowns or safety hazards. Many manufacturers
              recommend yearly servicing to keep the warranty valid, and some
              insurers or cover plans require it.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Power flushing the system every few years (or when sludge is
              suspected) helps protect the heat exchanger and pump from
              corrosion and blockages, especially in older systems. Using a
              system filter and inhibitor can also extend the life of the
              boiler and radiators. A well-serviced boiler is more efficient,
              less likely to fail in winter, and more likely to reach or exceed
              its typical lifespan.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Cost of Repair vs Replace: Making the Decision
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              When the boiler breaks down, the first question is whether to
              repair or replace. A simple fix—a new thermostat, a pressure
              top-up, or a pump replacement—is usually worth doing if the
              boiler is under 10–12 years old and has been reliable. When the
              repair is expensive (e.g. a new heat exchanger or main board)
              and the boiler is already old, the maths often favours
              replacement: you avoid throwing good money at a unit that may fail
              again soon, and you gain efficiency and a new warranty.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              A rough rule of thumb: if the repair cost is more than half the
              cost of a new boiler install, and the boiler is over 10 years
              old, lean towards replacing. Get a written quote for the repair
              and at least two quotes for a like-for-like or upgraded
              replacement so you can compare. Factor in the energy savings from
              a new condensing boiler—they can cut gas use by 20–30% compared
              with an old non-condensing model.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Modern Boiler Efficiency Savings
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              All new gas boilers installed in the UK must be condensing
              boilers, which typically run at 88–94% efficiency or higher. An
              old non-condensing boiler might be only 60–75% efficient,
              meaning a significant amount of heat goes up the flue. Upgrading
              to a new A-rated condensing boiler can cut your gas use for
              heating and hot water by a fifth to a third, depending on how
              old and inefficient your previous boiler was.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Those savings translate into lower bills every year. Over the
              life of the new boiler, the combined effect of lower gas use and
              fewer repairs can offset a large part of the installation cost.
              When you do replace, make sure the new boiler is correctly sized—
              not oversized—so it runs efficiently and lasts well. Use our
              boiler size calculator to get a sensible kW range before you
              get quotes.
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
              Size Your New Boiler Right
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              When the time comes to replace, getting the size right matters.
              Our free boiler size calculator uses your property, radiators,
              and hot water use to suggest a suitable kW range—so you can
              compare quotes and avoid over- or under-sizing.
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
              Next Steps
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If your boiler is within its typical lifespan and working well,
              book an annual service and keep an eye on performance. If it&apos;s
              old, unreliable, or showing the warning signs above, get a Gas
              Safe engineer to assess it and give you repair and replacement
              options. When you decide to replace, use our boiler size
              calculator to confirm the right output, then get at least three
              quotes from registered installers. A correctly sized, modern
              boiler will keep you warm and cut your bills for the next decade
              or more.
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
