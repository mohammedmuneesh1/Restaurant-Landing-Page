import React from "react";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import Work from "../components/Work";
import Blog from "../components/Blog";
import { Footer } from "../components/Footer";
import Contact from "../components/Contact";
import { Home } from "../components/Home";
import Testimonials from "../components/Testimonials";
import Trail from "../components/Trail";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Work />
      <Testimonials/>
      <Contact />
      <Footer />
      {/* 
      
      <Blog />
       */}
      {/*  */}
      {/* <Trail/> */}
    </>
  );
}
