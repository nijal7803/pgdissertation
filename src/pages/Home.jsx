import React from "react";
import Navbar from "../components/Navbar";
import Background from "./Background";
import AboutUs from "./AboutUs";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <AboutUs />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
