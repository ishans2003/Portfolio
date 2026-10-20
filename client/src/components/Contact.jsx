import { useState } from 'react';
import toast from 'react-hot-toast';
import { BriefcaseBusiness, Code2, Mail, MapPin, Users } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err.message || 'Could not send message');
    } finally {
      setBusy(false);
    }
  }

  const input = 'w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-400/10';
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 text-white/80">
        <p className="leading-7">Open to entry-level full-stack roles in Delhi NCR. Say hello!</p>
        <a className="inline-flex items-center gap-3 transition hover:text-rose-300" href={`mailto:${profile.links.email}`}><Mail className="text-rose-400" size={17} />{profile.links.email}</a>
        <div className="grid gap-3 text-sm text-zinc-400">
          <p className="inline-flex items-center gap-3"><MapPin className="text-rose-400" size={17} />Delhi NCR, India</p>
          <p className="inline-flex items-center gap-3"><BriefcaseBusiness className="text-rose-400" size={17} />Open to entry-level roles</p>
        </div>
        <div className="flex gap-5">
          <a className="inline-flex items-center gap-2 transition hover:text-rose-300" href={profile.links.github} target="_blank" rel="noreferrer"><Code2 size={16} />GitHub</a>
          <a className="inline-flex items-center gap-2 transition hover:text-rose-300" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Users size={16} />LinkedIn</a>
        </div>
      </div>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <input aria-label="Name" className={input} placeholder="Name" value={form.name} onChange={set('name')} required />
        <input aria-label="Email" className={input} type="email" placeholder="Email" value={form.email} onChange={set('email')} required />
        <textarea aria-label="Message" className={`${input} sm:col-span-2`} rows="5" placeholder="Tell me about your project" value={form.message} onChange={set('message')} required />
        <button disabled={busy} className="inline-flex w-fit items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-400 disabled:opacity-50">
          {busy ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
}
