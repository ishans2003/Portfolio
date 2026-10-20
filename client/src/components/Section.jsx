import useReveal from './useReveal.js';
export default function Section({ id, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} ref={ref} className="reveal max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}
