"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 30, suffix: "+", label: "실험 수행", description: "6개월간 PO로서" },
  {
    value: 85,
    suffix: "%",
    label: "리드타임 단축",
    description: "AI 풀사이클로",
  },
  {
    value: 124,
    suffix: "만",
    label: "오가닉 뷰",
    description: "고메블 최고 조회수",
  },
];

const badges = [
  "Product Owner",
  "AI-Driven",
  "AI-Native",
  "3 Languages",
  "홍익대학교 컴퓨터공학과",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start"
        >
          {/* Profile image placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {/* TODO: 프로필 이미지를 /public/images/profile.jpg 에 추가 */}
              <Image
                src="/images/profile.jpg"
                alt="위승주 프로필"
                fill
                className="object-cover"
                sizes="224px"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">#</span> About
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              기획부터 개발, AI 활용까지 직접 수행하는 기획자입니다.
              <br />
              문제를 정의하고, 프로덕트로 구현하며, 데이터로 검증합니다.
              <br />
              싱가포르에서 5년간 생활하며 다양한 문화권에서 협업한 경험이 있습니다.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-accent/30 bg-accent/5 text-accent"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-accent/[0.03] transition-all"
            >
              <p className="text-xs text-white/50 font-mono mb-2">
                {stat.description}
              </p>
              <p className="text-4xl md:text-5xl font-bold text-white glow-text">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
