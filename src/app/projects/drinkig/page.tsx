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

export const metadata: Metadata = {
  title: "Drinkig | 위승주",
  description: "와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱",
};

const screens = [
  "/images/drinkig-screen-1.png",
  "/images/drinkig-screen-2.png",
  "/images/drinkig-screen-3.png",
  "/images/drinkig-screen-4.png",
];

export default function DrinkigPage() {
  return (
    <CasePage
      back={{ label: "Projects", href: "/#projects" }}
      title="Drinkig"
      subtitle="드링키지"
      summary="와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱"
      meta={[
        "1인 기획 · 개발",
        "2025 홍익인 창업페스티벌 2등",
        "Jan 2026 – Present",
      ]}
      links={[
        { label: "웹사이트", href: "https://drinkig.com/" },
        {
          label: "App Store",
          href: "https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80-%EC%B7%A8%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%99%80%EC%9D%B8-%EC%B6%94%EC%B2%9C%EA%B3%BC-%EA%B8%B0%EB%A1%9D/id6741486172",
        },
      ]}
      hero={{
        src: "/images/drinkig.png",
        alt: "드링키지 메인",
        width: 1920,
        height: 1080,
      }}
      prev={{ label: "Planfit", href: "/experience/planfit" }}
      next={{ label: "다음: Gourmevel", href: "/projects/gourmevel" }}
    >
      <Section id="problem" title="Problem">
        <Prose>
          <p>
            와인을 처음 접하는 사람에게 “달다”의 기준은 와인을 좋아하는 사람의
            “달다”와 전혀 다름. 같은 단어를 쓰지만 서로 다른 것을 이야기하고
            있는 셈. 이런 기준의 불일치가 와인 입문의 장벽을 불필요하게
            높이고 있었음.
          </p>
        </Prose>
        <Facts
          items={[
            { label: "역할", value: "1인 기획 · 디자인 · 개발" },
            { label: "기간", value: "Jan 2026 – Present" },
            {
              label: "기술 스택",
              value:
                "React Native · MySQL · Figma · Cursor · Claude · Antigravity",
            },
            {
              label: "성과",
              value: (
                <>
                  2025 홍익인 창업페스티벌 2등 수상{" "}
                  <a
                    href="https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link whitespace-nowrap"
                  >
                    기사 보기 ↗
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
              alt={`드링키지 화면 ${i + 1}`}
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
            <>
              코드를 버리고,
              <br />
              <span className="mark">문제를 다시</span> 썼다.
            </>
          }
          lede="팀 프로젝트로 출시했던 v1이 초기 검증에 실패하고 팀이 해체된 뒤, 6개월의 공백과 회고를 거쳐 문제 정의부터 다시 쓰고 혼자 힘으로 App Store에 재출시하기까지의 과정."
          result={{
            value: "2개월",
            label: "Solo full-cycle",
            note: "기획 · 디자인 · 개발 · 출시",
          }}
        >
          <Phase
            num="01"
            label="Failure"
            title="출시는 했지만, 유저는 없었다"
          >
            <Prose>
              <p>
                <B>아이디어 오너 · PM(기획) 리드</B>로서 6명의 개발자, 3명의
                디자이너와 함께 10인 팀 프로젝트를 구성해 Swift · UIKit 기반
                iOS 앱을 App Store에 출시. 에디터가 선별한 와인 카드 +
                유저 테이스팅 노트 기록을 핵심 기능으로 잡고, SNS 광고와 지인
                유입을 돌렸지만 활성 유저는 확보되지 않음. 2025년 6월
                팀원들이 취업 준비에 들어가면서 프로젝트는 중단.
              </p>
              <p>
                v1은 실패로 마무리됐지만, 그대로 끝내지 않고 혼자 다시
                시작.
              </p>
            </Prose>
          </Phase>

          <Phase
            num="02"
            label="Diagnosis"
            title={
              <>
                문제는 구현이 아니라,
                <br />
                타겟과 기능이 어긋나 있었다
              </>
            }
          >
            <Reasoning
              steps={[
                {
                  label: "관찰",
                  title: "타겟은 ‘초보’, 핵심 기능은 ‘테이스팅 노트’",
                  body: "앱이 내세운 타겟은 와인 입문자였지만, 앱의 중심 기능은 향과 맛을 직접 언어화해 기록하는 테이스팅 노트였음. 이건 본질적으로 숙련자의 도구.",
                },
                {
                  label: "진단",
                  title: (
                    <>
                      초보는{" "}
                      <span className="mark">자기 취향 자체를 모른다</span>
                    </>
                  ),
                  body: "초보에게 ‘달다’의 기준은 애호가의 ‘달다’와 완전히 다름. 기록할 언어가 없는 사람에게 기록 기능을 주는 건, 입문 장벽을 오히려 높이는 일.",
                },
                {
                  label: "재정의",
                  title: "기록이 아니라, 취향 발견이 먼저다",
                  body: "제품의 진입점을 ‘테이스팅 노트’에서 ‘취향 테스트’로 옮김. 초보가 자기 언어 없이도 시작할 수 있어야, 그 다음이 열림.",
                },
              ]}
            />
          </Phase>

          <Phase
            num="03"
            label="Rebuild"
            title={
              <>
                Swift 코드를 전부 버리고,
                <br />
                처음부터 다시 짰다
              </>
            }
          >
            <Compare
              before={{
                label: "v1 · AS-IS",
                title: "에디터 큐레이션 + 테이스팅 노트 기록",
                items: [
                  "Swift · 팀 프로젝트",
                  "추천이 취향과 무관한 일방 큐레이션",
                  "핵심 기능이 타겟(초보)에게 너무 어려움",
                  "초기 검증 실패 · 프로젝트 중단",
                ],
              }}
              after={{
                label: "v2 · TO-BE",
                title: "취향 테스트 기반 매칭 큐레이션",
                items: [
                  "React Native · 1인 풀사이클",
                  "간단한 취향 테스트로 맛 선호도 파악",
                  "매칭 점수로 ‘나와 맞는 정도’를 가시화",
                  "마셔본 기록이 쌓일수록 정확도가 올라가는 구조",
                ],
              }}
            />

            <div className="mt-8">
              <Steps
                items={[
                  {
                    n: "01",
                    title: "Figma Make로 전체 플로우 프로토타이핑",
                    body: "테이스팅 노트 기능 제거 후, 취향 테스트 → 매칭 점수 → 와인 상세 3단계 플로우를 Figma Make로 먼저 그림. 1인이 2개월 안에 배포 가능한 MVP 범위로 스코프를 고정.",
                    tools: ["Figma Make", "Figma"],
                  },
                  {
                    n: "02",
                    title: "React Native 전면 리라이트 · MySQL 스키마 재설계",
                    body: "Swift/UIKit 코드베이스를 폐기하고 React Native로 iOS 빌드. Claude로 매칭 점수 로직과 MySQL 스키마를 설계하고, Cursor에서 일일 빌드-테스트-수정 루프로 개발 속도를 확보.",
                    tools: ["React Native", "MySQL", "Claude", "Cursor"],
                  },
                  {
                    n: "03",
                    title: "AI 도구로 디자이너 없이 비주얼 에셋 확보",
                    body: "Antigravity로 UI/UX 피드백, Midjourney · Veo로 로딩 화면 영상, Nano Banana로 아이콘 · 일러스트를 생성. 1인 조직에서 부족한 디자인 리소스를 AI 파이프라인으로 메꿈.",
                    tools: ["Antigravity", "Midjourney", "Veo", "Nano Banana"],
                  },
                  {
                    n: "04",
                    title: "TestFlight 내부 배포 → App Store 재출시",
                    body: "약 2개월 만에 App Store 재심사 · 재출시. 현재까지 1인으로 운영하며 유저 피드백 기반으로 매칭 로직과 UI를 개선 중.",
                    tools: ["TestFlight", "App Store Connect"],
                  },
                ]}
              />
            </div>

          </Phase>
        </Story>
      </Section>

    </CasePage>
  );
}
