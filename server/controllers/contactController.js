import Message from '../models/Message.js';
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createMessage(req, res) {
  const { name, email, message } = req.body ?? {};
  if (!name || !message || !emailRe.test(email || ''))
    return res.status(400).json({ message: 'Name, a valid email and a message are required' });
  await Message.create({ name, email, message });
  res.status(201).json({ message: 'Thanks! I will get back to you soon.' });
}

export async function listMessages(_req, res) {
  res.json(await Message.find().sort({ createdAt: -1 }));
}
