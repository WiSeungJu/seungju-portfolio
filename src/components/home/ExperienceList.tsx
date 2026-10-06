import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const experiences: Entry[] = [
  {
    name: "멋쟁이사자처럼",
    tag: "Full-time",
    roles: [
      { title: "Problem Solver (PM)", period: "Sep 2026 – Present" },
      { title: "AI Product Manager", period: "Apr–Sep 2026" },
    ],
    description:
      "베트남 IT 인재 채용 플랫폼 Salary FYI 제품 전체 담당, 출시 5개월 만에 가입 8,800명 · 채용 지원 1만 건",
    href: "/experience/likelion",
  },
  {
    name: "Planfit",
    tag: "Internship",
    roles: [{ title: "AI Problem Solver", period: "Jun–Dec 2025" }],
    description:
      "유료 구독 전환율 개선 전담, 70건 이상의 실험으로 결제 전환율 최대 +75%",
    href: "/experience/planfit",
  },
];

export default function ExperienceList() {
  return (
    <SectionGrid id="experience" title="Experience" flush>
      <EntryList items={experiences} />
    </SectionGrid>
  );
}
