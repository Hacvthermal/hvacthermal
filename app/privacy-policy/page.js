import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | HVACThermal",
  description:
    "Read HVACThermal’s privacy policy. Learn what anonymous usage data we collect, how we use cookies and Google Analytics, retention, and your rights.",
};

export default function PrivacyPolicyPage() {
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
            <Link href="/#guides" className="text-slate-700 hover:text-slate-900">
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
        </div>
      </header>

      <main>
        <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "#1E3A5F" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600 leading-7">
            HVACThermal.com is a free calculator and guides website. We do not
            require accounts and we do not intentionally collect personal
            information like your name, address, or payment details. We do
            collect anonymous usage data to understand how the site is used and
            to improve performance and content.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            <strong>Last updated:</strong> March 2026
          </p>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              1) What information we collect
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We collect limited information about how visitors use the site.
              This may include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>
                <strong>Usage data:</strong> pages visited, time on page, button
                clicks, and navigation paths.
              </li>
              <li>
                <strong>Device and browser data:</strong> approximate device
                type, operating system, browser type, screen size, and language.
              </li>
              <li>
                <strong>Approximate location:</strong> region-level location
                inferred from your IP address (for example, country or city).
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> small files
                used to remember preferences and support analytics.
              </li>
              <li>
                <strong>Google Analytics data:</strong> aggregated statistics
                about site usage collected via Google Analytics.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-7">
              We aim to keep this information anonymous and aggregated. We do
              not sell your personal information.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              2) How we use the information
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We use anonymous analytics and usage information to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>
                <strong>Improve the site:</strong> fix broken links, optimise
                pages, and improve calculator usability.
              </li>
              <li>
                <strong>Analyse traffic:</strong> understand which guides and
                calculators are most helpful and where visitors come from.
              </li>
              <li>
                <strong>Measure performance:</strong> monitor load times and
                basic stability.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              3) Cookies policy
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Cookies are small text files stored on your device. We use cookies
              primarily for analytics (Google Analytics) and basic site
              functionality. Google Analytics may set cookies to distinguish
              users and sessions, understand how the site is used, and generate
              reports.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              You can control cookies through your browser settings. If you
              disable cookies, parts of the site should still function, but some
              analytics and preference behaviour may be limited.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              4) Third-party services
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We use <strong>Google Analytics</strong> to help us measure and
              understand site usage. Google Analytics may process information
              about your visit according to Google&apos;s own policies and settings.
              We encourage you to review Google&apos;s documentation for details on
              how they handle analytics data.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              5) Data retention
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We retain analytics data for as long as necessary to understand
              long-term trends, improve the site, and comply with applicable
              obligations. Retention periods may vary depending on the analytics
              settings in use. Where possible, we use aggregated reporting and
              minimise retention of identifiable data.
            </p>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              6) Your rights and choices
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Depending on where you live, you may have rights regarding your
              data, such as access, correction, deletion, or objection to
              processing. Because we aim to collect anonymous analytics only, we
              may not be able to identify you in our analytics systems.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              You can also reduce data collection by:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Blocking or deleting cookies in your browser.</li>
              <li>Using browser privacy settings or extensions.</li>
              <li>Limiting analytics tracking where available.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#1E3A5F" }}
            >
              7) Contact us
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:support@hvacthermal.com"
                className="font-semibold underline"
                style={{ color: "#1E3A5F" }}
              >
                support@hvacthermal.com
              </a>
              .
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
              <Link href="/privacy-policy" className="hover:text-slate-900">
                Privacy Policy
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

