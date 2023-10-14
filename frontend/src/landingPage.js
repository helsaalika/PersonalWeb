import React from "react";
import Navbar from "./components/Navigation/navbar";
import MainBanner from "./components/LandingPage/MainBanner";
import Services from "./components/LandingPage/Service";
import About from "./components/LandingPage/About";
import OurWorks from "./components/LandingPage/OurWorks";
import Feedback from './components/Common/Feedback';
import Team from './components/Common/Team';
import FunFacts from './components/Common/FunFacts';
import LatestNewsSlider from './components/Common/LatestNewsSlider';
import CtaArea from './components/Common/CtaArea';
import Partner from './components/Common/Partner';
import WorkProcess from "./components/LandingPage/WorkProcess";
import Footer from "./components/Navigation/footer";

const LandingPage = () => {
  return (
      <>
          <Navbar />

          <MainBanner />

          <Services />

          <About />

          <OurWorks />

          <WorkProcess />

          <Feedback />

          <Team />

          <FunFacts />

          <LatestNewsSlider />

          <CtaArea />

          <Partner />
                
          <Footer />
      </>
  );
}

export default LandingPage;
