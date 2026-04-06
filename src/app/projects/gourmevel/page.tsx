"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const images = {
  hero: "/images/gourmevel-hero.jpg",
};

export default function GourmevelPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#projects"
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
              1인 총괄 기획 · 운영
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              124만 뷰 · 1만 팔로워
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/50 border border-white/10">
              2022.05 — 현재 운영 중
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Gourmevel</h1>
          <p className="text-xl text-white/50 mb-6">
            고메블 — 미식 정보 기반 인스타그램 매거진
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/gourmevel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a
              href="https://blog.naver.com/gourmevel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/></svg>
              Blog
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src={images.hero}
            alt="Gourmevel 메인"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10">Gourmevel</span>
          </div>
        </motion.div>

        {/* Overview + Info */}
        <div className="grid md:grid-cols-[1fr_280px] gap-16 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">#</span> Overview
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                미식이라는 주제 하나로, 개인 계정이 아닌 &lsquo;매거진&rsquo;에
                가까운 채널을 0부터 키워보고 싶었습니다. 단순 맛집 기록이
                아니라 정보성·전문성을 갖춘 콘텐츠로 차별화를 만들겠다는
                방향으로 2022년 5월에 시작해, 지금까지 약 4년째 직접 운영하고
                있습니다.
              </p>
              <p>
                기획부터 촬영·편집·업로드, 채널 운영과 브랜드 커뮤니케이션까지
                전 과정을 1인으로 맡으며, 한 사람의 리소스로 굴릴 수 있는
                미디어의 한계를 계속 확장해왔습니다.
              </p>
              <p>
                유료 광고 집행 없이 오가닉 도달만으로 팔로워 1만 명을 넘겼고,
                브랜드·외부 업체와의 협업 캠페인은 50건 이상 진행했습니다.
                인스타그램에서 출발해 네이버 블로그, 유튜브 롱폼·숏폼으로
                채널을 확장하는 과정에서, 각 플랫폼의 알고리즘과 소비 맥락에
                맞춘 콘텐츠 전략을 다시 설계하며 성과를 이어왔습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">역할</h3>
              <p className="text-sm text-white/80">
                1인 기획 · 제작 · 편집 · 운영
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">기간</h3>
              <p className="text-sm text-white/80">2022.05 — 현재 운영 중</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">채널</h3>
              <div className="flex flex-wrap gap-2">
                {["Instagram", "네이버 블로그", "YouTube"].map((ch) => (
                  <span
                    key={ch}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                활용 툴
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Final Cut Pro",
                  "Figma",
                  "Photoshop",
                  "Canva",
                  "Vrew",
                  "Notion",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {tool}
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
              { value: "124만", label: "숏폼 최고 조회수" },
              { value: "1만+", label: "팔로워" },
              { value: "30만", label: "월 평균 방문" },
              { value: "50+", label: "브랜드 협업 건수" },
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

        {/* 대표 협업 사례 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Featured Collaboration
          </h2>
          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-white">캐치테이블</h3>
              <span className="px-2 py-0.5 text-xs font-mono rounded border border-accent/30 text-accent">
                총 6회 협업
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              국내 대표 레스토랑 예약 플랫폼 &lsquo;캐치테이블&rsquo;과 여섯
              차례에 걸쳐 공동 콘텐츠를 제작했습니다. 기획안 작성, 촬영, 편집은
              물론 브랜드 측과의 톤 조율과 최종 전달까지 전 과정을 단독으로
              담당했고, 일회성에 그치지 않고 반복 의뢰로 이어질 수 있었던
              배경에는 결과물만큼 과정 관리에 집중했던 점이 있었다고 생각합니다.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  metric: "2만~4만",
                  label: "콜라보 콘텐츠 평균 도달 수",
                },
                {
                  metric: "재협업",
                  label: "캐치테이블 측 재협업 요청",
                },
                {
                  metric: "↑",
                  label: "브랜드 노출 및 참여율 증가",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                >
                  <p className="text-lg font-bold text-accent mb-1">
                    {item.metric}
                  </p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategy */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Growth Strategy
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "알고리즘을 먼저 읽는다",
                description:
                  "콘텐츠를 만들기 전에 플랫폼 알고리즘부터 분석했습니다. 어떤 포맷이 노출에 유리한지, 어느 시간대에 도달이 터지는지, 어떤 후킹이 이탈을 줄이는지를 먼저 정리하고 제작에 들어갔습니다. 새 채널을 열 때도 동일한 순서를 밟아, 초기 세팅 비용을 최소화했습니다.",
              },
              {
                step: "02",
                title: "데이터로 포맷을 고정한다",
                description:
                  "썸네일, 첫 3초 후킹, 영상 길이, 자막 톤 등 변수를 하나씩 테스트하며 우리 채널에서 통하는 포맷을 정형화했습니다. 이후 제작은 그 공식 위에서 효율을 끌어올리는 방식으로 굴려, 감이 아닌 반복 가능한 성장 구조를 만들었습니다.",
              },
              {
                step: "03",
                title: "채널을 늘리되 각자의 언어로",
                description:
                  "인스타그램에서 확보한 팬덤을 블로그와 유튜브로 확장할 때, 같은 콘텐츠를 그대로 옮기지 않았습니다. 블로그는 정보 깊이, 유튜브 숏폼은 첫 컷 임팩트, 롱폼은 스토리텔링에 무게를 두는 식으로 플랫폼별 소비 맥락에 맞게 포맷과 메시지를 다시 짰습니다.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-3xl font-bold text-accent/30 font-mono">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Learned */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> What I Learned
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "데이터 기반 의사결정의 체화",
                description:
                  "조회수를 운이 아닌 변수로 다루게 됐습니다. 감이 아닌 숫자로 가설을 세우고 검증하는 습관이, 이후 다른 프로젝트에서 문제를 뾰족하게 정의하는 감각으로도 이어졌습니다.",
              },
              {
                title: "플랫폼 알고리즘에 대한 관점",
                description:
                  "플랫폼마다 다른 노출 로직과 유저 행동 패턴을 현장에서 체감으로 익혔습니다. 단순히 무엇이 뜨는지가 아니라, 왜 뜨는지를 역추적하며 이해하는 시야가 생겼습니다.",
              },
              {
                title: "오가닉 그로스의 본질",
                description:
                  "유료 광고 없이 0에서 1만 팔로워까지 성장시키는 과정에서, 유저가 남는 채널과 스쳐 지나가는 채널의 차이를 피부로 배웠습니다. 그로스는 결국 콘텐츠 자체의 설득력에서 온다는 관점이 이때 굳어졌습니다.",
              },
              {
                title: "외부 파트너십 운영",
                description:
                  "50건 이상의 브랜드 협업을 진행하며, 파트너의 목적·예산·일정을 내 기획과 맞물리게 정렬하는 법을 익혔습니다. 결과물보다 과정 관리가 더 큰 리스크라는 점을 여러 번 경험했습니다.",
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between pt-8 border-t border-white/5"
        >
          <Link
            href="/projects/drinkig"
            className="text-sm text-accent hover:text-indigo-400 transition-colors"
          >
            ← 이전: Drinkig
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            프로젝트 목록 →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
