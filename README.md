# Ishans Kumar — Portfolio

A responsive portfolio for **Ishans Kumar**, a MERN full-stack developer. The site introduces Ishans, highlights selected projects and skills, and gives recruiters a direct way to get in touch.

## Features

- Responsive single-page layout with Home, About, Skills, Projects, Services, and Contact sections
- React Three Fiber hero visual and portrait
- Project cards with technology stacks and links to source code and live demos
- Contact form backed by an Express API
- JWT-protected admin endpoint for reading contact messages
- Security headers, rate limiting, and MongoDB persistence

## Tech stack

- **Frontend:** React 19, Vite, Tailwind CSS 4, React Three Fiber, Drei, Lucide
- **Backend:** Node.js, Express 5, MongoDB, Mongoose, JWT, bcrypt

## Run locally

Install each app's dependencies from its existing package manifest:

```bash
cd server
npm install
npm run server
```

In another terminal:

```bash
cd client
npm install
npm run dev
```

Configure the server's `.env` with the MongoDB connection string, JWT secret, and client origin (`CLIENT_URL`). Configure the client's `.env` with `VITE_API_URL` if the API is not running at its configured default. Do not commit secrets.

## Deploy the API to Render

The API package is in `server/`. When configuring an existing Render Web Service, set **Root Directory** to `server`, **Build Command** to `npm install`, and **Start Command** to `npm start`. The repository also includes a `render.yaml` Blueprint with these settings. Set `MONGODB_URI`, `CLIENT_URL` (the deployed frontend origin), `ADMIN_EMAIL`, and `ADMIN_PASSWORD_HASH` in Render's environment; the Blueprint generates `JWT_SECRET`.

The API exposes `POST /api/auth/login` for admin login, `POST /api/contact` for contact form submissions, and `GET /api/contact` for authenticated admin message retrieval. The root endpoint (`/`) returns a basic API status message.

## Project structure

```text
client/   React + Vite portfolio
server/   Express API and MongoDB integration
```
