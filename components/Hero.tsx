"use client";

import { motion } from "framer-motion";
import Typing from "./Typing";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-slate-400"
        >
          Hello, I&apos;m {profile.name}, a
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          <span className="text-accent">.NET and Full-Stack</span> Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 h-8 text-lg text-slate-300 sm:text-xl"
        >
          <Typing phrases={profile.typing} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={profile.resume}
            download
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:brightness-110"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-line bg-card px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs text-slate-500 hover:text-slate-300"
      >
        <span className="mx-auto mb-2 flex h-9 w-5 justify-center rounded-full border border-slate-600 pt-2">
          <motion.span
            className="h-2 w-0.5 rounded bg-accent"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
        </span>
        Scroll to explore
      </a>
    </section>
  );
}
