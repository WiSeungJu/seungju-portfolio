"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const images = {
  hero: "/images/gourmevel-hero.png",
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
          className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src={images.hero}
            alt="Gourmevel 메인"
            width={1920}
            height={1080}
            className="w-full h-auto"
            sizes="100vw"
          />
        </motion.div>

        {/* Overview + Info */}
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
                고메블은 군 복무 중 시작한 1인 미식 매거진 채널입니다. 2022년
                5월 론칭 이후 약 4년간 기획·촬영·편집·운영·브랜드
                커뮤니케이션을 단독으로 수행했으며, 유료 광고 집행 없이
                오가닉 도달만으로 팔로워 1만 명을 확보했습니다.
              </p>
              <p>
                초기 3개월은 팔로워 200명 선에서 정체했으나, 재촬영이 불가능한
                제약 환경 속에서 콘텐츠의 관점을 재정의하며 성장 곡선을
                회복했습니다. 이후에도 트렌드가 전환될 때마다 데이터 기반으로
                원인을 분석하고 필요한 도구를 빠르게 습득해 포맷을 교체하는
                방식으로 채널을 확장해 왔으며, 인스타그램을 기반으로 네이버
                블로그, 유튜브 롱폼·숏폼까지 포트폴리오를 넓혔고 캐치테이블을
                비롯한 50건 이상의 브랜드 협업을 수행했습니다.
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
              { value: "30만", label: "릴스 평균 조회수" },
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

        {/* Growth Story */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">#</span> Growth Story
          </h2>

          <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            {/* 백그라운드 액센트 */}
            <div
              className="absolute inset-0 opacity-[0.14] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 85% 0%, #1B341E 0%, transparent 45%), radial-gradient(circle at 15% 100%, #4ade80 0%, transparent 45%)",
              }}
            />

            {/* HERO: 성과 중심 편집 레이아웃 */}
            <div className="relative p-6 md:p-10 border-b border-white/5">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  TURNAROUND
                </span>
                <span className="text-[10px] font-mono text-white/40">——</span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  From 200 to 10,000+ Followers
                </span>
              </div>

              <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-end">
                {/* 좌측: 타이틀 + 서브카피 */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                    내 만족이 아닌,
                    <br />
                    <span className="bg-gradient-to-r from-[#86efac] via-white to-[#4ade80] bg-clip-text text-transparent">
                      독자의 언어
                    </span>
                    로.
                  </h3>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                    군 복무 중 제약된 리소스로 출발한 채널이 초기 3개월 만에
                    200명 선에서 정체했을 때, 재촬영이 아닌 &lsquo;관점의
                    재정의&rsquo;로 돌파구를 찾은 과정입니다.
                  </p>
                </div>

                {/* 우측: 초대형 성과 넘버 */}
                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[96px] md:text-[140px] leading-none font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent tracking-tighter">
                      50×
                    </span>
                    <div className="pb-3">
                      <p className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                        GROWTH MULTIPLIER
                      </p>
                      <p className="text-[11px] text-white/50 mt-0.5">
                        200 → 10,000+ 팔로워
                      </p>
                    </div>
                  </div>

                  {/* Before / After 비교 바 */}
                  <div className="mt-4 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-1">
                        <span>INITIAL (3개월)</span>
                        <span>200</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-[2%] rounded-full bg-white/30" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-accent mb-1">
                        <span>CURRENT</span>
                        <span className="text-white font-bold">10,000+</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-accent to-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="relative p-6 md:p-10 space-y-12">
              {/* ━━━━ 01 — DIAGNOSIS ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    01 — DIAGNOSIS
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  재촬영이 불가능한 환경에서,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">
                    무엇을 바꿔야 했는가?
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
                      업로드는 쌓이는데, 팔로워는 200명에서 멈췄다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      휴가 때 촬영해 둔 소스를 부대 안에서 편집·업로드하며 주
                      1회씩 운영했지만, 3개월간 팔로워 수는 200명 선에서
                      정체했습니다. 유입 대비 잔존율 역시 뚜렷하게 낮았습니다.
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
                      콘텐츠가{" "}
                      <span className="text-accent">&lsquo;내 만족&rsquo;</span>
                      을 중심으로 설계되어 있었다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      수치를 분석해보니 문제는 제작 품질이 아니라, 시청자가
                      얻어가는 정보의 부재였습니다. 감상형 포스트는 기록용으로는
                      충분했지만, 독자 입장에서 소비할 이유가 없는
                      콘텐츠였습니다.
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
                      제약은 바꿀 수 없지만, 관점은 바꿀 수 있다
                    </p>
                    <p className="text-xs text-white/55 leading-relaxed">
                      군 복무 중이라 재촬영은 불가능했습니다. 대신 기존 소재를
                      독자의 관점에서 다시 엮는 방식으로 문제를 재정의했고,
                      첫 돌파구로 셰프 취재 포맷을 설계했습니다.
                    </p>
                  </div>
                </div>

                {/* 핵심 인사이트 풀쿼트 */}
                <div className="mt-8 relative pl-6 md:pl-8">
                  <span className="absolute left-0 top-0 text-5xl leading-none text-accent/40 font-serif">
                    &ldquo;
                  </span>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                    문제가 &lsquo;<strong className="text-white not-italic">촬영</strong>&rsquo;이 아니라
                    &lsquo;<strong className="text-white not-italic">관점</strong>&rsquo;에 있다면,
                    <br className="hidden md:block" />
                    제약은 더 이상 장애물이 아니다.
                  </p>
                </div>
              </section>

              {/* ━━━━ 02 — EXECUTION ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    02 — EXECUTION
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  셰프에게 직접 DM을 보냈다
                </h4>

                <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-8 items-stretch">
                  {/* AS-IS */}
                  <div className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <p className="text-[10px] font-mono text-white/40 mb-3 tracking-wider">
                      AS-IS
                    </p>
                    <p className="text-sm font-semibold text-white/80 mb-3 leading-snug">
                      공간 감상 중심의 리뷰 포스트
                    </p>
                    <ul className="space-y-2 text-xs text-white/55 leading-relaxed">
                      <li>· 운영자 개인의 취향·감상 위주</li>
                      <li>· 기록형 · 독자 획득 이유 부재</li>
                      <li>· 3개월간 200명에서 정체</li>
                    </ul>
                  </div>

                  {/* TO-BE */}
                  <div className="relative p-6 rounded-xl border border-accent/30 bg-accent/[0.04]">
                    <p className="text-[10px] font-mono text-accent mb-3 tracking-wider">
                      TO-BE
                    </p>
                    <p className="text-sm font-semibold text-white/90 mb-3 leading-snug">
                      셰프 취재 기반 식문화 매거진
                    </p>
                    <ul className="space-y-2 text-xs text-white/65 leading-relaxed">
                      <li>· 레스토랑 셰프에게 직접 DM 발송</li>
                      <li>· 공간의 철학·메뉴 뒤의 이야기를 취재</li>
                      <li>· 단순 리뷰 → 식문화 트렌드 + 셰프의 시선</li>
                    </ul>
                  </div>
                </div>

                {/* 임팩트 */}
                <div className="mt-8 p-5 md:p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-mono text-white/40 tracking-wider mb-1">
                      IMPACT
                    </p>
                    <p className="text-sm text-white/70">
                      포맷 전환 직후 2주 만에 팔로워 +1,000명
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      +1K
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      / 2주
                    </span>
                  </div>
                </div>
              </section>

              {/* ━━━━ 03 — ADAPTATION ━━━━ */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono text-accent tracking-[0.15em]">
                    03 — ADAPTATION
                  </span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white/90 mb-8 leading-snug">
                  트렌드가 전환될 때마다,
                  <br className="hidden sm:block" />
                  <span className="text-white/50">
                    포맷을 먼저 움직였다
                  </span>
                </h4>

                <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-10 items-center">
                  {/* 좌측: 포맷 전환 플로우 */}
                  <div className="space-y-3">
                    {[
                      {
                        step: "01",
                        title: "이탈 구간 분석",
                        desc: "Insights·도달 데이터를 주기적으로 점검해 유저가 떠나는 지점을 특정",
                      },
                      {
                        step: "02",
                        title: "주류 포맷 이동 시점 감지",
                        desc: "카드뉴스 중심 소비에서 숏폼 중심으로 이동하는 초기 신호 포착",
                      },
                      {
                        step: "03",
                        title: "툴 학습 & 포맷 전환",
                        desc: "편집 툴과 후킹 기법을 빠르게 학습해 숏폼 포맷으로 콘텐츠 구조 재설계",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                      >
                        <span className="text-xs font-mono text-accent/70 pt-0.5">
                          {item.step}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white/90 mb-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-white/55 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 우측: 결과 하이라이트 */}
                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] font-mono text-white/40 tracking-wider mb-2">
                        FOLLOWER GROWTH
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-bold text-white">
                          2×
                        </span>
                        <span className="text-xs text-white/50">
                          4,000 → 8,000
                        </span>
                      </div>
                      <p className="text-[11px] text-white/40 mt-1">
                        3개월간 달성
                      </p>
                    </div>

                    <div className="h-px bg-white/5" />

                    <div>
                      <p className="text-[10px] font-mono text-white/40 tracking-wider mb-2">
                        REELS AVG. VIEWS
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
                          30만
                        </span>
                      </div>
                      <p className="text-[11px] text-white/40 mt-1">
                        숏폼 전환 후 평균 도달
                      </p>
                    </div>
                  </div>
                </div>

                {/* 클로징 풀쿼트 */}
                <div className="mt-10 relative pl-6 md:pl-8">
                  <span className="absolute left-0 top-0 text-5xl leading-none text-accent/40 font-serif">
                    &ldquo;
                  </span>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                    한 번의 전환으로 완성되는 채널은 없습니다.
                    <br className="hidden md:block" />
                    <strong className="text-white not-italic">데이터로 원인을 찾고, 필요한 도구를 가장 빠르게 학습해 움직이는 실행력</strong>
                    이 이 채널을 지속적으로 성장시킨 엔진이었습니다.
                  </p>
                </div>
              </section>
            </div>
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
                  "조회수와 팔로워 추이를 직관이 아닌 변수로 다루는 관점이 자리 잡았습니다. 가설을 수립하고 데이터로 검증하는 반복은 이후 다른 프로젝트에서도 문제를 정확하게 정의하는 기반이 되었습니다.",
              },
              {
                title: "트렌드 전환에 대한 적응 속도",
                description:
                  "카드뉴스에서 숏폼으로 주류 포맷이 이동할 때, 원인 분석을 통해 전환 시점을 판단하고 필요한 편집 도구와 후킹 기법을 신속히 습득해 포맷을 재구성했습니다. 트렌드 전환기에 먼저 움직일 수 있는 실행력과 학습 속도가 이 채널의 가장 큰 성장 동력이었습니다.",
              },
              {
                title: "오가닉 그로스의 본질",
                description:
                  "유료 광고 없이 0에서 1만 팔로워까지 성장시키는 과정을 통해, 유저가 잔류하는 채널과 이탈하는 채널의 차이를 구조적으로 이해했습니다. 그로스는 결국 콘텐츠 자체의 설득력에서 출발한다는 관점이 이 경험에서 확립되었습니다.",
              },
              {
                title: "외부 파트너십 운영",
                description:
                  "50건 이상의 브랜드 협업을 진행하며, 파트너의 목적·예산·일정을 기획 방향과 정렬하는 프로세스를 체득했습니다. 결과물 못지않게 과정 관리가 신뢰에 영향을 준다는 점을 반복적으로 확인했습니다.",
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
