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
import { alternatesFor, pick, type Lang } from "@/i18n";

const PATH = "/experience/likelion";

export function likelionMetadata(lang: Lang): Metadata {
  return {
    title: lang === "ko" ? "멋쟁이사자처럼 Problem Solver" : { absolute: "LIKELION — Problem Solver | Seungju WI" },
    description: pick(
      lang,
      "위승주의 멋쟁이사자처럼 글로벌신사업본부 경력. 베트남 IT 인재 채용 플랫폼 Salary FYI 제품 전체 담당, 출시 5개월 만에 가입 8,800명·채용 지원 1만 건. 채용 업무 자동화, 크로스보더 협업 툴, KTC.",
      "Seungju WI at LIKELION's Global New Business division: owned Salary FYI, a hiring platform for Vietnamese IT talent, reaching 8,800 sign-ups and 10K job applications within 5 months of launch. Hiring automation, a cross-border collaboration tool, and KTC."
    ),
    alternates: alternatesFor(lang, PATH),
    ...(lang === "en" ? { openGraph: { locale: "en_US" } } : {}),
  };
}

export default function LikelionCase({ lang }: { lang: Lang }) {
  const t = <T,>(ko: T, en: T) => pick(lang, ko, en);
  return (
    <CasePage
      lang={lang}
      path={PATH}
      back={{ label: "Experience", href: "/#experience" }}
      title={t("멋쟁이사자처럼", "LIKELION")}
      subtitle={t("글로벌신사업본부", "Global New Business")}
      summary={t(
        "입사 3일 차에 첫 MVP를 배포하고, 4개월간 제품 5개 이상을 단독으로 기획·개발·출시",
        "Shipped the first MVP on day 3 and planned, built, and launched 5+ products solo in 4 months"
      )}
      meta={[
        "Full-time",
        "Problem Solver · Sep 2026 – Present",
        "AI Product Manager · Apr–Sep 2026",
      ]}
      links={[{ label: "salary-fyi.com", href: "https://salary-fyi.com" }]}
      prev={{ label: t("메인으로", "Home"), href: "/#experience" }}
      next={{ label: "Planfit", href: "/experience/planfit" }}
    >
      <Section id="context" title="Context">
        <Prose>
          <p>
            {t(
              "AI Product Manager로 시작해 현재 Problem Solver. 입사 3일 차에 첫 MVP 배포, 4개월간 제품 5개 이상을 단독으로 기획·개발·출시. 2026년 9월부터 애니멀리그 공개 플랫폼 PM 담당(출시 전).",
              "Joined as AI Product Manager, now Problem Solver. Shipped the first MVP on day 3 and planned, built, and launched 5+ products solo in 4 months. Since Sep 2026, also PM for the Animal League public platform (pre-launch)."
            )}
          </p>
        </Prose>
        <Facts
          items={[
            {
              label: t("포지션", "Position"),
              value: (
                <>
                  Problem Solver · Sep 2026 – Present
                  <br />
                  AI Product Manager · Apr–Sep 2026
                </>
              ),
            },
            {
              label: t("소속", "Team"),
              value: t("글로벌신사업본부 · 서울", "Global New Business · Seoul"),
            },
            {
              label: t("담당 제품", "Products"),
              value: t(
                "Salary FYI · 채용 업무 자동화 · 크로스보더 협업 툴 · KTC · 애니멀리그",
                "Salary FYI · Hiring automation · Cross-border collaboration tool · KTC · Animal League"
              ),
            },
            {
              label: t("AI 활용", "AI"),
              value: t(
                "LLM 활용 제품 기획·개발 · 업무 자동화 · Claude Code",
                "LLM-based product development · Workflow automation · Claude Code"
              ),
            },
          ]}
        />
      </Section>

      <Section id="projects" title="Projects">
        <Story
          id="fyi"
          kicker="Project 01 — salary-fyi.com"
          title="Salary FYI"
          lede={t(
            "베트남 IT 인재와 한국 기업을 연결하는 채용 플랫폼. 검증된 연봉 데이터를 기반으로 인재를 모음. 웹, 모바일 앱, 커뮤니티, 어드민 대시보드까지 제품 전체를 담당.",
            "A hiring platform connecting Vietnamese IT talent with Korean companies, built around verified salary data. Owned the whole product: web, mobile app, community, and admin dashboard."
          )}
          result={{
            value: t("지원 1만+", "10K+"),
            label: t(
              "채용 공고 지원 · 출시 5개월 만에",
              "Job applications · within 5 months of launch"
            ),
            note: t("가입자의 60%가 이력서 등록", "60% of sign-ups registered a resume"),
          }}
        >
          <Phase
            num="01"
            label="Metrics"
            title={t("지표 (Apr 20 – Oct 6, 2026 기준)", "Metrics (Apr 20 – Oct 6, 2026)")}
          >
            <Figures
              items={[
                { value: t("12.4만", "124K"), label: t("방문 세션", "Sessions") },
                { value: "8,800+", label: t("가입자 (명)", "Sign-ups") },
                { value: "5,300+", label: t("이력서 등록 (건)", "Resumes registered") },
                { value: t("1만+", "10K+"), label: t("채용 공고 지원 (건)", "Job applications") },
              ]}
            />
            <dl className="text-sm">
              {[
                {
                  label: t("최근 30일 (Sep 7 – Oct 6)", "Last 30 days (Sep 7 – Oct 6)"),
                  value: t("신규 가입 3,000+ · 전체의 35%", "3,000+ new sign-ups · 35% of total"),
                  note: t(
                    "이력서 등록 대부분이 이 한 달에 집중",
                    "Most resume registrations happened in this month"
                  ),
                },
                {
                  label: "MAU",
                  value: t("3만", "30K"),
                  note: t(
                    "출시 4개월 만에 · 활성 사용자 매월 65~80% 성장",
                    "Within 4 months of launch · active users growing 65–80% monthly"
                  ),
                },
                {
                  label: t("연봉 정보", "Salary data"),
                  value: t("12,517건 · 4,064개 회사", "12,517 entries · 4,064 companies"),
                  note: t("자연 유입 7,455 / 광고 유입 5,062", "7,455 organic / 5,062 from ads"),
                },
                { label: t("채용 페이지 조회", "Job page views"), value: t("7.1만", "71K") },
                { label: t("공고 카드 클릭", "Job card clicks"), value: t("4.1만", "41K") },
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

          <Phase num="02" label="Decisions" title={t("주요 성과와 판단", "Key results and decisions")}>
            <Rows
              items={[
                {
                  title: t("이력서 공개율", "Resume visibility rate"),
                  sub: "7.7% → 88.3%",
                  body: t(
                    "원탭 지원과 LLM 타깃 캠페인(클릭률 14~30%)으로 이력서 공개율을 7.7%에서 88.3%로 개선.",
                    "Raised the resume visibility rate from 7.7% to 88.3% with one-tap apply and LLM-targeted campaigns (14–30% click-through)."
                  ),
                },
                {
                  title: t("KPI 재정의", "KPI redefinition"),
                  sub: t("지원율 79배", "79x application rate"),
                  body: t(
                    "이력서를 등록한 유저의 지원율이 79배 높다는 점을 발견해 팀 KPI를 재정의하고 광고 예산을 전면 재배분.",
                    "Found that users with a registered resume apply 79x more often; redefined the team KPI around it and reallocated the entire ad budget."
                  ),
                },
                {
                  title: t("인재풀 확대", "Talent pool"),
                  sub: t("콜드메일 2만 건+", "20K+ cold emails"),
                  body: t(
                    "맞춤 콜드메일을 2만 건 이상 발송해 인재풀을 확대.",
                    "Sent 20,000+ personalized cold emails to expand the talent pool."
                  ),
                },
                {
                  title: t("공고 추천 메일", "Job recommendation emails"),
                  body: t(
                    "기업 JD를 받아 요건에 맞는 인재에게 공고 추천 메일을 보내 빠르게 지원을 만드는 운영 방식 정착.",
                    "Set up an operating routine: take a company's JD, email matching candidates a recommendation, and generate applications fast."
                  ),
                },
                {
                  title: t("가입 경로 추적", "Sign-up attribution"),
                  body: t(
                    "UTM 규칙을 만들어 게시글별 가입 경로를 추적할 수 있게 개선.",
                    "Defined UTM rules so sign-ups can be traced back to individual posts."
                  ),
                },
                {
                  title: t("마케터용 도구", "Tool for marketers"),
                  body: t(
                    "마케터용 공고 묶음 링크 생성기를 제작.",
                    "Built a generator for bundled job-posting links."
                  ),
                },
              ]}
            />
          </Phase>
        </Story>

        <Story
          id="hiring"
          kicker="Project 02 — Hiring Automation"
          title={t("채용 업무 자동화", "Hiring Automation")}
          lede={t(
            "이력서 검토, AI 인터뷰, 최종 평가, 결과 메일 발송까지 8단계 전 과정을 자동화해, 스프레드시트 수작업 운영을 대체.",
            "Automated the 8-step hiring workflow end to end, from resume review and AI interviews to final evaluation and result emails, replacing manual spreadsheet operations."
          )}
          result={{ value: t("8단계", "8 steps"), label: t("전 과정 자동화", "fully automated") }}
          ledger={[
            {
              label: t("구성", "Components"),
              value: t(
                "LLM 이력서 스크리닝 · AI 음성 인터뷰 · 인터뷰 트래킹 · 슬랙 봇",
                "LLM resume screening · AI voice interview · Interview tracking · Slack bot"
              ),
            },
            {
              label: t("대체한 것", "Replaced"),
              value: t("스프레드시트 수작업 운영", "Manual spreadsheet operations"),
            },
          ]}
        />

        <Story
          id="collab-tool"
          kicker="Project 03 — Cross-border Collaboration"
          title={t("크로스보더 협업 툴", "Cross-border Collaboration Tool")}
          lede={t(
            "베트남 구성원과의 소통 비효율을 줄이려고, 실시간 번역이 되는 프로젝트 관리 툴 제작.",
            "Built a project management tool with real-time translation to cut communication overhead with Vietnamese team members."
          )}
        >
          <Note label={t("배운 점", "What I learned")}>
            {lang === "ko" ? (
              <>
                기능을 빨리 만드는 것보다, 사용자가 새 툴에 적응하는 시간(
                <B>온보딩</B>)까지 설계해야 한다는 것.
              </>
            ) : (
              <>
                Shipping features fast matters less than designing for the time
                users need to adapt to a new tool: <B>onboarding</B>.
              </>
            )}
          </Note>
        </Story>

        <Story
          id="ktc"
          kicker={t("Project 04 — 정부지원사업", "Project 04 — Government-funded program")}
          title="KTC"
          lede={t(
            "한국 스타트업에 베트남 원격 개발자, 디자이너, 마케터를 매칭하는 정부지원사업을 담당.",
            "Ran a government-funded program matching Korean startups with remote Vietnamese developers, designers, and marketers."
          )}
          result={{
            value: t("3시간 → 즉시", "3 hrs → instant"),
            label: t("이력서 한국어 번역", "Resume translation into Korean"),
          }}
        >
          <div className="mt-6">
            <Rows
              items={[
                {
                  title: t("이력서 한국어 번역 기능", "Korean resume translation"),
                  body: t(
                    "건당 약 3시간 걸리던 번역 요청을 즉시 생성으로 단축.",
                    "Cut translation requests from about 3 hours each to instant generation."
                  ),
                },
                {
                  title: t("현지 운영", "On-site operations"),
                  sub: t("다낭 · Sep 30, 2026", "Da Nang · Sep 30, 2026"),
                  body: t(
                    "K-Tech College Job Matching Weekend 2026을 현지에서 운영.",
                    "Ran the K-Tech College Job Matching Weekend 2026 on site."
                  ),
                },
              ]}
            />
          </div>
        </Story>
      </Section>
    </CasePage>
  );
}
