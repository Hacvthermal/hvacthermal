import Link from "next/link";

export const metadata = {
  title: "Boiler Making Noise? What It Means & How to Fix It | HVACThermal",
  description:
    "Banging, whistling or gurgling boiler? This UK guide explains every boiler noise, what causes it and when to call an engineer.",
};

export default function BoilerMakingNoisePage() {
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
            Boiler Making Noise? What It Means &amp; How to Fix It
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            A noisy boiler can be annoying, but it can also be an early warning
            sign of a problem—anything from trapped air and low pressure to
            limescale buildup or a failing pump. The good news is that many
            causes are fixable. This guide explains the most common boiler
            noises in UK homes, what usually causes them, what you can check
            safely, and when it&apos;s time to call a Gas Safe engineer.
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              First: Is It a Normal Boiler Sound?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Some sounds are normal—like a gentle hum when the boiler fires, a
              brief fan noise, or water moving through pipes. What&apos;s not
              normal is a new loud sound, a noise that&apos;s getting worse, or
              anything accompanied by poor heating, error codes, leaks, or
              pressure problems.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Common Boiler Noises (and Likely Causes)
            </h2>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Banging or rumbling (“kettling”)
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              This is often caused by <strong>limescale</strong> or sludge
              restricting water flow through the heat exchanger. Water can
              overheat locally and create steam bubbles that collapse with a
              banging sound. It&apos;s more common in hard water areas and older
              systems.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Whistling
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Whistling can come from restricted flow (scale/debris), partially
              closed valves, or internal components working harder than they
              should. If it&apos;s high-pitched and new, it&apos;s worth investigating.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Gurgling or bubbling
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Gurgling is commonly linked to <strong>air in the system</strong>,
              low boiler pressure, or poor circulation. You may also notice cold
              spots on radiators.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Clicking
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Clicking can happen when the boiler ignites or when components
              expand/contract as they heat up and cool down. Repeated rapid
              clicking, especially with ignition failures, can point to a fault.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Humming or vibration
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              A louder hum can come from the pump, fan, or loose casing/pipes
              vibrating. Sometimes it&apos;s a simple fix (tightening a loose panel),
              other times it indicates a worn part.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              Safe Checks You Can Do at Home
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              You can check a few basics without removing the boiler casing or
              touching any gas components.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Check boiler pressure:</strong> When cold, many systems
                should sit around 1–1.5 bar.
              </li>
              <li>
                <strong>Look for leaks:</strong> Check radiator valves, bleed
                points, and visible pipework for damp patches or staining.
              </li>
              <li>
                <strong>Check radiator performance:</strong> Cold spots can
                suggest trapped air or sludge issues.
              </li>
              <li>
                <strong>Note when the noise occurs:</strong> Only on hot water,
                only when heating starts, or constantly—this helps diagnosis.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              When to Call an Engineer
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Call a <strong>Gas Safe registered engineer</strong> if the noise
              is sudden and loud, keeps getting worse, or comes with leaks,
              repeated lockouts, a burning smell, or poor hot water/heating
              performance. If you ever smell gas, follow official gas safety
              advice immediately.
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
              If you&apos;re dealing with an older, noisy boiler and considering a
              replacement, start with the correct output range. Our free boiler
              size calculator uses your home and hot water needs to recommend a
              sensible kW range in seconds.
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
              What is kettling and is it serious?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Kettling is a banging/rumbling noise often linked to scale or
              sludge restricting water flow. It can reduce efficiency and, if
              ignored, may lead to component damage—so it&apos;s worth getting it
              checked.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can low boiler pressure cause noise?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Low pressure can contribute to poor circulation and gurgling
              or bubbling sounds. If pressure keeps dropping, you should
              investigate the cause rather than topping up repeatedly.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Why does my boiler whistle when heating is on?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Whistling is often caused by restricted water flow (scale, debris,
              partially closed valves) or components under strain. An engineer
              can diagnose the exact cause and recommend cleaning or repairs.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Should I turn my boiler off if it starts banging?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              If the noise is loud or accompanied by leaks or error codes, it&apos;s
              sensible to turn the heating off and arrange an engineer visit.
              Avoid DIY work on internal boiler components.
            </p>

            <h3
              className="mt-6 text-xl font-semibold"
              style={{ color: "#1E3A5F" }}
            >
              Can a boiler service prevent noisy operation?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Servicing can help by spotting wear, cleaning key components, and
              identifying early issues. If your system has sludge or scale,
              additional work (like flushing or treatment) may be recommended.
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
