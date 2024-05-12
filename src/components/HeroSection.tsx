import { Image, SectionWrapper } from "./ui";
import { animate, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <SectionWrapper className="pt-[1.5vh] xl:pt-[5vh] 3xl:xl:pt-[4vh]">
      <motion.img
        // variants={{ hidden: { width: 0 }, animate: { width: "100%" } }}
        // transition={{ duration: 1.5 }}
        // initial={"hidden"}
        // animate={"animate"}
        // whileInView={undefined}
        src="/imgs/hero.png"
        alt="Hero image"
        className="h-[70vh] w-full object-cover"
      />
    </SectionWrapper>
  );
};

export default HeroSection;
