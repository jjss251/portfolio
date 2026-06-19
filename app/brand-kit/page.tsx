"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, Copy, Check, RotateCcw, Save, Palette } from "lucide-react";

type BrandConfig = {
  bgColor: string;
  cardColor: string;
  textColor: string;
  mainColor: string;
  accentColor: string;
  borderRadius: number;
};

const PRESETS: { name: string; tag: string; config: BrandConfig }[] = [
  {
    name: "Warm Sand",
    tag: "현재 기본 톤",
    config: {
      bgColor: "#e8e3da",
      cardColor: "#f2ede4",
      textColor: "#1a1a1a",
      mainColor: "#1a1a1a",
      accentColor: "#8b7355",
      borderRadius: 16,
    },
  },
  {
    name: "Dark Studio",
    tag: "다크 에디토리얼",
    config: {
      bgColor: "#111111",
      cardColor: "#1c1c1c",
      textColor: "#e4e0d8",
      mainColor: "#e4e0d8",
      accentColor: "#7a9e87",
      borderRadius: 12,
    },
  },
  {
    name: "Cool Nordic",
    tag: "쿨한 블루 그레이",
    config: {
      bgColor: "#f2f4f7",
      cardColor: "#ffffff",
      textColor: "#1e2840",
      mainColor: "#1e2840",
      accentColor: "#4169a0",
      borderRadius: 20,
    },
  },
  {
    name: "Terracotta",
    tag: "따뜻한 클레이 톤",
    config: {
      bgColor: "#f5ede4",
      cardColor: "#ebe2d8",
      textColor: "#2c1810",
      mainColor: "#2c1810",
      accentColor: "#c17a52",
      borderRadius: 24,
    },
  },
];

const DEFAULT_CONFIG = PRESETS[0].config;
const LS_KEY = "brand-kit-v1";

function ColorRow({
  label,
  description,
  colorKey,
  value,
  onChange,
}: {
  label: string;
  description: string;
  colorKey: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <label className="group flex cursor-pointer items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-black/[0.03]">
      <div>
        <p className="text-sm font-medium text-[#1a1a1a]">{label}</p>
        <p className="text-xs text-[#1a1a1a]/50">{description}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-xs text-[#1a1a1a]/40">{value}</span>
        <div
          className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#1a1a1a]/20 shadow-sm"
          style={{ backgroundColor: value }}
        >
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label={label}
          />
        </div>
      </div>
    </label>
  );
}

function Preview({ config }: { config: BrandConfig }) {
  const { bgColor, cardColor, textColor, mainColor, accentColor, borderRadius } = config;
  const r = borderRadius;

  return (
    <div
      className="overflow-hidden shadow-xl ring-1 ring-black/10"
      style={{ borderRadius: r, backgroundColor: bgColor, color: textColor }}
    >
      {/* Mini hero */}
      <div className="px-5 pt-5 pb-4" style={{ backgroundColor: bgColor }}>
        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-[11px] font-semibold tracking-tight" style={{ color: mainColor }}>
            Junseong Park<sup className="text-[0.55em]">®</sup>
          </span>
          <span className="text-[9px] opacity-50" style={{ color: textColor }}>
            UX Designer
          </span>
        </div>
        <h2
          className="mb-1.5 text-xl font-semibold leading-tight tracking-tight"
          style={{ color: mainColor }}
        >
          Junseong
          <br />
          Park
        </h2>
        <p className="mb-4 text-[10px] leading-relaxed opacity-60" style={{ color: textColor }}>
          심물리학 기반의 분석적 인사이트를 바탕으로
          <br />
          의미있는 사용자 경험을 설계해요.
        </p>
        <button
          className="px-3 py-1 text-[10px] font-medium"
          style={{
            backgroundColor: mainColor,
            color: bgColor,
            borderRadius: Math.max(4, r / 2),
          }}
        >
          프로젝트 보기 →
        </button>
      </div>

      {/* Divider */}
      <div className="h-px opacity-[0.08]" style={{ backgroundColor: textColor }} />

      {/* About mini */}
      <div className="px-5 py-4" style={{ backgroundColor: bgColor }}>
        <p
          className="mb-2 text-[8px] uppercase tracking-[0.2em] opacity-50"
          style={{ color: textColor }}
        >
          About
        </p>
        <p className="text-[10px] leading-relaxed opacity-75" style={{ color: textColor }}>
          데이터를 기반으로 사용자 경험을 설계하고,
          <br />
          감성적·정서적 연결까지 아우르는 연구자예요.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px opacity-[0.08]" style={{ backgroundColor: textColor }} />

      {/* Projects mini */}
      <div className="px-5 py-4" style={{ backgroundColor: bgColor }}>
        <p
          className="mb-3 text-[8px] uppercase tracking-[0.2em] opacity-50"
          style={{ color: textColor }}
        >
          Projects
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { title: "햅틱 시스템 UX", org: "한국표준과학연구원" },
            { title: "HMI 체크리스트", org: "현대모비스" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-2.5"
              style={{
                backgroundColor: cardColor,
                borderRadius: Math.max(4, r - 6),
                border: `1px solid ${textColor}12`,
              }}
            >
              <div
                className="mb-2 h-10 w-full"
                style={{
                  backgroundColor: accentColor,
                  borderRadius: Math.max(2, r - 10),
                  opacity: 0.35,
                }}
              />
              <p className="text-[8px] font-medium" style={{ color: accentColor }}>
                {item.org}
              </p>
              <p
                className="mt-0.5 text-[9px] font-medium leading-tight"
                style={{ color: textColor }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact mini */}
      <div className="px-5 py-4" style={{ backgroundColor: mainColor }}>
        <p
          className="mb-1 text-[8px] uppercase tracking-[0.2em] opacity-50"
          style={{ color: bgColor }}
        >
          Contact
        </p>
        <p className="text-sm font-light" style={{ color: bgColor }}>
          Project with Junseong Park
        </p>
        <p className="mt-0.5 text-[10px] opacity-60" style={{ color: bgColor }}>
          함께 새로운 UX를 만들고 싶다면 간단히 남겨주세요.
        </p>
      </div>
    </div>
  );
}

export default function BrandKitPage() {
  const [config, setConfig] = useState<BrandConfig>(DEFAULT_CONFIG);
  const [lastSaved, setLastSaved] = useState<BrandConfig>(DEFAULT_CONFIG);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as BrandConfig;
        setConfig(parsed);
        setLastSaved(parsed);
      }
    } catch {}
  }, []);

  const update = (key: keyof BrandConfig, value: string | number) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    localStorage.setItem(LS_KEY, JSON.stringify(config));
    setLastSaved(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
  };

  const handleCopy = () => {
    const vars = [
      `--color-bg: ${config.bgColor};`,
      `--color-card: ${config.cardColor};`,
      `--color-text: ${config.textColor};`,
      `--color-main: ${config.mainColor};`,
      `--color-accent: ${config.accentColor};`,
      `--border-radius: ${config.borderRadius}px;`,
    ].join("\n  ");
    navigator.clipboard.writeText(`:root {\n  ${vars}\n}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDirty = JSON.stringify(config) !== JSON.stringify(lastSaved);

  return (
    <main className="min-h-screen bg-[#e8e3da] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1a1a1a]/10 bg-[#e8e3da]/90 px-6 py-4 backdrop-blur-sm sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#1a1a1a]/50 transition-colors hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="h-4 w-4" />
            포트폴리오로 돌아가기
          </Link>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#1a1a1a]/40">
            <Palette className="h-3.5 w-3.5" />
            Brand Kit
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16">
        {/* Page heading */}
        <div className="mb-12">
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">Brand Kit</h1>
          <p className="mt-2 text-base text-[#1a1a1a]/55">
            포트폴리오의 컬러와 스타일을 직접 실험해보세요.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          {/* ── Controls ── */}
          <div className="flex flex-col gap-10">
            {/* Presets */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                Mood Presets
              </h2>
              <div className="grid grid-cols-2 gap-2.5">
                {PRESETS.map((preset) => {
                  const isActive =
                    JSON.stringify(config) === JSON.stringify(preset.config);
                  return (
                    <button
                      key={preset.name}
                      onClick={() => setConfig(preset.config)}
                      className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${
                        isActive
                          ? "border-[#1a1a1a]/60 bg-[#1a1a1a] text-[#e8e3da]"
                          : "border-[#1a1a1a]/12 bg-white/40 hover:border-[#1a1a1a]/30 hover:bg-white/70"
                      }`}
                    >
                      {/* Swatch */}
                      <div className="flex shrink-0 flex-col gap-0.5">
                        <div
                          className="h-3 w-5 rounded-t-[3px]"
                          style={{
                            backgroundColor: preset.config.bgColor,
                            border: "1px solid rgba(0,0,0,0.12)",
                          }}
                        />
                        <div
                          className="h-3 w-5 rounded-b-[3px]"
                          style={{ backgroundColor: preset.config.accentColor }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-medium leading-tight ${isActive ? "text-[#e8e3da]" : "text-[#1a1a1a]"}`}
                        >
                          {preset.name}
                        </p>
                        <p
                          className={`truncate text-[11px] leading-tight ${isActive ? "text-[#e8e3da]/55" : "text-[#1a1a1a]/45"}`}
                        >
                          {preset.tag}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Colors */}
            <section>
              <h2 className="mb-2 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                Colors
              </h2>
              <div className="divide-y divide-[#1a1a1a]/[0.06]">
                <ColorRow
                  label="배경색"
                  description="페이지 전체 배경"
                  colorKey="bgColor"
                  value={config.bgColor}
                  onChange={(v) => update("bgColor", v)}
                />
                <ColorRow
                  label="카드색"
                  description="카드 및 패널 배경"
                  colorKey="cardColor"
                  value={config.cardColor}
                  onChange={(v) => update("cardColor", v)}
                />
                <ColorRow
                  label="텍스트색"
                  description="본문·설명 텍스트"
                  colorKey="textColor"
                  value={config.textColor}
                  onChange={(v) => update("textColor", v)}
                />
                <ColorRow
                  label="메인 컬러"
                  description="헤딩, 버튼, 강조 요소"
                  colorKey="mainColor"
                  value={config.mainColor}
                  onChange={(v) => update("mainColor", v)}
                />
                <ColorRow
                  label="포인트 컬러"
                  description="링크, 태그, 하이라이트"
                  colorKey="accentColor"
                  value={config.accentColor}
                  onChange={(v) => update("accentColor", v)}
                />
              </div>
            </section>

            {/* Border radius */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                Card Radius
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1a1a1a]/70">모서리 곡률</span>
                  <span className="font-mono text-sm text-[#1a1a1a]/55">
                    {config.borderRadius}px
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  step={2}
                  value={config.borderRadius}
                  onChange={(e) => update("borderRadius", Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#1a1a1a]/15 accent-[#1a1a1a]"
                />
                <div className="flex justify-between text-[11px] text-[#1a1a1a]/35">
                  <span>0 — Sharp</span>
                  <span>40 — Pill</span>
                </div>
              </div>
            </section>

            {/* Actions */}
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                Actions
              </h2>
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={handleSave}
                  disabled={!isDirty && !saved}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                    saved
                      ? "bg-[#3a6b47] text-white"
                      : isDirty
                        ? "bg-[#1a1a1a] text-[#e8e3da] hover:bg-[#1a1a1a]/85"
                        : "cursor-not-allowed bg-[#1a1a1a]/10 text-[#1a1a1a]/35"
                  }`}
                >
                  <Save className="h-4 w-4" />
                  {saved ? "저장됨" : "저장하기"}
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 rounded-xl border border-[#1a1a1a]/18 bg-white/50 px-5 py-2.5 text-sm font-medium transition-all hover:border-[#1a1a1a]/35 hover:bg-white/80"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[#3a6b47]" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "복사됨!" : "CSS 복사"}
                </button>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 rounded-xl border border-[#1a1a1a]/10 px-5 py-2.5 text-sm text-[#1a1a1a]/50 transition-colors hover:text-[#1a1a1a]/80"
                >
                  <RotateCcw className="h-4 w-4" />
                  초기화
                </button>
              </div>

              {isDirty && (
                <p className="mt-3 text-xs text-[#1a1a1a]/40">
                  저장하지 않은 변경사항이 있어요.
                </p>
              )}
            </section>

            {/* CSS output preview */}
            <section>
              <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
                CSS Variables
              </h2>
              <pre className="overflow-x-auto rounded-xl border border-[#1a1a1a]/10 bg-[#1a1a1a]/[0.04] px-5 py-4 font-mono text-xs leading-relaxed text-[#1a1a1a]/65">
                {`:root {\n  --color-bg: ${config.bgColor};\n  --color-card: ${config.cardColor};\n  --color-text: ${config.textColor};\n  --color-main: ${config.mainColor};\n  --color-accent: ${config.accentColor};\n  --border-radius: ${config.borderRadius}px;\n}`}
              </pre>
            </section>
          </div>

          {/* ── Preview ── */}
          <div className="lg:sticky lg:top-24">
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/45">
              Live Preview
            </h2>
            <Preview config={config} />
            <p className="mt-3 text-center text-[11px] text-[#1a1a1a]/35">
              변경사항이 실시간으로 반영됩니다
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
