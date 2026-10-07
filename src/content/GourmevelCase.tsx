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
import JsonLd, { GOURMEVEL, PERSON, SITE_URL } from "@/components/JsonLd";
import { alternatesFor, pick, type Lang } from "@/i18n";

const PATH = "/projects/gourmevel";

const jsonLd = {
  "@context": "https://schema.org",
  ...GOURMEVEL,
  description:
    "파인다이닝과 미쉐린 레스토랑 심층 리뷰 중심의 미식 매거진. 2021년 11월 창간, 대표 위승주.",
  founder: PERSON,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

export function gourmevelMetadata(lang: Lang): Metadata {
  return {
    title: lang === "ko" ? "고메블 Gourmevel — 미식 매거진" : { absolute: "Gourmevel — Fine-dining Magazine | Seungju WI" },
    description: pick(
      lang,
      "위승주가 창간해 대표로 운영하는 미식 매거진 고메블(Gourmevel). 파인다이닝·미쉐린 레스토랑 심층 리뷰, 유료 광고 없이 팔로워 1만, 숏폼 최고 124만 뷰, 브랜드 협업 50건 이상. 200명에서 1만 팔로워까지의 성장 과정.",
      "Gourmevel (고메블), the fine-dining magazine founded and run by Seungju WI. In-depth reviews of fine-dining and Michelin restaurants, 10K followers with zero ad spend, a 1.24M-view short-form video, and 50+ brand collaborations. How it grew from 200 to 10K followers."
    ),
    alternates: alternatesFor(lang, PATH),
    ...(lang === "en" ? { openGraph: { locale: "en_US" } } : {}),
  };
}

export default function GourmevelCase({ lang }: { lang: Lang }) {
  const t = <T,>(ko: T, en: T) => pick(lang, ko, en);
  return (
    <>
      <JsonLd data={jsonLd} />
      <CasePage
        lang={lang}
        path={PATH}
        back={{ label: "Projects", href: "/#projects" }}
        title="Gourmevel"
        subtitle="고메블"
        summary={t("미식 정보 기반 인스타그램 매거진", "An Instagram-based fine-dining magazine")}
        meta={[
          t("Founder · 1인 총괄 기획 · 운영", "Founder · solo planning and operations"),
          t("124만 뷰 · 1만 팔로워", "1.24M views · 10K followers"),
          "Nov 2021 – Present",
        ]}
        links={[
          { label: "gourmevel.com", href: "https://gourmevel.com/" },
          { label: "Instagram", href: "https://www.instagram.com/gourmevel/" },
          { label: "Blog", href: "https://blog.naver.com/gourmevel" },
        ]}
        hero={{
          src: "/images/gourmevel-hero.png",
          alt: t("Gourmevel 메인", "Gourmevel"),
          width: 1639,
          height: 1146,
        }}
        prev={{ label: t("이전: Drinkig", "Previous: Drinkig"), href: "/projects/drinkig" }}
        next={{ label: t("프로젝트 목록", "All projects"), href: "/#projects" }}
      >
        <Section id="context" title="Context">
          <Prose>
            <p>
              {t(
                "군 복무 중 시작한 1인 미식 매거진. 기획·촬영·편집·운영·브랜드 커뮤니케이션을 단독 수행, 유료 광고 없이 오가닉 도달만으로 팔로워 1만 확보.",
                "A one-person fine-dining magazine started during military service. Handled planning, photography, editing, operations, and brand communication alone, reaching 10K followers through organic reach with no paid ads."
              )}
            </p>
            <p>
              {t(
                "초기 3개월 팔로워 200명 정체를 콘텐츠 관점 재정의로 돌파. 이후 트렌드가 바뀔 때마다 포맷을 교체하며 네이버 블로그, 유튜브까지 확장. 캐치테이블 등 브랜드 협업 50건 이상.",
                "Broke through a three-month plateau at 200 followers by redefining the content’s point of view. Since then, switched formats whenever trends shifted and expanded to Naver Blog and YouTube. 50+ brand collaborations, including CatchTable."
              )}
            </p>
          </Prose>
          <Facts
            items={[
              {
                label: t("역할", "Role"),
                value: t("Founder · 기획 · 제작 · 편집 · 운영", "Founder · planning · production · editing · operations"),
              },
              { label: t("기간", "Period"), value: "Nov 2021 – Present" },
              { label: t("채널", "Channels"), value: t("Instagram · 네이버 블로그 · YouTube", "Instagram · Naver Blog · YouTube") },
              {
                label: t("활용 툴", "Tools"),
                value: "Final Cut Pro · Figma · Photoshop · Canva · Vrew · Notion",
              },
            ]}
          />
        </Section>

        <Section id="key-metrics" title="Key Metrics">
          <Figures
            items={[
              { value: t("124만", "1.24M"), label: t("숏폼 최고 조회수", "Top short-form views") },
              { value: t("1만+", "10K+"), label: t("팔로워", "Followers") },
              { value: t("30만", "300K"), label: t("릴스 평균 조회수", "Avg. Reels views") },
              { value: "50+", label: t("브랜드 협업 건수", "Brand collaborations") },
            ]}
          />
        </Section>

        <Section id="growth-story" title="Growth Story">
          <Story
            kicker="Turnaround — From 200 to 10,000+ Followers"
            title={
              lang === "ko" ? (
                <>
                  내 만족이 아닌,
                  <br />
                  <span className="mark">독자의 언어</span>로.
                </>
              ) : (
                <>
                  Not my satisfaction,
                  <br />
                  but the <span className="mark">reader’s language</span>.
                </>
              )
            }
            lede={t(
              "군 복무 중 제약된 리소스로 출발한 채널이 초기 3개월 만에 200명 선에서 정체했을 때, 재촬영이 아닌 ‘관점의 재정의’로 돌파구를 찾은 과정.",
              "When a channel started with the limited resources of military service stalled at 200 followers in its first three months, the way out was redefining the point of view, not reshooting."
            )}
            result={{
              value: "50×",
              label: "Growth multiplier",
              note: t("200 → 10,000+ 팔로워", "200 → 10,000+ followers"),
            }}
          >
            <Phase
              num="01"
              label="Diagnosis"
              title={
                lang === "ko" ? (
                  <>
                    재촬영이 불가능한 환경에서,
                    <br />
                    무엇을 바꿔야 했는가?
                  </>
                ) : (
                  <>
                    When reshooting is impossible,
                    <br />
                    what has to change?
                  </>
                )
              }
            >
              <Reasoning
                steps={[
                  {
                    label: t("관찰", "Observation"),
                    title: t(
                      "업로드는 쌓이는데, 팔로워는 200명에서 멈췄다",
                      "Uploads piled up, followers stuck at 200"
                    ),
                    body: t(
                      "휴가 때 촬영해 둔 소스를 부대 안에서 편집·업로드하며 주 1회씩 운영했지만, 3개월간 팔로워 수는 200명 선에서 정체. 유입 대비 잔존율 역시 뚜렷하게 낮았음.",
                      "Edited and uploaded footage shot on leave, once a week from inside the base, but followers stayed around 200 for three months. Retention relative to reach was clearly low."
                    ),
                  },
                  {
                    label: t("진단", "Diagnosis"),
                    title:
                      lang === "ko" ? (
                        <>
                          콘텐츠가 <span className="mark">‘내 만족’</span>을
                          중심으로 설계되어 있었다
                        </>
                      ) : (
                        <>
                          The content was built around{" "}
                          <span className="mark">my own satisfaction</span>
                        </>
                      ),
                    body: t(
                      "수치를 분석해보니 문제는 제작 품질이 아니라, 시청자가 얻어가는 정보의 부재. 감상형 포스트는 기록용으로는 충분했지만, 독자 입장에서 소비할 이유가 없는 콘텐츠였음.",
                      "The numbers showed the problem wasn’t production quality but the lack of anything a viewer could take away. Impression-style posts worked as a diary, but gave readers no reason to consume them."
                    ),
                  },
                  {
                    label: t("재정의", "Redefinition"),
                    title: t(
                      "제약은 바꿀 수 없지만, 관점은 바꿀 수 있다",
                      "The constraints can’t change, but the point of view can"
                    ),
                    body: t(
                      "군 복무 중이라 재촬영은 불가능. 대신 기존 소재를 독자의 관점에서 다시 엮는 방식으로 문제를 재정의했고, 첫 돌파구로 셰프 취재 포맷을 설계.",
                      "Reshooting was impossible during service. Instead, redefined the problem as re-weaving existing material from the reader’s point of view, and designed a chef-interview format as the first breakthrough."
                    ),
                  },
                ]}
              />
              <PullQuote>
                {lang === "ko" ? (
                  <>
                    문제가 ‘<B>촬영</B>’이 아니라 ‘<B>관점</B>’에 있다면,
                    <br />
                    제약은 더 이상 장애물이 아니다.
                  </>
                ) : (
                  <>
                    If the problem is the <B>point of view</B>, not the{" "}
                    <B>footage</B>,
                    <br />
                    the constraint is no longer an obstacle.
                  </>
                )}
              </PullQuote>
            </Phase>

            <Phase
              num="02"
              label="Execution"
              title={t("셰프에게 직접 DM을 보냈다", "Sent DMs straight to chefs")}
            >
              <Compare
                before={{
                  label: "AS-IS",
                  title: t("공간 감상 중심의 리뷰 포스트", "Review posts about the space and the mood"),
                  items: [
                    t("운영자 개인의 취향·감상 위주", "Driven by the operator’s own taste and impressions"),
                    t("기록형 · 독자 획득 이유 부재", "Diary-style · no reason for readers to follow"),
                    t("3개월간 200명에서 정체", "Stuck at 200 for three months"),
                  ],
                }}
                after={{
                  label: "TO-BE",
                  title: t("셰프 취재 기반 식문화 매거진", "A food-culture magazine built on chef interviews"),
                  items: [
                    t("레스토랑 셰프에게 직접 DM 발송", "Direct DMs to restaurant chefs"),
                    t("공간의 철학·메뉴 뒤의 이야기를 취재", "Covered the philosophy of the space and the stories behind the menu"),
                    t("단순 리뷰 → 식문화 트렌드 + 셰프의 시선", "From plain reviews to food-culture trends and the chef’s perspective"),
                  ],
                }}
              />
              <Note label="Impact">
                {lang === "ko" ? (
                  <>
                    포맷 전환 직후 2주 만에 팔로워 <B>+1,000명</B>
                  </>
                ) : (
                  <>
                    <B>+1,000 followers</B> within two weeks of the format change
                  </>
                )}
              </Note>
            </Phase>

            <Phase
              num="03"
              label="Adaptation"
              title={
                lang === "ko" ? (
                  <>
                    트렌드가 전환될 때마다,
                    <br />
                    포맷을 먼저 움직였다
                  </>
                ) : (
                  <>
                    Whenever the trend shifted,
                    <br />
                    moved the format first
                  </>
                )
              }
            >
              <Steps
                items={[
                  {
                    n: "01",
                    title: t("이탈 구간 분석", "Analyze drop-off points"),
                    body: t(
                      "Insights·도달 데이터를 주기적으로 점검해 유저가 떠나는 지점을 특정",
                      "Checked Insights and reach data regularly to pinpoint where viewers left"
                    ),
                  },
                  {
                    n: "02",
                    title: t("주류 포맷 이동 시점 감지", "Spot the shift in the dominant format"),
                    body: t(
                      "카드뉴스 중심 소비에서 숏폼 중심으로 이동하는 초기 신호 포착",
                      "Caught early signals of consumption moving from card news to short-form"
                    ),
                  },
                  {
                    n: "03",
                    title: t("툴 학습 & 포맷 전환", "Learn the tools & switch formats"),
                    body: t(
                      "편집 툴과 후킹 기법을 빠르게 학습해 숏폼 포맷으로 콘텐츠 구조 재설계",
                      "Quickly learned editing tools and hook techniques and restructured content for short-form"
                    ),
                  },
                ]}
              />
              <div className="mt-6">
                <Figures
                  items={[
                    {
                      value: "2×",
                      label: "Follower growth",
                      note: t("4,000 → 8,000 · 3개월간 달성", "4,000 → 8,000 in 3 months"),
                    },
                    {
                      value: t("30만", "300K"),
                      label: "Reels avg. views",
                      note: t("숏폼 전환 후 평균 도달", "Average reach after the switch to short-form"),
                    },
                  ]}
                />
              </div>
              <PullQuote>
                {lang === "ko" ? (
                  <>
                    한 번의 전환으로 완성되는 채널은 없다.
                    <br />
                    <B>
                      데이터로 원인을 찾고, 필요한 도구를 가장 빠르게 학습해
                      움직이는 실행력
                    </B>
                    이 이 채널을 지속적으로 성장시킨 엔진이었다.
                  </>
                ) : (
                  <>
                    No channel is finished with a single pivot.
                    <br />
                    <B>
                      Finding the cause in the data and learning whatever tool is
                      needed, fast
                    </B>
                    : that execution is what kept this channel growing.
                  </>
                )}
              </PullQuote>
            </Phase>
          </Story>
        </Section>

        <Section id="collaboration" title="Featured Collaboration">
          <div className="flex items-center gap-3">
            <Image
              src="/images/catchtable-logo.png"
              alt={t("캐치테이블 로고", "CatchTable logo")}
              width={512}
              height={512}
              sizes="40px"
              className="h-10 w-10"
            />
            <h3 className="text-[22px] font-bold">{t("캐치테이블", "CatchTable")}</h3>
            <p className="text-[13px] font-medium text-point">{t("총 6회 협업", "6 collaborations")}</p>
          </div>
          <div className="mt-5">
            <Prose>
              <p>
                {t(
                  "국내 대표 레스토랑 예약 플랫폼 ‘캐치테이블’과 여섯 차례에 걸쳐 공동 콘텐츠를 제작. 기획안 작성, 촬영, 편집은 물론 브랜드 측과의 톤 조율과 최종 전달까지 전 과정을 단독으로 담당했고, 일회성에 그치지 않고 반복 의뢰로 이어질 수 있었던 배경에는 결과물만큼 과정 관리에 집중했던 점이 있었다고 생각.",
                  "Produced co-branded content six times with CatchTable, Korea’s leading restaurant reservation platform. Handled everything alone: proposals, shooting, editing, tone alignment with the brand, and final delivery. The repeat requests, rather than one-off work, came from caring about the process as much as the output."
                )}
              </p>
            </Prose>
          </div>
          <Plate
            src="/images/catchtable-collabs.jpg"
            alt={t("캐치테이블 협업 콘텐츠 모음", "CatchTable collaboration content")}
            width={2800}
            height={856}
            className="mt-6"
          />
          <div className="mt-6">
            <Figures
              items={[
                { value: t("2만~4만", "20K–40K"), label: t("콜라보 콘텐츠 평균 도달 수", "Avg. reach per collab post") },
                { value: t("재협업", "Repeat"), label: t("캐치테이블 측 재협업 요청", "Re-engaged by CatchTable") },
              ]}
            />
          </div>
        </Section>
      </CasePage>
    </>
  );
}
