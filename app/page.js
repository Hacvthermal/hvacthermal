"use client";

import Link from "next/link";
import { useState } from "react";

const GUIDE_CARDS = [
  {
    title: "What Size Boiler Do I Need?",
    desc: "UK-focused guide on boiler sizing: radiators, insulation, property type, combi vs system, and when to use our calculator.",
    href: "/guides/what-size-boiler-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "How Many BTU Do I Need?",
    desc: "Understand BTU sizing for rooms: floor area, ceiling height, insulation, sun exposure, and a handy room-type table.",
    href: "/guides/how-many-btu-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 22h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "What Size Heat Pump Do I Need?",
    desc: "UK heat pump sizing: property type, insulation, region, radiator compatibility, BUS grant, and MCS surveys.",
    href: "/guides/what-size-heat-pump-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.5 7.5a6 6 0 0 0 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16.5 7.5a6 6 0 0 1 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "What Size Air Conditioner Do I Need?",
    desc: "Find the right BTU or kW rating for your room. Covers window units, split systems and central AC.",
    href: "/guides/what-size-air-conditioner-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 22h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Combi Boiler vs System Boiler",
    desc: "Not sure which boiler type suits your home? We break down the key differences, costs and hot water needs.",
    href: "/guides/combi-boiler-vs-system-boiler",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Heat Pump vs Gas Boiler UK",
    desc: "Compare running costs, upfront prices and environmental impact to make the right choice for your home.",
    href: "/guides/heat-pump-vs-gas-boiler",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.5 7.5a6 6 0 0 0 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16.5 7.5a6 6 0 0 1 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "How Much Does a Heat Pump Cost UK?",
    desc: "Average supply and install costs, running cost comparisons, and how to claim the £7,500 BUS grant.",
    href: "/guides/heat-pump-cost-uk",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.5 7.5a6 6 0 0 0 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M16.5 7.5a6 6 0 0 1 0 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "What Is SEER Rating?",
    desc: "Understand AC efficiency ratings, how SEER affects running costs, and what rating to look for when buying.",
    href: "/guides/what-is-seer-rating",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 22h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "How to Reduce Heating Bills in Winter",
    desc: "Ten practical tips to cut your heating bills — from boiler settings to draught proofing and smart thermostats.",
    href: "/guides/how-to-reduce-heating-bills",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "What Size Radiators Do I Need?",
    desc: "Size your radiators correctly using BTU and watt outputs — with a room-by-room sizing table.",
    href: "/guides/what-size-radiators-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "How Long Does a Boiler Last?",
    desc: "Average boiler lifespans, signs it needs replacing, and how to decide between repair and replacement.",
    href: "/guides/how-long-does-a-boiler-last",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Home() {
  const [guidesPage, setGuidesPage] = useState(0);
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
            <Link href="#about" className="text-slate-700 hover:text-slate-900">
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
              href="/calculator/btu-calculator"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
              style={{ backgroundColor: "#E67E22" }}
            >
              Start Calculating
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section
          className="relative overflow-hidden text-white"
          style={{ backgroundColor: "#1E3A5F" }}
        >
          <div
            className="absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(1200px 600px at 20% 0%, rgba(255,255,255,0.10), transparent 55%), radial-gradient(900px 500px at 95% 20%, rgba(230,126,34,0.35), transparent 55%)",
            }}
          />

          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-3xl">
              <p
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: "rgba(255,255,255,0.28)",
                  color: "rgba(255,255,255,0.92)",
                  backgroundColor: "rgba(255,255,255,0.10)",
                }}
              >
                Global HVAC calculators • Imperial & Metric
              </p>
              <h1
                className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
              >
                Free HVAC Calculators — Instant, Accurate Results
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:text-lg">
                Professional-grade heating and cooling calculations for
                homeowners and tradespeople worldwide. Imperial &amp; Metric
                support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#calculators"
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors sm:w-auto"
                  style={{ backgroundColor: "#E67E22" }}
                >
                  Browse calculators
                </Link>
                <Link
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-white/95 transition-colors hover:bg-white/10 sm:w-auto"
                  style={{ borderColor: "rgba(255,255,255,0.6)" }}
                >
                  Why HVACThermal
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Imperial & Metric", value: "Units that match your job" },
                  { label: "Fast & mobile-first", value: "Designed for on-site use" },
                  { label: "Practical outputs", value: "Clear sizing guidance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border p-4 backdrop-blur"
                    style={{
                      borderColor: "rgba(255,255,255,0.22)",
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <p className="text-sm font-semibold text-white/95">{item.label}</p>
                    <p className="mt-1 text-sm text-white/75">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="calculators"
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 scroll-mt-24"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
                Popular calculators
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Pick a tool and get results in minutes—ideal for quick estimates, planning,
                and real-world sizing decisions.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "BTU Calculator",
                desc: "Estimate cooling and heating load based on room size, insulation, and usage.",
                href: "/calculator/btu-calculator",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22h6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Boiler Size Calculator",
                desc: "Size a boiler for efficient comfort with clear outputs for kW and BTU/hr.",
                href: "/calculator/boiler-size-calculator",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path
                      d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 7h6M9 11h6M9 15h4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Heat Pump Size Calculator",
                desc: "Get a practical starting point for heat pump sizing with climate-aware inputs.",
                href: "/calculator/heat-pump-size-calculator",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path
                      d="M12 3v18"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 12h16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.5 7.5a6 6 0 0 0 0 9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 7.5a6 6 0 0 1 0 9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="inline-flex items-center justify-center rounded-xl p-3"
                    style={{ backgroundColor: "rgba(30,58,95,0.08)", color: "#1E3A5F" }}
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold" style={{ color: "#1E3A5F" }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.desc}</p>
                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: "#E67E22" }}
                  >
                    Calculate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="guides"
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 scroll-mt-24"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
                Popular guides
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Step-by-step guides to help you size boilers, heat pumps, and cooling—with practical
                tips and links to our free calculators.
              </p>
            </div>
          </div>

          <div className="mt-8 relative">
            <div
              className="overflow-hidden"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  width: "400%",
                  transform: `translateX(-${guidesPage * 25}%)`,
                }}
              >
                {[0, 1, 2, 3].map((slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex w-1/4 flex-shrink-0 gap-5 px-1"
                  >
                    {GUIDE_CARDS.slice(slideIndex * 3, slideIndex * 3 + 3).map((card) => (
                      <div
                        key={card.title}
                        className="group flex h-[320px] min-w-0 flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                      >
                        <div className="min-h-0 flex-1">
                          <div
                            className="inline-flex items-center justify-center rounded-xl p-3"
                            style={{ backgroundColor: "rgba(30,58,95,0.08)", color: "#1E3A5F" }}
                            aria-hidden="true"
                          >
                            {card.icon}
                          </div>
                          <h3 className="mt-4 text-lg font-bold" style={{ color: "#1E3A5F" }}>
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">
                            {card.desc}
                          </p>
                        </div>
                        <div className="flex-shrink-0 pt-5">
                          <Link
                            href={card.href}
                            className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:opacity-95"
                            style={{ backgroundColor: "#1E3A5F" }}
                          >
                            Read Guide
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setGuidesPage((p) => Math.max(0, p - 1))}
              disabled={guidesPage === 0}
              aria-label="Previous guides"
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-50"
              style={{ color: "#1E3A5F" }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setGuidesPage((p) => Math.min(3, p + 1))}
              disabled={guidesPage === 3}
              aria-label="Next guides"
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-50"
              style={{ color: "#1E3A5F" }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-slate-200 bg-slate-50/60"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1E3A5F" }}>
                Built for real-world HVAC work
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Clean inputs, consistent units, and outputs you can explain to a customer or use for
                planning—without the noise.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Accurate, transparent math",
                  desc: "Clear assumptions and practical sizing ranges for quick decision-making.",
                },
                {
                  title: "Imperial & Metric support",
                  desc: "Switch units seamlessly so your results match local standards and equipment.",
                },
                {
                  title: "Fast on mobile",
                  desc: "A streamlined interface that’s easy to use on-site, in a van, or at home.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "#1E3A5F" }}
                      aria-hidden="true"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#E67E22" }}
                      />
                    </span>
                    <h3 className="text-base font-bold" style={{ color: "#1E3A5F" }}>
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#1E3A5F" }}
                  aria-hidden="true"
                >
                  <span className="text-sm font-bold text-white">HT</span>
                </span>
                <span className="text-lg font-semibold" style={{ color: "#1E3A5F" }}>
                  HVACThermal
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600" id="about">
                Global HVAC calculators for fast, practical sizing guidance—made for homeowners and
                tradespeople.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold" style={{ color: "#1E3A5F" }}>
                Calculators
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link
                    className="hover:text-slate-900"
                    href="/calculator/btu-calculator"
                  >
                    BTU Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-slate-900"
                    href="/calculator/boiler-size-calculator"
                  >
                    Boiler Size Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-slate-900"
                    href="/calculator/heat-pump-size-calculator"
                  >
                    Heat Pump Size Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold" style={{ color: "#1E3A5F" }}>
                Company
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <Link className="hover:text-slate-900" href="#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-slate-900" href="#about">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div id="support">
              <p className="text-sm font-semibold" style={{ color: "#1E3A5F" }}>
                Support
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Questions or feedback? We’re building this for pros and homeowners—your input helps
                shape the tools.
              </p>
              <a
                href="mailto:support@hvacthermal.com"
                className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: "#E67E22" }}
              >
                Contact support
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HVACThermal.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
