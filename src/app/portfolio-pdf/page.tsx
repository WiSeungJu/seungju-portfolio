"use client";

import Link from "next/link";

export default function PortfolioPdfPage() {
  return (
    <main className="pdf-root min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Print bar — screen only */}
      <div className="print:hidden sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[820px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← 포트폴리오
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] font-mono text-white/40">
              브라우저 인쇄 → PDF로 저장 (배경 그래픽 ON)
            </span>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-full bg-accent hover:bg-indigo-400 text-white text-xs font-semibold transition-all inline-flex items-center gap-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              PDF로 저장
            </button>
          </div>
        </div>
      </div>

      {/* ============ PAGE 1 — COVER ============ */}
      <section className="pdf-page pdf-cover">
        <div className="pdf-cover-bg" />
        <div className="pdf-cover-grid" />

        <div className="relative z-10 h-full flex flex-col justify-between p-[20mm]">
          {/* Top label */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-white/80 tracking-wider">
                PORTFOLIO · 2026
              </span>
            </div>
            <p className="text-[10px] font-mono text-white/40 tracking-wider">
              SEUNGJU WI
            </p>
          </div>

          {/* Center hero */}
          <div className="flex items-end gap-8">
            {/* Photo */}
            <div className="pdf-cover-photo shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="위승주"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-mono text-accent tracking-[0.25em] mb-3">
                PRODUCT OWNER · SERVICE PLANNER
              </p>
              <h1 className="text-[72px] font-extrabold tracking-tight leading-[0.92] text-white">
                위승주
                <span className="block text-[26px] font-light text-white/50 mt-2 tracking-tight">
                  Seungju Wi
                </span>
              </h1>
              <p className="text-[14px] text-white/70 mt-6 leading-relaxed max-w-[140mm]">
                기획부터 직접 구현까지, AI로 프로덕트를 만드는 기획자.
                <br />
                데이터로 가설을 세우고, AI 풀사이클로 빠르게 실행하며,
                실험으로 입증합니다.
              </p>
            </div>
          </div>

          {/* Bottom: stats teaser */}
          <div>
            <div className="grid grid-cols-3 gap-6 pb-6 border-b border-white/15">
              {[
                { v: "30+", l: "A/B Experiments" },
                { v: "+75%", l: "Weekly CVR Lift" },
                { v: "1.24M", l: "Top Organic Reach" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-[42px] font-bold leading-none text-white tracking-tight">
                    {s.v}
                  </p>
                  <p className="text-[10px] font-mono text-white/40 mt-2 tracking-wider">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-[10px] font-mono text-white/40 tracking-wider">
              <span>wesean1108@gmail.com · 010-3655-5641</span>
              <span>portfolio.gourmevel.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAGE 2 — ABOUT / PRINCIPLES ============ */}
      <section className="pdf-page pdf-light">
        <div className="p-[18mm] h-full flex flex-col">
          <PageHeader index="01" title="About" subtitle="소개 · 성과 · 일하는 방식" />

          {/* Bio */}
          <div className="grid grid-cols-[1fr_auto] gap-8 pb-6 border-b border-[#e5e5e5]">
            <div>
              <h2 className="text-[22px] font-bold text-[#0f0f0f] leading-snug mb-3">
                기술적 이해도와 데이터 분석 역량으로
                <br />
                <span className="text-accent">비즈니스 임팩트를 창출</span>하는
                서비스 기획자
              </h2>
              <p className="text-[11px] text-[#333] leading-[1.7] mb-2">
                직관보다는 철저한 데이터 분석을 통해 유저의 문제를 정의하고
                실질적인 지표 개선으로 연결합니다. 외부 솔루션 제휴를 직접
                주도해 <strong>주간 결제 전환율 +75%</strong>를 달성하는 등
                명확한 임팩트를 만들어왔습니다.
              </p>
              <p className="text-[11px] text-[#333] leading-[1.7]">
                컴퓨터공학 전공 지식을 살려 기획·디자인·개발 전 과정을 단독으로
                소화하는 1인 메이커 역량을 갖추고 있습니다. 와인 큐레이션 앱{" "}
                <strong>드링키지</strong>를 1인 풀사이클로 2개월 만에
                상용화했고, F&amp;B 매거진 <strong>고메블</strong>은 4년간
                직접 운영하며 <strong>최고 124만 뷰</strong>를 만들었습니다.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 text-[9.5px] font-mono text-[#666] text-right">
              <p>2001년생 · 남성</p>
              <p>홍익대학교 컴퓨터공학과 졸업</p>
              <p>싱가포르 5년 거주</p>
              <p>한국어 · English · 中文</p>
            </div>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-3 gap-4 my-6">
            {[
              {
                v: "30+",
                l: "A/B 실험 수행",
                d: "Planfit Solver 4개월간 직접 설계·실행",
              },
              {
                v: "+75%",
                l: "주간 결제 전환율",
                d: "Monetai 외부 솔루션 도입 주도",
              },
              {
                v: "124만",
                l: "최고 오가닉 뷰",
                d: "Gourmevel 4년 운영 · 광고 0원",
              },
            ].map((s) => (
              <div
                key={s.l}
                className="pdf-stat-card"
              >
                <p className="text-[44px] font-extrabold text-[#0f0f0f] leading-none tracking-tight">
                  {s.v}
                </p>
                <p className="text-[12px] font-bold text-[#0f0f0f] mt-2">
                  {s.l}
                </p>
                <p className="text-[9.5px] text-[#666] mt-1 leading-snug">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          {/* Working principles */}
          <h3 className="pdf-section-title mt-2">HOW I WORK · 일하는 방식</h3>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {[
              {
                k: "USER-FIRST",
                t: "데이터 기반 의사결정",
                d: "Amplitude 퍼널 분석과 30+건의 A/B 테스트로 직감보다 근거를 우선합니다.",
              },
              {
                k: "SPEED-DRIVEN",
                t: "빠른 실행, 빠른 검증",
                d: "AI 툴로 기획부터 개발·QA까지 풀사이클 직접 수행. 빠르게 만들고 시장에서 검증합니다.",
              },
              {
                k: "NO BOUNDARIES",
                t: "역할의 경계를 넘는 문제 해결",
                d: "PO로서 코드를 이해하고, 개발자로서 비즈니스를 함께 고민. 막히는 지점은 직무 무관 직접 해결.",
              },
              {
                k: "MULTILINGUAL",
                t: "다문화 환경에서의 소통",
                d: "싱가포르 5년 생활 기반 한국어·영어·중국어 트리링구얼 커뮤니케이션.",
              },
            ].map((p) => (
              <div key={p.k} className="pdf-principle">
                <p className="pdf-kw">{p.k}</p>
                <p className="text-[12px] font-bold text-[#0f0f0f] mb-1 mt-1">
                  {p.t}
                </p>
                <p className="text-[10px] text-[#444] leading-[1.55]">{p.d}</p>
              </div>
            ))}
          </div>

          <PageFooter page="02" total="06" />
        </div>
      </section>

      {/* ============ PAGE 3 — EXPERIENCE: PLANFIT ============ */}
      <section className="pdf-page pdf-light">
        <div className="p-[18mm] h-full flex flex-col">
          <PageHeader index="02" title="Experience" subtitle="(주)플랜핏 · Product Owner Intern · Solver" />

          {/* Title block */}
          <div className="flex items-baseline justify-between gap-4 pb-3 border-b-[2px] border-[#0f0f0f]">
            <div>
              <h2 className="text-[28px] font-extrabold text-[#0f0f0f] leading-none tracking-tight">
                Planfit
              </h2>
              <p className="text-[11px] text-[#666] mt-1.5">
                AI 풀사이클 Solver로서 구독 전환율 개선 담당
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono text-accent">
                2025.06 — 2025.12
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-0.5">
                7개월 · Solver 4개월
              </p>
            </div>
          </div>

          {/* Problem */}
          <div className="mt-4">
            <p className="pdf-tag">PROBLEM</p>
            <p className="text-[11px] text-[#222] leading-[1.6] mt-1">
              무료 유저의 유료 구독 전환율을 높여야 했지만, 신규/기존 유저가
              각기 다른 제약을 가지고 있었습니다. 특히{" "}
              <strong>기존 유저 화면은 자유로운 실험이 어려운 환경</strong>이라
              화면에 손대지 않고도 작동할 수 있는 새로운 지점을 찾아야 했습니다.
            </p>
          </div>

          {/* Approach */}
          <div className="mt-4">
            <p className="pdf-tag">APPROACH</p>
            <ul className="pdf-ul mt-1">
              <li>
                <strong>맥락 재정의 전략</strong> — 가격이 아니라 &lsquo;맥락&rsquo;을
                바꾸는 방향으로 신규 유저 페이월 재설계
              </li>
              <li>
                <strong>AI 영상 페이월 직접 제작</strong> — Veo·Midjourney로
                크리스마스 시즌 애니메이션 페이월 1인 제작, 외주 0원
              </li>
              <li>
                <strong>외부 AI 솔루션 발굴·도입</strong> — 구매확률 예측 기반
                노출 제어 솔루션 Monetai를 직접 리서치, CTO·개발자·디자이너 1:3
                미팅 단독 리드
              </li>
              <li>
                <strong>30+건 A/B 실험 운영</strong> — Amplitude 퍼널 분석
                기반으로 가설→설계→실행→검증 사이클 1인 풀사이클 수행
              </li>
            </ul>
          </div>

          {/* Result — big metric cards */}
          <div className="mt-5">
            <p className="pdf-tag">RESULT</p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="pdf-result-card pdf-result-primary">
                <p className="text-[10px] font-mono text-white/60 tracking-wider">
                  KEY PROJECT 01
                </p>
                <p className="text-[56px] font-extrabold text-white leading-none tracking-tight mt-2">
                  +75%
                </p>
                <p className="text-[11px] font-bold text-emerald-300 mt-1">
                  주간 결제 전환율 (CVR)
                </p>
                <p className="text-[10px] text-white/70 mt-2 leading-snug">
                  Monetai 외부 솔루션 도입·운영. 현재까지 프로덕션 운영 중.
                </p>
              </div>
              <div className="pdf-result-card pdf-result-secondary">
                <p className="text-[10px] font-mono text-[#666] tracking-wider">
                  KEY PROJECT 02
                </p>
                <p className="text-[56px] font-extrabold text-[#0f0f0f] leading-none tracking-tight mt-2">
                  +20%
                </p>
                <p className="text-[11px] font-bold text-accent mt-1">
                  신규 유저 결제 전환율
                </p>
                <p className="text-[10px] text-[#444] mt-2 leading-snug">
                  AI 영상 시즌 페이월. 목표 +10% 대비 2배 초과 달성.
                </p>
              </div>
            </div>
          </div>

          {/* Learning */}
          <div className="mt-5">
            <p className="pdf-tag">LEARNING</p>
            <p className="text-[10.5px] text-[#222] leading-[1.6] mt-1 italic">
              &ldquo;같은 혜택이라도 맥락이 바뀌면 유저가 느끼는 가치가
              달라진다. 화면에 개입할 수 없다면, 화면이 아닌 작동 가능한 지점을
              찾고, 사내에 그 지점이 없다면 외부 리소스로 확보한다.&rdquo;
            </p>
          </div>

          {/* Stack */}
          <div className="mt-auto pt-4 border-t border-[#e5e5e5]">
            <p className="pdf-tag mb-1.5">STACK</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Amplitude",
                "Figma",
                "Cursor",
                "Claude",
                "Veo",
                "Midjourney",
                "Monetai",
                "MySQL",
              ].map((t) => (
                <span key={t} className="pdf-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <PageFooter page="03" total="06" />
        </div>
      </section>

      {/* ============ PAGE 4 — PROJECT: DRINKIG ============ */}
      <section className="pdf-page pdf-light">
        <div className="p-[18mm] h-full flex flex-col">
          <PageHeader index="03" title="Project" subtitle="Drinkig 드링키지 · 1인 풀사이클" />

          <div className="flex items-baseline justify-between gap-4 pb-3 border-b-[2px] border-[#0f0f0f]">
            <div>
              <h2 className="text-[28px] font-extrabold text-[#0f0f0f] leading-none tracking-tight">
                Drinkig
              </h2>
              <p className="text-[11px] text-[#666] mt-1.5">
                와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono text-accent">2025.12 — 현재</p>
              <p className="text-[9px] font-mono text-[#666] mt-0.5">
                App Store 운영 중
              </p>
            </div>
          </div>

          {/* PROBLEM */}
          <div className="mt-4">
            <p className="pdf-tag">PROBLEM</p>
            <p className="text-[10.5px] text-[#222] leading-[1.6] mt-1">
              10인 팀(개발 6·디자인 3·PM 1)이 만든 v1(Swift/UIKit)이 초기
              검증에 실패. 문제는 품질이 아니라{" "}
              <strong>
                타겟(와인 입문자)과 핵심 기능(테이스팅 노트)이 어긋난 것
              </strong>
              이었습니다. 초보는 자신의 취향 자체를 모르는데 기록을 강요하는
              구조였습니다.
            </p>
          </div>

          {/* APPROACH */}
          <div className="mt-3">
            <p className="pdf-tag">APPROACH</p>
            <ul className="pdf-ul mt-1">
              <li>
                Swift 코드 전량 폐기, 진입점을 &lsquo;테이스팅 노트&rsquo; →
                <strong> &lsquo;취향 테스트&rsquo;</strong>로 재정의
              </li>
              <li>
                Figma Make로 취향 테스트→매칭 점수→상세 3단계 플로우
                프로토타이핑 후 MVP 범위 확정
              </li>
              <li>
                React Native로 전면 리라이트, Claude·Cursor로 매칭 로직 ·
                MySQL 스키마 설계·구현
              </li>
              <li>
                AI 도구 분업: Claude(DB·로직), Antigravity(UI/UX),
                Midjourney·Veo·Nano Banana(비주얼)
              </li>
              <li>
                TestFlight 내부 배포 → App Store 재출시,{" "}
                <strong>1인 풀사이클 약 2개월 소요</strong>
              </li>
            </ul>
          </div>

          {/* RESULT strip */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="pdf-mini-stat">
              <p className="text-[26px] font-extrabold text-[#0f0f0f] leading-none">
                2개월
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                1인 풀사이클 재출시
              </p>
            </div>
            <div className="pdf-mini-stat">
              <p className="text-[26px] font-extrabold text-[#0f0f0f] leading-none">
                2등
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                2025 홍익대 창업페스티벌
              </p>
            </div>
            <div className="pdf-mini-stat">
              <p className="text-[26px] font-extrabold text-[#0f0f0f] leading-none">
                LIVE
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                App Store 운영 중
              </p>
            </div>
          </div>

          {/* LEARNING */}
          <div className="mt-4">
            <p className="pdf-tag">LEARNING</p>
            <p className="text-[10.5px] text-[#222] leading-[1.6] mt-1 italic">
              &ldquo;코드를 버리는 것은 쉽지만, 문제를 다시 쓰는 것이 어렵다.
              제약된 환경에서는 각 AI 도구의 강점을 정확히 파악하고 용도에
              맞게 조합하는 것이 핵심이다.&rdquo;
            </p>
          </div>

          {/* SCREENS — horizontal showcase at bottom */}
          <div className="mt-4">
            <p className="pdf-tag mb-2">SCREENS</p>
            <div className="grid grid-cols-4 gap-2.5">
              {[1, 2, 3, 4].map((n) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={n}
                  src={`/images/drinkig-screen-${n}.png`}
                  alt={`Drinkig 스크린 ${n}`}
                  className="pdf-screen"
                />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3 border-t border-[#e5e5e5]">
            <p className="pdf-tag mb-1.5">STACK</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "React Native",
                "MySQL",
                "Claude",
                "Cursor",
                "Figma Make",
                "Antigravity",
                "Midjourney",
                "Veo",
                "Nano Banana",
              ].map((t) => (
                <span key={t} className="pdf-chip">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[9px] font-mono text-[#888] mt-2">
              drinkig.com · App Store
            </p>
          </div>

          <PageFooter page="04" total="06" />
        </div>
      </section>

      {/* ============ PAGE 5 — PROJECT: GOURMEVEL ============ */}
      <section className="pdf-page pdf-light">
        <div className="p-[18mm] h-full flex flex-col">
          <PageHeader index="04" title="Project" subtitle="Gourmevel 고메블 · 1인 총괄 운영 4년+" />

          <div className="flex items-baseline justify-between gap-4 pb-3 border-b-[2px] border-[#0f0f0f]">
            <div>
              <h2 className="text-[28px] font-extrabold text-[#0f0f0f] leading-none tracking-tight">
                Gourmevel
              </h2>
              <p className="text-[11px] text-[#666] mt-1.5">
                미식 정보 기반 인스타그램 매거진 · F&amp;B 숏폼 콘텐츠
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono text-accent">2022.05 — 현재</p>
              <p className="text-[9px] font-mono text-[#666] mt-0.5">
                4년+ 1인 운영
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="pdf-tag">PROBLEM</p>
            <p className="text-[10.5px] text-[#222] leading-[1.6] mt-1">
              군 복무 중 출시한 채널이 초기 3개월 팔로워 200명대에서 정체.
              재촬영이 불가능한 제약 속에서, 콘텐츠가{" "}
              <strong>운영자 만족 중심으로 설계되어 독자의 소비 이유가
              없었습니다</strong>.
            </p>
          </div>

          <div className="mt-3">
            <p className="pdf-tag">APPROACH</p>
            <ul className="pdf-ul mt-1">
              <li>
                <strong>관점의 재정의</strong> — AS-IS(공간 감상 리뷰) → TO-BE
                (셰프 취재 기반 식문화 매거진)로 포맷 전환
              </li>
              <li>
                셰프 직접 DM 인터뷰 요청, 공간 철학·메뉴 뒷이야기를 취재
                콘텐츠화
              </li>
              <li>
                Insights·도달 데이터 주기 분석으로 이탈 지점·트렌드 전환 신호
                포착
              </li>
              <li>
                카드뉴스 → 숏폼 전환기에 Final Cut Pro·후킹 기법 신속 학습,
                <strong> 3개월 만에 팔로워 4,000 → 8,000 (2배)</strong>
              </li>
              <li>
                광고 0원 오가닉 도달, 캐치테이블 등{" "}
                <strong>50+ 브랜드 협업</strong> 진행
              </li>
            </ul>
          </div>

          {/* Big result card */}
          <div className="grid grid-cols-4 gap-3 mt-5">
            <div className="pdf-result-card pdf-result-primary col-span-2">
              <p className="text-[10px] font-mono text-white/60 tracking-wider">
                MAX REACH
              </p>
              <p className="text-[64px] font-extrabold text-white leading-none tracking-tight mt-2">
                124만
              </p>
              <p className="text-[11px] font-bold text-emerald-300 mt-1">
                숏폼 단일 콘텐츠 최고 조회수
              </p>
              <p className="text-[10px] text-white/70 mt-2 leading-snug">
                유료 광고 0원 · 오가닉 도달 only
              </p>
            </div>
            <div className="pdf-mini-stat justify-center">
              <p className="text-[24px] font-extrabold text-[#0f0f0f] leading-none">
                10K+
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                팔로워 (200 → 1만, 50배)
              </p>
            </div>
            <div className="pdf-mini-stat justify-center">
              <p className="text-[24px] font-extrabold text-[#0f0f0f] leading-none">
                30만
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                숏폼 평균 조회수
              </p>
            </div>
            <div className="pdf-mini-stat justify-center col-span-2">
              <p className="text-[24px] font-extrabold text-[#0f0f0f] leading-none">
                50+ 협업
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                캐치테이블 6회 등 · 재협업 다수
              </p>
            </div>
            <div className="pdf-mini-stat justify-center col-span-2">
              <p className="text-[24px] font-extrabold text-[#0f0f0f] leading-none">
                4년+
              </p>
              <p className="text-[9px] font-mono text-[#666] mt-1.5">
                지속 운영 (2022.05 — 현재)
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="pdf-tag">LEARNING</p>
            <p className="text-[10.5px] text-[#222] leading-[1.6] mt-1 italic">
              &ldquo;제약은 더 이상 장애물이 아니라 관점을 바꾸는 트리거다.
              데이터로 원인을 찾고 필요한 도구를 가장 빠르게 학습해 움직이는
              실행력이 채널 성장을 견인했다.&rdquo;
            </p>
          </div>

          <div className="mt-auto pt-3 border-t border-[#e5e5e5]">
            <p className="pdf-tag mb-1.5">STACK</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Final Cut Pro",
                "Figma",
                "Photoshop",
                "Canva",
                "Vrew",
                "Notion",
                "Instagram Insights",
              ].map((t) => (
                <span key={t} className="pdf-chip">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[9px] font-mono text-[#888] mt-2">
              instagram.com/gourmevel · blog.naver.com/gourmevel
            </p>
          </div>

          <PageFooter page="05" total="06" />
        </div>
      </section>

      {/* ============ PAGE 6 — SKILLS / EDUCATION / CONTACT ============ */}
      <section className="pdf-page pdf-light">
        <div className="p-[18mm] h-full flex flex-col">
          <PageHeader index="05" title="Skills & Contact" subtitle="역량 · 학력 · 자격 · 연락처" />

          {/* Expertise tags */}
          <div className="mb-4">
            <p className="pdf-tag mb-2">EXPERTISE</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "서비스기획",
                "프로덕트관리",
                "프로젝트관리",
                "데이터분석",
                "UX기획",
                "UI/UX",
                "앱기획",
                "웹기획",
                "IT기획",
                "기능기획",
                "서비스운영",
                "Agile",
                "브랜딩",
                "SNS마케팅",
              ].map((t) => (
                <span key={t} className="pdf-tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Tools matrix */}
          <div className="mb-4">
            <p className="pdf-tag mb-2">TOOLS</p>
            <div className="space-y-1.5">
              {[
                {
                  cat: "Product",
                  items: "A/B Testing · 가설 검증 · 퍼널 분석 · PRD 작성",
                },
                { cat: "Analytics", items: "Amplitude · MySQL" },
                { cat: "Design", items: "Figma · Figma Make · Photoshop" },
                { cat: "Dev", items: "React Native · Next.js · TypeScript" },
                {
                  cat: "AI Tools",
                  items:
                    "Cursor · Claude · Antigravity · Veo · Midjourney · Nano Banana",
                },
                { cat: "Collab", items: "Notion · Slack · Linear" },
              ].map((row) => (
                <div key={row.cat} className="flex items-start gap-3">
                  <span className="pdf-cat-label">{row.cat}</span>
                  <span className="text-[10.5px] text-[#222] leading-[1.5] flex-1">
                    {row.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Two col: Education + Languages */}
          <div className="grid grid-cols-2 gap-5 mb-4">
            <div>
              <p className="pdf-tag mb-2">EDUCATION</p>
              <p className="text-[12px] font-bold text-[#0f0f0f]">
                홍익대학교
              </p>
              <p className="text-[10px] text-[#666] mt-0.5">
                컴퓨터공학 · 학사 (2020 — 2026 졸업)
              </p>
            </div>
            <div>
              <p className="pdf-tag mb-2">LANGUAGES</p>
              <ul className="text-[10.5px] text-[#222] leading-[1.6] space-y-0.5">
                <li>
                  <strong>한국어</strong> — 원어민
                </li>
                <li>
                  <strong>영어</strong> — 원어민 수준 (싱가포르 5년)
                </li>
                <li>
                  <strong>중국어</strong> — 업무상 소통 가능
                </li>
              </ul>
            </div>
          </div>

          {/* Awards + Certifications */}
          <div className="grid grid-cols-2 gap-5 mb-4">
            <div>
              <p className="pdf-tag mb-2">AWARDS</p>
              <ul className="pdf-ul">
                <li>
                  <strong>2025 홍익대학교 창업 페스티벌 2등</strong> · Drinkig
                  프로젝트 (시장성·기획력 부문)
                </li>
              </ul>
            </div>
            <div>
              <p className="pdf-tag mb-2">CERTIFICATIONS</p>
              <ul className="pdf-ul">
                <li>
                  <strong>ADsP</strong> · 데이터분석 준전문가
                </li>
                <li>
                  <strong>OPIc IH</strong> · Intermediate High
                </li>
                <li>
                  <strong>제2종 보통 운전면허</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-auto">
            <div className="pdf-contact-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-accent tracking-[0.2em] mb-2">
                    LET&apos;S TALK
                  </p>
                  <h3 className="text-[20px] font-extrabold text-[#0f0f0f] leading-tight">
                    무엇이든 함께 이야기할
                    <br />
                    준비가 되어 있습니다.
                  </h3>
                  <p className="text-[10px] text-[#666] mt-2">
                    프로덕트 이야기든, 가벼운 안부든 — 부담 없이 연락 주세요.
                  </p>
                </div>
                <div className="text-right text-[11px] text-[#0f0f0f] space-y-1.5 leading-tight">
                  <p className="font-bold">010-3655-5641</p>
                  <p className="font-mono">wesean1108@gmail.com</p>
                  <p className="font-mono text-[#666]">
                    portfolio.gourmevel.com
                  </p>
                  <p className="font-mono text-[#666]">github.com/WiSeungJu</p>
                  <p className="font-mono text-[#666]">
                    linkedin.com/in/wiseungju
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[9px] font-mono text-[#999] text-center mt-3 tracking-wider">
              © 2026 SEUNGJU WI · PORTFOLIO DOCUMENT
            </p>
          </div>

          <PageFooter page="06" total="06" />
        </div>
      </section>

      {/* Footer note — screen only */}
      <div className="print:hidden text-center text-[11px] text-white/30 py-8">
        ⌘+P → 옵션에서 &lsquo;배경 그래픽&rsquo; 체크 → PDF로 저장
      </div>

      <style jsx global>{`
        @page {
          size: A4;
          margin: 0;
        }
        .pdf-page {
          width: 210mm;
          height: 297mm;
          margin: 24px auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          page-break-after: always;
          break-after: page;
          position: relative;
          overflow: hidden;
        }
        .pdf-page:last-child {
          page-break-after: auto;
          break-after: auto;
        }
        .pdf-light {
          background: #ffffff;
          color: #0f0f0f;
        }
        .pdf-cover {
          background: #0a0a0a;
          color: #ffffff;
        }
        .pdf-cover-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 80% 10%,
              rgba(99, 102, 241, 0.35) 0%,
              transparent 45%
            ),
            radial-gradient(
              circle at 10% 90%,
              rgba(139, 92, 246, 0.25) 0%,
              transparent 50%
            );
        }
        .pdf-cover-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        }
        .pdf-cover-photo {
          width: 70mm;
          height: 90mm;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
        }
        .pdf-section-title {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #0f0f0f;
          font-weight: 700;
          padding-bottom: 4px;
          border-bottom: 1.5px solid #0f0f0f;
        }
        .pdf-tag {
          display: inline-block;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          color: #6366f1;
          font-weight: 700;
          text-transform: uppercase;
        }
        .pdf-ul {
          font-size: 10.5px;
          color: #222;
          line-height: 1.55;
          list-style: disc;
          padding-left: 16px;
        }
        .pdf-ul > li {
          margin-bottom: 3px;
          break-inside: avoid;
        }
        .pdf-ul > li::marker {
          color: #6366f1;
        }
        .pdf-stat-card {
          padding: 16px 18px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
        }
        .pdf-principle {
          padding: 12px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          background: #fafafa;
          break-inside: avoid;
        }
        .pdf-kw {
          display: inline-block;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8.5px;
          letter-spacing: 0.16em;
          color: #6366f1;
          font-weight: 700;
          padding: 2px 6px;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 3px;
        }
        .pdf-result-card {
          padding: 18px 20px;
          border-radius: 12px;
          break-inside: avoid;
        }
        .pdf-result-primary {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1f 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .pdf-result-primary::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.4) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        .pdf-result-secondary {
          background: linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%);
          border: 1px solid #e5e5e5;
        }
        .pdf-mini-stat {
          padding: 12px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          background: #fafafa;
          display: flex;
          flex-direction: column;
        }
        .pdf-chip {
          display: inline-block;
          font-size: 9.5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          color: #0f0f0f;
          background: #f0f0f3;
          border: 1px solid #d4d4d8;
          padding: 2px 7px;
          border-radius: 3px;
          font-weight: 500;
        }
        .pdf-tag-chip {
          display: inline-block;
          font-size: 10px;
          color: #0f0f0f;
          background: #f0f0f3;
          border: 1px solid #d4d4d8;
          padding: 3px 9px;
          border-radius: 4px;
          font-weight: 500;
        }
        .pdf-cat-label {
          display: inline-block;
          min-width: 72px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: #0f0f0f;
          font-weight: 700;
          text-transform: uppercase;
          padding-top: 2px;
          border-right: 2px solid #0f0f0f;
          padding-right: 8px;
          flex-shrink: 0;
        }
        .pdf-screen {
          width: 100%;
          height: auto;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          object-fit: cover;
        }
        .pdf-contact-card {
          padding: 22px 24px;
          background: linear-gradient(135deg, #f8f8fb 0%, #ffffff 100%);
          border: 1.5px solid #0f0f0f;
          border-radius: 12px;
        }
        .pdf-page-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 14px;
          border-bottom: 1px solid #e5e5e5;
        }
        .pdf-page-index {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #6366f1;
          font-weight: 700;
        }
        .pdf-page-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f0f0f;
          letter-spacing: 0.05em;
        }
        .pdf-page-subtitle {
          font-size: 9.5px;
          color: #666;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        .pdf-page-footer {
          position: absolute;
          bottom: 8mm;
          left: 18mm;
          right: 18mm;
          display: flex;
          justify-content: space-between;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          color: #999;
          letter-spacing: 0.15em;
        }
        @media print {
          html,
          body {
            background: #ffffff !important;
          }
          .pdf-root {
            background: #ffffff !important;
          }
          .pdf-page {
            margin: 0 !important;
            box-shadow: none !important;
            width: 210mm !important;
            height: 297mm !important;
          }
          /* Force colors to print */
          .pdf-cover,
          .pdf-cover-bg,
          .pdf-result-primary {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </main>
  );
}

function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="pdf-page-header">
      <div className="flex items-baseline gap-3">
        <span className="pdf-page-index">{index}</span>
        <span className="pdf-page-title">{title.toUpperCase()}</span>
      </div>
      <span className="pdf-page-subtitle">{subtitle}</span>
    </div>
  );
}

function PageFooter({ page, total }: { page: string; total: string }) {
  return (
    <div className="pdf-page-footer">
      <span>SEUNGJU WI · PORTFOLIO</span>
      <span>
        {page} / {total}
      </span>
    </div>
  );
}
