import type { Metadata } from "next";
import Image from "next/image";
import {
  B,
  CasePage,
  Facts,
  Phase,
  Prose,
  PullQuote,
  Reasoning,
  Section,
  Steps,
  Story,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Planfit AI Problem Solver 인턴",
  description:
    "위승주의 Planfit(플랜핏) 경력. 유료 구독 전환율 개선을 전담하며 약 3개월간 70건 이상의 실험을 설계·실행, AI 영상 페이월(+20%)과 Monetai 도입(+75%) 케이스 스터디.",
  alternates: { canonical: "/experience/planfit" },
};

export default function PlanfitPage() {
  return (
    <CasePage
      back={{ label: "Experience", href: "/#experience" }}
      title="Planfit"
      summary="AI 풀사이클 Solver로서 구독 전환율 개선을 담당"
      meta={[
        "AI Problem Solver · Internship",
        "Jun–Dec 2025",
        "70+ 실험",
        "CVR 최대 +75%",
      ]}
      hero={{
        src: "/images/planfit-hero.png",
        alt: "Planfit",
        width: 1920,
        height: 774,
      }}
      prev={{ label: "멋쟁이사자처럼", href: "/experience/likelion" }}
      next={{ label: "프로젝트: Drinkig", href: "/projects/drinkig" }}
    >
      <Section id="context" title="Context">
        <Prose>
          <p>
            AI 기반 피트니스 앱. 기획자·디자이너·개발자 간 소통 병목을 AI로 해결하는 신설 직무 ‘Solver’에 자원해 합류.
          </p>
          <p>
            기획·디자인·프론트엔드·QA를 1인 스프린트로 운영하며 무료→유료 구독 전환율 개선 담당. 약 3개월간 70건 이상의 실험 설계·실행, PRD 100건 이상 작성.
          </p>
        </Prose>
        <Facts
          items={[
            { label: "포지션", value: "AI Problem Solver · Internship" },
            { label: "기간", value: "Jun–Dec 2025 (재직 6개월)" },
            { label: "핵심 미션", value: "무료 유저 → 유료 구독 전환율 향상" },
            {
              label: "활용 스택",
              value: "Amplitude · Figma · Cursor · Claude · Veo",
            },
          ]}
        />
      </Section>

      <Section id="key-projects" title="Key Projects">
        <Story
          id="paywall"
          kicker="Project 01 — AI Video Paywall · New User"
          title={
            <>
              뻔한 할인을,
              <br />
              <span className="mark">특별한 시즌</span>으로.
            </>
          }
          lede="가입 7일 이하 신규 유저를 위한 크리스마스 한정 페이월. Veo·Midjourney로 생성한 AI 시즌 영상으로 ‘지금 결제해야 할 이유’를 만듦."
          result={{
            value: "+20%",
            label: "CVR Uplift",
            note: "목표 +10% 대비 2배 달성",
          }}
        >
          <Phase
            num="01"
            label="Thinking"
            title={
              <>
                할인율은 한 번도 건드리지 않고,
                <br />
                어떻게 전환율을 끌어올렸나?
              </>
            }
          >
            <Reasoning
              steps={[
                {
                  label: "관찰",
                  title: "할인권이 ‘당연한 것’이 되고 있었다",
                  body: "무료 유저에게 할인권은 상시 노출되는 요소였음. 유저들도 이미 ‘언제든 뜬다’는 걸 인지한 상태였고, 구매 전환율은 서서히 떨어지고 있었음.",
                },
                {
                  label: "진단",
                  title: (
                    <>
                      문제는 가격이 아니라{" "}
                      <span className="mark">‘특별함’</span>의 부재
                    </>
                  ),
                  body: "‘늘 있는 할인’은 혜택이 아니라 오히려 반감처럼 느껴짐. 즉 할인권을 더 크게 띄우는 건 답이 아니었음. 필요한 건 ‘지금 아니면 안 된다’는 맥락.",
                },
                {
                  label: "가설",
                  title: "시즌 맥락으로 ‘특별함’을 복원한다",
                  body: "상시 할인을 시즈널하게 감싸면, 동일한 혜택이라도 유저는 다시 ‘특별한 기회’로 인식할 것이라고 판단. 이를 검증하기 위한 첫 실험으로 크리스마스 한정 페이월을 설계.",
                },
              ]}
            />
            <PullQuote>
              같은 혜택이라도 <B>맥락</B>이 바뀌면 유저가 느끼는 <B>가치</B>는
              달라진다.
              <br />
              가격을 건드리지 않고, 인식을 건드리는 실험.
            </PullQuote>
          </Phase>

          <Phase num="02" label="Execution">
            <div className="grid gap-8 sm:grid-cols-[17rem_1fr]">
              <div>
                <p className="text-xs tracking-wide text-muted">
                  AS-IS / TO-BE
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <figure>
                    <Image
                      src="/images/planfit/paywall-before.png"
                      alt="기존 정적 선물상자 페이월"
                      width={375}
                      height={812}
                      sizes="140px"
                      className="h-auto w-full border border-rule"
                    />
                    <figcaption className="mt-2 text-xs leading-snug text-muted">
                      <span className="block font-medium text-ink">AS-IS</span>
                      정적 선물상자 이미지
                    </figcaption>
                  </figure>
                  <figure>
                    <video
                      src="/images/planfit/Use_the_provided_202512031817_kfb4k.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label="AI 시즌 영상 기반 크리스마스 페이월"
                      className="aspect-[375/812] w-full border border-rule object-cover"
                    />
                    <figcaption className="mt-2 text-xs leading-snug text-muted">
                      <span className="block font-medium text-point">TO-BE</span>
                      AI 시즌 영상
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-wide text-muted">
                  How it was built
                </p>
                <Steps
                  items={[
                    {
                      n: "01",
                      tag: "FIGMA · CONCEPT",
                      title: "시즌 한정 컨셉 정의",
                      body: "‘지금 아니면 안 된다’는 심리를 만들 첫 테스트베드로 크리스마스 한정 페이월을 선정. 카피·비주얼 톤·랜딩 구조까지 Figma에서 직접 설계.",
                    },
                    {
                      n: "02",
                      tag: "VEO · MIDJOURNEY",
                      title: "AI로 시즌 애니메이션 영상 직접 제작",
                      body: "Veo·Midjourney로 크리스마스 시즌 애니메이션 영상을 생성. 외주 없이 단기간에 여러 버전을 만들어 실험 속도를 빠르게 가져감.",
                    },
                    {
                      n: "03",
                      tag: "REACT NATIVE · A/B TEST",
                      title: "프론트 구현 & A/B 테스트",
                      body: "직접 프론트엔드로 구현 후 기존 정적 이미지 페이월과 A/B 테스트. 신규 유저 세그먼트에서 전환율 차이를 검증.",
                    },
                  ]}
                />
              </div>
            </div>
          </Phase>

          <Phase num="03" label="Impact">
            <Prose>
              <p>
                A/B 테스트 결과 신규 유저 할인권 결제 전환율이{" "}
                <B>+20% 상승</B>, 목표였던 <B>+10%</B>를 두 배로 초과
                달성. ‘가격이 아니라 맥락을 바꾼다’는 가설이 검증되며,
                이후 시즌별 페이월 운영의 <B>사내 레퍼런스</B>로 정착.
              </p>
            </Prose>
          </Phase>
        </Story>

        <Story
          id="monetai"
          kicker="Project 02 — AI Prediction · Free User"
          title={
            <>
              화면은 그대로,
              <br />
              <span className="mark">작동할 지점</span>을 찾다.
            </>
          }
          lede="기존 유저의 화면은 여러 실험을 자유롭게 적용하기 어려운 환경. 화면에 개입하지 않고도 전환율에 영향을 줄 수 있는 지점을 찾기 위해 리서치를 진행했고, 구매 확률을 예측해 할인권 노출을 제어해주는 외부 AI 솔루션 Monetai를 발굴·도입해 해결."
          result={{
            value: "+75%",
            label: "Still in production",
            note: "지금까지도 운영 중",
          }}
        >
          <Phase
            num="01"
            label="Thinking"
            title={
              <>
                화면에 전혀 개입하지 않고,
                <br />
                어떻게 전환율에 영향을 줄 수 있을까?
              </>
            }
          >
            <Reasoning
              steps={[
                {
                  label: "관찰",
                  title: "기존 유저 화면은 실험이 제한되는 영역이었다",
                  body: "가입 14일이 지나도 무료로 머무는 유저를 기존 유저로 정의. 이들은 이미 익숙해진 화면·플로우가 있어, 페이월과 UI에 다수의 실험을 자유롭게 적용하기 어려운 환경.",
                },
                {
                  label: "진단",
                  title: (
                    <>
                      해법은 화면이 아닌{" "}
                      <span className="mark">다른 레이어</span>에 있다
                    </>
                  ),
                  body: "화면에 개입할 수 없다면, 화면을 바꾸지 않고도 전환율에 영향을 줄 수 있는 지점을 찾아야 했음. 화면 자체가 아닌, ‘할인권이 노출되는 조건’을 제어하는 레이어가 그 지점이라고 판단.",
                },
                {
                  label: "가설",
                  title: "노출 제어 레이어는 외부 솔루션으로 확보한다",
                  body: (
                    <>
                      구매 확률 기반의 노출 제어는 사내 리소스만으로 구축하기
                      어려웠기에, 외부 솔루션까지 범위를 넓혀 리서치를
                      진행. 구매 확률이 낮은 유저에게만 할인권을
                      노출해주는 <B>Monetai</B>를 발굴해 도입·운영·지속
                      개선까지 단독으로 주도.
                    </>
                  ),
                },
              ]}
            />
            <PullQuote>
              기존 화면에 개입하지 않고도 <B>작동할 수 있는 지점</B>을 찾는 것.
              <br />그 지점이 사내에 없다면, <B>외부 리소스</B>와 연결해
              확보한다.
            </PullQuote>
          </Phase>

          <Phase num="02" label="Execution">
            <p className="mb-3 text-xs tracking-wide text-muted">
              How it was built
            </p>
            <Steps
              items={[
                {
                  n: "01",
                  tag: "USER DEFINITION",
                  title: "‘기존 유저’를 정의",
                  body: "가입 후 14일이 지났음에도 무료로 사용하는 유저를 ‘기존 유저’로 정의. 익숙해진 화면을 함부로 바꿀 수 없다는 제약을 출발점으로 삼음.",
                },
                {
                  n: "02",
                  tag: "RESEARCH · SOURCING",
                  title: "시야를 밖으로, Monetai 발굴",
                  body: "사내 해결이 막혀있던 문제를 외부 솔루션으로 풀기 위해 리서치. 구매 확률을 예측해 낮은 유저에게만 할인권을 노출해주는 Monetai를 직접 발굴.",
                },
                {
                  n: "03",
                  tag: "PARTNERSHIP · 1:3 MEETING",
                  title: "도입 주도 & Monetai 측과 직접 협업",
                  body: "Monetai 측 CTO, 개발자, 디자이너로 구성된 3인과 저 1인이 붙는 1:3 미팅을 지속하며, 세그먼트 기준·노출 로직·성과 해석 방식을 합의하고 파일럿부터 프로덕션 도입까지 단독으로 주도.",
                },
                {
                  n: "04",
                  tag: "LIVE · CONTINUOUS IMPROVEMENT",
                  title: "운영 & 데이터 기반 지속 개선",
                  body: "프로덕션 적용 이후에도 Amplitude 데이터를 지속 모니터링하고, Monetai 측과 세그먼트·노출 조건을 함께 조정하며 주간 결제 전환율을 계속 끌어올림. 지금까지도 플랜핏 프로덕션에서 운영 중.",
                },
              ]}
            />
          </Phase>

          <Phase num="03" label="Impact">
            <Prose>
              <p>
                기존 유저 화면에 전혀 개입하지 않고 주간 결제 전환율을{" "}
                <B>+75% 상승</B>시킴. 외부 AI 솔루션과의 제휴로 확보한
                노출 제어 레이어는 일회성 실험에 그치지 않고,{" "}
                <B>지금까지도 플랜핏 프로덕션에서 운영 중</B>.
              </p>
            </Prose>
          </Phase>
        </Story>
      </Section>

    </CasePage>
  );
}
