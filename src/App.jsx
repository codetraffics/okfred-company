import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect, lazy } from "react";
import { BeatLoader } from "react-spinners";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Services from "./components/Services";

const Count = lazy(() => import("./components/Count"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-primary-bg">
      <Navbar />
      <Banner />
      <About />

      <Suspense
        fallback={<BeatLoader className="text-center" color="#36d7b7" />}
      >
        <Count />
      </Suspense>

      <Services />
      <Features />

      <Suspense
        fallback={<BeatLoader className="text-center" color="#36d7b7" />}
      >
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
