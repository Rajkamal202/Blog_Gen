import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GeneratedBlog from './pages/GeneratedBlog';
import About from './pages/About';
import AllBlogs from './pages/AllBlogs';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generated-blog" element={<GeneratedBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-blogs" element={<AllBlogs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
