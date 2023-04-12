import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Deals from "./components/Deals";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Deals />
      <Contact />
    </div>
  );
};

export default App;
