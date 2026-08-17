import { Navigate, Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/trucking" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
