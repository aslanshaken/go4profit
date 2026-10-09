import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Book from './pages/Book';
import Bookkeeping from './pages/Bookkeeping';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import Trucking from './pages/Trucking';
import Terms from './pages/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/bookkeeping" element={<Bookkeeping />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book" element={<Book />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
      <Route path="/tos" element={<Navigate to="/terms" replace />} />
      <Route path="/trucking" element={<Trucking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
