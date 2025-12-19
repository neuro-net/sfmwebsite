import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { People } from './pages/People';
import { Resources } from './pages/Resources';
import { Gallery } from './pages/Gallery';
import { Research } from './pages/Research';

// Placeholder for News Archive (reusing Resources layout logic conceptually or just simple list)
const NewsArchive = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-mono font-bold mb-8">NEWS_ARCHIVE</h1>
    <p>Full news archive functionality would be implemented here.</p>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="resources" element={<Resources />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="research" element={<Research />} />
          <Route path="news" element={<NewsArchive />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;