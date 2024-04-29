import { Image, SectionWrapper } from "./ui";

const HeroSection = () => {
  return (
    <SectionWrapper className="pt-[5vh]">
      <Image src="/imgs/hero.png" alt="Hero image" className="px-[1vw ] w-full max-h-[70vh] object-cover" />
    </SectionWrapper>
  );
};

export default HeroSection;
