import type { Lang } from "@/i18n";
import JsonLd, { PERSON, SITE_URL } from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Intro from "./Intro";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";
import Recognition from "./Recognition";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "위승주 포트폴리오",
      alternateName: "Seungju Wi — Portfolio",
      inLanguage: ["ko", "en"],
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <div lang={lang} className="page-enter mx-auto max-w-[1080px] px-5 sm:px-8">
      <JsonLd data={jsonLd} />
      <SiteHeader home lang={lang} path="/" />
      <main>
        <Intro lang={lang} />
        <ExperienceList lang={lang} />
        <ProjectList lang={lang} />
        <Recognition lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
