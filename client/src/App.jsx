import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <div className="min-h-screen grid place-items-center text-center">
            <div>
              <h1 className="text-5xl font-bold glow-text">404</h1>
              <Link to="/" className="mt-4 inline-block underline">Back home</Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
