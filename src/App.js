import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Telecom from "./components/Telecom";
import Construction from "./components/Construction";
import Power from "./components/Power";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="../#services" element={<Construction />} />
          <Route path="/power" element={<Power />} />
          <Route path="#contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
