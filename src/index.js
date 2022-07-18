import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import ArticlePage from './pages/ArticlePage';
import Learning from './pages/Learning';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/articlePage" element={<ArticlePage />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
