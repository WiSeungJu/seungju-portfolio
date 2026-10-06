import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const items: Entry[] = [
  {
    name: "뉴스레터 〈凝〉 창간호",
    tag: "인터뷰",
    roles: [{ period: "Jun 2026" }],
    description: "흔들리는 시대에 좌표를 정하는 AI PM",
    href: "https://maily.so/longaze/posts/g0zml977rql",
  },
  {
    name: "주간동아",
    tag: "언론",
    roles: [{ period: "Apr 2026" }],
    description: "코딩 몰라도 AI 활용해 앱 자유자재로 만든다",
    href: "https://weekly.donga.com/economy/article/all/11/6198601/1",
  },
  {
    name: "홍익대학교 창업경진대회",
    tag: "수상",
    roles: [{ period: "May 2025" }],
    description: "우수상(2위) · 드링키지",
    href: "https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C",
  },
  {
    name: "UMC 6기",
    tag: "활동",
    roles: [{ period: "Aug 2024" }],
    description: "홍익대 Project Manager",
  },
];

export default function Recognition() {
  return (
    <SectionGrid id="recognition" title="Press & Awards">
      <EntryList items={items} />
    </SectionGrid>
  );
}
