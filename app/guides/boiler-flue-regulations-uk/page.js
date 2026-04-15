import Link from "next/link";

export const metadata = {
  title: "Boiler Flue Regulations UK: What You Need to Know | HVACThermal",
  description:
    "Everything UK homeowners need to know about boiler flue regulations — positioning rules, terminal guards, and what your installer must follow.",
};

export default function BoilerFlueRegulationsUkPage() {
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
            Boiler Flue Regulations UK: What You Need to Know
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Your boiler flue safely removes combustion gases and brings in fresh air (on room-sealed
            boilers). Because it handles potentially dangerous fumes, UK boiler flue installation is
            governed by strict rules. This guide explains the practical basics homeowners should
            know—what positioning rules are trying to prevent, when terminal guards are required,
            and what your installer is responsible for.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Is a Boiler Flue and Why Does It Matter?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A flue carries combustion products (including carbon monoxide) away from the boiler.
              Modern condensing boilers also produce condensate and may emit a visible plume in cold
              weather. Correct flue design reduces the risk of fumes re-entering the home, protects
              neighbouring properties, and ensures the boiler operates safely and efficiently.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              UK Flue Positioning Rules (High-Level Overview)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              The exact distances and requirements depend on boiler type, flue type, and the
              manufacturer’s instructions. In general, positioning rules aim to keep the flue outlet
              safely away from openings and areas where fumes could re-enter buildings or affect
              people.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>Away from windows/doors/vents:</strong> To prevent fumes entering living
                spaces.
              </li>
              <li>
                <strong>Consideration for neighbours:</strong> Especially near boundaries and shared
                walkways.
              </li>
              <li>
                <strong>Clearance from corners and obstructions:</strong> To prevent recirculation of
                exhaust gases.
              </li>
              <li>
                <strong>Condensate plume considerations:</strong> To avoid nuisance on paths and
                surfaces.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              If a proposed flue position seems “close” to openings or neighbours, your installer
              should confirm compliance using the manufacturer’s guidance and applicable standards.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Do You Need a Flue Terminal Guard?
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              A flue terminal guard is a protective cage fitted around the flue outlet. It’s often
              required when the terminal is accessible to people—such as low-level flues near
              walkways, patios, or gardens—so someone can’t touch hot surfaces or obstruct the
              outlet. Your installer should assess accessibility and fit a guard where needed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              Common Situations That Trigger Flue Issues
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">
              <li>
                <strong>New windows/doors or extensions:</strong> Building work can change clearances
                after installation.
              </li>
              <li>
                <strong>Boiler relocation:</strong> Moving the boiler often changes flue routing and
                may require a different terminal position.
              </li>
              <li>
                <strong>Neighbour complaints about plume:</strong> Condensing boilers can create
                visible steam that may be a nuisance if poorly sited.
              </li>
              <li>
                <strong>Blocked/covered terminals:</strong> Plants, fences, or DIY covers can create
                unsafe conditions.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
              What Your Installer Must Do (Gas Safe)
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              In the UK, gas boiler installation must be carried out by a Gas Safe registered
              engineer. They are responsible for ensuring the flue complies with manufacturer
              instructions and relevant standards, commissioning the boiler correctly, and providing
              the required paperwork. If you’re unsure, you can ask your installer to explain the
              flue siting decision and what guidance they used.
            </p>
          </section>

          <div
            className="mt-12 rounded-2xl border-2 p-6 sm:p-8"
            style={{ borderColor: "#E67E22", backgroundColor: "rgba(230,126,34,0.08)" }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              Choosing a New Boiler?
            </h3>
            <p className="mt-3 text-slate-700 leading-7">
              If you’re replacing a boiler (often when flue routing changes), make sure the output
              is sized correctly for your home.
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
              Can I move my boiler flue myself?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              No. Boiler flues are part of a gas appliance installation and must be handled by a Gas
              Safe registered engineer.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Why do flues have minimum distances from windows and doors?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              The goal is to prevent combustion gases from re-entering the building and to reduce
              exposure to fumes where people may be nearby.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              When is a flue terminal guard required?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Typically when the terminal is accessible to touch or interfere with (for example near
              ground level by paths, patios, or gardens). Your installer should assess this on-site.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              Is it normal to see steam from a condensing boiler flue?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Yes. Condensing boilers often produce a visible plume in cold weather. It’s usually
              harmless water vapour, but siting should avoid nuisance where possible.
            </p>

            <h3 className="mt-6 text-xl font-semibold" style={{ color: "#1E3A5F" }}>
              What if my neighbour complains about my boiler flue?
            </h3>
            <p className="mt-2 text-slate-600 leading-7">
              Start by checking the installation paperwork and speaking to your installer. In some
              cases, a plume management kit or alternative siting may be recommended, but this should
              be assessed by a Gas Safe engineer.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold" style={{ color: "#1E3A5F" }}>
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

