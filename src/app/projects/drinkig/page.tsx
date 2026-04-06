"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const images = {
  hero: "/images/drinkig.png",
  screens: [
    "/images/drinkig-screen-1.png",
    "/images/drinkig-screen-2.png",
    "/images/drinkig-screen-3.png",
    "/images/drinkig-screen-4.png",
  ],
};

export default function DrinkigPage() {
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
              1인 기획 · 개발
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              2025 홍익인 창업페스티벌 2등
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/50 border border-white/10">
              2025.12 — 현재 운영 중
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Drinkig</h1>
          <p className="text-lg text-white/40">드링키지</p>
          <p className="text-xl text-white/50 mb-6">
            와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://drinkig.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              웹사이트
            </a>
            <a
              href="https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80-%EC%B7%A8%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%99%80%EC%9D%B8-%EC%B6%94%EC%B2%9C%EA%B3%BC-%EA%B8%B0%EB%A1%9D/id6741486172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src={images.hero}
            alt="드링키지 메인"
            width={1200}
            height={800}
            className="w-full h-auto"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>

        {/* Problem & Motivation */}
        <div className="grid md:grid-cols-[1fr_280px] gap-16 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">#</span> Problem
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                와인을 처음 접하는 사람에게 &ldquo;달다&rdquo;의 기준은 와인을
                좋아하는 사람의 &ldquo;달다&rdquo;와 전혀 다릅니다. 같은 단어를
                쓰지만 서로 다른 것을 이야기하고 있는 셈이죠. 이런 기준의 불일치가
                와인 입문의 장벽을 불필요하게 높이고 있었습니다.
              </p>
              <p>
                와인을 부담 없이, 자신의 언어로 탐색할 수 있는 경험을 만들고
                싶었습니다. 이 문제의식에 도달하기까지는 한 번의 실패와 긴
                회고가 있었습니다. 아래 Journey에서 그 과정을 풀어냈습니다.
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
                1인 기획 · 디자인 · 개발
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">기간</h3>
              <p className="text-sm text-white/80">
                2025.12 — 현재 운영 중
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                기술 스택
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "MySQL",
                  "Figma",
                  "Cursor",
                  "Claude",
                  "Antigravity",
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
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">성과</h3>
              <p className="text-sm text-white/80 mb-2">
                2025 홍익인 창업페스티벌 2등 수상
              </p>
              <a
                href="https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-indigo-400 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                기사 보기
              </a>
            </div>
          </motion.div>
        </div>

        {/* Screenshots */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-accent">#</span> Screens
          </h2>
          <p className="text-sm text-white/50 mb-8">
            아이디어 재정의부터 출시까지, 1인으로 만든 결과물입니다
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.screens.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]"
              >
                <Image
                  src={src}
                  alt={`드링키지 화면 ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-white/10">
                    Screen {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 0 → 1 Journey */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">#</span> 0 → 1 Journey
          </h2>

          <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            {/* 백그라운드 액센트 */}
            <div
              className="absolute inset-0 opacity-[0.14] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 85% 0%, #6366f1 0%, transparent 45%), radial-gradient(circle at 15% 100%, #a78bfa 0%, transparent 45%)",
              }}
            />

            {/* HERO: 실패 → 재출시 내러티브 */}
            <div className="relative p-6 md:p-10 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  REBUILD
                </span>
                <span className="text-[10px] font-mono text-white/40">——</span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  From Failed v1 to App Store Relaunch
                </span>
              </div>

              <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-end">
                {/* 좌측: 타이틀 + 서브카피 */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                    코드를 버리고,
                    <br />
                    <span className="bg-gradient-to-r from-[#a78bfa] via-white to-[#6366f1] bg-clip-text text-transparent">
                      문제를 다시
                    </span>
                    {" "}썼다.
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                    팀 프로젝트로 출시했던 v1이 초기 검증에 실패하고 팀이
                    해체된 뒤, 6개월의 공백과 회고를 거쳐 문제 정의부터 다시
                    쓰고 혼자 힘으로 App Store에 재출시하기까지의 과정입니다.
                  </p>
                </div>

                {/* 우측: 초대형 성과 넘버 */}
                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[96px] md:text-[140px] leading-none font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent tracking-tighter">
                      2<span className="text-[60px] md:text-[80px]">개월</span>
                    </span>
                    <div className="pb-3">
                      <p className="text-xs font-mono text-accent whitespace-nowrap">
                        SOLO FULL-CYCLE
                      </p>
                      <p className="text-[11px] text-white/50 mt-0.5">
                        기획 · 디자인 · 개발 · 출시
                      </p>
                    </div>
                  </div>

                  {/* Before / After 비교 */}
                  <div className="mt-4 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                        <span>v1 (팀 · Swift)</span>
                        <span>검증 실패 · 중단</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[8%] rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-accent mb-1">
                        <span>v2 (1인 · React Native)</span>
                        <span className="text-white font-bold">
                          App Store 재출시 · 운영 중
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-accent to-indigo-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="relative p-6 md:p-10 space-y-12">
              {/* ━━━━ 01 — FAILURE ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    01 — FAILURE
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-3 leading-snug">
                  출시는 했지만, 유저는 없었다
                </h4>
                <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-2xl">
                  팀 프로젝트로 Swift · UIKit 기반 iOS 앱을 App Store에
                  출시했습니다. 에디터가 선별한 와인 카드 + 유저 테이스팅
                  노트 기록을 핵심 기능으로 잡고, SNS 광고와 지인 유입을
                  돌렸지만 활성 유저는 확보되지 않았습니다. 2025.06
                  팀원들이 취업 준비에 들어가면서 프로젝트는 중단됐습니다.
                </p>

                {/* v1 스펙 요약 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { k: "STACK", v: "Swift · UIKit" },
                    { k: "TEAM", v: "10인 팀" },
                    { k: "DISTRIBUTION", v: "App Store 출시" },
                    { k: "STATUS", v: "검증 실패 · 중단" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="p-3 rounded-lg border border-white/5 bg-white/[0.02]"
                    >
                      <p className="text-[9px] font-mono text-white/40 tracking-wider mb-1">
                        {item.k}
                      </p>
                      <p className="text-xs text-white/80">{item.v}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ━━━━ 02 — DIAGNOSIS ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    02 — DIAGNOSIS
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  문제는 구현이 아니라,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">
                    타겟과 기능이 어긋나 있었다
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
                      타겟은 &lsquo;초보&rsquo;, 핵심 기능은 &lsquo;테이스팅 노트&rsquo;
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      앱이 내세운 타겟은 와인 입문자였지만, 앱의 중심
                      기능은 향과 맛을 직접 언어화해 기록하는 테이스팅
                      노트였습니다. 이건 본질적으로 숙련자의 도구입니다.
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
                      초보는{" "}
                      <span className="text-accent">
                        자기 취향 자체를 모른다
                      </span>
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      초보에게 &lsquo;달다&rsquo;의 기준은 애호가의
                      &lsquo;달다&rsquo;와 완전히 다릅니다. 기록할 언어가 없는
                      사람에게 기록 기능을 주는 건, 입문 장벽을 오히려
                      높이는 일이었습니다.
                    </p>
                  </div>

                  {/* 03 재정의 */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-[10px] font-mono text-accent">
                        3
                      </span>
                      <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
                        재정의
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white/90 mb-2 leading-snug">
                      기록이 아니라, 취향 발견이 먼저다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      제품의 진입점을 &lsquo;테이스팅 노트&rsquo;에서
                      &lsquo;취향 테스트&rsquo;로 옮겼습니다. 초보가
                      자기 언어 없이도 시작할 수 있어야, 그 다음이
                      열립니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* ━━━━ 03 — REBUILD ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    03 — REBUILD
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  Swift 코드를 전부 버리고,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">처음부터 다시 짰다</span>
                </h4>

                <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-8 items-stretch">
                  {/* AS-IS */}
                  <div className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-[10px] font-mono text-white/40 mb-3 tracking-wider">
                      v1 · AS-IS
                    </p>
                    <p className="text-sm font-semibold text-white/80 mb-3 leading-snug">
                      에디터 큐레이션 + 테이스팅 노트 기록
                    </p>
                    <ul className="space-y-2 text-xs text-white/55 leading-relaxed">
                      <li>· Swift · 팀 프로젝트</li>
                      <li>· 추천이 취향과 무관한 일방 큐레이션</li>
                      <li>· 핵심 기능이 타겟(초보)에게 너무 어려움</li>
                      <li>· 초기 검증 실패 · 프로젝트 중단</li>
                    </ul>
                  </div>

                  {/* TO-BE */}
                  <div className="relative p-6 rounded-xl border border-accent/30 bg-accent/[0.04]">
                    <p className="text-[10px] font-mono text-accent mb-3 tracking-wider">
                      v2 · TO-BE
                    </p>
                    <p className="text-sm font-semibold text-white/90 mb-3 leading-snug">
                      취향 테스트 기반 매칭 큐레이션
                    </p>
                    <ul className="space-y-2 text-xs text-white/65 leading-relaxed">
                      <li>· React Native · 1인 풀사이클</li>
                      <li>· 간단한 취향 테스트로 맛 선호도 파악</li>
                      <li>· 매칭 점수로 &lsquo;나와 맞는 정도&rsquo;를 가시화</li>
                      <li>· 마셔본 기록이 쌓일수록 정확도가 올라가는 구조</li>
                    </ul>
                  </div>
                </div>

                {/* 실행 플로우 */}
                <div className="mt-8 space-y-3">
                  {[
                    {
                      step: "01",
                      title: "Figma Make로 전체 플로우 프로토타이핑",
                      desc: "테이스팅 노트 기능 제거 후, 취향 테스트 → 매칭 점수 → 와인 상세 3단계 플로우를 Figma Make로 먼저 그림. 1인이 2개월 안에 배포 가능한 MVP 범위로 스코프를 고정.",
                      tools: ["Figma Make", "Figma"],
                    },
                    {
                      step: "02",
                      title: "React Native 전면 리라이트 · MySQL 스키마 재설계",
                      desc: "Swift/UIKit 코드베이스를 폐기하고 React Native로 iOS 빌드. Claude로 매칭 점수 로직과 MySQL 스키마를 설계하고, Cursor에서 일일 빌드-테스트-수정 루프로 개발 속도를 확보.",
                      tools: ["React Native", "MySQL", "Claude", "Cursor"],
                    },
                    {
                      step: "03",
                      title: "AI 도구로 디자이너 없이 비주얼 에셋 확보",
                      desc: "Antigravity로 UI/UX 피드백, Midjourney · Veo로 로딩 화면 영상, Nano Banana로 아이콘 · 일러스트를 생성. 1인 조직에서 부족한 디자인 리소스를 AI 파이프라인으로 메꿈.",
                      tools: ["Antigravity", "Midjourney", "Veo", "Nano Banana"],
                    },
                    {
                      step: "04",
                      title: "TestFlight 내부 배포 → App Store 재출시",
                      desc: "약 2개월 만에 App Store 재심사 · 재출시. 현재까지 1인으로 운영하며 유저 피드백 기반으로 매칭 로직과 UI를 개선 중.",
                      tools: ["TestFlight", "App Store Connect"],
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                    >
                      <span className="text-xs font-mono text-accent/70 pt-0.5">
                        {item.step}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white/90 mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-white/55 leading-relaxed mb-2">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-white/10 text-white/50"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 임팩트 */}
                <div className="mt-8 p-5 md:p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-[10px] font-mono text-white/40 tracking-wider mb-1">
                    OUTCOME
                  </p>
                  <p className="text-sm text-white/70">
                    1인 풀사이클로 약 2개월 만에 App Store 재출시 · 현재까지 직접 운영하며 개선 중
                  </p>
                </div>

                {/* 기술 마이그레이션 요약 */}
                <div className="mt-8 p-5 md:p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                  <p className="text-[10px] font-mono text-white/40 tracking-wider mb-4">
                    MIGRATION · v1 → v2
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
                    {[
                      {
                        label: "Platform",
                        from: "Swift · UIKit (iOS only)",
                        to: "React Native (iOS)",
                      },
                      {
                        label: "Team",
                        from: "10인 팀",
                        to: "1인 풀사이클",
                      },
                      {
                        label: "Design",
                        from: "Figma 수기 설계",
                        to: "Figma Make 프로토타입 + Antigravity 피드백",
                      },
                      {
                        label: "Backend",
                        from: "—",
                        to: "MySQL + 매칭 점수 로직 (Claude 설계)",
                      },
                      {
                        label: "Dev Loop",
                        from: "Xcode · 주 단위 릴리스",
                        to: "Cursor + Claude · 일일 빌드-테스트",
                      },
                      {
                        label: "Visual Assets",
                        from: "디자이너 리소스 의존",
                        to: "Midjourney · Veo · Nano Banana",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[80px_1fr] md:grid-cols-[90px_1fr] gap-2 items-baseline py-1.5 border-b border-white/5 last:border-b-0"
                      >
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                          {row.label}
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-white/40 line-through decoration-white/20">
                            {row.from}
                          </p>
                          <p className="text-white/85">→ {row.to}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Key Features
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "취향 기반 추천",
                description:
                  "유저의 맛 선호도를 분석하여 개인화된 와인을 추천하고, 각 와인이 나와 얼마나 잘 맞는지 점수로 보여줍니다.",
              },
              {
                title: "AI 스마트렌즈",
                description:
                  "카메라로 와인 라벨이나 레스토랑 메뉴판을 촬영하면 와인을 자동 인식하고, 내 취향과의 매칭 점수를 즉시 확인할 수 있습니다.",
              },
              {
                title: "와인 기록",
                description:
                  "마셔본 와인을 기록하고 취향 데이터를 쌓아갈수록 추천 정확도가 높아지는 구조로 설계했습니다.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <h3 className="text-sm font-bold text-white/90 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI 활용 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-accent">#</span> AI Tool Stack
          </h2>
          <p className="text-sm text-white/50 mb-8">
            각 AI 도구의 강점을 비교하며 용도에 맞게 조합하여 활용했습니다
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                tool: "Claude",
                usage: "코드 아키텍처 · 비즈니스 로직",
                description:
                  "전문성과 정확도가 필요한 영역에 활용했습니다. DB 설계, 복잡한 로직 구현, 코드 리뷰 등 개발의 핵심 의사결정에 함께했습니다.",
              },
              {
                tool: "Antigravity",
                usage: "UI/UX 설계 · 디자인 피드백",
                description:
                  "비주얼 감각이 필요한 작업에 활용했습니다. 화면 레이아웃, 컬러 시스템, 컴포넌트 구조 등 UI/UX 관련 부분에서 강점을 보였습니다.",
              },
              {
                tool: "Figma Make",
                usage: "UI/UX 프로토타이핑",
                description:
                  "전체 화면 흐름과 UI/UX 구조를 빠르게 프로토타이핑하는 데 활용했습니다. 아이디어를 시각화하는 속도를 크게 높여 기획과 개발 사이의 간극을 줄였습니다.",
              },
              {
                tool: "Midjourney · Veo",
                usage: "비주얼 에셋 · 로딩 영상",
                description:
                  "앱 내 로딩 화면 영상과 비주얼 콘텐츠를 생성형 AI로 제작했습니다. 디자이너 없이도 퀄리티 있는 비주얼을 확보할 수 있었습니다.",
              },
              {
                tool: "Nano Banana",
                usage: "아이콘 · 그래픽 에셋",
                description:
                  "앱에 필요한 아이콘과 일러스트 에셋을 AI로 생성하여, 일관된 비주얼 아이덴티티를 빠르게 구축했습니다.",
              },
            ].map((item) => (
              <div
                key={item.tool}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white/90">
                    {item.tool}
                  </h3>
                  <span className="text-xs text-accent/70">
                    {item.usage}
                  </span>
                </div>
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
            href="/#projects"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← 프로젝트 목록
          </Link>
          <Link
            href="/projects/gourmevel"
            className="text-sm text-accent hover:text-indigo-400 transition-colors"
          >
            다음: Gourmevel →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
