import type { Metadata } from "next";
import {
  CasePage,
  Facts,
  Figures,
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
      "위승주의 멋쟁이사자처럼 글로벌신사업본부 경력. 베트남 IT 인재 채용 플랫폼 Salary FYI 제품 전체 담당, 출시 6개월 만에 가입 10,000명+·채용 지원 14,000건+. 채용 업무 자동화, K-Tech College, 애니멀리그.",
      "Seungju WI at LIKELION's Global New Business division: owned Salary FYI, a hiring platform for Vietnamese IT talent, reaching 10,000+ sign-ups and 14,000+ job applications within 6 months of launch. Hiring automation, K-Tech College, and Animal League."
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
      links={[
        { label: "salary-fyi.com", href: "https://salary-fyi.com" },
        { label: "animal-league.kr", href: "https://animal-league.kr" },
      ]}
      prev={{ label: t("메인으로", "Home"), href: "/#experience" }}
      next={{ label: "Planfit", href: "/experience/planfit" }}
    >
      <Section id="context" title="Context">
        <Prose>
          <p>
            {t(
              "AI Product Manager로 시작해 현재 Problem Solver. 입사 3일 차에 첫 MVP 배포, 4개월간 제품 5개 이상을 단독으로 기획·개발·출시. 2026년 9월부터 애니멀리그 공개 플랫폼 PM 담당(2026.11 런칭).",
              "Joined as AI Product Manager, now Problem Solver. Shipped the first MVP on day 3 and planned, built, and launched 5+ products solo in 4 months. Since Sep 2026, also PM for the Animal League public platform (launched Nov 2026)."
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
                "Salary FYI · 채용 업무 자동화 · K-Tech College · 애니멀리그",
                "Salary FYI · Hiring automation · K-Tech College · Animal League"
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
          collapse={lang}
          id="fyi"
          kicker="Project 01 — salary-fyi.com"
          title="Salary FYI"
          lede={t(
            "베트남 IT 인재와 한국 기업을 연결하는 채용 플랫폼. 검증된 연봉 데이터를 기반으로 인재를 모음. 웹, 모바일 앱, 커뮤니티, 어드민 대시보드까지 **제품 전체를 담당**.",
            "A hiring platform connecting Vietnamese IT talent with Korean companies, built around verified salary data. **Owned the whole product**: web, mobile app, community, and admin dashboard."
          )}
          result={{
            value: t("지원 14,000+", "14,000+"),
            label: t(
              "채용 공고 지원 · 출시 6개월 만에",
              "Job applications · within 6 months of launch"
            ),
            note: t("가입자의 60%가 이력서 등록", "60% of sign-ups registered a resume"),
          }}
          highlight={
            <Figures
              items={[
                { value: t("12.4만", "124K"), label: t("방문 세션", "Sessions") },
                { value: "10,000+", label: t("가입자 (명)", "Sign-ups") },
                { value: "6,600+", label: t("이력서 등록 (건)", "Resumes registered") },
                { value: "14,000+", label: t("채용 공고 지원 (건)", "Job applications") },
              ]}
            />
          }
        >
          <Phase
            num="01"
            label="Metrics"
            title={t("지표 (Apr 20 – Nov 9, 2026 기준)", "Metrics (Apr 20 – Nov 9, 2026)")}
          >
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
                    "출시 6개월 만에 · 활성 사용자 매월 65~80% 성장",
                    "Within 6 months of launch · active users growing 65–80% monthly"
                  ),
                },
                {
                  label: t("연봉 정보", "Salary data"),
                  value: t("17,000건+ · 4,200개+ 회사", "17,000+ entries · 4,200+ companies"),
                  note: t(
                    "약 69%가 자연 유입 (12,000건+)",
                    "~69% organic (12,000+ entries)"
                  ),
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
                  title: t("가입 퍼널 재설계", "Sign-up funnel redesign"),
                  sub: "1.5% → 14.4%",
                  body: t(
                    "K-Tech College 지원자 CV로 FYI 프로필을 미리 만들어 두는 메일로 **가입 전환 1.5% → 14.4%**, 한 달 만에 **인재풀 680명 → 2,000명**.",
                    "Pre-built FYI profiles from K-Tech College applicants' CVs; **sign-up conversion 1.5% → 14.4%**, **talent pool 680 → 2,000** in one month."
                  ),
                },
                {
                  title: t("이력서 공개율", "Resume visibility rate"),
                  sub: "7.7% → 88.3%",
                  body: t(
                    "원탭 지원과 LLM 타깃 캠페인(클릭률 14~30%)으로 **이력서 공개율을 7.7%에서 88.3%로 개선**.",
                    "**Raised the resume visibility rate from 7.7% to 88.3%** with one-tap apply and LLM-targeted campaigns (14–30% click-through)."
                  ),
                },
                {
                  title: t("KPI 재정의", "KPI redefinition"),
                  sub: t("지원율 79배", "79x application rate"),
                  body: t(
                    "이력서를 등록한 유저의 **지원율이 79배 높다**는 점을 발견해 **팀 KPI를 재정의**하고 광고 예산을 전면 재배분.",
                    "Found that users with a registered resume **apply 79x more often**; **redefined the team KPI** around it and reallocated the entire ad budget."
                  ),
                },
                {
                  title: t("인재풀 확대", "Talent pool"),
                  sub: t("콜드메일 2만 건+", "20K+ cold emails"),
                  body: t(
                    "맞춤 콜드메일을 **2만 건 이상** 발송해 인재풀을 확대.",
                    "Sent **20,000+ personalized cold emails** to expand the talent pool."
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
          collapse={lang}
          id="hiring"
          kicker="Project 02 — Hiring Automation"
          title={t("채용 업무 자동화", "Hiring Automation")}
          lede={t(
            "외부 업체 없이 **인재 실력을 직접 검증**하도록 채용 8단계를 자체 구축. AI 음성 인터뷰도 **자체 서비스로 만들어 비용을 줄임**.",
            "Built the 8-step hiring pipeline in-house to **verify candidates ourselves**, without outside vendors. Made the AI voice interview **our own service to cut its cost**."
          )}
          result={{
            value: "$20K → $180",
            label: t("AI 음성 인터뷰 연간 예상 비용", "Projected AI voice interview cost per year"),
          }}
          ledger={[
            {
              label: t("AI 음성 인터뷰 비용", "AI voice interview cost"),
              value: t(
                "예상 연 약 2,800만 원(약 $20K) → 월 $15 수준",
                "~₩28M (~$20K)/yr projected → ~$15/mo"
              ),
            },
            {
              label: t("구성", "Components"),
              value: t(
                "LLM 이력서 스크리닝 · AI 음성 인터뷰 · 인터뷰 트래킹 · 슬랙 봇",
                "LLM resume screening · AI voice interview · Interview tracking · Slack bot"
              ),
            },
          ]}
        />

        <Story
          collapse={lang}
          id="ktc"
          kicker={t("Project 03 — 정부지원사업", "Project 03 — Government-funded program")}
          title="K-Tech College"
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
                    "건당 **약 3시간** 걸리던 번역 요청을 **즉시 생성**으로 단축.",
                    "Cut translation requests from **about 3 hours** each to **instant generation**."
                  ),
                },
                {
                  title: t("병목 재정의", "Bottleneck reframed"),
                  sub: t("공고 112개 전수 진단", "112 job posts audited"),
                  body: t(
                    "진행 중 공고 112개를 전수 진단해 **병목이 '기업 전달' 단계**임을 찾음(합격자 약 500명 대기). SLA, 지연 알림, 노쇼 관리를 자동화로 연결.",
                    "Audited all 112 open job posts and **found the bottleneck in company handoff** (~500 passed candidates waiting); automated SLA tracking, delay alerts, and no-show management."
                  ),
                },
                {
                  title: t("데이터 누락 복구", "Data recovery"),
                  sub: t("1,960건 복구 · 오류 0건", "1,960 recovered · 0 errors"),
                  body: t(
                    "지원자 동기화 누락의 원인을 찾아 식별 구조를 재설계. 누락 약 2,000건 중 **1,960건 복구, 오류 0건**.",
                    "Traced a candidate sync failure to its root cause and redesigned record identity; **recovered 1,960 of ~2,000 missing records with zero errors**."
                  ),
                },
                {
                  title: t("현지 운영", "On-site operations"),
                  body: t(
                    "K-Tech College Job Matching Weekend 2026을 다낭 현지에서 운영 (2026.09.30).",
                    "Ran the K-Tech College Job Matching Weekend 2026 on site in Da Nang (Sep 30, 2026)."
                  ),
                },
                {
                  title: t("크로스보더 협업 툴", "Cross-border collaboration tool"),
                  body: t(
                    "베트남 구성원과의 소통 비효율을 줄이려고 실시간 번역이 되는 프로젝트 관리 툴을 제작. 기능을 빨리 만드는 것보다 **사용자가 새 툴에 적응하는 시간(온보딩)까지 설계**해야 한다는 걸 배움.",
                    "Built a project management tool with real-time translation to cut communication overhead with Vietnamese team members. Learned that shipping features fast matters less than **designing for the time users need to adapt (onboarding)**."
                  ),
                },
              ]}
            />
          </div>
        </Story>

        <Story
          collapse={lang}
          id="animal-league"
          kicker="Project 04 — animal-league.kr"
          title={t("애니멀리그", "Animal League")}
          lede={t(
            "대학생 전용 커뮤니티를 누구나 참여하는 공개 해커톤 플랫폼으로 전환. PM으로 **킥오프 약 6주 만에 런칭**(2026.11).",
            "Turned a university-only community into an open hackathon platform. As PM, **launched about 6 weeks after kickoff** (Nov 2026)."
          )}
          result={{
            value: t("약 6주", "~6 weeks"),
            label: t("킥오프에서 런칭까지", "Kickoff to launch"),
          }}
        >
          <div className="mt-6">
            <Rows
              items={[
                {
                  title: t("범위 정리", "Scoping"),
                  sub: t("축소안 8개 중 7개 적용", "7 of 8 cuts adopted"),
                  body: t(
                    "2~3주 개발 일정에 맞춰 범위를 정리.",
                    "Scoped the product to fit a 2–3 week dev window."
                  ),
                },
                {
                  title: t("약관 리스크", "Terms-of-service risk"),
                  body: t(
                    "공개 전환에 걸리는 **약관 리스크를 개발 전에 발견**하고 대안을 설계.",
                    "**Flagged terms-of-service risk** for going public **before development started**, and designed the fix."
                  ),
                },
                {
                  title: t("일정 방어", "Schedule"),
                  body: t(
                    "C레벨 요청으로 핵심 기능이 바뀐 뒤에도 **조정된 일정에 맞춰 런칭**.",
                    "**Shipped on the revised schedule** after a C-level change to core features."
                  ),
                },
                {
                  title: t("QA 설계", "QA design"),
                  sub: t("체크리스트 1,243줄 · 219단계", "1,243-line checklist · 219 steps"),
                  body: t(
                    "QA 직접 설계 (어드민 체크리스트 1,243줄, 플로우 테스트 219단계).",
                    "Designed QA (1,243-line admin checklist, 219-step flow tests)."
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
