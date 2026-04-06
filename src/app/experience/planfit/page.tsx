"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const PROJECT_TABS = [
  {
    id: "paywall",
    index: "01",
    label: "AI 영상 페이월",
    metric: "+20% CVR",
  },
  {
    id: "monetai",
    index: "02",
    label: "Monetai 제휴",
    metric: "+75% CVR",
  },
] as const;

export default function PlanfitPage() {
  const [activeTab, setActiveTab] = useState<(typeof PROJECT_TABS)[number]["id"]>(
    "paywall"
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#experience"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            돌아가기
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20">
              PO / Solver
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              30+ 실험 · CVR 30%↑
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/50 border border-white/10">
              2025.06 — 2025.12
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Planfit</h1>
          <p className="text-xl text-white/50">
            AI 풀사이클 Solver로서 구독 전환율 개선을 담당
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full aspect-[1920/774] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src="/images/planfit-hero.png"
            alt="Planfit"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>

        {/* Context + Info */}
        <div className="grid md:grid-cols-[1fr_280px] gap-16 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">#</span> Context
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Planfit은 AI 기반 피트니스 앱입니다. 기존 조직에서 기획자,
                디자이너, 개발자 간 소통 과정에서 발생하는 작업 병목을 해결하기
                위해 AI를 적극 도입하는 &lsquo;Solver&rsquo;라는 새로운 직무가
                만들어졌고, 이 포지션에 자원하여 합류했습니다.
              </p>
              <p>
                Solver로서 기획부터 디자인, 프론트엔드 개발, QA까지 1인
                스프린트 사이클을 운영하며, 무료 유저의 유료 구독
                전환율(Conversion Rate) 개선을 담당했습니다. 4개월간 30건
                이상의 실험을 직접 설계하고 실행했습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">포지션</h3>
              <p className="text-sm text-white/80">PO / Solver (인턴)</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">기간</h3>
              <p className="text-sm text-white/80">2025.06 — 2025.12 (6개월)</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                핵심 미션
              </h3>
              <p className="text-sm text-white/80">
                무료 유저 → 유료 구독 전환율 향상
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                활용 스택
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Amplitude",
                  "Figma",
                  "Cursor",
                  "Claude",
                  "Veo",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Key Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30+", label: "실험 수행" },
              { value: "+20%", label: "신규 유저 결제 전환율" },
              { value: "+30%", label: "기존 유저 구독 전환율" },
              { value: "1인", label: "풀사이클 스프린트" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white glow-text">
                  {metric.value}
                </p>
                <p className="text-xs text-white/50 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Projects with Tabs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">#</span> Key Projects
          </h2>

          {/* Tab Switcher */}
          <div className="relative inline-flex items-center mb-6">
            <div
              role="tablist"
              aria-label="Projects"
              className="relative flex gap-1 p-1 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              {PROJECT_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const shouldHint = !hasInteracted && !isActive;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setHasInteracted(true);
                    }}
                    className="relative px-4 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 rounded-lg bg-accent/15 border border-accent/30"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    {/* 비활성 탭 지속 펄스 */}
                    {shouldHint && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border border-accent/40"
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                          scale: [1, 1.04, 1],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    <span className="relative flex items-center gap-2.5">
                      <span
                        className={`text-[10px] font-mono ${
                          isActive ? "text-accent" : "text-white/30"
                        }`}
                      >
                        {tab.index}
                      </span>
                      <span
                        className={`font-semibold ${
                          isActive ? "text-white" : "text-white/50"
                        }`}
                      >
                        {tab.label}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isActive ? "text-emerald-400" : "text-white/30"
                        }`}
                      >
                        {tab.metric}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 말풍선 힌트 — 첫 클릭 전까지만 */}
            <AnimatePresence>
              {!hasInteracted && (
                <motion.div
                  initial={{ opacity: 0, x: 8 }}
                  animate={{
                    opacity: 1,
                    x: [0, -6, 0],
                  }}
                  exit={{ opacity: 0, x: 8, transition: { duration: 0.2 } }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.6 },
                    x: {
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                  className="ml-3 hidden sm:flex items-center gap-2 pointer-events-none"
                >
                  {/* 화살표 (왼쪽 탭을 가리킴) */}
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M19 7 L4 7 M10 2 L4 7 L10 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* 말풍선 */}
                  <div className="relative px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-sm">
                    <p className="text-xs font-medium text-accent whitespace-nowrap">
                      클릭해서 전환 가능
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
          {activeTab === "paywall" && (
          <motion.div
            key="paywall"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            {/* 시즌 컬러 액센트 */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 85% 0%, #ef4444 0%, transparent 45%), radial-gradient(circle at 15% 100%, #10b981 0%, transparent 45%)",
              }}
            />

            {/* HERO: 성과 중심 편집 레이아웃 */}
            <div className="relative p-6 md:p-10 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  PROJECT 01
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  ——
                </span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  AI Video Paywall · New User
                </span>
              </div>

              <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-end">
                {/* 좌측: 타이틀 + 서브카피 */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                    뻔한 할인을,
                    <br />
                    <span className="bg-gradient-to-r from-rose-300 via-white to-emerald-300 bg-clip-text text-transparent">
                      특별한 시즌
                    </span>
                    으로.
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                    가입 7일 이하 신규 유저를 위한 크리스마스 한정 페이월.
                    Veo·Midjourney로 생성한 AI 시즌 영상으로 &lsquo;지금
                    결제해야 할 이유&rsquo;를 만들었습니다.
                  </p>
                </div>

                {/* 우측: 초대형 성과 넘버 */}
                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[96px] md:text-[140px] leading-none font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent tracking-tighter">
                      2×
                    </span>
                    <div className="pb-3">
                      <p className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                        GOAL EXCEEDED
                      </p>
                      <p className="text-[11px] text-white/50 mt-0.5">
                        목표 대비 2배 달성
                      </p>
                    </div>
                  </div>

                  {/* Before / After 비교 바 */}
                  <div className="mt-4 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                        <span>TARGET</span>
                        <span>+10%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-1/2 rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-accent mb-1">
                        <span>ACTUAL</span>
                        <span className="text-white font-bold">+20%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-accent to-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BODY: 사고 과정 → 실행 → 임팩트 */}
            <div className="relative p-6 md:p-10 space-y-12">
              {/* ━━━━ THINKING: 왜 이 솔루션이었나 ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    01 — THINKING
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  할인율은 한 번도 건드리지 않고,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">
                    어떻게 전환율을 끌어올렸나?
                  </span>
                </h4>

                {/* Observation → Diagnosis → Hypothesis */}
                <div className="grid md:grid-cols-3 gap-5 md:gap-4">
                  {/* 01 관찰 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50">
                        1
                      </span>
                      <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                        관찰
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      할인권이 &lsquo;당연한 것&rsquo;이 되고 있었다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      무료 유저에게 할인권은 상시 노출되는 요소였습니다.
                      유저들도 이미 &lsquo;언제든 뜬다&rsquo;는 걸 인지한
                      상태였고, 구매 전환율은 서서히 떨어지고 있었습니다.
                    </p>
                  </div>

                  {/* 02 진단 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50">
                        2
                      </span>
                      <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                        진단
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      문제는 가격이 아니라{" "}
                      <span className="text-accent">&lsquo;특별함&rsquo;</span>
                      의 부재
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      &lsquo;늘 있는 할인&rsquo;은 혜택이 아니라 오히려
                      반감처럼 느껴집니다. 즉 할인권을 더 크게 띄우는 건 답이
                      아니었습니다. 필요한 건 &lsquo;지금 아니면 안 된다&rsquo;는
                      맥락이었습니다.
                    </p>
                  </div>

                  {/* 03 가설 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-[10px] font-mono text-accent">
                        3
                      </span>
                      <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
                        가설
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      시즌 맥락으로 &lsquo;특별함&rsquo;을 복원한다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      상시 할인을 시즈널하게 감싸면, 동일한 혜택이라도 유저는
                      다시 &lsquo;특별한 기회&rsquo;로 인식할 것이라고 봤습니다.
                      이를 검증하기 위한 첫 실험으로 크리스마스 한정 페이월을
                      설계했습니다.
                    </p>
                  </div>
                </div>

                {/* 핵심 인사이트 풀쿼트 */}
                <div className="mt-8 relative pl-6 md:pl-8">
                  <span className="absolute left-0 top-0 text-5xl leading-none text-accent/40 font-serif">
                    &ldquo;
                  </span>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                    같은 혜택이라도 <strong className="text-white not-italic">맥락</strong>이 바뀌면
                    유저가 느끼는 <strong className="text-white not-italic">가치</strong>는 달라진다.
                    <br className="hidden md:block" />
                    가격을 건드리지 않고, 인식을 건드리는 실험.
                  </p>
                </div>
              </section>

              {/* ━━━━ EXECUTION ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    02 — EXECUTION
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <div className="grid md:grid-cols-[minmax(0,380px)_1fr] gap-8 md:gap-12 items-start">
                  {/* 좌측: AS-IS / TO-BE 쇼케이스 */}
                  <div>
                    <p className="text-[11px] font-mono text-white/40 mb-4 tracking-wider">
                      AS-IS / TO-BE
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                  {/* AS-IS */}
                  <figure className="relative">
                    <div className="relative aspect-[9/19] rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03]">
                      <Image
                        src="/images/planfit/paywall-before.png"
                        alt="기존 정적 선물상자 페이월"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 320px"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono pointer-events-none">
                        AS-IS
                      </div>
                    </div>
                    <figcaption className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        AS-IS
                      </span>
                      <span className="text-xs text-white/60">
                        정적 선물상자 이미지
                      </span>
                    </figcaption>
                  </figure>

                  {/* TO-BE */}
                  <figure className="relative">
                    <div className="relative aspect-[9/19] rounded-[28px] overflow-hidden border border-accent/30 bg-white/[0.03] shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
                      <video
                        src="/images/planfit/Use_the_provided_202512031817_kfb4k.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <Image
                        src="/images/planfit/paywall-after.png"
                        alt="AI 시즌 영상 기반 크리스마스 페이월"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 320px"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono pointer-events-none">
                        TO-BE
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-white/80">
                          LIVE
                        </span>
                      </div>
                    </div>
                    <figcaption className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        TO-BE
                      </span>
                      <span className="text-xs text-white/60">
                        AI 시즌 영상
                      </span>
                    </figcaption>
                  </figure>
                    </div>
                  </div>

                  {/* 우측: 3-step 텍스트 */}
                  <div className="flex flex-col h-full">
                    <p className="text-[11px] font-mono text-white/40 mb-5 tracking-wider">
                      HOW IT WAS BUILT
                    </p>
                    <div className="flex flex-col flex-1 gap-5">
                      {[
                        {
                          n: "01",
                          tag: "FIGMA · CONCEPT",
                          title: "시즌 한정 컨셉 정의",
                          detail:
                            "&lsquo;지금 아니면 안 된다&rsquo;는 심리를 만들 첫 테스트베드로 크리스마스 한정 페이월을 선정. 카피·비주얼 톤·랜딩 구조까지 Figma에서 직접 설계했습니다.",
                        },
                        {
                          n: "02",
                          tag: "VEO · MIDJOURNEY",
                          title: "AI로 시즌 영상 직접 제작",
                          detail:
                            "Veo·Midjourney로 크리스마스 시즌 영상을 생성. 촬영·외주 없이 단기간에 여러 버전을 만들어 실험 속도를 빠르게 가져갔습니다.",
                        },
                        {
                          n: "03",
                          tag: "REACT NATIVE · A/B TEST",
                          title: "프론트 구현 & A/B 테스트",
                          detail:
                            "직접 프론트엔드로 구현 후 기존 정적 이미지 페이월과 A/B 테스트. 신규 유저 세그먼트에서 전환율 차이를 검증했습니다.",
                        },
                      ].map((item) => (
                        <div
                          key={item.n}
                          className="flex-1 flex gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.035] transition-colors"
                        >
                          <span className="text-3xl md:text-4xl font-bold font-mono text-accent/40 leading-none">
                            {item.n}
                          </span>
                          <div className="flex-1 flex flex-col justify-center">
                            <p className="text-[10px] font-mono text-accent/70 tracking-wider mb-1.5">
                              {item.tag}
                            </p>
                            <p className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                              {item.title}
                            </p>
                            <p
                              className="text-sm text-white/55 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item.detail }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ━━━━ IMPACT ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    03 — IMPACT
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-accent/10 via-white/[0.02] to-emerald-500/5 border border-accent/20">
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    A/B 테스트 결과 신규 유저 할인권 결제 전환율이{" "}
                    <span className="text-white font-bold">+20% 상승</span>,
                    목표였던 <span className="text-white/70">+10%</span>를
                    두 배로 초과 달성했습니다. &lsquo;가격이 아니라 맥락을
                    바꾼다&rsquo;는 가설이 검증되며, 이후 시즌별 페이월 운영의{" "}
                    <span className="text-white font-semibold">
                      사내 레퍼런스
                    </span>
                    로 정착했습니다.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
          )}

          {activeTab === "monetai" && (
          <motion.div
            key="monetai"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
          >
            {/* 시즌 컬러 액센트 */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 85% 0%, #8b5cf6 0%, transparent 45%), radial-gradient(circle at 15% 100%, #10b981 0%, transparent 45%)",
              }}
            />

            {/* HERO */}
            <div className="relative p-6 md:p-10 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  PROJECT 02
                </span>
                <span className="text-[10px] font-mono text-white/40">——</span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  AI Prediction · Free User
                </span>
              </div>

              <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-end">
                {/* 좌측 타이틀 */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                    기존 화면에 손대지 않고,
                    <br />
                    <span className="bg-gradient-to-r from-violet-300 via-white to-emerald-300 bg-clip-text text-transparent">
                      작동시킬 지점
                    </span>
                    을 찾다.
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                    기존 유저의 화면은 여러 실험을 자유롭게 적용하기 어려운
                    환경이었습니다. 화면에 개입하지 않고도 전환율에 영향을 줄
                    수 있는 지점을 찾기 위해 리서치를 진행했고, 구매 확률을
                    예측해 할인권 노출을 제어해주는 외부 AI 솔루션 Monetai를
                    발굴·제휴·도입해 해결했습니다.
                  </p>
                </div>

                {/* 우측 성과 넘버 */}
                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[96px] md:text-[140px] leading-none font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent tracking-tighter">
                      1.75
                      <span className="text-[48px] md:text-[72px] align-top text-white/60">
                        ×
                      </span>
                    </span>
                    <div className="pb-3">
                      <p className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                        STILL IN PRODUCTION
                      </p>
                      <p className="text-[11px] text-white/50 mt-0.5">
                        지금까지도 운영 중
                      </p>
                    </div>
                  </div>

                  {/* 비교 바 */}
                  <div className="mt-4 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                        <span>BEFORE</span>
                        <span>주간 결제 전환율 4%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[40%] rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-accent mb-1">
                        <span>WITH MONETAI</span>
                        <span className="text-white font-bold">7% (+75%)</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-400 to-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="relative p-6 md:p-10 space-y-12">
              {/* ━━━━ THINKING ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    01 — THINKING
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  화면에 전혀 개입하지 않고,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">
                    어떻게 전환율에 영향을 줄 수 있을까?
                  </span>
                </h4>

                <div className="grid md:grid-cols-3 gap-5 md:gap-4">
                  {/* 01 관찰 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50">
                        1
                      </span>
                      <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                        관찰
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      기존 유저 화면은 실험이 제한되는 영역이었다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      가입 14일이 지나도 무료로 머무는 유저를 기존 유저로
                      정의했습니다. 이들은 이미 익숙해진 화면·플로우가 있어,
                      페이월과 UI에 다수의 실험을 자유롭게 적용하기 어려운
                      환경이었습니다.
                    </p>
                  </div>

                  {/* 02 진단 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50">
                        2
                      </span>
                      <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                        진단
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      해법은 화면이 아닌{" "}
                      <span className="text-accent">
                        다른 레이어
                      </span>
                      에 있다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      화면에 개입할 수 없다면, 화면을 바꾸지 않고도 전환율에
                      영향을 줄 수 있는 지점을 찾아야 했습니다. 화면 자체가
                      아닌, &lsquo;할인권이 노출되는 조건&rsquo;을 제어하는
                      레이어가 그 지점이라고 판단했습니다.
                    </p>
                  </div>

                  {/* 03 가설 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-[10px] font-mono text-accent">
                        3
                      </span>
                      <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
                        가설
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      노출 제어 레이어는 외부 솔루션으로 확보한다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      구매 확률 기반의 노출 제어는 사내 리소스만으로 구축하기
                      어려웠기에, 외부 솔루션까지 범위를 넓혀 리서치를
                      진행했습니다. 구매 확률이 낮은 유저에게만 할인권을
                      노출해주는{" "}
                      <span className="text-white">Monetai</span>를 발굴해
                      제휴·도입을 직접 주도했습니다.
                    </p>
                  </div>
                </div>

                <div className="mt-8 relative pl-6 md:pl-8">
                  <span className="absolute left-0 top-0 text-5xl leading-none text-accent/40 font-serif">
                    &ldquo;
                  </span>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                    기존 화면에 개입하지 않고도{" "}
                    <strong className="text-white not-italic">
                      작동할 수 있는 지점
                    </strong>
                    을 찾는 것.
                    <br className="hidden md:block" />
                    그 지점이 사내에 없다면,{" "}
                    <strong className="text-white not-italic">
                      외부 리소스
                    </strong>
                    와 연결해 확보한다.
                  </p>
                </div>
              </section>

              {/* ━━━━ EXECUTION ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    02 — EXECUTION
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <p className="text-[11px] font-mono text-white/40 mb-5 tracking-wider">
                  HOW IT WAS BUILT
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      n: "01",
                      tag: "USER DEFINITION",
                      title: "&lsquo;기존 유저&rsquo;를 정의",
                      detail:
                        "가입 후 14일이 지났음에도 무료로 사용하는 유저를 &lsquo;기존 유저&rsquo;로 정의. 익숙해진 화면을 함부로 바꿀 수 없다는 제약을 출발점으로 삼았습니다.",
                    },
                    {
                      n: "02",
                      tag: "RESEARCH",
                      title: "시야를 밖으로, Monetai 발굴",
                      detail:
                        "사내 해결이 막혀있던 문제를 외부 솔루션으로 풀기 위해 리서치. 구매 확률을 예측해 낮은 유저에게만 할인권을 노출해주는 Monetai를 찾아냈습니다.",
                    },
                    {
                      n: "03",
                      tag: "PARTNERSHIP · OWNERSHIP",
                      title: "협업·도입 주도",
                      detail:
                        "Monetai 측과 직접 커뮤니케이션하며 제휴를 성사. 내부에는 ROI 근거를 정리해 도입 의사결정을 이끌어냈습니다.",
                    },
                    {
                      n: "04",
                      tag: "LIVE · IN PRODUCTION",
                      title: "운영 & 지속 검증",
                      detail:
                        "Monetai가 선정한 세그먼트에만 할인권을 노출하는 구조로 실환경 적용. 지금까지도 플랜핏 프로덕션에서 운영되고 있습니다.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.035] transition-colors"
                    >
                      <span className="text-3xl md:text-4xl font-bold font-mono text-accent/40 leading-none">
                        {item.n}
                      </span>
                      <div className="flex-1">
                        <p className="text-[10px] font-mono text-accent/70 tracking-wider mb-1.5">
                          {item.tag}
                        </p>
                        <p className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                          {item.title}
                        </p>
                        <p
                          className="text-sm text-white/55 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.detail }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ━━━━ IMPACT ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    03 — IMPACT
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-accent/10 via-white/[0.02] to-emerald-500/5 border border-accent/20">
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    기존 유저 화면에 전혀 개입하지 않고 주간 결제 전환율을{" "}
                    <span className="text-white font-bold">1.75배(+75%)</span>{" "}
                    개선했습니다. 외부 AI 솔루션과의 제휴로 확보한 노출 제어
                    레이어는 일회성 실험에 그치지 않고,{" "}
                    <span className="text-white font-semibold">
                      지금까지도 플랜핏 프로덕션에서 운영
                    </span>
                    되고 있습니다.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
          )}
          </AnimatePresence>
        </motion.div>

        {/* How I Worked */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Core Strengths
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Full-stack 기획력",
                description:
                  "기획에 머무르지 않고 AI 영상 제작부터 프론트엔드 구현까지 직접 수행합니다. 기획-디자인-개발-QA 전 과정을 1인 스프린트로 운영한 경험이 있습니다.",
              },
              {
                title: "Data-Driven 의사결정",
                description:
                  "Amplitude 기반 유저 데이터 분석과 A/B 테스트를 통해, 모든 실험의 성과를 데이터로 검증했습니다.",
              },
              {
                title: "비즈니스 커뮤니케이션",
                description:
                  "외부 파트너사 C-레벨과 직접 협업한 경험이 있습니다. 인턴 포지션에서도 의사결정권자와 동등한 위치에서 소통하며 성과를 만들었습니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <h3 className="text-sm font-bold text-white/90 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom nav */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-between pt-8 border-t border-white/5"
        >
          <Link
            href="/#experience"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← 메인으로
          </Link>
          <Link
            href="/projects/drinkig"
            className="text-sm text-accent hover:text-indigo-400 transition-colors"
          >
            프로젝트: Drinkig →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
