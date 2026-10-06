import type { Metadata } from "next";
import {
  B,
  CasePage,
  Facts,
  Figures,
  Note,
  Phase,
  Prose,
  Rows,
  Section,
  Story,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "멋쟁이사자처럼 Problem Solver (PM)",
  description:
    "위승주의 멋쟁이사자처럼 글로벌신사업본부 경력. 베트남 IT 인재 채용 플랫폼 Salary FYI 제품 전체 담당, 출시 5개월 만에 가입 8,800명·채용 지원 1만 건. 채용 업무 자동화, 크로스보더 협업 툴, KTC.",
  alternates: { canonical: "/experience/likelion" },
};

export default function LikelionPage() {
  return (
    <CasePage
      back={{ label: "Experience", href: "/#experience" }}
      title="멋쟁이사자처럼"
      subtitle="글로벌신사업본부"
      summary="입사 3일 차에 첫 MVP를 배포하고, 4개월간 제품 5개 이상을 단독으로 기획·개발·출시"
      meta={[
        "Full-time",
        "Problem Solver (PM) · Sep 2026 – Present",
        "AI Product Manager · Apr–Sep 2026",
      ]}
      links={[{ label: "salary-fyi.com", href: "https://salary-fyi.com" }]}
      prev={{ label: "메인으로", href: "/#experience" }}
      next={{ label: "Planfit", href: "/experience/planfit" }}
    >
      <Section id="context" title="Context">
        <Prose>
          <p>
            AI Product Manager로 시작해 현재 Problem Solver(PM). 입사 3일 차에 첫 MVP 배포, 4개월간 제품 5개 이상을 단독으로 기획·개발·출시. 2026년 9월부터 애니멀리그 공개 플랫폼 PM 담당(출시 전).
          </p>
        </Prose>
        <Facts
          items={[
            {
              label: "포지션",
              value: (
                <>
                  Problem Solver (PM) · Sep 2026 – Present
                  <br />
                  AI Product Manager · Apr–Sep 2026
                </>
              ),
            },
            { label: "소속", value: "글로벌신사업본부 · 서울" },
            {
              label: "담당 제품",
              value:
                "Salary FYI · 채용 업무 자동화 · 크로스보더 협업 툴 · KTC · 애니멀리그",
            },
            {
              label: "AI 활용",
              value: "LLM 활용 제품 기획·개발 · 업무 자동화 · Claude Code",
            },
          ]}
        />
      </Section>

      <Section id="projects" title="Projects">
        <Story
          id="fyi"
          kicker="Project 01 — salary-fyi.com"
          title="Salary FYI"
          lede="베트남 IT 인재와 한국 기업을 연결하는 채용 플랫폼. 검증된 연봉 데이터를 기반으로 인재를 모음. 웹, 모바일 앱, 커뮤니티, 어드민 대시보드까지 제품 전체를 담당."
          result={{
            value: "지원 1만+",
            label: "채용 공고 지원 · 출시 5개월 만에",
            note: "가입자의 60%가 이력서 등록",
          }}
        >
          <Phase num="01" label="Metrics" title="지표 (Apr 20 – Oct 6, 2026 기준)">
            <Figures
              items={[
                { value: "12.4만", label: "방문 세션" },
                { value: "8,800+", label: "가입자 (명)" },
                { value: "5,300+", label: "이력서 등록 (건)" },
                { value: "1만+", label: "채용 공고 지원 (건)" },
              ]}
            />
            <dl className="text-sm">
              {[
                {
                  label: "최근 30일 (Sep 7 – Oct 6)",
                  value: "신규 가입 3,000+ · 전체의 35%",
                  note: "이력서 등록 대부분이 이 한 달에 집중",
                },
                {
                  label: "MAU",
                  value: "3만",
                  note: "출시 4개월 만에 · 활성 사용자 매월 65~80% 성장",
                },
                {
                  label: "연봉 정보",
                  value: "12,517건 · 4,064개 회사",
                  note: "자연 유입 7,455 / 광고 유입 5,062",
                },
                { label: "채용 페이지 조회", value: "7.1만" },
                { label: "공고 카드 클릭", value: "4.1만" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-b border-rule py-3"
                >
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-right font-medium tabular-nums">
                    {row.value}
                    {row.note && (
                      <span className="block text-[13px] font-normal text-muted">
                        {row.note}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Phase>

          <Phase num="02" label="Decisions" title="주요 성과와 판단">
            <Rows
              items={[
                {
                  title: "이력서 공개율",
                  sub: "7.7% → 88.3%",
                  body: "원탭 지원과 LLM 타깃 캠페인(클릭률 14~30%)으로 이력서 공개율을 7.7%에서 88.3%로 개선.",
                },
                {
                  title: "KPI 재정의",
                  sub: "지원율 79배",
                  body: "이력서를 등록한 유저의 지원율이 79배 높다는 점을 발견해 팀 KPI를 재정의하고 광고 예산을 전면 재배분.",
                },
                {
                  title: "인재풀 확대",
                  sub: "콜드메일 2만 건+",
                  body: "맞춤 콜드메일을 2만 건 이상 발송해 인재풀을 확대.",
                },
                {
                  title: "공고 추천 메일",
                  body: "기업 JD를 받아 요건에 맞는 인재에게 공고 추천 메일을 보내 빠르게 지원을 만드는 운영 방식 정착.",
                },
                {
                  title: "가입 경로 추적",
                  body: "UTM 규칙을 만들어 게시글별 가입 경로를 추적할 수 있게 개선.",
                },
                {
                  title: "마케터용 도구",
                  body: "마케터용 공고 묶음 링크 생성기를 제작.",
                },
              ]}
            />
          </Phase>
        </Story>

        <Story
          id="hiring"
          kicker="Project 02 — Hiring Automation"
          title="채용 업무 자동화"
          lede="이력서 검토, AI 인터뷰, 최종 평가, 결과 메일 발송까지 8단계 전 과정을 자동화해, 스프레드시트 수작업 운영을 대체."
          result={{ value: "8단계", label: "전 과정 자동화" }}
          ledger={[
            {
              label: "구성",
              value:
                "LLM 이력서 스크리닝 · AI 음성 인터뷰 · 인터뷰 트래킹 · 슬랙 봇",
            },
            { label: "대체한 것", value: "스프레드시트 수작업 운영" },
          ]}
        />

        <Story
          id="collab-tool"
          kicker="Project 03 — Cross-border Collaboration"
          title="크로스보더 협업 툴"
          lede="베트남 구성원과의 소통 비효율을 줄이려고, 실시간 번역이 되는 프로젝트 관리 툴 제작."
        >
          <Note label="배운 점">
            기능을 빨리 만드는 것보다, 사용자가 새 툴에 적응하는 시간(
            <B>온보딩</B>)까지 설계해야 한다는 것.
          </Note>
        </Story>

        <Story
          id="ktc"
          kicker="Project 04 — 정부지원사업"
          title="KTC"
          lede="한국 스타트업에 베트남 원격 개발자, 디자이너, 마케터를 매칭하는 정부지원사업을 담당."
          result={{
            value: "3시간 → 즉시",
            label: "이력서 한국어 번역",
          }}
        >
          <div className="mt-6">
            <Rows
              items={[
                {
                  title: "이력서 한국어 번역 기능",
                  body: "건당 약 3시간 걸리던 번역 요청을 즉시 생성으로 단축.",
                },
                {
                  title: "현지 운영",
                  sub: "다낭 · Sep 30, 2026",
                  body: "K-Tech College Job Matching Weekend 2026을 현지에서 운영.",
                },
              ]}
            />
          </div>
        </Story>
      </Section>
    </CasePage>
  );
}
