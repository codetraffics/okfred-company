import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Count from "./components/Count";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-primary-bg">
      <Navbar />
      <Banner />
      <About />
      <Count />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
