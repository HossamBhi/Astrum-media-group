import { Image, SectionWrapper } from "./ui";

const HeroSection = () => {
  return (
    <SectionWrapper className="pt-[1.5vh] xl:pt-[5vh] 3xl:xl:pt-[4vh]">
      <Image
        src="/imgs/hero.png"
        alt="Hero image"
        className="max-h-[70vh] w-full object-cover"
      />
    </SectionWrapper>
  );
};

export default HeroSection;
