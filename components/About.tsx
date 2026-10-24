import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contests, education, judges, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading white="About" accent="Me" sub="Education and competitive programming background." />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glow-card h-full p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Who I am</h3>
            <p className="text-sm leading-relaxed text-slate-400">{profile.intro}</p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white">Education</h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-accent pl-4">
                  <p className="text-sm font-semibold text-white">{e.school}</p>
                  <p className="text-sm text-slate-400">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glow-card h-full p-6">
            <h3 className="mb-1 text-lg font-semibold text-white">Competitive Programming</h3>
            <p className="mb-5 text-sm text-slate-400">Solved 2,000+ coding problems across online judges.</p>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Profiles</p>
            <div className="flex flex-wrap gap-2">
              {judges.map((j) => (
                <a
                  key={j.label}
                  href={j.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs text-accent transition hover:border-accent/60"
                >
                  {j.label}
                </a>
              ))}
            </div>

            <p className="mb-2 mt-7 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contest certificates
            </p>
            <ul className="space-y-2">
              {contests.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-300 underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
