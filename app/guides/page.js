"use client";

import Link from "next/link";

const GUIDE_CARDS = [
  {
    title: "What Size Boiler Do I Need?",
    desc: "UK-focused guide on boiler sizing: radiators, insulation, property type, combi vs system, and when to use our calculator.",
    href: "/guides/what-size-boiler-do-i-need",
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
    title: "How Many BTU Do I Need?",
    desc: "Understand BTU sizing for rooms: floor area, ceiling height, insulation, sun exposure, and a handy room-type table.",
    href: "/guides/how-many-btu-do-i-need",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
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
        <path
          d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
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
        <path
          d="M12 2a7 7 0 0 0-7 7c0 2.1 1.1 4.1 2.8 5.4.9.7 1.2 1.2 1.2 2.1V19a3 3 0 0 0 6 0v-2.5c0-.9.3-1.4 1.2-2.1A6.9 6.9 0 0 0 19 9a7 7 0 0 0-7-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
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
    title: "What Size Radiators Do I Need?",
    desc: "Size your radiators correctly using BTU and watt outputs — with a room-by-room sizing table.",
    href: "/guides/what-size-radiators-do-i-need",
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
    title: "How Long Does a Boiler Last?",
    desc: "Average boiler lifespans, signs it needs replacing, and how to decide between repair and replacement.",
    href: "/guides/how-long-does-a-boiler-last",
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
    title: "Best Combi Boilers UK 2026",
    desc: "Compare the top 5 combi boilers for UK homes in 2026 — reliability ratings, warranties, installed costs and brands to avoid.",
    href: "/guides/best-combi-boilers-uk",
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
    title: "How to Bleed a Radiator",
    desc: "Step-by-step guide to bleeding your radiators — signs to look for, tools needed, and what to do if bleeding doesn't fix the problem.",
    href: "/guides/how-to-bleed-a-radiator",
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
    title: "How to Repressurise a Boiler",
    desc: "Step-by-step guide to repressurising your boiler — what pressure it should be, how to use the filling loop, and when to call an engineer.",
    href: "/guides/how-to-repressurise-a-boiler",
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
    title: "What Temperature Should My Boiler Be Set To?",
    desc: "Find the right flow temperature for your boiler — how lower settings save money, hot water safety, and weather compensation explained.",
    href: "/guides/what-temperature-should-my-boiler-be-set-to",
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
];

export default function GuidesIndexPage() {
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
            <Link href="/#guides" className="text-slate-700 hover:text-slate-900">
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
        <section className="relative overflow-hidden text-white" style={{ backgroundColor: "#1E3A5F" }}>
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
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                HVAC Guides
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:text-lg">
                Clear, practical sizing guides for boilers, heat pumps, radiators, and air conditioning.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDE_CARDS.map((card) => (
              <div
                key={card.title}
                className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
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
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.desc}</p>
                </div>
                <div className="mt-auto pt-5">
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
        </section>
      </main>
    </div>
  );
}

