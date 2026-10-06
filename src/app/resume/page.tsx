"use client";

import ResumeBar from "@/components/ResumeBar";

export default function ResumePage() {
  return (
    <main className="resume-root min-h-screen bg-wash text-ink">
      <ResumeBar lang="ko" />

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
                  src="/images/profile-resume.jpg"
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
                    Product Manager · Problem Solver
                  </p>
                  <p className="text-[10.5px] text-[#666] mt-1">
                    남성 · 2001년생 · 홍익대학교 컴퓨터공학과 졸업
                  </p>
                </div>
                <div className="text-right text-[10.5px] text-[#222] space-y-[3px] shrink-0 leading-tight">
                  <p className="font-semibold">010-3655-5641</p>
                  <p>wsj@likelion.net</p>
                  <p>portfolio.gourmevel.com</p>
                  <p>linkedin.com/in/wiseungju</p>
                  <p>github.com/SeungjuWI</p>
                </div>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">SUMMARY · 소개</h2>
            <p className="text-[11px] text-[#1a1a1a] leading-[1.55] mb-1.5">
              <strong>
                AI를 활용해 문제 정의부터 기획, 개발, 출시까지 엔드투엔드로
                담당하는 PM 위승주입니다.
              </strong>
            </p>
            <p className="text-[10.5px] text-[#222] leading-[1.55] mb-1.5">
              현재 멋쟁이사자처럼 글로벌신사업본부에서 베트남 IT 인재 채용 플랫폼{" "}
              <strong>Salary FYI</strong>의 웹, 모바일 앱, 커뮤니티, 어드민까지
              제품 전체를 맡아, 출시 5개월 만에{" "}
              <strong>가입 8,800명, 채용 지원 1만 건</strong>을 만들었습니다.
              입사 3일 차에 첫 MVP를 배포했고, 4개월간 5개 이상의 제품을
              단독으로 기획·개발·출시했습니다.
            </p>
            <p className="text-[10.5px] text-[#222] leading-[1.55]">
              이전에는 Planfit에서 유료 구독 전환율 개선을 전담하며 70건 이상의
              실험을 설계·실행했고, 외부 솔루션 제휴를 주도해{" "}
              <strong>주간 결제 전환율(CVR)을 75% 끌어올렸습니다.</strong> 개인
              프로젝트로 AI 와인 큐레이팅 앱 <strong>드링키지</strong>를 1인으로
              개발·출시했고, 미식 매거진 <strong>고메블</strong>을 팔로워 1만
              채널로 운영하고 있습니다.
            </p>
          </section>

          {/* Experience */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EXPERIENCE · 경력</h2>
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[14px] font-bold text-[#0f0f0f]">
                    멋쟁이사자처럼 LIKELION{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · 글로벌신사업본부 · 정규직
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2026.04 — 현재
                  </span>
                </div>
                <p className="text-[10.5px] text-[#555] italic mb-1.5">
                  Problem Solver (PM) 2026.09 — 현재 · AI Product Manager
                  2026.04 — 2026.09
                </p>
                <ul className="resume-ul">
                  <li>
                    <strong>Salary FYI(salary-fyi.com) 제품 전체 담당:</strong>{" "}
                    베트남 IT 인재와 한국 기업을 연결하는 채용 플랫폼의 웹·모바일
                    앱·커뮤니티·어드민 대시보드를 기획·개발. 출시 5개월 만에{" "}
                    <strong>
                      가입 8,800명, 이력서 5,300건, 채용 지원 1만 건, MAU 3만
                    </strong>
                  </li>
                  <li>
                    <strong>이력서 공개율 7.7% → 88.3%:</strong> 원탭 지원과 LLM
                    타깃 캠페인(클릭률 14~30%)으로 개선
                  </li>
                  <li>
                    <strong>팀 KPI 재정의:</strong> 이력서 등록 유저의 지원율이
                    79배 높다는 점을 발견해 KPI를 재정의하고 광고 예산을 전면
                    재배분
                  </li>
                  <li>
                    맞춤 콜드메일 2만 건 이상 발송으로 인재풀 확대, 기업 JD
                    기반 공고 추천 메일 운영 방식 정착
                  </li>
                  <li>
                    <strong>채용 업무 자동화:</strong> 이력서 검토·AI
                    인터뷰·최종 평가·결과 메일 발송까지 8단계 전 과정을 자동화해
                    스프레드시트 수작업 대체 (LLM 이력서 스크리닝, AI 음성
                    인터뷰, 슬랙 봇)
                  </li>
                  <li>
                    <strong>KTC(정부지원사업):</strong> 한국 스타트업과 베트남
                    원격 인재 매칭 담당. 이력서 한국어 번역을 건당 약 3시간에서
                    즉시 생성으로 단축, K-Tech College Job Matching Weekend
                    2026(다낭) 현지 운영
                  </li>
                  <li>
                    입사 3일 차 첫 MVP 배포, 4개월간 제품 5개 이상을 단독으로
                    기획·개발·출시
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[14px] font-bold text-[#0f0f0f]">
                    (주)플랜핏 Planfit{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · AI Problem Solver · 인턴
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2025.06 — 2025.12 · 7개월
                  </span>
                </div>
                <p className="text-[10.5px] text-[#555] italic mb-1.5">
                  유료 구독 전환율 개선 전담 · 기획·UI/UX 디자인·프론트엔드(React
                  Native)·QA 1인 스프린트
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
                    Amplitude 데이터 분석 기반으로 약 3개월간{" "}
                    <strong>70건 이상의 실험 설계·실행</strong>, PRD 100건 이상
                    작성, 결제 퍼널 병목 분석 및 개선
                  </li>
                  <li>
                    <strong>Stack:</strong> Amplitude · Figma · Cursor · Claude ·
                    Veo
                  </li>
                </ul>
              </div>
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
                      · AI 와인 큐레이팅 앱 (Founder · 1인 풀사이클)
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2026.01 — 현재
                  </span>
                </div>
                <p className="text-[10px] text-[#666] italic mb-1">
                  기획·디자인·개발·QA 1인 · App Store 운영 중
                </p>
                <ul className="resume-ul">
                  <li>
                    와인 입문자의 진입장벽을 낮추는 앱. 취향, 테이스팅 노트,
                    품종 기반 개인화 추천
                  </li>
                  <li>
                    v1(10인 팀 · Swift)의 실패 회고에서 &ldquo;초보는 자기 취향
                    자체를 모른다&rdquo;는 인사이트를 도출해 진입점을{" "}
                    &lsquo;취향 테스트&rsquo;로 재정의
                  </li>
                  <li>
                    React Native로 전면 리라이트, 약 1.5개월 개발 후{" "}
                    <strong>2026.01 App Store 승인</strong>
                  </li>
                  <li>
                    <strong>홍익대학교 창업경진대회 우수상(2위)</strong> ·
                    주간동아 &ldquo;코딩 몰라도 AI 활용해 앱 자유자재로
                    만든다&rdquo; 보도
                  </li>
                </ul>
              </div>

              {/* Gourmevel */}
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                    Gourmevel 고메블{" "}
                    <span className="text-[11px] font-medium text-[#444]">
                      · 미식 매거진 (Founder · 1인 총괄 운영)
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#555] shrink-0">
                    2021.11 — 현재
                  </span>
                </div>
                <p className="text-[10px] text-[#666] italic mb-1">
                  파인다이닝·미쉐린 레스토랑 심층 리뷰 · 기획·브랜딩·촬영·운영
                  1인
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
                    캐치테이블 등 브랜드와 <strong>50+ 건 협업</strong>, 광고와
                    촬영으로 수익화
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">EDUCATION · 학력</h2>
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                  홍익대학교{" "}
                  <span className="text-[11px] font-medium text-[#444]">
                    · 학사 / 컴퓨터공학
                  </span>
                </h3>
                <span className="text-[10px] font-mono text-[#555] shrink-0">
                  2020.03 — 2026.02
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[13px] font-bold text-[#0f0f0f]">
                  Singapore Korean International School{" "}
                  <span className="text-[11px] font-medium text-[#444]">
                    · 자연계열 · 수학·중국어 또래 튜터
                  </span>
                </h3>
                <span className="text-[10px] font-mono text-[#555] shrink-0">
                  2017.03 — 2020.02
                </span>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">SKILLS · 스킬</h2>
            <div className="space-y-1.5">
              {[
                {
                  cat: "Product",
                  items: [
                    "문제 정의",
                    "PRD",
                    "퍼널 분석",
                    "실험 설계",
                    "그로스",
                    "KPI 설계",
                  ],
                },
                {
                  cat: "AI",
                  items: [
                    "LLM 활용 제품 기획·개발",
                    "업무 자동화",
                    "Claude Code",
                    "Cursor",
                  ],
                },
                {
                  cat: "Dev",
                  items: ["React Native", "웹·앱 프론트엔드", "슬랙 봇"],
                },
                { cat: "Analytics", items: ["Amplitude", "MySQL"] },
                {
                  cat: "Design",
                  items: ["Figma", "Figma Make", "Photoshop"],
                },
                {
                  cat: "Content",
                  items: ["에디토리얼 기획", "브랜딩", "촬영"],
                },
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
                <strong>영어</strong> — 원어민 수준 (싱가포르 5년 거주)
              </li>
              <li>
                <strong>중국어</strong> — 상급
              </li>
            </ul>
          </section>

          {/* Awards & Press */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">AWARDS &amp; PRESS · 수상 · 언론</h2>
            <ul className="resume-ul">
              <li>
                <strong>홍익대학교 창업경진대회 우수상(2위)</strong> · Drinkig
                (2025.05)
              </li>
              <li>
                <strong>주간동아</strong> &ldquo;코딩 몰라도 AI 활용해 앱
                자유자재로 만든다&rdquo; 보도 (2026.04)
              </li>
              <li>
                <strong>뉴스레터 〈凝〉 창간호 인터뷰</strong> &ldquo;흔들리는
                시대에 좌표를 정하는 AI PM&rdquo; (2026.06)
              </li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="py-3 border-b border-[#d4d4d4]">
            <h2 className="resume-h2">CERTIFICATIONS · 자격 · 활동</h2>
            <ul className="resume-ul">
              <li>
                <strong>ADsP</strong> — Advanced Data Analytics
                Semi-Professional (데이터분석 준전문가)
              </li>
              <li>
                <strong>OPIc</strong> — IH (Intermediate High)
              </li>
              <li>
                <strong>UMC 6th</strong> — University MakeUs Challenge 홍익대학교
                Project Manager 수료 (2024.08)
              </li>
              <li>
                <strong>제2종 보통 운전면허</strong>
              </li>
            </ul>
          </section>

          {/* Links */}
          <section className="py-3">
            <h2 className="resume-h2">LINKS · 링크</h2>
            <ul className="resume-ul">
              <li>
                Portfolio ·{" "}
                <span className="font-mono">https://portfolio.gourmevel.com</span>
              </li>
              <li>
                Salary FYI ·{" "}
                <span className="font-mono">https://salary-fyi.com</span>
              </li>
              <li>
                Drinkig · <span className="font-mono">https://drinkig.com</span>
              </li>
              <li>
                Gourmevel ·{" "}
                <span className="font-mono">
                  https://www.instagram.com/gourmevel
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer note — screen only */}
      <div className="print:hidden text-center text-[11px] text-muted pb-8">
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
