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
      <div className="resume-sheet mx-auto my-8 print:my-0 bg-white text-[#0f0f0f] shadow-2xl print:shadow-none">
        <div className="resume-inner">
          {/* Header */}
          <header className="pb-4 border-b-[3px] border-[#0f0f0f]">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h1 className="text-[34px] font-extrabold tracking-tight leading-none">
                  위승주{" "}
                  <span className="text-[17px] font-normal text-[#555] tracking-normal">
                    Seungju Wi
                  </span>
                </h1>
                <p className="text-[13px] font-semibold text-[#0f0f0f] mt-1.5 tracking-wide">
                  Product Owner · AI-Native Planner
                </p>
                <p className="text-[11px] text-[#222] mt-1.5 leading-snug">
                  기획부터 구현·검증까지 풀사이클로 운영하는 PO. 데이터로 가설을
                  세우고, AI 툴로 빠르게 실행하며, 실험으로 입증합니다.
                </p>
              </div>
              <div className="text-right text-[10.5px] text-[#222] space-y-[3px] shrink-0 leading-tight">
                <p className="font-semibold">wesean1108@gmail.com</p>
                <p>github.com/WiSeungJu</p>
                <p>linkedin.com/in/wiseungju</p>
                <p>portfolio.gourmevel.com</p>
                <p className="pt-1 text-[#666]">홍익대 컴퓨터공학과 재학</p>
                <p className="text-[#666]">싱가포르 5년 · KR · EN · 中</p>
              </div>
            </div>
          </header>

          {/* Summary metrics */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { v: "30+", l: "A/B 실험 설계·실행", d: "Planfit Solver 4개월" },
                { v: "+75%", l: "주간 결제 전환율", d: "Monetai 도입 주도" },
                { v: "124만", l: "최고 오가닉 뷰", d: "Gourmevel 숏폼" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-[24px] font-extrabold text-[#0f0f0f] leading-none tracking-tight">
                    {s.v}
                  </p>
                  <p className="text-[10.5px] font-semibold text-[#0f0f0f] mt-1">
                    {s.l}
                  </p>
                  <p className="text-[9px] text-[#777] mt-0.5">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EXPERIENCE · 경력</h2>
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[14px] font-bold text-[#0f0f0f]">
                  Planfit{" "}
                  <span className="text-[11px] font-medium text-[#444]">
                    · Product Owner / Solver (인턴)
                  </span>
                </h3>
                <span className="text-[10px] font-mono text-[#555] shrink-0">
                  2025.06 — 2025.12 · 7개월
                </span>
              </div>
              <p className="text-[10.5px] text-[#555] italic mb-1.5">
                Solver — 기획·디자인·FE·QA를 1인 스프린트로 운영하며 병목을
                해결하는 신설 직무
              </p>
              <ul className="resume-ul">
                <li>
                  초기 2개월 온보딩 후 Solver 역할로 전환, 이후 4개월간{" "}
                  <strong>30건 이상의 A/B 실험</strong>을 직접 설계·실행하여
                  무료 → 유료 전환율 개선 사이클 운영
                </li>
                <li>
                  <strong>AI 영상 시즌 페이월 기획·구현:</strong> 정적 선물상자
                  이미지를 Veo·Midjourney로 생성한 시즌 영상으로 교체. 신규
                  유저 할인권 결제 전환율을 목표 +10% 대비{" "}
                  <strong>+20% 상승(목표 2배 초과)</strong>, 사내 시즌 페이월
                  레퍼런스로 정착
                </li>
                <li>
                  <strong>Monetai 외부 솔루션 발굴·도입 주도:</strong> 기존
                  유저 화면 개입이 어려운 환경에서 외부까지 범위를 확장해
                  구매확률 예측 기반 노출 제어 솔루션 Monetai를 직접 리서치·
                  발굴. CTO·개발자·디자이너와의 1:3 미팅을 단독으로 리드하며
                  도입·운영·개선을 주도, <strong>주간 결제 전환율 +75%</strong>{" "}
                  달성 후 현재까지 프로덕션 운영 중
                </li>
                <li>
                  <strong>Stack:</strong> Amplitude 퍼널 분석 · Figma · Cursor ·
                  Claude · Veo — 데이터 드리븐 의사결정과 AI 풀사이클 실행
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">PROJECTS · 프로젝트</h2>

            <div className="space-y-2.5">
              {/* Drinkig */}
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                    Drinkig{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · 취향 기반 와인 큐레이션 앱 (1인 풀사이클)
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2025.12 — 현재
                  </span>
                </div>
                <p className="text-[10px] text-[#666] italic mb-1">
                  기획·디자인·개발·운영 1인 · App Store 운영 중
                </p>
                <ul className="resume-ul">
                  <li>
                    v1: 10인 팀(개발 6·디자인 3·PM 1) Swift/UIKit 프로젝트에서{" "}
                    <strong>PM 리드 / 아이디어 오너</strong>로 참여,{" "}
                    <strong>2025 홍익인 창업페스티벌 2위</strong>(전체 30+팀
                    중) 수상 — 시장성·기획력 부문 평가. 이후 초기 사용자 검증
                    실패로 팀 해체
                  </li>
                  <li>
                    실패 회고에서 &ldquo;초보는 자기 취향 자체를 모른다&rdquo;는
                    인사이트 도출 → 진입점을 &lsquo;테이스팅 노트&rsquo;에서{" "}
                    &lsquo;취향 테스트&rsquo;로 재정의
                  </li>
                  <li>
                    Swift 전량 폐기 후 React Native로 전면 리라이트, 약 2개월
                    만에 <strong>1인 풀사이클로 App Store 재출시</strong> 후
                    직접 운영
                  </li>
                  <li>
                    Figma Make · Cursor · Claude · Antigravity · Midjourney ·
                    Veo · Nano Banana 파이프라인으로 디자이너 없이 비주얼 에셋
                    전량 자체 확보
                  </li>
                </ul>
              </div>

              {/* Gourmevel */}
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                    Gourmevel{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · F&amp;B 숏폼 매거진 (1인 총괄 운영)
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2022.05 — 현재
                  </span>
                </div>
                <p className="text-[10px] text-[#666] italic mb-1">
                  기획·제작·편집·운영·브랜드 커뮤니케이션 1인
                </p>
                <ul className="resume-ul">
                  <li>
                    유료 광고 0원, 오가닉 도달만으로 팔로워{" "}
                    <strong>1만+</strong>, 숏폼 최고{" "}
                    <strong>124만 뷰</strong>, 릴스 평균 30만 뷰 달성
                  </li>
                  <li>
                    초기 팔로워 200명 정체 구간에서 &lsquo;감상형&rsquo;
                    콘텐츠를 &lsquo;셰프 취재 기반 매거진&rsquo;으로 리포지셔닝,
                    2주 만에 +1,000 팔로워 회복
                  </li>
                  <li>
                    카드뉴스 → 숏폼 전환기에 이탈 구간 분석 후 편집 툴·후킹
                    기법을 빠르게 학습, 3개월 만에 팔로워 2배 성장
                  </li>
                  <li>
                    캐치테이블 등 브랜드와{" "}
                    <strong>50+ 건 협업</strong> · 재협업 다수
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-3">
            <h2 className="resume-h2">SKILLS · 역량 & 도구</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[10.5px] text-[#222] leading-snug">
              <div>
                <span className="resume-skill-label">Product</span>
                A/B Testing · 가설 검증 · 퍼널 분석 · PRD 작성
              </div>
              <div>
                <span className="resume-skill-label">Analytics</span>
                Amplitude · MySQL
              </div>
              <div>
                <span className="resume-skill-label">Design</span>
                Figma · Figma Make · Photoshop
              </div>
              <div>
                <span className="resume-skill-label">Dev</span>
                React Native · Next.js · TypeScript
              </div>
              <div>
                <span className="resume-skill-label">AI Tools</span>
                Cursor · Claude · Antigravity · Veo · Midjourney · Nano Banana
              </div>
              <div>
                <span className="resume-skill-label">Languages</span>
                한국어(Native) · English(Fluent) · 中文(Conversational)
              </div>
            </div>
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
          height: 297mm;
          box-sizing: border-box;
          overflow: hidden;
        }
        .resume-inner {
          padding: 14mm 14mm 12mm 14mm;
          height: 100%;
          box-sizing: border-box;
        }
        .resume-h2 {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #0f0f0f;
          font-weight: 700;
          margin-bottom: 6px;
          padding-bottom: 3px;
          border-bottom: 1px solid #0f0f0f;
        }
        .resume-ul {
          font-size: 10.5px;
          color: #1a1a1a;
          line-height: 1.45;
          list-style: disc;
          padding-left: 14px;
        }
        .resume-ul > li {
          margin-bottom: 3px;
        }
        .resume-ul > li::marker {
          color: #555;
        }
        .resume-skill-label {
          display: inline-block;
          min-width: 64px;
          font-weight: 700;
          color: #0f0f0f;
          margin-right: 4px;
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
            height: 297mm !important;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}
