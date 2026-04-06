"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Drinkig",
    subtitle: "드링키지",
    description:
      "‘초보는 자기 취향조차 모른다’에서 출발한 취향 기반 와인 큐레이션 앱. 첫 버전의 실패를 딛고 문제 정의부터 다시 다듬어, 1인으로 React Native 재설계·재출시해 현재까지 직접 운영 중입니다.",
    tags: ["취향 큐레이션", "React Native", "1인 풀사이클", "App Store 출시"],
    badge: "창업경진대회 2위",
    image: "/images/drinkig-card.png",
    link: "/projects/drinkig",
    external: [
      { label: "웹사이트", href: "https://drinkig.com/" },
      { label: "App Store", href: "https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80-%EC%B7%A8%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%99%80%EC%9D%B8-%EC%B6%94%EC%B2%9C%EA%B3%BC-%EA%B8%B0%EB%A1%9D/id6741486172" },
    ],
  },
  {
    title: "Gourmevel",
    subtitle: "고메블",
    description:
      "1인 운영으로 오가닉 팔로워 1만, 숏폼 최고 124만 뷰를 달성한 F&B 매거진. 데이터 기반 알고리즘 분석으로 반복 가능한 그로스 공식을 설계했고, 캐치테이블 등 브랜드와 50건 이상의 협업을 진행했습니다.",
    tags: ["오가닉 그로스", "알고리즘 분석", "1인 총괄 운영", "브랜드 협업 50+"],
    badge: "124만 뷰",
    image: "/images/gourmevel.jpg",
    link: "/projects/gourmevel",
    external: [
      { label: "Instagram", href: "https://www.instagram.com/gourmevel/" },
      { label: "Blog", href: "https://blog.naver.com/gourmevel" },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          <span className="text-accent">#</span> Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
            <div
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-accent/20 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
              onClick={() => window.location.href = project.link}
            >
              {/* Image area */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-accent/10 to-accent-secondary/10 overflow-hidden">
                {/* TODO: 프로젝트 이미지를 /public/images/ 에 추가 */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-accent/90 text-white backdrop-blur-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/50">
                    {project.subtitle}
                  </span>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.external.map((ext) => (
                      <a
                        key={ext.label}
                        href={ext.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 text-xs rounded border border-white/10 text-white/50 hover:text-white hover:border-accent/30 transition-all"
                      >
                        {ext.label}
                      </a>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-accent font-medium hover:underline"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
