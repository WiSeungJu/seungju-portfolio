import type { MetadataRoute } from "next";
import { localize } from "@/i18n";

const baseUrl = "https://portfolio.gourmevel.com";

// 색인할 페이지만 나열한다. 이력서와 PDF는 제외. 한국어·영어 둘 다 등록.
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/experience/likelion", priority: 0.9 },
  { path: "/experience/planfit", priority: 0.8 },
  { path: "/projects/drinkig", priority: 0.8 },
  { path: "/projects/gourmevel", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.flatMap((route) => {
    const ko = `${baseUrl}${route.path === "/" ? "" : route.path}`;
    const en = `${baseUrl}${localize("en", route.path)}`;
    const alternates = { languages: { ko, en } };
    return [
      { url: ko, lastModified, changeFrequency: "monthly" as const, priority: route.priority, alternates },
      { url: en, lastModified, changeFrequency: "monthly" as const, priority: route.priority - 0.1, alternates },
    ];
  });
}
