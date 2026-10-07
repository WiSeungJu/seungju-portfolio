import { pick, type Lang } from "@/i18n";
import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const items = (lang: Lang): Entry[] => [
  {
    name: pick(lang, "뉴스레터 〈凝〉 창간호", "Newsletter 〈凝〉, inaugural issue"),
    tag: pick(lang, "인터뷰", "Interview"),
    roles: [{ period: "Jun 2026" }],
    description: pick(
      lang,
      "흔들리는 시대에 좌표를 정하는 AI PM",
      "An AI PM setting coordinates in an unsteady era"
    ),
    href: "https://maily.so/longaze/posts/g0zml977rql",
  },
  {
    name: pick(lang, "주간동아", "Weekly Dong-A"),
    tag: pick(lang, "언론", "Press"),
    roles: [{ period: "Apr 2026" }],
    description: pick(
      lang,
      "코딩 몰라도 AI 활용해 앱 자유자재로 만든다",
      "Building apps freely with AI, no coding required"
    ),
    href: "https://weekly.donga.com/economy/article/all/11/6198601/1",
  },
  {
    name: pick(lang, "홍익대학교 창업경진대회", "Hongik University Startup Competition"),
    tag: pick(lang, "수상", "Award"),
    roles: [{ period: "May 2025" }],
    description: pick(lang, "우수상(2위) · 드링키지", "2nd place (Excellence Award) · Drinkig"),
    href: "https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C",
  },
  {
    name: pick(lang, "UMC 6기", "UMC 6th"),
    tag: pick(lang, "활동", "Activity"),
    roles: [{ period: "Aug 2024" }],
    description: pick(lang, "홍익대 Project Manager", "Hongik University Project Manager"),
  },
];

export default function Recognition({ lang }: { lang: Lang }) {
  return (
    <SectionGrid id="recognition" title="Press & Awards">
      <EntryList items={items(lang)} lang={lang} />
    </SectionGrid>
  );
}
