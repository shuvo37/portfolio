import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, skillIcons } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        white="Technical"
        accent="Expertise"
        sub="The languages, frameworks and ideas I use to build and reason about applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.1}>
            <div className="glow-card h-full p-6">
              <h3 className="mb-4 text-center text-base font-semibold text-accent">{g.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-bg px-3 py-1.5 text-xs text-slate-300 transition hover:border-accent/50"
                  >
                    {skillIcons[s] && (
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-white/90 p-[3px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/icons/${skillIcons[s]}.svg`} alt="" className="h-full w-full" />
                      </span>
                    )}
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
