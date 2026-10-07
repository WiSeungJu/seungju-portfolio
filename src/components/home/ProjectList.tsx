import { pick, type Lang } from "@/i18n";
import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const projects = (lang: Lang): Entry[] => [
  {
    name: "Drinkig",
    tag: pick(lang, "AI 와인 큐레이팅 앱", "AI wine curation app"),
    roles: [{ period: "Jan 2026 – Present" }],
    description: pick(
      lang,
      "와인 입문자의 진입장벽을 낮추는 취향 기반 추천 앱, 1인 개발·출시",
      "Taste-based recommendations that lower the barrier for wine beginners; built and shipped solo"
    ),
    href: "/projects/drinkig",
  },
  {
    name: "Gourmevel",
    tag: pick(lang, "미식 매거진 · Founder", "Fine-dining magazine · Founder"),
    roles: [{ period: "Nov 2021 – Present" }],
    description: pick(
      lang,
      "파인다이닝·미쉐린 레스토랑 심층 리뷰, 유료 광고 없이 팔로워 1만",
      "In-depth reviews of fine-dining and Michelin restaurants; 10K followers with zero ad spend"
    ),
    href: "/projects/gourmevel",
  },
];

export default function ProjectList({ lang }: { lang: Lang }) {
  return (
    <SectionGrid id="projects" title="Projects">
      <EntryList items={projects(lang)} lang={lang} />
    </SectionGrid>
  );
}
