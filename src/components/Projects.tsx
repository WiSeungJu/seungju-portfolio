"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Drinkig",
    subtitle: "드링키지",
    description:
      "2030 타겟 맞춤형 와인 큐레이션 앱. Figma 설계부터 React Native/MySQL 개발까지 AI로 구현 및 상용화.",
    tags: ["React Native", "MySQL", "1인 기획·개발", "AI 활용"],
    badge: "창업경진대회 2위",
    image: "/images/drinkig.jpg",
    link: null,
  },
  {
    title: "Gourmevel",
    subtitle: "고메블",
    description:
      "F&B 숏폼 매거진 운영. 알고리즘 최적화로 오가닉 트래픽 최고 124만 뷰 달성 및 1만 팬덤 구축.",
    tags: ["콘텐츠 기획", "알고리즘 최적화", "총괄 운영"],
    badge: "124만 뷰",
    image: "/images/gourmevel.jpg",
    link: null,
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
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-accent/20 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Image area */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-accent/10 to-accent-secondary/10 overflow-hidden">
                {/* TODO: 프로젝트 이미지를 /public/images/ 에 추가 */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback gradient with title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/10 group-hover:text-white/15 transition-colors">
                    {project.title}
                  </span>
                </div>

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

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
