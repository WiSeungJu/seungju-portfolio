"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const images = {
  hero: "/images/drinkig-hero.jpg",
  screens: [
    "/images/drinkig-screen-1.jpg",
    "/images/drinkig-screen-2.jpg",
    "/images/drinkig-screen-3.jpg",
  ],
};

export default function DrinkigPage() {
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
              1인 기획 · 개발
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              2025 홍익인 창업페스티벌 2등
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/50 border border-white/10">
              2025.12 — 현재 운영 중
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Drinkig</h1>
          <p className="text-xl text-white/50 mb-6">
            드링키지 — 와인 입문의 장벽을 낮추는 취향 기반 큐레이션 앱
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://drinkig.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              웹사이트
            </a>
            <a
              href="https://apps.apple.com/kr/app/%EB%93%9C%EB%A7%81%ED%82%A4%EC%A7%80-%EC%B7%A8%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%99%80%EC%9D%B8-%EC%B6%94%EC%B2%9C%EA%B3%BC-%EA%B8%B0%EB%A1%9D/id6741486172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
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
            alt="Drinkig 메인"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10">Drinkig</span>
          </div>
        </motion.div>

        {/* Problem & Motivation */}
        <div className="grid md:grid-cols-[1fr_280px] gap-16 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">#</span> Problem
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                와인을 처음 접하는 사람에게 &ldquo;달다&rdquo;의 기준은 와인을
                좋아하는 사람의 &ldquo;달다&rdquo;와 전혀 다릅니다. 같은 단어를
                쓰지만 서로 다른 것을 이야기하고 있는 셈이죠. 이런 기준의 불일치가
                와인 입문의 장벽을 불필요하게 높이고 있었습니다.
              </p>
              <p>
                와인을 부담 없이, 자신의 언어로 탐색할 수 있는 경험을 만들고
                싶었습니다. 원래 2025년 6월 팀 프로젝트로 시작했지만, 팀원들의
                사정으로 종료되었습니다. 하지만 문제의식을 놓을 수 없어서 같은
                해 12월, 문제 정의부터 다시 뾰족하게 다듬고 기술 스택도 Swift에서
                React Native로 전환하여 1인으로 처음부터 다시 만들기로
                결정했습니다. 현재까지 직접 운영하고 있습니다.
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
                1인 기획 · 디자인 · 개발
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">기간</h3>
              <p className="text-sm text-white/80">
                2025.12 — 현재 운영 중
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">
                기술 스택
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "MySQL",
                  "Figma",
                  "Cursor",
                  "Claude",
                  "Antigravity",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded border border-white/10 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 mb-2">성과</h3>
              <p className="text-sm text-white/80 mb-2">
                2025 홍익인 창업페스티벌 2등 수상
              </p>
              <a
                href="https://www.hongik.ac.kr/kr/newscenter/news.do?mode=view&articleNo=140097&title=2025+%ED%99%8D%EC%9D%B5%EC%9D%B8+%EC%B0%BD%EC%97%85%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%84%B1%EB%A3%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-indigo-400 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                기사 보기
              </a>
            </div>
          </motion.div>
        </div>

        {/* 0 → 1 Journey */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-accent">#</span> 0 → 1 Journey
          </h2>
          <p className="text-sm text-white/50 mb-8">
            1인으로 아이디어부터 App Store 출시, 그리고 현재 운영까지
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

            {[
              {
                phase: "12월",
                title: "문제 재정의 & 키 피처 설계",
                description:
                  "기존 팀 프로젝트의 방향성을 재검토하고, '초보자의 언어로 와인을 탐색한다'는 핵심 가설을 수립했습니다. Swift로 되어 있던 기존 코드를 버리고, React Native로 처음부터 새로 시작하기로 결정. Figma Make를 활용해 전반적인 UI/UX 흐름을 빠르게 프로토타이핑했습니다.",
                tags: ["문제 정의", "기술 전환", "Figma Make", "React Native"],
              },
              {
                phase: "1월",
                title: "설계 · 개발 풀사이클",
                description:
                  "Figma로 UI/UX를 설계하면서 동시에 개발을 병행했습니다. 취향 테스트 플로우, 와인 점수 시스템, AI 스마트렌즈 등 핵심 기능을 구현하고, 매일 빌드-테스트-수정을 반복했습니다.",
                tags: ["Figma", "개발 병행", "빠른 이터레이션"],
              },
              {
                phase: "2월",
                title: "App Store 출시",
                description:
                  "App Store 심사를 통과하고 정식 출시했습니다. 아이디어 재정의부터 출시까지 약 2개월, 1인으로 풀사이클을 완수했습니다.",
                tags: ["App Store 출시", "1인 풀사이클"],
              },
            ].map((item, i) => (
              <div key={item.phase} className="relative sm:pl-12 mb-8 last:mb-0">
                {/* Node */}
                <div className="hidden sm:flex absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 border-accent/50 bg-[#0a0a0a] items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <span className="text-xs font-mono text-accent mb-2 block">
                    {item.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded border border-white/10 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Key Features
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "취향 기반 추천",
                description:
                  "유저의 맛 선호도를 분석하여 개인화된 와인을 추천하고, 각 와인이 나와 얼마나 잘 맞는지 점수로 보여줍니다.",
              },
              {
                title: "AI 스마트렌즈",
                description:
                  "카메라로 와인 라벨이나 레스토랑 메뉴판을 촬영하면 와인을 자동 인식하고, 내 취향과의 매칭 점수를 즉시 확인할 수 있습니다.",
              },
              {
                title: "와인 기록",
                description:
                  "마셔본 와인을 기록하고 취향 데이터를 쌓아갈수록 추천 정확도가 높아지는 구조로 설계했습니다.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <h3 className="text-sm font-bold text-white/90 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-accent">#</span> Screens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {images.screens.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]"
              >
                <Image
                  src={src}
                  alt={`Drinkig 화면 ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-white/10">
                    Screen {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI 활용 */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-accent">#</span> AI Tool Stack
          </h2>
          <p className="text-sm text-white/50 mb-8">
            각 AI 도구의 강점을 비교하며 용도에 맞게 조합하여 활용했습니다
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                tool: "Claude",
                usage: "코드 아키텍처 · 비즈니스 로직",
                description:
                  "전문성과 정확도가 필요한 영역에 활용했습니다. DB 설계, 복잡한 로직 구현, 코드 리뷰 등 개발의 핵심 의사결정에 함께했습니다.",
              },
              {
                tool: "Antigravity",
                usage: "UI/UX 설계 · 디자인 피드백",
                description:
                  "비주얼 감각이 필요한 작업에 활용했습니다. 화면 레이아웃, 컬러 시스템, 컴포넌트 구조 등 UI/UX 관련 부분에서 강점을 보였습니다.",
              },
              {
                tool: "Figma Make",
                usage: "UI/UX 프로토타이핑",
                description:
                  "전체 화면 흐름과 UI/UX 구조를 빠르게 프로토타이핑하는 데 활용했습니다. 아이디어를 시각화하는 속도를 크게 높여 기획과 개발 사이의 간극을 줄였습니다.",
              },
              {
                tool: "Midjourney · Veo",
                usage: "비주얼 에셋 · 로딩 영상",
                description:
                  "앱 내 로딩 화면 영상과 비주얼 콘텐츠를 생성형 AI로 제작했습니다. 디자이너 없이도 퀄리티 있는 비주얼을 확보할 수 있었습니다.",
              },
              {
                tool: "Nano Banana",
                usage: "아이콘 · 그래픽 에셋",
                description:
                  "앱에 필요한 아이콘과 일러스트 에셋을 AI로 생성하여, 일관된 비주얼 아이덴티티를 빠르게 구축했습니다.",
              },
            ].map((item) => (
              <div
                key={item.tool}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white/90">
                    {item.tool}
                  </h3>
                  <span className="text-xs text-accent/70">
                    {item.usage}
                  </span>
                </div>
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
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-between pt-8 border-t border-white/5"
        >
          <Link
            href="/#projects"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← 프로젝트 목록
          </Link>
          <Link
            href="/projects/gourmevel"
            className="text-sm text-accent hover:text-indigo-400 transition-colors"
          >
            다음: Gourmevel →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
