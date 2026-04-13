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
            <div className="flex items-start gap-5">
              {/* Profile photo */}
              <div className="resume-photo shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.jpg"
                  alt="위승주 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h1 className="text-[32px] font-extrabold tracking-tight leading-none">
                    위승주{" "}
                    <span className="text-[16px] font-normal text-[#555] tracking-normal">
                      Seungju Wi
                    </span>
                  </h1>
                  <p className="text-[13px] font-semibold text-[#0f0f0f] mt-1.5 tracking-wide">
                    Product Owner · Service Planner
                  </p>
                  <p className="text-[10.5px] text-[#666] mt-1">
                    남성 · 2001년생 · 홍익대학교 컴퓨터공학과 졸업
                  </p>
                </div>
                <div className="text-right text-[10.5px] text-[#222] space-y-[3px] shrink-0 leading-tight">
                  <p className="font-semibold">010-3655-5641</p>
                  <p>wesean1108@gmail.com</p>
                  <p>portfolio.gourmevel.com</p>
                  <p>github.com/WiSeungJu</p>
                </div>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">SUMMARY · 소개</h2>
            <p className="text-[11px] text-[#1a1a1a] leading-[1.55] mb-1.5">
              <strong>
                기술적 이해도와 데이터 분석 역량을 바탕으로 비즈니스 목표를
                안정적으로 달성하는 서비스 기획자 위승주입니다.
              </strong>
            </p>
            <p className="text-[10.5px] text-[#222] leading-[1.55] mb-1.5">
              직관보다는 철저한 데이터 분석을 통해 유저의 문제를 정의하고
              실질적인 지표 개선으로 연결합니다. 실무에서 외부 솔루션 제휴를
              직접 주도하여 <strong>주간 결제 전환율(CVR)을 75% 상승</strong>
              시키는 등 명확한 비즈니스 임팩트를 창출한 경험이 있습니다.
            </p>
            <p className="text-[10.5px] text-[#222] leading-[1.55] mb-1.5">
              나아가 컴퓨터공학 전공 지식을 살려 기획·디자인·개발 전 과정을
              단독으로 소화하는 1인 메이커 역량을 갖추고 있습니다. 2030 맞춤형
              와인 큐레이션 앱 <strong>드링키지</strong>를 1인 풀사이클로 2개월
              만에 개발·상용화했으며, 직접 기획·운영 중인 F&amp;B 미식 숏폼
              매거진 <strong>고메블</strong>은 데이터 기반 콘텐츠 최적화로 최고
              조회수 <strong>124만 뷰</strong>를 달성했습니다.
            </p>
            <p className="text-[10.5px] text-[#222] leading-[1.55]">
              탄탄한 IT 베이스를 바탕으로 개발 직군과의 소통 비용을 최소화하고,
              조직의 비즈니스 지표를 확실하게 성장시키겠습니다.
            </p>
          </section>

          {/* Experience */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EXPERIENCE · 경력 (총 7개월)</h2>
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[14px] font-bold text-[#0f0f0f]">
                  (주)플랜핏 Planfit{" "}
                  <span className="text-[11px] font-medium text-[#444]">
                    · Product Owner Intern / 기획 (Solver)
                  </span>
                </h3>
                <span className="text-[10px] font-mono text-[#555] shrink-0">
                  2025.06 — 2025.12 · 7개월
                </span>
              </div>
              <p className="text-[10.5px] text-[#555] italic mb-1.5">
                기획·디자인·개발·QA를 1인 스프린트로 주도하는 Solver 직무 수행
              </p>
              <ul className="resume-ul">
                <li>
                  <strong>외부 AI 솔루션(Monetai) 발굴·도입 주도:</strong> 유저
                  구매 확률 예측 솔루션을 직접 리서치·발굴하고 제휴사와 1:3
                  기술 미팅을 단독으로 리드. 맞춤형 타겟팅 프로모션 런칭으로{" "}
                  <strong>주간 결제 전환율(CVR) +75% 상승</strong> 달성 후
                  프로덕션 정착
                </li>
                <li>
                  <strong>비디오 생성 AI 활용 결제창 영상 배포:</strong> 타
                  부서 의존 없이 단독으로 시즌 페이월 영상을 제작·배포, 신규
                  유저 전환율 <strong>목표 2배 초과(+20%)</strong> 달성
                </li>
                <li>
                  Amplitude 데이터 분석 기반으로 4개월간{" "}
                  <strong>30건 이상의 가설 검증 실험</strong> 주도 및 실험
                  리드타임 획기적 단축
                </li>
                <li>
                  <strong>Stack:</strong> Amplitude · Figma · Cursor · Claude ·
                  Veo — 데이터 드리븐 의사결정과 AI 풀사이클 실행
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EDUCATION · 학력</h2>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                홍익대학교{" "}
                <span className="text-[11px] font-medium text-[#444]">
                  · 학사 / 컴퓨터공학
                </span>
              </h3>
              <span className="text-[10px] font-mono text-[#555] shrink-0">
                2020 — 2026 (졸업)
              </span>
            </div>
          </section>

          {/* Projects */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">PROJECTS · 프로젝트</h2>

            <div className="space-y-3">
              {/* Drinkig */}
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                    Drinkig 드링키지{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · 2030 취향 기반 와인 큐레이션 앱 (1인 풀사이클)
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
                    <strong>2025 홍익대학교 창업 페스티벌 2등</strong> 수상 —
                    시장성·기획력 부문 평가
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
                    Gourmevel 고메블{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · F&amp;B 미식 숏폼 매거진 (1인 총괄 운영)
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
                    기법을 빠르게 학습, 3개월 만에{" "}
                    <strong>팔로워 4,000 → 8,000 (2배 성장)</strong>
                  </li>
                  <li>
                    캐치테이블 등 브랜드와 <strong>50+ 건 협업</strong> · 재협업
                    다수
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expertise & Skills */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EXPERTISE · 전문 분야 & 스킬</h2>

            {/* 전문 분야 키워드 */}
            <div className="mb-3">
              <p className="resume-skill-cat">전문 분야</p>
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
                ].map((tag) => (
                  <span key={tag} className="resume-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 도구 카테고리별 */}
            <div className="space-y-1.5 pt-2 border-t border-[#eee]">
              {[
                {
                  cat: "Product",
                  items: ["A/B Testing", "가설 검증", "퍼널 분석", "PRD 작성"],
                },
                { cat: "Analytics", items: ["Amplitude", "MySQL"] },
                {
                  cat: "Design",
                  items: ["Figma", "Figma Make", "Photoshop"],
                },
                {
                  cat: "Dev",
                  items: ["React Native", "Next.js", "TypeScript"],
                },
                {
                  cat: "AI Tools",
                  items: [
                    "Cursor",
                    "Claude",
                    "Antigravity",
                    "Veo",
                    "Midjourney",
                    "Nano Banana",
                  ],
                },
                { cat: "Collab", items: ["Notion", "Slack", "Linear"] },
              ].map((row) => (
                <div key={row.cat} className="flex items-start gap-3">
                  <span className="resume-skill-cat-inline">{row.cat}</span>
                  <span className="text-[10.5px] text-[#222] leading-[1.5] flex-1">
                    {row.items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">LANGUAGES · 외국어</h2>
            <ul className="resume-ul">
              <li>
                <strong>한국어</strong> — 원어민 (Native)
              </li>
              <li>
                <strong>영어</strong> — 원어민 수준 (싱가포르 5년 거주)
              </li>
              <li>
                <strong>중국어</strong> — 업무상 소통 가능
              </li>
            </ul>
          </section>

          {/* Awards */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">AWARDS · 수상 및 기타 이력</h2>
            <ul className="resume-ul">
              <li>
                <strong>2025 홍익대학교 창업 페스티벌 2등</strong> · Drinkig
                프로젝트 (시장성·기획력 부문)
              </li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">CERTIFICATIONS · 자격증</h2>
            <ul className="resume-ul">
              <li>
                <strong>ADsP</strong> — Advanced Data Analytics
                Semi-Professional (데이터분석 준전문가)
              </li>
              <li>
                <strong>OPIc</strong> — IH (Intermediate High)
              </li>
              <li>
                <strong>제2종 보통 운전면허</strong>
              </li>
              <li>
                <strong>UMC 6th</strong> — University MakeUs Challenge 홍익대학교
                Project Manager 수료 (2024.08)
              </li>
            </ul>
          </section>

          {/* Portfolio & Links */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">PORTFOLIO · 포트폴리오 · 기타 문서</h2>
            <ul className="resume-ul">
              <li>
                포트폴리오 사이트 ·{" "}
                <span className="font-mono">https://portfolio.gourmevel.com</span>
              </li>
            </ul>
          </section>

          {/* Websites & Blog */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">WEBSITES · 웹사이트 · 블로그</h2>
            <ul className="resume-ul">
              <li>
                Drinkig 공식 ·{" "}
                <span className="font-mono">https://www.drinkig.com</span>
              </li>
              <li>
                Gourmevel Instagram ·{" "}
                <span className="font-mono">
                  https://www.instagram.com/gourmevel
                </span>
              </li>
              <li>
                Portfolio ·{" "}
                <span className="font-mono">https://portfolio.gourmevel.com</span>
              </li>
            </ul>
          </section>

          {/* Press */}
          <section className="py-3">
            <h2 className="resume-h2">PRESS · 기사</h2>
            <ul className="resume-ul">
              <li>
                2025 홍익대학교 창업경진대회 수상 ·{" "}
                <span className="font-mono">
                  https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&amp;articleNo=14009
                </span>
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
          box-sizing: border-box;
        }
        .resume-inner {
          padding: 14mm 14mm 14mm 14mm;
          box-sizing: border-box;
        }
        .resume-photo {
          width: 78px;
          height: 100px;
          overflow: hidden;
          border: 1px solid #0f0f0f;
          background: #f5f5f5;
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
          line-height: 1.5;
          list-style: disc;
          padding-left: 14px;
        }
        .resume-ul > li {
          margin-bottom: 3px;
          break-inside: avoid;
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
        .resume-skill-cat {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #666;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .resume-skill-cat-inline {
          display: inline-block;
          min-width: 72px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: #0f0f0f;
          font-weight: 700;
          text-transform: uppercase;
          padding-top: 1px;
          border-right: 2px solid #0f0f0f;
          padding-right: 8px;
          flex-shrink: 0;
        }
        .resume-tag {
          display: inline-block;
          font-size: 10px;
          color: #0f0f0f;
          background: #f0f0f0;
          border: 1px solid #d4d4d4;
          padding: 2px 7px;
          border-radius: 3px;
          font-weight: 500;
          line-height: 1.3;
        }
        .resume-sheet section {
          break-inside: avoid;
        }
        .resume-sheet h2,
        .resume-sheet h3 {
          break-after: avoid;
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
          }
        }
      `}</style>
    </main>
  );
}
