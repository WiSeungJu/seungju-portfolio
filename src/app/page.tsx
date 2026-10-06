import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Intro from "@/components/home/Intro";
import ExperienceList from "@/components/home/ExperienceList";
import ProjectList from "@/components/home/ProjectList";
import Recognition from "@/components/home/Recognition";

export default function Home() {
  return (
    <div className="page-enter mx-auto max-w-[1080px] px-5 sm:px-8">
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
