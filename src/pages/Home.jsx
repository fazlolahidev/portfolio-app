import React, { useRef } from "react";

//* Components *//
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  const aboutRef = useRef();

  return (
    <div className="relative" >
      <NavBar />
      <Hero aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Skills />
      <Qualification />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
