import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Intro from "@/components/home/Intro";
import ExperienceList from "@/components/home/ExperienceList";
import ProjectList from "@/components/home/ProjectList";
import Recognition from "@/components/home/Recognition";
import type { Metadata } from "next";
import JsonLd, { PERSON, SITE_URL } from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    PERSON,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "위승주 포트폴리오",
      inLanguage: "ko",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <div className="page-enter mx-auto max-w-[1080px] px-5 sm:px-8">
      <JsonLd data={jsonLd} />
      <SiteHeader home />
      <main>
        <Intro />
        <ExperienceList />
        <ProjectList />
        <Recognition />
      </main>
      <SiteFooter />
    </div>
  );
}
