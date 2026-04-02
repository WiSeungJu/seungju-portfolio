"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function PlanfitPage() {
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
            AI 기반 풀사이클 Solver로서 구독 전환율 극대화를 주도
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src="/images/planfit-hero.jpg"
            alt="Planfit"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10">Planfit</span>
          </div>
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
                스프린트 사이클을 돌리며, 무료 유저의 유료 구독
                전환율(Conversion Rate) 향상을 위한 전 과정을 주도했습니다.
                4개월간 30건 이상의 실험을 직접 설계하고 실행했습니다.
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

        {/* Project 1 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Key Projects
          </h2>

          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                Project 01
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                신규 전환 +20%
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI 영상 기반 페이월 혁신
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              AI 툴을 활용해 리소스를 최소화하면서도 고퀄리티 페이월 콘텐츠를
              제작하여 신규 유저 결제 전환율을 높인 프로젝트입니다.
            </p>

            {/* Process */}
            <div className="grid sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  step: "기획",
                  detail: "크리스마스 시즌 프로모션 기획",
                },
                {
                  step: "AI 제작",
                  detail: "Google Veo로 페이월 영상 직접 제작",
                },
                {
                  step: "설계·개발",
                  detail: "Figma UI 설계 → 프론트엔드 직접 구현",
                },
                {
                  step: "검증",
                  detail: "기존 정적 이미지 대비 A/B 테스트 수행",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <p className="text-xs font-mono text-accent mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
              <p className="text-sm text-white/70">
                <span className="font-bold text-accent">Result:</span> 기존
                정적 이미지 페이월 대비 A/B 테스트 수행 결과, 전체 유저 대상
                결제 전환율 <span className="font-bold text-white">20% 상승</span> 확인
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                Project 02
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                구독 전환 +30%
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI 예측 솔루션 &lsquo;Monetai&rsquo; B2B 협업 주도
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              데이터 기반 문제 정의와 외부 AI 솔루션 도입을 통해 기존 무료
              유저의 구독 전환율을 끌어올린 프로젝트입니다.
            </p>

            {/* Process */}
            <div className="grid sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  step: "데이터 분석",
                  detail:
                    "Amplitude로 가입 14일 이상 무료 유저 이탈 패턴 파악",
                },
                {
                  step: "솔루션 도입",
                  detail:
                    "AI 구독 예측 솔루션 Monetai 발굴 및 C-레벨 직접 협업",
                },
                {
                  step: "ROI 설득",
                  detail: "데이터 기반 ROI 근거 제시로 도입 의사결정 주도",
                },
                {
                  step: "실험 실행",
                  detail:
                    "AI 예측 타겟팅 후 카피·레이아웃·가격 A/B 테스트 수행",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <p className="text-xs font-mono text-accent mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
              <p className="text-sm text-white/70">
                <span className="font-bold text-accent">Result:</span> 기존
                무료 유저의 유료 구독 전환율{" "}
                <span className="font-bold text-white">30% 상승</span> 및 팀
                내 외부 협업의 초석 마련
              </p>
            </div>
          </div>
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
                  "단순 기획에 그치지 않고 AI 영상 제작부터 프론트엔드 구현까지 직접 실행. 기획-디자인-개발-QA 전 과정을 1인 스프린트로 수행했습니다.",
              },
              {
                title: "Data-Driven 의사결정",
                description:
                  "Amplitude를 통한 정밀한 유저 데이터 분석과 A/B 테스트 기반의 성과 검증으로 모든 실험의 결과를 숫자로 증명했습니다.",
              },
              {
                title: "비즈니스 커뮤니케이션",
                description:
                  "외부 파트너사 C-레벨을 직접 설득하고 협업을 이끌어낸 경험. 인턴이지만 의사결정권자와 대등하게 소통하며 성과를 만들었습니다.",
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
