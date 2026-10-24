import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        white="Featured"
        accent="Projects"
        sub="Two full-stack projects built end to end, from database design to the user interface."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <article className="glow-card flex h-full flex-col overflow-hidden">
              <div className={`relative flex h-40 items-end bg-gradient-to-br ${p.gradient} p-6`}>
                <span className="absolute right-5 top-4 rounded-full bg-accent/90 px-3 py-0.5 text-xs font-semibold text-white">
                  Featured
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-300">{p.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 pt-1">
                  {p.links.map((l, idx) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        idx === 0
                          ? "rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white hover:brightness-110"
                          : "rounded-lg border border-line bg-bg px-4 py-2 text-xs font-semibold text-white hover:border-accent/60"
                      }
                    >
                      {l.label} code
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
