import type { Metadata } from "next";
import Image from "next/image";
import {
  B,
  CasePage,
  Compare,
  Facts,
  Phase,
  Prose,
  Reasoning,
  Section,
  Steps,
  Story,
} from "@/components/CaseStudy";
import JsonLd, { PERSON, SITE_URL } from "@/components/JsonLd";
import { alternatesFor, pick, type Lang } from "@/i18n";

const PATH = "/projects/drinkig";
const APP_STORE =
  "https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80-%EC%B7%A8%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%99%80%EC%9D%B8-%EC%B6%94%EC%B2%9C%EA%B3%BC-%EA%B8%B0%EB%A1%9D/id6741486172";
const AWARD_ARTICLE =
  "https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "드링키지",
  alternateName: "Drinkig",
  description:
    "와인 입문자의 진입장벽을 낮추는 AI 와인 큐레이팅 앱. 취향, 테이스팅 노트, 품종 기반 개인화 추천.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  url: "https://drinkig.com/",
  installUrl: APP_STORE,
  author: PERSON,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

const screens = [
  "/images/drinkig-screen-1.png",
  "/images/drinkig-screen-2.png",
  "/images/drinkig-screen-3.png",
  "/images/drinkig-screen-4.png",
];

export function drinkigMetadata(lang: Lang): Metadata {
  return {
    title: lang === "ko" ? "드링키지 Drinkig — AI 와인 큐레이팅 앱" : { absolute: "Drinkig — AI Wine Curation App | Seungju Wi" },
    description: pick(
      lang,
      "위승주가 1인으로 기획·디자인·개발한 AI 와인 큐레이팅 앱 드링키지(Drinkig). 와인 입문자를 위한 취향 기반 추천, React Native, App Store 출시, 홍익대학교 창업경진대회 우수상.",
      "Drinkig (드링키지), an AI wine curation app planned, designed, and built solo by Seungju Wi. Taste-based recommendations for wine beginners, React Native, on the App Store, 2nd place at the Hongik University Startup Competition."
    ),
    alternates: alternatesFor(lang, PATH),
    ...(lang === "en" ? { openGraph: { locale: "en_US" } } : {}),
  };
}

export default function DrinkigCase({ lang }: { lang: Lang }) {
  const t = <T,>(ko: T, en: T) => pick(lang, ko, en);
  return (
    <>
      <JsonLd data={jsonLd} />
      <CasePage
        lang={lang}
        path={PATH}
        back={{ label: "Projects", href: "/#projects" }}
        title="Drinkig"
        subtitle="드링키지"
        summary={t(
          "와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱",
          "A taste-based wine curation app that lowers the barrier for beginners"
        )}
        meta={[
          t("1인 기획 · 개발", "Solo planning · development"),
          t("2025 홍익인 창업페스티벌 2등", "2nd place, 2025 Hongik Startup Festival"),
          "Jan 2026 – Present",
        ]}
        links={[
          { label: t("웹사이트", "Website"), href: "https://drinkig.com/" },
          { label: "App Store", href: APP_STORE },
        ]}
        hero={{
          src: "/images/drinkig.png",
          alt: t("드링키지 메인", "Drinkig main screen"),
          width: 1920,
          height: 1080,
        }}
        prev={{ label: "Planfit", href: "/experience/planfit" }}
        next={{ label: t("다음: Gourmevel", "Next: Gourmevel"), href: "/projects/gourmevel" }}
      >
        <Section id="problem" title="Problem">
          <Prose>
            <p>
              {t(
                "와인을 처음 접하는 사람에게 “달다”의 기준은 와인을 좋아하는 사람의 “달다”와 전혀 다름. 같은 단어를 쓰지만 서로 다른 것을 이야기하고 있는 셈. 이런 기준의 불일치가 와인 입문의 장벽을 불필요하게 높이고 있었음.",
                "For someone new to wine, “sweet” means something completely different from what it means to a wine lover. Same word, different things. That mismatch raised the barrier to entry more than it needed to."
              )}
            </p>
          </Prose>
          <Facts
            items={[
              { label: t("역할", "Role"), value: t("1인 기획 · 디자인 · 개발", "Solo planning · design · development") },
              { label: t("기간", "Period"), value: "Jan 2026 – Present" },
              {
                label: t("기술 스택", "Stack"),
                value: "React Native · MySQL · Figma · Cursor · Claude · Antigravity",
              },
              {
                label: t("성과", "Award"),
                value: (
                  <>
                    {t("2025 홍익인 창업페스티벌 2등 수상", "2nd place, 2025 Hongik Startup Festival")}{" "}
                    <a
                      href={AWARD_ARTICLE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link whitespace-nowrap"
                    >
                      {t("기사 보기 ↗", "Article ↗")}
                    </a>
                  </>
                ),
              },
            ]}
          />
        </Section>

        <Section id="key-features" title="Key Features">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {screens.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={t(`드링키지 화면 ${i + 1}`, `Drinkig screen ${i + 1}`)}
                width={1242}
                height={2688}
                sizes="(max-width: 640px) 50vw, 170px"
                className="h-auto w-full border border-rule"
              />
            ))}
          </div>
        </Section>

        <Section id="journey" title="0 → 1 Journey">
          <Story
            kicker="Rebuild — From Failed v1 to App Store Relaunch"
            title={
              lang === "ko" ? (
                <>
                  코드를 버리고,
                  <br />
                  <span className="mark">문제를 다시</span> 썼다.
                </>
              ) : (
                <>
                  Threw out the code,
                  <br />
                  <span className="mark">rewrote the problem</span>.
                </>
              )
            }
            lede={t(
              "팀 프로젝트로 출시했던 v1이 초기 검증에 실패하고 팀이 해체된 뒤, 6개월의 공백과 회고를 거쳐 문제 정의부터 다시 쓰고 혼자 힘으로 App Store에 재출시하기까지의 과정.",
              "After v1, a team project, failed early validation and the team disbanded, six months of reflection led to rewriting the problem definition and relaunching on the App Store alone."
            )}
            result={{
              value: t("2개월", "2 months"),
              label: "Solo full-cycle",
              note: t("기획 · 디자인 · 개발 · 출시", "Planning · design · development · launch"),
            }}
          >
            <Phase
              num="01"
              label="Failure"
              title={t("출시는 했지만, 유저는 없었다", "Launched, but no users")}
            >
              <Prose>
                <p>
                  {lang === "ko" ? (
                    <>
                      <B>아이디어 오너 · PM(기획) 리드</B>로서 6명의 개발자, 3명의
                      디자이너와 함께 10인 팀 프로젝트를 구성해 Swift · UIKit 기반
                      iOS 앱을 App Store에 출시. 에디터가 선별한 와인 카드 + 유저
                      테이스팅 노트 기록을 핵심 기능으로 잡고, SNS 광고와 지인
                      유입을 돌렸지만 활성 유저는 확보되지 않음. 2025년 6월
                      팀원들이 취업 준비에 들어가면서 프로젝트는 중단.
                    </>
                  ) : (
                    <>
                      As <B>idea owner and PM lead</B>, formed a 10-person team
                      with 6 developers and 3 designers and shipped a Swift/UIKit
                      iOS app to the App Store. The core features were
                      editor-picked wine cards and user tasting notes; social ads
                      and word of mouth brought traffic, but no active users. In
                      June 2025 the team moved on to job hunting and the project
                      stopped.
                    </>
                  )}
                </p>
                <p>
                  {t(
                    "v1은 실패로 마무리됐지만, 그대로 끝내지 않고 혼자 다시 시작.",
                    "v1 ended in failure, but instead of leaving it there, started over alone."
                  )}
                </p>
              </Prose>
            </Phase>

            <Phase
              num="02"
              label="Diagnosis"
              title={
                lang === "ko" ? (
                  <>
                    문제는 구현이 아니라,
                    <br />
                    타겟과 기능이 어긋나 있었다
                  </>
                ) : (
                  <>
                    The problem wasn’t the build:
                    <br />
                    target and features were misaligned
                  </>
                )
              }
            >
              <Reasoning
                steps={[
                  {
                    label: t("관찰", "Observation"),
                    title: t(
                      "타겟은 ‘초보’, 핵심 기능은 ‘테이스팅 노트’",
                      "Target: beginners. Core feature: tasting notes"
                    ),
                    body: t(
                      "앱이 내세운 타겟은 와인 입문자였지만, 앱의 중심 기능은 향과 맛을 직접 언어화해 기록하는 테이스팅 노트였음. 이건 본질적으로 숙련자의 도구.",
                      "The app targeted wine beginners, but its core feature was writing tasting notes, putting aroma and flavor into words. That is fundamentally an expert’s tool."
                    ),
                  },
                  {
                    label: t("진단", "Diagnosis"),
                    title:
                      lang === "ko" ? (
                        <>
                          초보는{" "}
                          <span className="mark">자기 취향 자체를 모른다</span>
                        </>
                      ) : (
                        <>
                          Beginners{" "}
                          <span className="mark">don’t know their own taste yet</span>
                        </>
                      ),
                    body: t(
                      "초보에게 ‘달다’의 기준은 애호가의 ‘달다’와 완전히 다름. 기록할 언어가 없는 사람에게 기록 기능을 주는 건, 입문 장벽을 오히려 높이는 일.",
                      "A beginner’s “sweet” is nothing like an enthusiast’s. Giving a recording tool to someone without the vocabulary only raises the barrier."
                    ),
                  },
                  {
                    label: t("재정의", "Redefinition"),
                    title: t("기록이 아니라, 취향 발견이 먼저다", "Discover taste first, record later"),
                    body: t(
                      "제품의 진입점을 ‘테이스팅 노트’에서 ‘취향 테스트’로 옮김. 초보가 자기 언어 없이도 시작할 수 있어야, 그 다음이 열림.",
                      "Moved the entry point from tasting notes to a taste test. Beginners need a way to start without the vocabulary; everything else follows."
                    ),
                  },
                ]}
              />
            </Phase>

            <Phase
              num="03"
              label="Rebuild"
              title={
                lang === "ko" ? (
                  <>
                    Swift 코드를 전부 버리고,
                    <br />
                    처음부터 다시 짰다
                  </>
                ) : (
                  <>
                    Dropped all the Swift code
                    <br />
                    and rebuilt from scratch
                  </>
                )
              }
            >
              <Compare
                before={{
                  label: "v1 · AS-IS",
                  title: t("에디터 큐레이션 + 테이스팅 노트 기록", "Editor curation + tasting notes"),
                  items: [
                    t("Swift · 팀 프로젝트", "Swift · team project"),
                    t("추천이 취향과 무관한 일방 큐레이션", "One-way curation unrelated to taste"),
                    t("핵심 기능이 타겟(초보)에게 너무 어려움", "Core feature too hard for the target (beginners)"),
                    t("초기 검증 실패 · 프로젝트 중단", "Failed early validation · project stopped"),
                  ],
                }}
                after={{
                  label: "v2 · TO-BE",
                  title: t("취향 테스트 기반 매칭 큐레이션", "Taste-test-based matching"),
                  items: [
                    t("React Native · 1인 풀사이클", "React Native · solo full-cycle"),
                    t("간단한 취향 테스트로 맛 선호도 파악", "A short taste test captures flavor preferences"),
                    t("매칭 점수로 ‘나와 맞는 정도’를 가시화", "A match score shows how well a wine fits you"),
                    t("마셔본 기록이 쌓일수록 정확도가 올라가는 구조", "Accuracy improves as you log what you’ve tried"),
                  ],
                }}
              />

              <div className="mt-8">
                <Steps
                  items={[
                    {
                      n: "01",
                      title: t("Figma Make로 전체 플로우 프로토타이핑", "Prototype the whole flow in Figma Make"),
                      body: t(
                        "테이스팅 노트 기능 제거 후, 취향 테스트 → 매칭 점수 → 와인 상세 3단계 플로우를 Figma Make로 먼저 그림. 1인이 2개월 안에 배포 가능한 MVP 범위로 스코프를 고정.",
                        "Removed tasting notes and drew the three-step flow (taste test → match score → wine detail) in Figma Make first. Fixed the scope to an MVP one person could ship in two months."
                      ),
                      tools: ["Figma Make", "Figma"],
                    },
                    {
                      n: "02",
                      title: t("React Native 전면 리라이트 · MySQL 스키마 재설계", "Full rewrite in React Native · new MySQL schema"),
                      body: t(
                        "Swift/UIKit 코드베이스를 폐기하고 React Native로 iOS 빌드. Claude로 매칭 점수 로직과 MySQL 스키마를 설계하고, Cursor에서 일일 빌드-테스트-수정 루프로 개발 속도를 확보.",
                        "Dropped the Swift/UIKit codebase and built for iOS in React Native. Designed the match-score logic and MySQL schema with Claude, and kept a daily build-test-fix loop in Cursor."
                      ),
                      tools: ["React Native", "MySQL", "Claude", "Cursor"],
                    },
                    {
                      n: "03",
                      title: t("AI 도구로 디자이너 없이 비주얼 에셋 확보", "Visual assets with AI, no designer"),
                      body: t(
                        "Antigravity로 UI/UX 피드백, Midjourney · Veo로 로딩 화면 영상, Nano Banana로 아이콘 · 일러스트를 생성. 1인 조직에서 부족한 디자인 리소스를 AI 파이프라인으로 메꿈.",
                        "Antigravity for UI/UX feedback, Midjourney and Veo for the loading video, Nano Banana for icons and illustrations. An AI pipeline covered the design resources a one-person team lacks."
                      ),
                      tools: ["Antigravity", "Midjourney", "Veo", "Nano Banana"],
                    },
                    {
                      n: "04",
                      title: t("TestFlight 내부 배포 → App Store 재출시", "TestFlight → App Store relaunch"),
                      body: t(
                        "약 2개월 만에 App Store 재심사 · 재출시. 현재까지 1인으로 운영하며 유저 피드백 기반으로 매칭 로직과 UI를 개선 중.",
                        "Resubmitted and relaunched on the App Store in about two months. Still operating solo, improving the matching logic and UI from user feedback."
                      ),
                      tools: ["TestFlight", "App Store Connect"],
                    },
                  ]}
                />
              </div>
            </Phase>
          </Story>
        </Section>
      </CasePage>
    </>
  );
}
