import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-accent">{profile.short}</p>
          <p className="mt-2 text-sm text-slate-400">
            Building reliable full-stack applications with .NET, React and Next.js.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download className="hover:text-accent">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Get in Touch</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href={`mailto:${profile.email}`} className="break-all hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneLink}`} className="hover:text-accent">
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
