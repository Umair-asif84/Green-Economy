import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./pages/OurStory/OurStory";
import WasteManagement from "./pages/WasteManagement/WasteManagement";
import CarbonTrading from "./pages/CarbonTrading/CarbonTrading";
import Challenges from "./pages/ChallengesAndSolutions/Challenges";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import NatureBasedAsset from "./pages/NatureBasedAsset/NatureBasedAsset";
import Media from "./pages/NewsandMedia/Media";
import RenewableEnergy from "./pages/RenewableEnergy/RenewableEnergy";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ShortFooter from "./components/ShortFooter/ShortFooter";
import CarbonCredits from "./pages/CarbonCredits/CarbonCredits";
import ScrollToTop from "./components/ScrollForTop/ScrollForTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />} />{" "}
        <Route exact path="/our-story" element={<OurStory />} />{" "}
        <Route exact path="/news-and-media" element={<Media />} />{" "}
        <Route exact path="/challenges" element={<Challenges />} />{" "}
        <Route exact path="/naturebasedasset" element={<NatureBasedAsset />} />{" "}
        <Route exact path="/carbon-trading" element={<CarbonTrading />} />{" "}
        <Route exact path="/renewable-energy" element={<RenewableEnergy />} />{" "}
        <Route exact path="/waste-management" element={<WasteManagement />} />{" "}
        <Route exact path="/projects" element={<Projects />} />{" "}
        <Route exact path="/carbon-credits" element={<CarbonCredits />} />{" "}
        <Route exact path="/contact-us" element={<ContactUs />} />

      </Routes>{" "}
      <Footer />
      <ShortFooter />
    </>
  );
};

export default App;