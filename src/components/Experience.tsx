"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    period: "2025.06 - 2025.12",
    company: "Planfit",
    role: "PO / Solver (인턴)",
    tags: ["PO", "Solver", "B2B", "AI"],
    achievements: [
      {
        title: "B2B AI 솔루션 제휴 리드",
        description:
          "외부 AI 솔루션(모네타이) B2B 제휴를 직접 리드, 타사 C-레벨과 협업하여 기존 유저 결제 전환율(CVR) 30% 상승",
        metric: "CVR +30%",
      },
      {
        title: "AI 풀사이클 프로세스 구축",
        description:
          "AI 코딩 툴 및 생성형 AI(Veo, Sora 등)를 활용해 기획-개발-QA 풀사이클을 단독 수행, 리드타임 대폭 단축",
        metric: "리드타임 -85%",
      },
    ],
    highlight: "6개월간 30+건 실험 주도",
    link: "/experience/planfit",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          <span className="text-accent">#</span> Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative md:pl-16 mb-12"
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
                className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full border-2 border-accent/50 bg-[#0a0a0a] items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-accent glow" />
              </motion.div>

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/15 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="text-sm text-white/60">{exp.role}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 text-xs font-mono rounded border border-accent/40 text-accent">
                    {exp.highlight}
                  </span>
                </div>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {exp.achievements.map((achievement) => (
                    <div
                      key={achievement.title}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-semibold text-white/90">
                          {achievement.title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-accent whitespace-nowrap ml-2">
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Detail link */}
                <Link
                  href={exp.link}
                  className="text-xs text-accent font-medium hover:underline"
                >
                  자세히 보기 →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
