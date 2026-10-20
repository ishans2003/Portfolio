import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article key={p.title} className="rounded-3xl border border-white/10 bg-black/50 p-6 transition hover:-translate-y-1 hover:border-rose-500/50 sm:p-7">
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-rose-500/10 text-rose-400"><ArrowUpRight size={20} /></div>
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{p.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-rose-500/20 bg-rose-500/5 px-2.5 py-1 text-xs text-rose-200">{s}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-300 transition hover:text-rose-300">Code <ArrowUpRight size={14} /></a>
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-300 transition hover:text-rose-300">Live <ArrowUpRight size={14} /></a>}
          </div>
        </article>
      ))}
    </div>
  );
}
