# Portfolio – Ishans Kumar

React + Vite + Tailwind 4 client with a React Three Fiber hero, and an Express 5 + MongoDB API (contact form, JWT-protected admin read).

## Setup
```bash
# server
cd server
npm i express mongoose dotenv cors helmet express-rate-limit jsonwebtoken bcrypt
npm i -D nodemon
cp .env.example .env   # fill in values
npm run server

# client (new terminal)
cd client
npm i react react-dom react-router react-hot-toast lucide-react three @react-three/fiber @react-three/drei
npm i -D vite @vitejs/plugin-react tailwindcss @tailwindcss/vite eslint
cp .env.example .env
npm run dev
```
Read messages: `POST /api/auth/login` -> token, then `GET /api/contact` with `Authorization: Bearer <token>`.
Deploy: API on Render, client on Vercel (set `VITE_API_URL` and `CLIENT_URL`).
