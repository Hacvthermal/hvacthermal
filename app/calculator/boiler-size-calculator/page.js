"use client";

import { useMemo, useState } from "react";

const NAVY = "#1E3A5F";
const ORANGE = "#E67E22";

const AGE_BANDS = [
  { key: "pre-1940", label: "Pre-1940" },
  { key: "1940-1970", label: "1940-1970" },
  { key: "1970-1990", label: "1970-1990" },
  { key: "1990-2010", label: "1990-2010" },
  { key: "2010+", label: "2010+" },
];

const INSULATION = [
  { key: "poor", label: "Poor" },
  { key: "average", label: "Average" },
  { key: "good", label: "Good" },
];

// kW per radiator table by age band and insulation quality
const KW_PER_RAD = {
  "pre-1940": { poor: 2.2, average: 1.8, good: 1.4 },
  "1940-1970": { poor: 2.0, average: 1.6, good: 1.3 },
  "1970-1990": { poor: 1.8, average: 1.5, good: 1.2 },
  "1990-2010": { poor: 1.5, average: 1.3, good: 1.0 },
  "2010+": { poor: 1.2, average: 1.0, good: 0.8 },
};

const PROPERTY_TYPES = [
  { key: "flat", label: "Flat" },
  { key: "terraced", label: "Terraced" },
  { key: "end-terrace", label: "End-terrace" },
  { key: "semi", label: "Semi-detached" },
  { key: "detached", label: "Detached" },
  { key: "bungalow", label: "Bungalow" },
];

const PROPERTY_MULT = {
  flat: 0.85,
  terraced: 0.9,
  "end-terrace": 0.95,
  semi: 1.0,
  detached: 1.1,
  bungalow: 1.08,
};

function clampInt(n, min, max) {
  const v = Math.trunc(Number(n));
  if (!Number.isFinite(v)) return min;
  return Math.max(min, Math.min(max, v));
}

function formatNumber(n, opts = {}) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, { ...opts }).format(n);
}

function toBtuPerHour(kW) {
  return kW * 3412.142;
}

function range15(value) {
  const lo = value * 0.85;
  const hi = value * 1.15;
  return { lo, hi };
}

function hotWaterKwForCombi(bathrooms) {
  const b = clampInt(bathrooms, 0, 10);
  if (b <= 0) return 0;
  if (b === 1) return 3;
  if (b === 2) return 8;
  return 11;
}

function insulationDeductionKw({ loft, cavity }) {
  if (loft && cavity) return 1.2;
  if (loft) return 0.5;
  if (cavity) return 0.8;
  return 0;
}

function boilerTypeRecommendation({ boilerType, bathrooms, recommendedKw }) {
  const b = clampInt(bathrooms, 0, 10);

  if (boilerType === "combi") {
    if (b >= 2) {
      return "Combi selected: consider flow-rate needs for multiple bathrooms. If you often run two showers at once, a higher-output combi or a system boiler with a cylinder may suit better.";
    }
    return "Combi selected: typically a good fit for properties with 1 bathroom and limited space (no hot water cylinder).";
  }

  if (boilerType === "system") {
    return "System boiler selected: well-suited when you want a hot water cylinder and better support for higher hot water demand (e.g., 2+ bathrooms).";
  }

  // regular
  if (recommendedKw >= 24) {
    return "Regular boiler selected: suitable for older heating systems with tanks/cylinders, especially in larger homes—ensure your existing system components are compatible.";
  }
  return "Regular boiler selected: can be appropriate where a traditional tank/cylinder setup already exists—often chosen for retrofit compatibility.";
}

export default function Page() {
  const [unit, setUnit] = useState("metric"); // metric | imperial
  const [boilerType, setBoilerType] = useState("combi"); // combi | system | regular
  const [propertyType, setPropertyType] = useState("semi");
  const [propertyAge, setPropertyAge] = useState("1990-2010");
  const [insulationKey, setInsulationKey] = useState("average");

  const [radiators, setRadiators] = useState(8);
  const [bathrooms, setBathrooms] = useState(1);

  const [loftInsulation, setLoftInsulation] = useState(true);
  const [cavityWallInsulation, setCavityWallInsulation] = useState(false);

  const result = useMemo(() => {
    const rads = clampInt(radiators, 1, 40);
    const baths = clampInt(bathrooms, 0, 10);

    const kwPerRad =
      KW_PER_RAD?.[propertyAge]?.[insulationKey] ??
      KW_PER_RAD["1990-2010"].average;

    // Base kW = radiators × kW per radiator (space heating baseline)
    let kw = rads * kwPerRad;

    // Add hot water for COMBI only
    if (boilerType === "combi") {
      kw += hotWaterKwForCombi(baths);
    }

    // Subtract insulation deductions
    kw -= insulationDeductionKw({ loft: loftInsulation, cavity: cavityWallInsulation });

    // Property multiplier
    const mult = PROPERTY_MULT[propertyType] ?? 1.0;
    kw *= mult;

    // Minimum 12kW
    const rawKw = kw;
    kw = Math.max(12, rawKw);
    const minimumApplied = rawKw < 12;

    const acceptable = range15(kw);
    const btu = toBtuPerHour(kw);
    const acceptableBtu = { lo: toBtuPerHour(acceptable.lo), hi: toBtuPerHour(acceptable.hi) };

    const recommendation = boilerTypeRecommendation({
      boilerType,
      bathrooms: baths,
      recommendedKw: kw,
    });

    return {
      rawKw,
      minimumApplied,
      kw,
      acceptableKw: acceptable,
      btu,
      acceptableBtu,
      recommendation,
      heatPumpCallout: kw >= 6 && kw <= 16,
    };
  }, [
    bathrooms,
    boilerType,
    cavityWallInsulation,
    insulationKey,
    loftInsulation,
    propertyAge,
    propertyType,
    radiators,
  ]);

  const primary =
    unit === "metric"
      ? { value: result.kw, label: "kW", dp: 1 }
      : { value: result.btu, label: "BTU/hr", dp: 0 };

  const range =
    unit === "metric"
      ? { lo: result.acceptableKw.lo, hi: result.acceptableKw.hi, label: "kW", dp: 1 }
      : { lo: result.acceptableBtu.lo, hi: result.acceptableBtu.hi, label: "BTU/hr", dp: 0 };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ backgroundColor: NAVY }}
              aria-hidden="true"
            >
              <span className="text-sm font-bold text-white">HT</span>
            </span>
            <span className="text-lg" style={{ color: NAVY }}>
              HVACThermal
            </span>
          </a>

          <a
            href="/#calculators"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Back to calculators
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <section className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                    Boiler Size Calculator
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    UK/Europe-focused boiler sizing estimate based on radiators, age/insulation, and
                    hot water demand (for combi).
                  </p>
                </div>

                <div className="w-full sm:w-auto">
                  <p className="text-xs font-semibold text-slate-500">Units</p>
                  <div className="mt-2 inline-flex w-full rounded-xl border border-slate-200 bg-slate-50 p-1 sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setUnit("metric")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "metric" ? "text-white shadow-sm" : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "metric" ? { backgroundColor: NAVY } : undefined}
                    >
                      Metric (kW)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit("imperial")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "imperial"
                          ? "text-white shadow-sm"
                          : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "imperial" ? { backgroundColor: NAVY } : undefined}
                    >
                      Imperial (BTU/hr)
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold" style={{ color: NAVY }}>
                  Boiler type
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[
                    { key: "combi", label: "Combi" },
                    { key: "system", label: "System" },
                    { key: "regular", label: "Regular" },
                  ].map((t) => {
                    const active = boilerType === t.key;
                    return (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => setBoilerType(t.key)}
                        className={[
                          "rounded-xl border px-3 py-3 text-sm font-semibold transition",
                          active
                            ? "text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                        ].join(" ")}
                        style={active ? { backgroundColor: NAVY, borderColor: NAVY } : undefined}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Property type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                  >
                    {PROPERTY_TYPES.map((p) => (
                      <option key={p.key} value={p.key}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Property age
                  </label>
                  <select
                    value={propertyAge}
                    onChange={(e) => setPropertyAge(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                  >
                    {AGE_BANDS.map((a) => (
                      <option key={a.key} value={a.key}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Insulation quality
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {INSULATION.map((opt) => {
                      const active = insulationKey === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setInsulationKey(opt.key)}
                          className={[
                            "rounded-xl border px-3 py-3 text-sm font-semibold transition",
                            active
                              ? "text-white shadow-sm"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                          ].join(" ")}
                          style={active ? { backgroundColor: NAVY, borderColor: NAVY } : undefined}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Number of radiators
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <button
                      type="button"
                      onClick={() => setRadiators((v) => clampInt(Number(v) - 1, 1, 40))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Decrease radiators"
                    >
                      <span className="text-xl leading-none">−</span>
                    </button>

                    <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
                      <span className="text-2xl font-extrabold" style={{ color: NAVY }}>
                        {clampInt(radiators, 1, 40)}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">radiators</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setRadiators((v) => clampInt(Number(v) + 1, 1, 40))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Increase radiators"
                    >
                      <span className="text-xl leading-none">+</span>
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Number of bathrooms
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <button
                      type="button"
                      onClick={() => setBathrooms((v) => clampInt(Number(v) - 1, 0, 10))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Decrease bathrooms"
                    >
                      <span className="text-xl leading-none">−</span>
                    </button>

                    <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
                      <span className="text-2xl font-extrabold" style={{ color: NAVY }}>
                        {clampInt(bathrooms, 0, 10)}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">bathrooms</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBathrooms((v) => clampInt(Number(v) + 1, 0, 10))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Increase bathrooms"
                    >
                      <span className="text-xl leading-none">+</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Hot water add-on applies to <span className="font-semibold">Combi</span> only:
                    1 bath = +3kW, 2 bath = +8kW, 3+ bath = +11kW.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Insulation upgrades
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setLoftInsulation((v) => !v)}
                      className={[
                        "flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition",
                        loftInsulation
                          ? "text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      ].join(" ")}
                      style={loftInsulation ? { backgroundColor: NAVY, borderColor: NAVY } : undefined}
                      aria-pressed={loftInsulation}
                    >
                      <span>Loft insulation</span>
                      <span className={loftInsulation ? "text-white/90" : "text-slate-500"}>
                        {loftInsulation ? "Yes" : "No"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCavityWallInsulation((v) => !v)}
                      className={[
                        "flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition",
                        cavityWallInsulation
                          ? "text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      ].join(" ")}
                      style={
                        cavityWallInsulation ? { backgroundColor: NAVY, borderColor: NAVY } : undefined
                      }
                      aria-pressed={cavityWallInsulation}
                    >
                      <span>Cavity wall insulation</span>
                      <span className={cavityWallInsulation ? "text-white/90" : "text-slate-500"}>
                        {cavityWallInsulation ? "Yes" : "No"}
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Deductions: loft −0.5kW, cavity −0.8kW, both −1.2kW.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl p-6 shadow-sm sm:p-8" style={{ backgroundColor: NAVY }}>
              <p className="text-xs font-semibold text-white/80">Results</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                Recommended boiler output
              </h2>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white/80">Recommendation</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {formatNumber(primary.value, {
                    maximumFractionDigits: primary.dp,
                    minimumFractionDigits: primary.dp,
                  })}{" "}
                  {primary.label}
                </p>
                {result.minimumApplied && unit === "metric" && (
                  <p className="mt-2 text-sm text-white/75">
                    Calculated before minimum:{" "}
                    <span className="font-semibold text-white">
                      {formatNumber(result.rawKw, { maximumFractionDigits: 1, minimumFractionDigits: 1 })} kW
                    </span>{" "}
                    (12kW minimum applied)
                  </p>
                )}
                {result.minimumApplied && unit === "imperial" && (
                  <p className="mt-2 text-sm text-white/75">
                    Calculated before minimum:{" "}
                    <span className="font-semibold text-white">
                      {formatNumber(toBtuPerHour(result.rawKw), { maximumFractionDigits: 0 })} BTU/hr
                    </span>{" "}
                    (12kW minimum applied)
                  </p>
                )}
                <p className="mt-3 text-sm text-white/80">
                  Acceptable range (±15%):{" "}
                  <span className="font-semibold text-white">
                    {formatNumber(range.lo, {
                      maximumFractionDigits: range.dp,
                      minimumFractionDigits: range.dp,
                    })}
                    –{formatNumber(range.hi, {
                      maximumFractionDigits: range.dp,
                      minimumFractionDigits: range.dp,
                    })}{" "}
                    {range.label}
                  </span>
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/90">Boiler type guidance</p>
                <p className="mt-2 text-sm leading-6 text-white/80">{result.recommendation}</p>
              </div>

              {result.heatPumpCallout && (
                <div className="mt-5 rounded-2xl border border-emerald-300/40 bg-emerald-400/10 p-5">
                  <p className="text-sm font-semibold text-emerald-100">Heat pump alternative</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/90">
                    Your estimate falls in the 6–16kW range—this is often suitable for an air
                    source heat pump. In the UK, you may be eligible for a{" "}
                    <span className="font-semibold">£7,500</span> grant (Boiler Upgrade Scheme).
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/#calculators"
                  className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
                  style={{ backgroundColor: ORANGE }}
                >
                  Browse more calculators
                </a>
                <a
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold text-white/95 transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.6)" }}
                >
                  Back to homepage
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold" style={{ color: NAVY }}>
                How this estimate works
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>- Starts with radiator count × kW-per-radiator (age + insulation table).</li>
                <li>- Adds hot water demand for combi boilers based on bathrooms.</li>
                <li>- Applies insulation deductions and a property-type multiplier.</li>
                <li>- Enforces a minimum of 12kW.</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

