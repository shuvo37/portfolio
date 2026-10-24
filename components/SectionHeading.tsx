import Reveal from "./Reveal";

export default function SectionHeading({
  white,
  accent,
  sub,
}: {
  white: string;
  accent: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {white} <span className="text-accent">{accent}</span>
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">{sub}</p>}
    </Reveal>
  );
}
