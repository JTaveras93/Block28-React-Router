import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import NavBar from './components/NavBar'
import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div>
          <footer id="footer">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/">Home</Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
