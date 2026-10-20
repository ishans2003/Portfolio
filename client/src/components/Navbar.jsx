const items = ['about', 'projects', 'skills', 'contact'];
export default function Navbar({ name }) {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/30">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold">{name}</a>
        <ul className="flex gap-5 text-sm text-white/70">
          {items.map((i) => (
            <li key={i}><a className="hover:text-white capitalize" href={`#${i}`}>{i}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
