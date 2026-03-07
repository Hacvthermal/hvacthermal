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

const PROPERTY_TYPES = [
  { key: "flat", label: "Flat" },
  { key: "terraced", label: "Terraced" },
  { key: "semi", label: "Semi-detached" },
  { key: "detached", label: "Detached" },
  { key: "bungalow", label: "Bungalow" },
];

const PROPERTY_MULT = {
  flat: 0.75,
  terraced: 0.85,
  semi: 1.0,
  detached: 1.2,
  bungalow: 1.15,
};

const REGIONS = [
  { key: "south-england", label: "South England", mult: 0.9 },
  { key: "central-england", label: "Central England", mult: 1.0 },
  { key: "north-england", label: "North England", mult: 1.1 },
  { key: "wales", label: "Wales", mult: 1.05 },
  { key: "scotland-central", label: "Scotland Central", mult: 1.18 },
  { key: "scotland-highland", label: "Scotland Highland", mult: 1.28 },
];

const GLAZING = [
  { key: "single", label: "Single" },
  { key: "double", label: "Double" },
  { key: "triple", label: "Triple" },
];

// W/m² factor by age band and insulation
const W_PER_M2 = {
  "pre-1940": { poor: 120, average: 95, good: 75 },
  "1940-1970": { poor: 110, average: 85, good: 65 },
  "1970-1990": { poor: 95, average: 75, good: 55 },
  "1990-2010": { poor: 75, average: 60, good: 45 },
  "2010+": { poor: 55, average: 45, good: 35 },
};

const STANDARD_SIZES = [5, 6, 7, 8, 9, 10, 12, 14, 16];

function clamp(n, min, max) {
  const v = Number(n);
  if (!Number.isFinite(v)) return min;
  return Math.max(min, Math.min(max, v));
}

function formatNumber(n, opts = {}) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, { ...opts }).format(n);
}

function ceilToStandardSize(kW) {
  if (!Number.isFinite(kW) || kW <= 0) return STANDARD_SIZES[0];
  const found = STANDARD_SIZES.find((s) => s >= kW);
  return found ?? 16;
}

function rangeStandard(size) {
  const idx = STANDARD_SIZES.indexOf(size);
  const lo = idx <= 0 ? STANDARD_SIZES[0] : STANDARD_SIZES[idx - 1];
  const hi = idx >= STANDARD_SIZES.length - 1 ? STANDARD_SIZES[STANDARD_SIZES.length - 1] : STANDARD_SIZES[idx + 1];
  return { lo, hi };
}

function costBandForSize(size) {
  if (size <= 7) return "£500–£3,500";
  if (size <= 10) return "£2,500–£6,500";
  if (size <= 14) return "£5,500–£10,500";
  return "£8,500–£14,500";
}

function isHouseOrBungalow(propertyType) {
  return propertyType !== "flat";
}

function isPre1990(ageKey) {
  return ageKey === "pre-1940" || ageKey === "1940-1970" || ageKey === "1970-1990";
}

export default function Page() {
  const [unit, setUnit] = useState("metric"); // metric (kW/m²) | imperial (BTU/sq ft)

  const [floorArea, setFloorArea] = useState(90); // m² or ft² depending on unit
  const [propertyType, setPropertyType] = useState("semi");
  const [propertyAge, setPropertyAge] = useState("1990-2010");
  const [insulationKey, setInsulationKey] = useState("average");
  const [loftInsulation, setLoftInsulation] = useState(true);
  const [wallInsulation, setWallInsulation] = useState(false);
  const [glazing, setGlazing] = useState("double");
  const [region, setRegion] = useState("central-england");

  const result = useMemo(() => {
    const areaInput = Number(floorArea);
    const area = Number.isFinite(areaInput) && areaInput > 0 ? areaInput : NaN;

    // Convert area to m² for calculation
    const FT2_TO_M2 = 0.092903;
    const areaM2 = unit === "metric" ? area : area * FT2_TO_M2;

    if (!Number.isFinite(areaM2) || areaM2 <= 0) {
      return {
        heatLossW: NaN,
        heatLosskW: NaN,
        finalkW: NaN,
        recommended: STANDARD_SIZES[0],
        range: rangeStandard(STANDARD_SIZES[0]),
        radiatorWarning: false,
        busEligible: false,
        costBand: costBandForSize(STANDARD_SIZES[0]),
        scotlandGrantNote: false,
      };
    }

    const baseFactor =
      W_PER_M2?.[propertyAge]?.[insulationKey] ??
      W_PER_M2["1990-2010"].average;

    let heatLossW = areaM2 * baseFactor;

    // multipliers
    if (loftInsulation) heatLossW *= 0.92;
    if (wallInsulation) heatLossW *= 0.88;

    if (glazing === "triple") heatLossW *= 0.94;
    if (glazing === "single") heatLossW *= 1.12;

    heatLossW *= PROPERTY_MULT[propertyType] ?? 1.0;
    const regionMult = (REGIONS.find((r) => r.key === region)?.mult ?? 1.0);
    heatLossW *= regionMult;

    const heatLosskW = heatLossW / 1000;
    const finalkW = heatLosskW * 1.1; // 10% margin
    const recommended = ceilToStandardSize(finalkW);
    const range = rangeStandard(recommended);

    const radiatorWarning =
      isPre1990(propertyAge) && (insulationKey === "poor" || insulationKey === "average");

    const busEligible = isHouseOrBungalow(propertyType) || propertyType === "bungalow";
    const scotlandGrantNote = region === "scotland-central" || region === "scotland-highland";

    return {
      heatLossW,
      heatLosskW,
      finalkW,
      recommended,
      range,
      radiatorWarning,
      busEligible,
      costBand: costBandForSize(recommended),
      scotlandGrantNote,
    };
  }, [
    floorArea,
    glazing,
    insulationKey,
    loftInsulation,
    propertyAge,
    propertyType,
    region,
    unit,
    wallInsulation,
  ]);

  const unitLabel =
    unit === "metric"
      ? { area: "m²", inputHint: "e.g., 90", toggle: "Metric (kW/m²)" }
      : { area: "sq ft", inputHint: "e.g., 970", toggle: "Imperial (BTU/sq ft)" };

  const heatLossDisplay =
    unit === "metric"
      ? `${formatNumber(result.heatLosskW, { maximumFractionDigits: 2 })} kW`
      : (() => {
          // BTU/sq ft display for estimated demand intensity
          // Convert heat loss W to BTU/hr: W * 3.412142
          // Divide by area in ft² to get BTU/hr per sq ft. Use input area (ft²) when imperial.
          const W_TO_BTUHR = 3.412142;
          const areaFt2 = Number(floorArea);
          const intensity =
            Number.isFinite(result.heatLossW) && Number.isFinite(areaFt2) && areaFt2 > 0
              ? (result.heatLossW * W_TO_BTUHR) / areaFt2
              : NaN;
          const totalBtuHr = Number.isFinite(result.heatLossW)
            ? result.heatLossW * W_TO_BTUHR
            : NaN;
          return {
            intensity,
            totalBtuHr,
          };
        })();

  const showHeatLossPrimary =
    unit === "metric"
      ? {
          value: result.heatLosskW,
          label: "Estimated heat loss",
          suffix: "kW",
          dp: 2,
        }
      : {
          value:
            typeof heatLossDisplay === "object" ? heatLossDisplay.totalBtuHr : NaN,
          label: "Estimated heat loss",
          suffix: "BTU/hr",
          dp: 0,
        };

  const showIntensity =
    unit === "imperial" && typeof heatLossDisplay === "object"
      ? heatLossDisplay.intensity
      : NaN;

  const onToggleUnit = (nextUnit) => {
    if (nextUnit === unit) return;
    const FT2_TO_M2 = 0.092903;
    const M2_TO_FT2 = 1 / FT2_TO_M2;
    if (nextUnit === "imperial") {
      setFloorArea((v) => {
        const n = Number(v);
        if (!Number.isFinite(n)) return v;
        return Number((n * M2_TO_FT2).toFixed(0));
      });
    } else {
      setFloorArea((v) => {
        const n = Number(v);
        if (!Number.isFinite(n)) return v;
        return Number((n * FT2_TO_M2).toFixed(1));
      });
    }
    setUnit(nextUnit);
  };

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
          <a href="/#calculators" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
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
                    Heat Pump Size Calculator
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Estimate whole-home heat loss and a practical heat pump size using UK-style factors
                    and climate region adjustments.
                  </p>
                </div>

                <div className="w-full sm:w-auto">
                  <p className="text-xs font-semibold text-slate-500">Units</p>
                  <div className="mt-2 inline-flex w-full rounded-xl border border-slate-200 bg-slate-50 p-1 sm:w-auto">
                    <button
                      type="button"
                      onClick={() => onToggleUnit("metric")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "metric" ? "text-white shadow-sm" : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "metric" ? { backgroundColor: NAVY } : undefined}
                    >
                      Metric (kW/m²)
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleUnit("imperial")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "imperial" ? "text-white shadow-sm" : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "imperial" ? { backgroundColor: NAVY } : undefined}
                    >
                      Imperial (BTU/sq ft)
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Floor area ({unitLabel.area})
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.1"
                    value={floorArea}
                    onChange={(e) => setFloorArea(e.target.value === "" ? "" : Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                    placeholder={unitLabel.inputHint}
                  />
                </div>

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
                      onClick={() => setWallInsulation((v) => !v)}
                      className={[
                        "flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition",
                        wallInsulation
                          ? "text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      ].join(" ")}
                      style={wallInsulation ? { backgroundColor: NAVY, borderColor: NAVY } : undefined}
                      aria-pressed={wallInsulation}
                    >
                      <span>Wall insulation</span>
                      <span className={wallInsulation ? "text-white/90" : "text-slate-500"}>
                        {wallInsulation ? "Yes" : "No"}
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Multipliers: loft ×0.92, wall ×0.88.
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Glazing
                  </label>
                  <select
                    value={glazing}
                    onChange={(e) => setGlazing(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                  >
                    {GLAZING.map((g) => (
                      <option key={g.key} value={g.key}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-slate-500">
                    Multipliers: single ×1.12, triple ×0.94.
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    UK region
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                  >
                    {REGIONS.map((r) => (
                      <option key={r.key} value={r.key}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl p-6 shadow-sm sm:p-8" style={{ backgroundColor: NAVY }}>
              <p className="text-xs font-semibold text-white/80">Results</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                Recommended heat pump size
              </h2>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white/80">
                  {showHeatLossPrimary.label}
                </p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {formatNumber(showHeatLossPrimary.value, {
                    maximumFractionDigits: showHeatLossPrimary.dp,
                    minimumFractionDigits: showHeatLossPrimary.dp,
                  })}{" "}
                  {showHeatLossPrimary.suffix}
                </p>
                {unit === "imperial" && Number.isFinite(showIntensity) && (
                  <p className="mt-2 text-sm text-white/75">
                    Intensity:{" "}
                    <span className="font-semibold text-white">
                      {formatNumber(showIntensity, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}
                    </span>{" "}
                    BTU/hr per sq ft
                  </p>
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/90">Recommended size</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                  {result.recommended} kW
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Acceptable range:{" "}
                  <span className="font-semibold text-white">
                    {result.range.lo}–{result.range.hi} kW
                  </span>{" "}
                  (one standard size either side)
                </p>
              </div>

              {result.radiatorWarning && (
                <div className="mt-5 rounded-2xl border border-amber-300/40 bg-amber-400/10 p-5">
                  <p className="text-sm font-semibold text-amber-100">Radiator compatibility</p>
                  <p className="mt-2 text-sm leading-6 text-amber-50/90">
                    Pre-1990 homes with poor/average insulation may need larger radiators (or lower
                    flow temperatures may reduce output). Consider a heat loss survey and emitter
                    check before installation.
                  </p>
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-emerald-300/40 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold text-emerald-100">MCS survey recommended</p>
                <p className="mt-2 text-sm leading-6 text-emerald-50/90">
                  Always confirm sizing with an MCS-accredited heat loss survey to validate heat
                  pump capacity, radiator suitability, and flow temperature requirements.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/90">BUS grant eligibility</p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {result.busEligible
                    ? "Likely eligible (houses/bungalows typically qualify). Confirm your property and installer eligibility for the Boiler Upgrade Scheme."
                    : "Flats can be eligible in some cases, but eligibility is more variable. Confirm with an MCS installer and scheme rules."}
                </p>
                {result.scotlandGrantNote && (
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Scotland note: you may be able to access up to{" "}
                    <span className="font-semibold text-white">£9,000</span> via Home Energy Scotland
                    grants/loans depending on circumstances.
                  </p>
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/90">Cost estimate (after £7,500 grant)</p>
                <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-white/80">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Size band</th>
                        <th className="px-4 py-3 font-semibold">Typical range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/90">
                      {[
                        { band: "5–7 kW", cost: "£500–£3,500" },
                        { band: "8–10 kW", cost: "£2,500–£6,500" },
                        { band: "12–14 kW", cost: "£5,500–£10,500" },
                        { band: "16 kW+", cost: "£8,500–£14,500" },
                      ].map((row) => (
                        <tr key={row.band} className={row.cost === result.costBand ? "bg-white/5" : undefined}>
                          <td className="px-4 py-3 font-semibold">{row.band}</td>
                          <td className="px-4 py-3">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-white/70">
                  These are broad estimates and vary by emitter upgrades, cylinder, controls, and
                  fabric improvements.
                </p>
              </div>

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
          </aside>
        </div>
      </main>
    </div>
  );
}

