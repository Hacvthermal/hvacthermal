import Link from "next/link";

export const metadata = {
  title: "Boiler & Carbon Monoxide: Signs, Risks & Safety UK 2026 | HVACThermal",
  description:
    "Could your boiler be producing carbon monoxide? UK guide covering the risks, warning signs, what to do in an emergency, and carbon monoxide detectors.",
};

export default function BoilerCarbonMonoxidePage() {
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
            Boiler & Carbon Monoxide: Signs, Risks & Safety UK 2026
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Carbon monoxide (CO) is a dangerous gas that can be produced when fuels don’t burn properly. Boilers are designed
            with safety features, but faults like poor combustion, flue problems, or ventilation issues can increase CO risk.
            This UK guide covers warning signs, what to do in an emergency, and how CO alarms help protect your household.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Why Carbon Monoxide Is Dangerous
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              CO is colourless and odourless. Symptoms can resemble flu or tiredness. Because you can’t reliably detect CO without
              an alarm, prevention and proper safety checks are critical.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Warning Signs to Take Seriously
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>CO alarm sounding</li>
              <li>Soot or staining around the boiler or flue</li>
              <li>Yellow/orange flames where you’d expect blue</li>
              <li>Unusual condensation or fumes in rooms with appliances</li>
              <li>Repeated headaches, dizziness, nausea (especially at home)</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What to Do If You Suspect CO
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If a CO alarm sounds or you suspect CO, treat it as urgent. Ventilate, leave the property if needed, and contact
              the appropriate emergency services/provider guidance. Do not attempt to “fix” the boiler yourself.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              CO Alarms and Boiler Servicing
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              CO alarms are a key safety layer, but they don’t replace servicing. Regular servicing helps ensure combustion,
              flue integrity, and safety systems are working correctly.
            </p>
          </section>

          <div className="mt-12 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}>
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              If You Replace the Boiler, Size It Correctly
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              Safety and efficiency start with the right appliance and correct installation. If you’re upgrading, estimate the right kW output before comparing models.
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
              Can a boiler produce carbon monoxide?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes, if combustion is poor or flue/ventilation is unsafe. Modern boilers have safety systems, but faults can still occur.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Can you smell carbon monoxide?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. CO is odourless. Use a CO alarm for detection and keep appliances serviced.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Where should a CO alarm be installed?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Follow the alarm manufacturer’s guidance and UK best practice. Placement depends on room layout and appliance location.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Do I need a CO alarm if my boiler is new?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              It’s strongly recommended. Even new appliances can develop faults, and alarms provide early warning.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What should I do if my CO alarm sounds?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Treat it as urgent: ventilate, leave if needed, and follow emergency guidance. Get a qualified engineer to investigate before using appliances again.
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

