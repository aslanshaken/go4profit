import { Navigate, Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
      <Route path="/tos" element={<Navigate to="/terms" replace />} />
      <Route path="/trucking" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
