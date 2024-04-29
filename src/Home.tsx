import {
  AboutSection,
  FeatureProjectsSection,
  HeroSection,
  OurGroupSection,
} from "./components";
import { HomeNav } from "./components/Navbar";

const Home = () => (
  <main className="h-screen w-full justify-between ">
    <HomeNav />
    <HeroSection />
    <AboutSection />
    <FeatureProjectsSection />
    <OurGroupSection />
  </main>
);

export default Home;
