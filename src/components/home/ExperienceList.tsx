import { pick, type Lang } from "@/i18n";
import SectionGrid from "../SectionGrid";
import EntryList, { type Entry } from "./EntryList";

const experiences = (lang: Lang): Entry[] => [
  {
    name: pick(lang, "멋쟁이사자처럼", "LIKELION"),
    tag: "Full-time",
    roles: [
      { title: "Problem Solver", period: "Sep 2026 – Present" },
      { title: "AI Product Manager", period: "Apr–Sep 2026" },
    ],
    description: pick(
      lang,
      "베트남 IT 인재 채용 플랫폼 Salary FYI 제품 전체 담당, 출시 6개월 만에 가입 10,000명+ · 채용 지원 14,000건+",
      "Owned Salary FYI, a hiring platform for Vietnamese IT talent: 10,000+ sign-ups and 14,000+ applications in 6 months"
    ),
    href: "/experience/likelion",
    logo: "/images/logos/likelion.png",
    brand: "#ff6000",
  },
  {
    name: "Planfit",
    tag: "Internship",
    roles: [{ title: "AI Problem Solver", period: "Jun–Dec 2025" }],
    description: pick(
      lang,
      "유료 구독 전환율 개선 전담, 70건 이상의 실험으로 결제 전환율 최대 +75%",
      "Owned paid subscription conversion; 70+ experiments, payment conversion up to +75%"
    ),
    href: "/experience/planfit",
    logo: "/images/logos/planfit.png",
    brand: "#111111",
  },
];

export default function ExperienceList({ lang }: { lang: Lang }) {
  return (
    <SectionGrid id="experience" title="Experience" flush>
      <EntryList items={experiences(lang)} lang={lang} />
    </SectionGrid>
  );
}
