import type { MetadataRoute } from "next";

// 검색엔진과 AI 크롤러 모두 허용. 이력서와 PDF는 개별 페이지에서 noindex 처리.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio.gourmevel.com/sitemap.xml",
  };
}
