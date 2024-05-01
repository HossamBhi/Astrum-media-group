import { ToastContainer } from "react-toastify";
import {
  AboutSection,
  ContactSection,
  FeatureProjectsSection,
  FooterSection,
  HeroSection,
  OurGroupSection,
  OurPeopleSection,
  RevealedSection,
} from "./components";
import { HomeNav } from "./components/Navbar";
import Example from "./Test";

const Home = () => (
  <main className="min-h-screen w-full">
    <HomeNav />
    <HeroSection />
    <AboutSection />
    <FeatureProjectsSection />
    <OurGroupSection />
    <OurPeopleSection />
    <RevealedSection />
    <ContactSection />
    <FooterSection />
    <ToastContainer />
  </main>
);

export default Home;
