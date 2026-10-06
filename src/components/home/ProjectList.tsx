import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const projects: Entry[] = [
  {
    name: "Drinkig",
    tag: "AI 와인 큐레이팅 앱",
    roles: [{ period: "Jan 2026 – Present" }],
    description:
      "와인 입문자의 진입장벽을 낮추는 취향 기반 추천 앱, 1인 개발·출시",
    href: "/projects/drinkig",
  },
  {
    name: "Gourmevel",
    tag: "미식 매거진",
    roles: [{ period: "Nov 2021 – Present" }],
    description:
      "파인다이닝·미쉐린 레스토랑 심층 리뷰, 유료 광고 없이 팔로워 1만",
    href: "/projects/gourmevel",
  },
];

export default function ProjectList() {
  return (
    <SectionGrid id="projects" title="Projects">
      <EntryList items={projects} />
    </SectionGrid>
  );
}
