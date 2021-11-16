import Home from "./Pages/Home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Blog from "./components/Blog";
import Header from "./components/header/Header";
import Footer from "./components/footer/index";
import Appointment from "./components/Appointment";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
