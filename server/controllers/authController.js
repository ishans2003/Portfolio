import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { email, password } = req.body ?? {};
  const ok =
    email === process.env.ADMIN_EMAIL &&
    password &&
    (await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || ''));
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
  res.json({ token });
}
