"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    period: "2025.06 - 2025.12",
    company: "Planfit",
    logo: "/images/planfit-logo.png",
    role: "PO / Solver (인턴)",
    tags: ["PO", "Solver", "AI"],
    tagline: "제약 안에서 해법을 찾는 PO",
    roleNote:
      "Solver — 기획·디자인·프론트엔드·QA를 1인 스프린트로 운영하며 병목을 해결하는 신설 직무",
    summary:
      "재직 6개월 중 초기 2개월 온보딩을 거쳐, 이후 4개월간 Solver 역할로 30건 이상의 전환율 실험을 직접 설계·실행했습니다.",
    summarySub:
      "두 개의 대표 프로젝트가 각기 다른 제약 조건에서 가설 검증 방식을 보여줍니다.",
    achievements: [
      {
        index: "01",
        title: "AI 영상 기반 시즌 페이월",
        description:
          "정적 이미지를 AI 생성 시즌 영상으로 전환해 '한정성'이라는 맥락을 만들고, 신규 유저 할인권 결제 전환율을 목표 대비 2배 초과 달성했습니다.",
        metric: "+20%",
        metricLabel: "CVR",
        sub: "목표 대비 2배 달성",
      },
      {
        index: "02",
        title: "Monetai 제휴 · 노출 제어 레이어",
        description:
          "실험이 제한되는 기존 유저 화면에 손대지 않고, 외부 AI 예측 솔루션을 도입·운영해 구매 확률 기반 노출 제어 레이어를 확보했습니다.",
        metric: "+75%",
        metricLabel: "CVR",
        sub: "현재까지 프로덕션 운영 중",
      },
    ],
    highlight: "Solver 4개월 · 30+건 실험",
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
              <Link
                href={exp.link}
                className="group relative block p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/30 hover:bg-white/[0.035] transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl" />
                </div>

                {/* Background logo */}
                {exp.logo && (
                  <div className="pointer-events-none absolute right-6 -top-12 w-44 h-44 md:w-56 md:h-56 opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-screen brightness-150">
                    <Image
                      src={exp.logo}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="288px"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <span className="text-sm text-white/50">{exp.role}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-base md:text-lg font-semibold text-white/85 mb-2">
                    {exp.tagline}
                  </p>

                  {/* Role note */}
                  <p className="text-xs text-accent/80 mb-3 max-w-2xl">
                    {exp.roleNote}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
                    {exp.summary}
                  </p>
                  <p className="text-sm text-white/55 leading-relaxed mb-5 max-w-2xl">
                    {exp.summarySub}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded border border-white/10 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded border border-accent/40 text-accent">
                      {exp.highlight}
                    </span>
                  </div>

                  {/* Key Projects preview */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {exp.achievements.map((achievement) => (
                      <div
                        key={achievement.title}
                        className="relative p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 group-hover:border-accent/20 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-mono text-accent/70">
                            {achievement.index}
                          </span>
                          <span className="text-[10px] font-mono text-white/30 tracking-wider">
                            KEY PROJECT
                          </span>
                        </div>

                        {/* Huge metric */}
                        <div className="flex items-baseline gap-1.5 mb-2">
                          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent leading-none tracking-tight">
                            {achievement.metric}
                          </span>
                          <span className="text-xs font-mono text-white/40">
                            {achievement.metricLabel}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-emerald-400 mb-3">
                          {achievement.sub}
                        </p>

                        <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-white/55 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                    <span>케이스 스터디 보기</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                    <span className="ml-2 text-[10px] font-mono text-white/30 border-l border-white/10 pl-2">
                      2 PROJECTS · THINKING + EXECUTION
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
