import {
  AboutSection,
  ContactSection,
  FeatureProjectsSection,
  HeroSection,
  OurGroupSection,
  OurPeopleSection,
  RevealedSection,
} from "./components";
import { HomeNav } from "./components/Navbar";

const Home = () => (
  <main className="h-screen w-full justify-between ">
    <HomeNav />
    <HeroSection />
    <AboutSection />
    <FeatureProjectsSection />
    <OurGroupSection />
    <OurPeopleSection />
    <RevealedSection />
    <ContactSection />
  </main>
);

export default Home;
