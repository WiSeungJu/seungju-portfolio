"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Product & Growth",
    items: [
      { name: "A/B Testing", detail: "실험 설계·분석" },
      { name: "User Research", detail: "유저 인터뷰·리서치" },
      { name: "PRD", detail: "제품 요구사항 정의" },
      { name: "Funnel Analysis", detail: "퍼널 분석·전환 최적화" },
      { name: "Amplitude", detail: "퍼널 분석·실험 추적" },
      { name: "Figma", detail: "UI/UX 설계" },
      { name: "Linear", detail: "프로젝트·이슈 관리" },
    ],
  },
  {
    category: "Language & Frameworks",
    items: [
      { name: "JavaScript", detail: "메인 언어" },
      { name: "TypeScript", detail: "타입 안전 개발" },
      { name: "React", detail: "웹 프론트엔드" },
      { name: "React Native", detail: "모바일 앱 개발" },
      { name: "Node.js", detail: "서버사이드 런타임" },
      { name: "Django", detail: "백엔드 프레임워크" },
      { name: "Python", detail: "데이터·백엔드" },
      { name: "SQL", detail: "데이터베이스 쿼리" },
      { name: "Java", detail: "객체지향 개발" },
      { name: "HTML/CSS", detail: "웹 마크업·스타일링" },
    ],
  },
  {
    category: "AI & Tools",
    items: [
      { name: "GPT API", detail: "LLM 기반 기능 개발" },
      { name: "Claude Code", detail: "AI 코딩 에이전트" },
      { name: "Cursor", detail: "AI 코딩 메인 IDE" },
      { name: "AWS", detail: "클라우드 인프라" },
      { name: "Firebase", detail: "BaaS·인증·DB" },
      { name: "Docker", detail: "컨테이너 기반 배포" },
      { name: "GitHub", detail: "버전 관리·협업" },
      { name: "Vercel", detail: "프론트엔드 배포" },
    ],
  },
  {
    category: "Language",
    items: [
      { name: "한국어", detail: "Native" },
      { name: "English", detail: "Business Level" },
      { name: "中文", detail: "Business Level" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          <span className="text-accent">#</span> Skills & Tools
        </motion.h2>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * gi }}
            >
              <h3 className="text-sm font-mono text-accent mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-accent/50" />
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + gi * 0.15 + ii * 0.06,
                    }}
                    className="group relative"
                  >
                    <div className="px-4 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] hover:border-accent/25 hover:bg-accent/5 transition-all duration-200 cursor-default">
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-xs text-white/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {item.detail}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
