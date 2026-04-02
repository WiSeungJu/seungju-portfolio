"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const fullText = "기획부터 바이브 코딩까지, AI로 프로덕트를 만드는 기획자";
  const mouseRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (mouseRef.current) {
        const rect = mouseRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={mouseRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden grid-bg"
    >
      {/* Interactive gradient blob */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] transition-all duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Terminal label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-white/80">
            Product Owner & AI-Native Planner
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">위승주</span>
        </motion.h1>

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl text-white/80 font-mono">
            <span className="text-accent mr-2">&gt;</span>
            {text}
            {!done && <span className="cursor-blink" />}
            {done && <span className="cursor-blink" />}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-accent hover:bg-indigo-400 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            이력 보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-full transition-all"
          >
            함께 이야기하기
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
