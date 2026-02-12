import Navbar from "../../Navbar";
import OpenAccount from "../../OpenAccount";
import Footer from "../../Footer";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
  return (
    <>
     
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
  
    </>
  );
}

export default HomePage;
