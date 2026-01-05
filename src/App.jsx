import "./index.css";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import AwakeningSection from "./sections/AwakeningSection";
import MethodSection from "./sections/MethodSection";
import VideoSection from "./sections/VideoSection";
import FinalCTASection from "./sections/FinalCTASection";
import AuthorSection from "./sections/AuthorSection";
import FAQSection from "./sections/FAQSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ProblemSection />
      <AwakeningSection />
      <MethodSection />
      <VideoSection />
      <FinalCTASection />
      <AuthorSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
