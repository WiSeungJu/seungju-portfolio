// schema.org 구조화 데이터. 검색엔진과 AI 검색이 사람·제품을 인식하는 근거가 된다.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const SITE_URL = "https://portfolio.gourmevel.com";

// 사이트 전체에서 같은 사람을 가리키도록 한 곳에서 정의한다.
export const PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "위승주",
  alternateName: ["Seungju Wi", "Wi Seungju"],
  jobTitle: "Problem Solver (Product Manager)",
  description:
    "AI를 활용해 문제 정의부터 기획, 개발, 출시까지 엔드투엔드로 담당하는 PM",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile-cutout.png`,
  email: "wsj@likelion.net",
  worksFor: {
    "@type": "Organization",
    name: "멋쟁이사자처럼",
    alternateName: "LIKELION",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "홍익대학교",
    alternateName: "Hongik University",
  },
  knowsLanguage: ["ko", "en", "zh"],
  knowsAbout: [
    "Product Management",
    "AI Product Development",
    "Growth",
    "A/B Testing",
    "React Native",
  ],
  sameAs: [
    "https://www.linkedin.com/in/wiseungju/",
    "https://github.com/SeungjuWI",
    "https://github.com/WiSeungJu",
    "https://www.instagram.com/gourmevel/",
  ],
};
