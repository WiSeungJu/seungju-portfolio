"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Dev",
    items: [
      { name: "Cursor", detail: "AI 코딩 메인 IDE" },
      { name: "Claude", detail: "기획·개발 전반 AI 파트너" },
      { name: "React Native", detail: "모바일 앱 개발" },
      { name: "MySQL", detail: "데이터베이스 설계·운영" },
      { name: "Next.js", detail: "웹 프론트엔드" },
      { name: "Vercel", detail: "배포 및 호스팅" },
    ],
  },
  {
    category: "Product",
    items: [
      { name: "Amplitude", detail: "퍼널 분석·실험 추적" },
      { name: "Figma", detail: "UI/UX 설계" },
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
