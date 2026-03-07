"use client";

import { useMemo, useState } from "react";

const NAVY = "#1E3A5F";
const ORANGE = "#E67E22";

const INSULATION = [
  { key: "poor", label: "Poor", mult: 1.25 },
  { key: "average", label: "Average", mult: 1.0 },
  { key: "good", label: "Good", mult: 0.85 },
];

const SUN = [
  { key: "low", label: "Low", mult: 0.9 },
  { key: "medium", label: "Medium", mult: 1.0 },
  { key: "high", label: "High", mult: 1.15 },
];

function clampInt(value, min, max) {
  const n = Number.isFinite(value) ? Math.trunc(value) : NaN;
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function formatNumber(n, opts = {}) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
    ...opts,
  }).format(n);
}

function calcMessage({ unit, primary, tons }) {
  if (!Number.isFinite(primary) || primary <= 0) {
    return "Enter your room details to see an instant sizing estimate.";
  }

  const size =
    unit === "imperial"
      ? `${formatNumber(primary)} BTU/hr`
      : `${formatNumber(primary, { maximumFractionDigits: 2 })} kW`;

  if (!Number.isFinite(tons)) {
    return `Your estimated load is ${size}.`;
  }

  if (tons < 0.75) return `Compact spaces often fall under 1 ton. Estimated: ${size}.`;
  if (tons < 1.5) return `Typical bedrooms/small offices often land around 1 ton. Estimated: ${size}.`;
  if (tons < 2.5) return `Medium rooms commonly size near 2 tons. Estimated: ${size}.`;
  if (tons < 3.5) return `Larger spaces often need 3 tons or more. Estimated: ${size}.`;
  return `Very large or sun-heavy spaces can require higher capacity. Estimated: ${size}.`;
}

export default function Page() {
  const [unit, setUnit] = useState("imperial"); // imperial | metric

  // Dimensions
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(12);

  // Ceiling height dropdown (ft or m)
  const imperialHeights = [8, 9, 10, 12, 14];
  const metricHeights = [2.4, 2.7, 3.0, 3.6, 4.2];
  const [ceilingHeight, setCeilingHeight] = useState(8);

  // Multipliers
  const [insulationKey, setInsulationKey] = useState("average");
  const [sunKey, setSunKey] = useState("medium");

  // Windows
  const [windows, setWindows] = useState(2);

  const heights = unit === "imperial" ? imperialHeights : metricHeights;
  const heightLabel = unit === "imperial" ? "ft" : "m";
  const lengthLabel = unit === "imperial" ? "ft" : "m";
  const areaLabel = unit === "imperial" ? "ft²" : "m²";

  const selectedInsulation = INSULATION.find((x) => x.key === insulationKey) ?? INSULATION[1];
  const selectedSun = SUN.find((x) => x.key === sunKey) ?? SUN[1];

  const result = useMemo(() => {
    const l = Number(length);
    const w = Number(width);
    const h = Number(ceilingHeight);
    const win = clampInt(Number(windows), 0, 50);

    if (![l, w, h].every((n) => Number.isFinite(n) && n > 0)) {
      return {
        primary: NaN,
        tons: NaN,
        message: calcMessage({ unit, primary: NaN, tons: NaN }),
      };
    }

    if (unit === "imperial") {
      // base = length × width × 25 (cooling imperial)
      let base = l * w * 25;
      // apply ceiling multiplier (height/8 imperial)
      base *= h / 8;
      // insulation & sun multipliers
      base *= selectedInsulation.mult;
      base *= selectedSun.mult;
      // add 1000 BTU per window
      base += win * 1000;

      const tons = base / 12000;
      return {
        primary: base,
        tons,
        message: calcMessage({ unit, primary: base, tons }),
      };
    }

    // metric
    // base = length × width × 0.0733 (cooling metric kW)
    let baseKw = l * w * 0.0733;
    // apply ceiling multiplier (height/2.4 metric)
    baseKw *= h / 2.4;
    // insulation & sun multipliers
    baseKw *= selectedInsulation.mult;
    baseKw *= selectedSun.mult;
    // add 0.29kW per window
    baseKw += win * 0.29;

    const tons = baseKw / 3.5168525; // ton of refrigeration
    return {
      primary: baseKw,
      tons,
      message: calcMessage({ unit, primary: baseKw, tons }),
    };
  }, [ceilingHeight, length, selectedInsulation.mult, selectedSun.mult, unit, width, windows]);

  const primaryLabel = unit === "imperial" ? "Estimated cooling load" : "Estimated cooling load";
  const primaryValue =
    unit === "imperial"
      ? `${formatNumber(result.primary)} BTU/hr`
      : `${formatNumber(result.primary, { maximumFractionDigits: 2 })} kW`;

  const onToggleUnit = (nextUnit) => {
    if (nextUnit === unit) return;

    // Convert in-place so values "feel" consistent when toggling.
    // length/width: ft <-> m, height: ft <-> m
    const FT_TO_M = 0.3048;
    const M_TO_FT = 1 / FT_TO_M;

    if (nextUnit === "metric") {
      setLength((v) => Number((Number(v) * FT_TO_M).toFixed(2)));
      setWidth((v) => Number((Number(v) * FT_TO_M).toFixed(2)));
      const nextH = Number((Number(ceilingHeight) * FT_TO_M).toFixed(2));
      // Snap to nearest dropdown value
      const snapped = metricHeights.reduce((best, cur) =>
        Math.abs(cur - nextH) < Math.abs(best - nextH) ? cur : best
      );
      setCeilingHeight(snapped);
    } else {
      setLength((v) => Number((Number(v) * M_TO_FT).toFixed(1)));
      setWidth((v) => Number((Number(v) * M_TO_FT).toFixed(1)));
      const nextH = Number((Number(ceilingHeight) * M_TO_FT).toFixed(1));
      const snapped = imperialHeights.reduce((best, cur) =>
        Math.abs(cur - nextH) < Math.abs(best - nextH) ? cur : best
      );
      setCeilingHeight(snapped);
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
                    BTU Calculator
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Get a fast cooling-load estimate using room size, ceiling height, insulation,
                    sun exposure, and windows.
                  </p>
                </div>

                <div className="w-full sm:w-auto">
                  <p className="text-xs font-semibold text-slate-500">Units</p>
                  <div className="mt-2 inline-flex w-full rounded-xl border border-slate-200 bg-slate-50 p-1 sm:w-auto">
                    <button
                      type="button"
                      onClick={() => onToggleUnit("imperial")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "imperial"
                          ? "text-white shadow-sm"
                          : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "imperial" ? { backgroundColor: NAVY } : undefined}
                    >
                      Imperial
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleUnit("metric")}
                      className={[
                        "w-1/2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:w-auto",
                        unit === "metric" ? "text-white shadow-sm" : "text-slate-700 hover:bg-white",
                      ].join(" ")}
                      style={unit === "metric" ? { backgroundColor: NAVY } : undefined}
                    >
                      Metric
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Room length ({lengthLabel})
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(e.target.value === "" ? "" : Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-0 focus:border-slate-300 focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                    placeholder={unit === "imperial" ? "e.g., 12" : "e.g., 3.6"}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Room width ({lengthLabel})
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(e.target.value === "" ? "" : Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-0 focus:border-slate-300 focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                    placeholder={unit === "imperial" ? "e.g., 12" : "e.g., 3.6"}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Ceiling height ({heightLabel})
                  </label>
                  <select
                    value={ceilingHeight}
                    onChange={(e) => setCeilingHeight(Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(30,58,95,0.25)" }}
                  >
                    {heights.map((h) => (
                      <option key={h} value={h}>
                        {h} {heightLabel}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-slate-500">
                    Room area:{" "}
                    <span className="font-semibold text-slate-700">
                      {Number.isFinite(Number(length)) && Number.isFinite(Number(width)) && length > 0 && width > 0
                        ? `${formatNumber(Number(length) * Number(width), { maximumFractionDigits: 1 })} ${areaLabel}`
                        : `— ${areaLabel}`}
                    </span>
                  </p>
                </div>

                <div>
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
                            active ? "text-white shadow-sm" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                          ].join(" ")}
                          style={
                            active
                              ? { backgroundColor: NAVY, borderColor: NAVY }
                              : undefined
                          }
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Sun exposure
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {SUN.map((opt) => {
                      const active = sunKey === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setSunKey(opt.key)}
                          className={[
                            "rounded-xl border px-3 py-3 text-sm font-semibold transition",
                            active ? "text-white shadow-sm" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                          ].join(" ")}
                          style={
                            active
                              ? { backgroundColor: NAVY, borderColor: NAVY }
                              : undefined
                          }
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Number of windows
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <button
                      type="button"
                      onClick={() => setWindows((w0) => clampInt(Number(w0) - 1, 0, 50))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Decrease windows"
                    >
                      <span className="text-xl leading-none">−</span>
                    </button>

                    <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
                      <span className="text-2xl font-extrabold" style={{ color: NAVY }}>
                        {clampInt(Number(windows), 0, 50)}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">windows</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setWindows((w0) => clampInt(Number(w0) + 1, 0, 50))}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
                      aria-label="Increase windows"
                    >
                      <span className="text-xl leading-none">+</span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Adds{" "}
                    <span className="font-semibold text-slate-700">
                      {unit === "imperial" ? "1,000 BTU/hr" : "0.29 kW"}
                    </span>{" "}
                    per window.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div
              className="rounded-2xl p-6 shadow-sm sm:p-8"
              style={{ backgroundColor: NAVY }}
            >
              <p className="text-xs font-semibold text-white/80">Results</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                {primaryLabel}
              </h2>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white/80">Primary estimate</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {primaryValue}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Tons:{" "}
                    <span className="font-semibold text-white">
                      {Number.isFinite(result.tons)
                        ? formatNumber(result.tons, { maximumFractionDigits: 2 })
                        : "—"}
                    </span>
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Profile:{" "}
                    <span className="font-semibold text-white">
                      {selectedInsulation.label} insulation, {selectedSun.label} sun
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-white/90">Interpretation</p>
                <p className="mt-2 text-sm leading-6 text-white/80">{result.message}</p>
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

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold" style={{ color: NAVY }}>
                Notes
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>
                  - This is a quick estimate for cooling load. For detailed design, use a full
                  Manual J (or local equivalent).
                </li>
                <li>
                  - Results adjust instantly when you switch between Imperial and Metric units.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

