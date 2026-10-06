import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio.gourmevel.com";

// 색인할 페이지만 나열한다. 이력서와 PDF는 제외.
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/experience/likelion", priority: 0.9 },
  { path: "/experience/planfit", priority: 0.8 },
  { path: "/projects/drinkig", priority: 0.8 },
  { path: "/projects/gourmevel", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
