"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const images = {
  hero: "/images/gourmevel-hero.jpg",
  gallery: [
    "/images/gourmevel-gallery-1.jpg",
    "/images/gourmevel-gallery-2.jpg",
    "/images/gourmevel-gallery-3.jpg",
  ],
};

export default function GourmevelPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#projects"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            돌아가기
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20">
              1인 총괄 기획 · 운영
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              124만 뷰 · 1만 팔로워
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/50 border border-white/10">
              2022.05 — 현재 운영 중
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Gourmevel</h1>
          <p className="text-xl text-white/50 mb-6">
            고메블 — 미식 정보 기반 인스타그램 매거진
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/gourmevel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a
              href="https://blog.naver.com/gourmevel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/></svg>
              Blog
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] mb-16"
        >
          <Image
            src={images.hero}
            alt="Gourmevel 메인"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10">Gourmevel</span>
          </div>
        </motion.div>

        {/* Overview + Info */}
        <div className="grid md:grid-cols-[1fr_280px] gap-16 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">#</span> Overview
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                고메블은 미식 정보를 주제로 한 인스타그램 기반 매거진입니다.
                기획, 콘텐츠 제작, 편집, 업로드, 채널 운영까지 전 과정을 혼자서
                주도하며 2년 넘게 운영하고 있습니다.
              </p>
              <p>
                전문성 있는 콘텐츠와 알고리즘 최적화로 오가닉 트래픽만으로
                팔로워 1만 명을 달성했고, 브랜드 및 외부 업체와의 협업
                캠페인도 50건 이상 진행하며 미식 시장 내 영향력을 확장해
                왔습니다.
              </p>
              <p>
                인스타그램에서 시작해 네이버 블로그, 유튜브(롱폼 및 숏폼)로
                채널을 확장하며, 각 플랫폼 특성에 맞는 콘텐츠 전략을 설계하고
                실행했습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">역할</h3>
              <p className="text-sm text-white/80">
                1인 기획 · 제작 · 편집 · 운영
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">기간</h3>
              <p className="text-sm text-white/80">2022.05 — 현재 운영 중</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">채널</h3>
              <div className="flex flex-wrap gap-2">
                {["Instagram", "네이버 블로그", "YouTube"].map((ch) => (
                  <span
                    key={ch}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                활용 툴
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Final Cut Pro",
                  "Figma",
                  "Photoshop",
                  "Canva",
                  "Vrew",
                  "Notion",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Key Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "124만", label: "숏폼 최고 조회수" },
              { value: "1만+", label: "팔로워" },
              { value: "30만", label: "월 평균 방문" },
              { value: "50+", label: "브랜드 협업 건수" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white glow-text">
                  {metric.value}
                </p>
                <p className="text-xs text-white/50 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 대표 협업 사례 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Featured Collaboration
          </h2>
          <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-white">캐치테이블</h3>
              <span className="px-2 py-0.5 text-xs font-mono rounded border border-accent/30 text-accent">
                총 6회 협업
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              국내 대표 레스토랑 예약 플랫폼 &lsquo;캐치테이블&rsquo;과 공동
              콘텐츠를 제작했습니다. 기획안 작성부터 촬영, 편집, 캐치테이블
              측과의 커뮤니케이션 및 최종 결과물 전달까지 전 과정을 담당했습니다.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  metric: "2만~4만",
                  label: "콜라보 콘텐츠 평균 도달 수",
                },
                {
                  metric: "재협업",
                  label: "캐치테이블 측 재협업 요청",
                },
                {
                  metric: "↑",
                  label: "브랜드 노출 및 참여율 증가",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                >
                  <p className="text-lg font-bold text-accent mb-1">
                    {item.metric}
                  </p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategy */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Growth Strategy
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "알고리즘 분석",
                description:
                  "플랫폼별 알고리즘 특성을 분석하고, 노출 극대화를 위한 콘텐츠 포맷과 타이밍을 설계했습니다. 새로운 채널 진출 시에도 빠르게 학습하여 성과를 도출했습니다.",
              },
              {
                step: "02",
                title: "콘텐츠 최적화",
                description:
                  "썸네일, 후킹 포인트, 영상 길이 등을 데이터 기반으로 테스트하며 최적의 포맷을 도출했습니다. 단순 제작이 아닌, 기획-제작-배포의 전 과정을 전략적으로 설계했습니다.",
              },
              {
                step: "03",
                title: "멀티 채널 확장",
                description:
                  "인스타그램에서 시작해 블로그, 유튜브로 채널을 확장했습니다. 각 플랫폼의 알고리즘과 트렌드를 이해하고, 채널 특성에 맞춘 콘텐츠 전략을 수립했습니다.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-3xl font-bold text-accent/30 font-mono">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {images.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]"
              >
                <Image
                  src={src}
                  alt={`Gourmevel 콘텐츠 ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-white/10">
                    Content {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Learned */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> What I Learned
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "데이터 기반 콘텐츠 전략",
                description:
                  "감이 아닌 숫자로 콘텐츠의 성패를 판단하고, 반복 가능한 성장 공식을 만들었습니다.",
              },
              {
                title: "플랫폼 알고리즘 이해",
                description:
                  "각 플랫폼 알고리즘의 동작 원리를 깊이 이해하고, 이를 전략적으로 활용하는 역량을 키웠습니다.",
              },
              {
                title: "오가닉 그로스",
                description:
                  "광고 없이 100% 오가닉으로 팬덤을 구축한 경험을 통해 프로덕트 그로스 관점을 체득했습니다.",
              },
              {
                title: "브랜드 협업 & 커뮤니케이션",
                description:
                  "50건 이상의 브랜드 협업을 통해 외부 파트너와의 기획, 조율, 결과물 전달까지의 프로세스를 체득했습니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <h3 className="text-sm font-bold text-white/90 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom nav */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between pt-8 border-t border-white/5"
        >
          <Link
            href="/projects/drinkig"
            className="text-sm text-accent hover:text-indigo-400 transition-colors"
          >
            ← 이전: Drinkig
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            프로젝트 목록 →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
