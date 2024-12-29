import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '/components/header';
import Footer from '/components/footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
