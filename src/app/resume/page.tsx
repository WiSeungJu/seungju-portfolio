"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="resume-root min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Print button — screen only */}
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
              브라우저 인쇄 → PDF로 저장
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

      {/* A4 sheet */}
      <div className="resume-sheet mx-auto my-8 print:my-0 bg-white text-[#1a1a1a] shadow-2xl print:shadow-none">
        <div className="px-12 py-10">
          {/* Header */}
          <header className="pb-6 border-b-2 border-[#1a1a1a]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight leading-none mb-1">
                  위승주 <span className="text-xl font-normal text-[#555]">Seungju Wi</span>
                </h1>
                <p className="text-sm text-[#555] mt-2">
                  Product Owner · AI-Native Planner
                </p>
                <p className="text-xs text-[#333] mt-2 leading-relaxed">
                  기획부터 직접 구현까지, AI로 프로덕트를 만드는 기획자.
                  <br />
                  문제를 정의하고, 프로덕트로 구현하며, 데이터로 검증합니다.
                </p>
              </div>
              <div className="text-right text-[11px] text-[#333] space-y-0.5 shrink-0">
                <p>wesean1108@gmail.com</p>
                <p>github.com/WiSeungJu</p>
                <p>linkedin.com/in/wiseungju</p>
                <p>portfolio.gourmevel.com</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {[
                "홍익대 컴퓨터공학과",
                "싱가포르 5년",
                "한국어·English·中文",
              ].map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#ccc] text-[#444]"
                >
                  {b}
                </span>
              ))}
            </div>
          </header>

          {/* Summary metrics */}
          <section className="py-5 border-b border-[#e5e5e5]">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { v: "30+", l: "실험 수행", d: "Planfit Solver 4개월" },
                { v: "+75%", l: "결제 전환율 상승", d: "Planfit Monetai 도입" },
                { v: "124만", l: "오가닉 뷰", d: "Gourmevel 최고 조회수" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold text-[#1a1a1a] leading-none">
                    {s.v}
                  </p>
                  <p className="text-[11px] text-[#333] mt-1">{s.l}</p>
                  <p className="text-[9px] text-[#888] mt-0.5">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="py-5 border-b border-[#e5e5e5]">
            <h2 className="text-[11px] font-mono tracking-widest text-[#999] mb-3">
              EXPERIENCE
            </h2>
            <div>
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="text-base font-bold">
                  Planfit <span className="text-xs font-normal text-[#666]">· PO / Solver (인턴)</span>
                </h3>
                <span className="text-[10px] font-mono text-[#888]">
                  2025.06 — 2025.12 (재직 6개월 · Solver 4개월)
                </span>
              </div>
              <p className="text-[11px] text-[#555] mb-2">
                Solver — 기획·디자인·FE·QA를 1인 스프린트로 운영하며 병목을 해결하는 신설 직무
              </p>
              <ul className="text-[11px] text-[#333] space-y-1.5 leading-snug list-disc pl-4">
                <li>
                  재직 6개월 중 초기 2개월 온보딩 후 Solver 역할로 전환,
                  이후 4개월간 30건 이상의 A/B 실험을 직접 설계·실행해 무료→유료 전환율 개선
                </li>
                <li>
                  <strong>AI 영상 시즌 페이월:</strong> 정적 선물상자 이미지를
                  Veo·Midjourney 생성 시즌 영상으로 전환, 신규 유저 할인권 결제
                  전환율을 목표 +10% 대비 <strong>+20% 상승</strong>(목표 2배
                  초과 달성) · 사내 시즌 페이월 레퍼런스로 정착
                </li>
                <li>
                  <strong>Monetai 발굴·도입 주도:</strong> 기존 유저 화면은
                  개입이 어려운 환경이었고, 외부 솔루션까지 범위를 넓혀 직접
                  리서치한 끝에 구매 확률 예측 기반 노출 제어 솔루션
                  Monetai를 발굴. Monetai 측 CTO·개발자·디자이너와의 1:3
                  미팅을 단독으로 리드하며 도입·운영·지속 개선을 주도해
                  주간 결제 전환율을 <strong>+75% 상승</strong>, 도입 이후
                  지금까지 프로덕션 운영 중
                </li>
                <li>
                  Amplitude 퍼널 분석 기반 데이터 드리븐 의사결정 · Figma /
                  Cursor / Claude / Veo 풀사이클 활용
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="py-5 border-b border-[#e5e5e5]">
            <h2 className="text-[11px] font-mono tracking-widest text-[#999] mb-3">
              PROJECTS
            </h2>

            <div className="space-y-4">
              {/* Drinkig */}
              <div>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-sm font-bold">
                    Drinkig <span className="text-xs font-normal text-[#666]">· 드링키지 — 취향 기반 와인 큐레이션 앱</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#888]">
                    2025.12 — 현재 운영 중
                  </span>
                </div>
                <p className="text-[10px] text-[#666] mb-1.5">
                  1인 기획 · 디자인 · 개발 · 운영 · 2025 홍익인 창업페스티벌 2위
                </p>
                <ul className="text-[11px] text-[#333] space-y-1 leading-snug list-disc pl-4">
                  <li>
                    v1: 10인 팀(개발 6 · 디자인 3 · PM 1)의 Swift/UIKit 프로젝트에서
                    <strong> PM(기획) 리드 · 아이디어 오너</strong>로 참여.
                    초기 검증 실패 후 팀 해체
                  </li>
                  <li>
                    실패 회고를 통해 &ldquo;초보는 자기 취향 자체를 모른다&rdquo;는
                    인사이트에 도달, 제품 진입점을 &lsquo;테이스팅 노트&rsquo;에서
                    &lsquo;취향 테스트&rsquo;로 재정의
                  </li>
                  <li>
                    Swift 코드 전량 폐기 후 React Native로 전면 리라이트,
                    약 2개월 만에 <strong>1인 풀사이클로 App Store 재출시</strong>,
                    현재까지 직접 운영 중
                  </li>
                  <li>
                    Figma Make / Cursor / Claude / Antigravity / Midjourney /
                    Veo / Nano Banana — AI 툴 파이프라인으로 디자이너 없이
                    비주얼 에셋 확보
                  </li>
                </ul>
              </div>

              {/* Gourmevel */}
              <div>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-sm font-bold">
                    Gourmevel <span className="text-xs font-normal text-[#666]">· 고메블 — F&amp;B 숏폼 매거진</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#888]">
                    2022.05 — 현재 운영 중
                  </span>
                </div>
                <p className="text-[10px] text-[#666] mb-1.5">
                  1인 총괄 기획 · 제작 · 편집 · 운영 · 브랜드 커뮤니케이션
                </p>
                <ul className="text-[11px] text-[#333] space-y-1 leading-snug list-disc pl-4">
                  <li>
                    유료 광고 없이 오가닉 도달만으로 팔로워 <strong>1만+</strong>,
                    숏폼 최고 조회수 <strong>124만 뷰</strong>, 릴스 평균 조회수 30만
                  </li>
                  <li>
                    초기 3개월 팔로워 200명 정체 구간에서 &lsquo;감상형&rsquo;
                    콘텐츠를 &lsquo;셰프 취재 기반 매거진&rsquo;으로 재정의, 2주 만에
                    +1,000 팔로워 회복
                  </li>
                  <li>
                    카드뉴스 → 숏폼 주류 포맷 전환기에 이탈 구간 분석 후
                    편집 툴·후킹 기법을 빠르게 학습, 3개월 만에 팔로워 2배 성장
                  </li>
                  <li>
                    캐치테이블 등 브랜드와 <strong>50+건 협업</strong> · 재협업 다수
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-5 border-b border-[#e5e5e5]">
            <h2 className="text-[11px] font-mono tracking-widest text-[#999] mb-3">
              SKILLS & TOOLS
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[11px] text-[#333]">
              <div>
                <span className="font-semibold text-[#1a1a1a]">Product:</span>{" "}
                A/B Testing, 가설 검증, 퍼널 분석, PRD
              </div>
              <div>
                <span className="font-semibold text-[#1a1a1a]">Analytics:</span>{" "}
                Amplitude, MySQL
              </div>
              <div>
                <span className="font-semibold text-[#1a1a1a]">Design:</span>{" "}
                Figma, Figma Make, Photoshop
              </div>
              <div>
                <span className="font-semibold text-[#1a1a1a]">Dev:</span>{" "}
                React Native, Next.js, TypeScript
              </div>
              <div>
                <span className="font-semibold text-[#1a1a1a]">AI Tools:</span>{" "}
                Cursor, Claude, Antigravity, Veo, Midjourney, Nano Banana
              </div>
              <div>
                <span className="font-semibold text-[#1a1a1a]">Languages:</span>{" "}
                한국어 (원어민), English (Fluent), 中文 (Conversational)
              </div>
            </div>
          </section>

          {/* How I Work */}
          <section className="py-5">
            <h2 className="text-[11px] font-mono tracking-widest text-[#999] mb-3">
              HOW I WORK
            </h2>
            <ul className="text-[11px] text-[#333] space-y-1.5 leading-snug list-disc pl-4">
              <li>
                <strong>데이터 기반 의사결정</strong> — 직감보다 근거를 우선.
                Amplitude 퍼널 + A/B 테스트 기반.
              </li>
              <li>
                <strong>빠른 실행, 빠른 검증</strong> — AI 툴로 기획부터 개발,
                QA까지 풀사이클 1인 스프린트.
              </li>
              <li>
                <strong>역할의 경계를 넘는 문제 해결</strong> — PO로서 코드를
                이해하고, 개발자로서 비즈니스를 고민.
              </li>
              <li>
                <strong>다문화 환경에서의 소통</strong> — 싱가포르 5년, 3개국어로
                파트너·외부 팀과 직접 커뮤니케이션.
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer note — screen only */}
      <div className="print:hidden text-center text-[11px] text-white/30 pb-8">
        상단 &lsquo;PDF로 저장&rsquo; 또는 브라우저 인쇄(⌘+P) → &lsquo;PDF로 저장&rsquo; 선택
      </div>

      <style jsx global>{`
        @page {
          size: A4;
          margin: 0;
        }
        .resume-sheet {
          width: 210mm;
          min-height: 297mm;
          box-sizing: border-box;
        }
        @media print {
          html,
          body {
            background: #ffffff !important;
          }
          .resume-root {
            background: #ffffff !important;
          }
          .resume-sheet {
            box-shadow: none !important;
            margin: 0 !important;
            width: 210mm !important;
            min-height: 297mm !important;
          }
        }
      `}</style>
    </main>
  );
}
