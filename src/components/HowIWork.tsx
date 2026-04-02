"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    keyword: "User-First",
    title: "데이터 기반 의사결정",
    description:
      "직감보다 근거를 우선합니다. Amplitude 퍼널 분석과 30+건의 A/B 테스트 경험을 바탕으로, 유저 행동에 기반한 의사결정을 내립니다.",
    terminal: "$ analyze --funnel --data-driven",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    keyword: "Speed-Driven",
    title: "빠른 실행, 빠른 검증",
    description:
      "AI 툴을 활용해 기획부터 개발, QA까지 풀사이클을 직접 수행합니다. 아이디어를 빠르게 프로덕트로 전환하고, 시장에서 검증하는 과정을 즐깁니다.",
    terminal: "$ ship --fast --ai-powered",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    keyword: "No Boundaries",
    title: "역할을 넘나드는 문제 해결",
    description:
      "PO로서 코드를 이해하고, 개발자로서 비즈니스를 설계합니다. 막히면 멈추지 않고 진행할 수 있는 방향을 찾으며, 직무의 경계 없이 직접 해결합니다.",
    terminal: "$ collaborate --no-limits",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    keyword: "Multilingual",
    title: "다문화 환경에서의 소통",
    description:
      "싱가포르에서 5년간 생활하며 다양한 문화적 맥락을 체득했습니다. 한국어, 영어, 중국어 3개 국어로 자연스럽게 커뮤니케이션합니다.",
    terminal: "$ speak --lang ko,en,zh",
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-i-work" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-accent">#</span> How I Work
          </h2>
          <p className="text-sm font-mono text-white/50">
            $ how-i-work --show-principles
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((item, i) => (
            <motion.div
              key={item.keyword}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon + keyword */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent/70 group-hover:text-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-accent px-2 py-0.5 rounded border border-accent/30">
                    {item.keyword}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Terminal line */}
                <p className="text-xs font-mono text-white/40 group-hover:text-white/50 transition-colors">
                  {item.terminal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
