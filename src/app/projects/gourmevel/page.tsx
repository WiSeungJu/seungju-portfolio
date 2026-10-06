import type { Metadata } from "next";
import Image from "next/image";
import {
  B,
  CasePage,
  Compare,
  Facts,
  Figures,
  Note,
  Phase,
  Plate,
  Prose,
  PullQuote,
  Reasoning,
  Section,
  Steps,
  Story,
} from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Gourmevel | 위승주",
  description: "고메블 — 미식 정보 기반 인스타그램 매거진",
};

export default function GourmevelPage() {
  return (
    <CasePage
      back={{ label: "Projects", href: "/#projects" }}
      title="Gourmevel"
      subtitle="고메블"
      summary="미식 정보 기반 인스타그램 매거진"
      meta={[
        "1인 총괄 기획 · 운영",
        "124만 뷰 · 1만 팔로워",
        "Nov 2021 – Present",
      ]}
      links={[
        { label: "Instagram", href: "https://www.instagram.com/gourmevel/" },
        { label: "Blog", href: "https://blog.naver.com/gourmevel" },
      ]}
      hero={{
        src: "/images/gourmevel-hero.png",
        alt: "Gourmevel 메인",
        width: 1639,
        height: 1146,
      }}
      prev={{ label: "이전: Drinkig", href: "/projects/drinkig" }}
      next={{ label: "프로젝트 목록", href: "/#projects" }}
    >
      <Section id="context" title="Context">
        <Prose>
          <p>
            군 복무 중 시작한 1인 미식 매거진. 기획·촬영·편집·운영·브랜드 커뮤니케이션을 단독 수행, 유료 광고 없이 오가닉 도달만으로 팔로워 1만 확보.
          </p>
          <p>
            초기 3개월 팔로워 200명 정체를 콘텐츠 관점 재정의로 돌파. 이후 트렌드가 바뀔 때마다 포맷을 교체하며 네이버 블로그, 유튜브까지 확장. 캐치테이블 등 브랜드 협업 50건 이상.
          </p>
        </Prose>
        <Facts
          items={[
            { label: "역할", value: "1인 기획 · 제작 · 편집 · 운영" },
            { label: "기간", value: "Nov 2021 – Present" },
            { label: "채널", value: "Instagram · 네이버 블로그 · YouTube" },
            {
              label: "활용 툴",
              value: "Final Cut Pro · Figma · Photoshop · Canva · Vrew · Notion",
            },
          ]}
        />
      </Section>

      <Section id="key-metrics" title="Key Metrics">
        <Figures
          items={[
            { value: "124만", label: "숏폼 최고 조회수" },
            { value: "1만+", label: "팔로워" },
            { value: "30만", label: "릴스 평균 조회수" },
            { value: "50+", label: "브랜드 협업 건수" },
          ]}
        />
      </Section>

      <Section id="growth-story" title="Growth Story">
        <Story
          kicker="Turnaround — From 200 to 10,000+ Followers"
          title={
            <>
              내 만족이 아닌,
              <br />
              <span className="mark">독자의 언어</span>로.
            </>
          }
          lede="군 복무 중 제약된 리소스로 출발한 채널이 초기 3개월 만에 200명 선에서 정체했을 때, 재촬영이 아닌 ‘관점의 재정의’로 돌파구를 찾은 과정."
          result={{
            value: "50×",
            label: "Growth multiplier",
            note: "200 → 10,000+ 팔로워",
          }}
        >
          <Phase
            num="01"
            label="Diagnosis"
            title={
              <>
                재촬영이 불가능한 환경에서,
                <br />
                무엇을 바꿔야 했는가?
              </>
            }
          >
            <Reasoning
              steps={[
                {
                  label: "관찰",
                  title: "업로드는 쌓이는데, 팔로워는 200명에서 멈췄다",
                  body: "휴가 때 촬영해 둔 소스를 부대 안에서 편집·업로드하며 주 1회씩 운영했지만, 3개월간 팔로워 수는 200명 선에서 정체. 유입 대비 잔존율 역시 뚜렷하게 낮았음.",
                },
                {
                  label: "진단",
                  title: (
                    <>
                      콘텐츠가 <span className="mark">‘내 만족’</span>을
                      중심으로 설계되어 있었다
                    </>
                  ),
                  body: "수치를 분석해보니 문제는 제작 품질이 아니라, 시청자가 얻어가는 정보의 부재. 감상형 포스트는 기록용으로는 충분했지만, 독자 입장에서 소비할 이유가 없는 콘텐츠였음.",
                },
                {
                  label: "재정의",
                  title: "제약은 바꿀 수 없지만, 관점은 바꿀 수 있다",
                  body: "군 복무 중이라 재촬영은 불가능. 대신 기존 소재를 독자의 관점에서 다시 엮는 방식으로 문제를 재정의했고, 첫 돌파구로 셰프 취재 포맷을 설계.",
                },
              ]}
            />
            <PullQuote>
              문제가 ‘<B>촬영</B>’이 아니라 ‘<B>관점</B>’에 있다면,
              <br />
              제약은 더 이상 장애물이 아니다.
            </PullQuote>
          </Phase>

          <Phase num="02" label="Execution" title="셰프에게 직접 DM을 보냈다">
            <Compare
              before={{
                label: "AS-IS",
                title: "공간 감상 중심의 리뷰 포스트",
                items: [
                  "운영자 개인의 취향·감상 위주",
                  "기록형 · 독자 획득 이유 부재",
                  "3개월간 200명에서 정체",
                ],
              }}
              after={{
                label: "TO-BE",
                title: "셰프 취재 기반 식문화 매거진",
                items: [
                  "레스토랑 셰프에게 직접 DM 발송",
                  "공간의 철학·메뉴 뒤의 이야기를 취재",
                  "단순 리뷰 → 식문화 트렌드 + 셰프의 시선",
                ],
              }}
            />
            <Note label="Impact">
              포맷 전환 직후 2주 만에 팔로워 <B>+1,000명</B>
            </Note>
          </Phase>

          <Phase
            num="03"
            label="Adaptation"
            title={
              <>
                트렌드가 전환될 때마다,
                <br />
                포맷을 먼저 움직였다
              </>
            }
          >
            <Steps
              items={[
                {
                  n: "01",
                  title: "이탈 구간 분석",
                  body: "Insights·도달 데이터를 주기적으로 점검해 유저가 떠나는 지점을 특정",
                },
                {
                  n: "02",
                  title: "주류 포맷 이동 시점 감지",
                  body: "카드뉴스 중심 소비에서 숏폼 중심으로 이동하는 초기 신호 포착",
                },
                {
                  n: "03",
                  title: "툴 학습 & 포맷 전환",
                  body: "편집 툴과 후킹 기법을 빠르게 학습해 숏폼 포맷으로 콘텐츠 구조 재설계",
                },
              ]}
            />
            <div className="mt-6">
              <Figures
                items={[
                  {
                    value: "2×",
                    label: "Follower growth",
                    note: "4,000 → 8,000 · 3개월간 달성",
                  },
                  {
                    value: "30만",
                    label: "Reels avg. views",
                    note: "숏폼 전환 후 평균 도달",
                  },
                ]}
              />
            </div>
            <PullQuote>
              한 번의 전환으로 완성되는 채널은 없다.
              <br />
              <B>
                데이터로 원인을 찾고, 필요한 도구를 가장 빠르게 학습해 움직이는
                실행력
              </B>
              이 이 채널을 지속적으로 성장시킨 엔진이었다.
            </PullQuote>
          </Phase>
        </Story>
      </Section>

      <Section id="collaboration" title="Featured Collaboration">
        <div className="flex items-center gap-3">
          <Image
            src="/images/catchtable-logo.png"
            alt="캐치테이블 로고"
            width={512}
            height={512}
            sizes="40px"
            className="h-10 w-10"
          />
          <h3 className="text-[22px] font-bold">캐치테이블</h3>
          <p className="text-[13px] font-medium text-point">총 6회 협업</p>
        </div>
        <div className="mt-5">
          <Prose>
            <p>
              국내 대표 레스토랑 예약 플랫폼 ‘캐치테이블’과 여섯 차례에 걸쳐
              공동 콘텐츠를 제작. 기획안 작성, 촬영, 편집은 물론 브랜드
              측과의 톤 조율과 최종 전달까지 전 과정을 단독으로 담당했고,
              일회성에 그치지 않고 반복 의뢰로 이어질 수 있었던 배경에는
              결과물만큼 과정 관리에 집중했던 점이 있었다고 생각.
            </p>
          </Prose>
        </div>
        <Plate
          src="/images/catchtable-collabs.jpg"
          alt="캐치테이블 협업 콘텐츠 모음"
          width={2800}
          height={856}
          className="mt-6"
        />
        <div className="mt-6">
          <Figures
            items={[
              { value: "2만~4만", label: "콜라보 콘텐츠 평균 도달 수" },
              { value: "재협업", label: "캐치테이블 측 재협업 요청" },
            ]}
          />
        </div>
      </Section>

    </CasePage>
  );
}
