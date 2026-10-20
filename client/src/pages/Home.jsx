import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Database, Mail, Menu, Monitor, Users, X } from 'lucide-react';
import { useState } from 'react';
import Contact from '../components/Contact.jsx';
import Projects from '../components/Projects.jsx';
import { profile, skills } from '../data/portfolio.js';
import portrait from '../assest/22.jpeg';

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['services', 'Services'],
  ['contact', 'Contact'],
];

const strengths = [
  { icon: Monitor, title: 'Frontend focused', text: 'Responsive interfaces, thoughtful interactions, and accessible user flows.' },
  { icon: Database, title: 'Backend ready', text: 'Reliable APIs, authentication, and structured data for real applications.' },
  { icon: Users, title: 'Team minded', text: 'Clear communication, steady learning, and practical problem solving.' },
];

const services = [
  { icon: Code2, title: 'Web development', text: 'Responsive websites and web apps built with clean, maintainable code.' },
  { icon: Monitor, title: 'UI implementation', text: 'Polished interfaces that make products clear, useful, and easy to navigate.' },
  { icon: Database, title: 'Backend development', text: 'Practical APIs, authentication, and data models for dependable applications.' },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-rose-400">
        <span className="h-px w-8 bg-rose-500" />{label}<span className="h-px w-8 bg-rose-500" />
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400">{description}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#home" onClick={closeMenu} className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Ishans<span className="text-rose-500">.</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-rose-400 hover:text-rose-300 md:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div id="site-nav" className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-4 top-[calc(100%+0.5rem)] flex-col gap-1 rounded-2xl border border-white/10 bg-zinc-950 p-3 shadow-2xl shadow-black/50 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-rose-300 md:px-0 md:py-1 md:hover:bg-transparent">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl scroll-mt-24 items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
            <span className="h-px w-9 bg-rose-500" />MERN full-stack developer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Building thoughtful digital products with <span className="text-rose-500">clean code.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I’m {profile.name}, a developer who enjoys turning ideas into responsive websites, polished interfaces, and dependable backend solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-400">
              View projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-rose-400 hover:text-rose-300">
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-rose-400 hover:text-rose-300"><BriefcaseBusiness size={17} /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-rose-400 hover:text-rose-300"><Code2 size={17} /></a>
            <a href={`mailto:${profile.links.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-rose-400 hover:text-rose-300"><Mail size={17} /></a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {[['3+', 'Projects built'], ['10+', 'Core technologies'], ['100%', 'Focus on learning']].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-5">
                <strong className="block text-2xl font-bold text-rose-400 sm:text-3xl">{value}</strong>
                <span className="mt-1 block text-xs leading-5 text-zinc-400 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 lg:max-w-none">
          <div className="absolute aspect-square w-[78%] rounded-full bg-rose-600/15 blur-3xl" />
            <div className="relative grid aspect-square w-[min(78vw,390px)] place-items-center rounded-full border border-rose-400/30 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-3 shadow-[0_0_90px_rgba(244,63,94,0.18)]">
              <img src={portrait} alt={`Portrait of ${profile.name}`} className="h-full w-full rounded-full border border-white/10 object-cover object-top" />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-rose-400/30 bg-zinc-950 px-5 py-3 text-xs text-zinc-200 shadow-xl sm:text-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />Open to roles and collaboration
            </div>
          </div>
          <div className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-xs text-zinc-300 shadow-xl sm:right-2 sm:text-sm">
            <span className="mb-1 block text-[10px] uppercase tracking-widest text-zinc-500">Currently building</span>Full-stack experiences
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-y border-white/5 bg-zinc-950/70 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="About" title="Turning curiosity into useful products" />
          <div className="grid gap-7 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-black/40 p-7 sm:p-9">
              <p className="text-xl font-semibold leading-snug text-rose-300 sm:text-2xl">Code, communication, and steady improvement.</p>
              <p className="mt-5 leading-7 text-zinc-400">{profile.about}</p>
              <p className="mt-4 leading-7 text-zinc-400">I care about performance, readability, and delivering software that solves a real problem. I enjoy learning from each project and making the next release better.</p>
              <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-rose-500/60 px-5 py-2.5 text-sm font-semibold text-rose-300 transition hover:bg-rose-500 hover:text-white">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-rose-500/40">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-rose-500/10 text-rose-400"><Icon size={21} /></div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Skills" title="Tools and strengths I bring" description="A practical full-stack toolkit for building, shipping, and supporting web applications." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([group, list]) => (
              <article key={group} className="rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-7">
                <h3 className="mb-5 flex items-center gap-3 font-semibold text-white"><span className="h-2 w-2 rounded-full bg-rose-500" />{group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {list.map((skill) => <li key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {['Team player', 'Problem solver', 'Clear communicator', 'Adaptable'].map((trait) => <span key={trait} className="rounded-full bg-rose-500/10 px-4 py-2 text-sm text-rose-300">{trait}</span>)}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-y border-white/5 bg-zinc-950/70 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl"><SectionHeading label="Selected work" title="A few builds I’m proud of" /><Projects /></div>
      </section>

      <section id="services" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Services" title="How I can help" />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-rose-500/50">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-rose-500/10 text-rose-400 transition group-hover:bg-rose-500 group-hover:text-white"><Icon size={22} /></div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-y border-white/5 bg-zinc-950/70 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Contact" title="Let’s build something meaningful" description="Have a project idea, opportunity, or collaboration in mind? I’d love to hear about it." />
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-9"><Contact /></div>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {profile.name}. Built with care.</p>
          <div className="flex gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-rose-400 hover:text-rose-300"><Code2 size={17} /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-rose-400 hover:text-rose-300"><BriefcaseBusiness size={17} /></a>
            <a href={`mailto:${profile.links.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-rose-400 hover:text-rose-300"><Mail size={17} /></a>
          </div>
          <a href="#top" className="text-sm text-zinc-400 transition hover:text-rose-300">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
