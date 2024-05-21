import { motion } from "framer-motion";
import { SectionWrapper } from "./ui";
import { NavLinks } from "../utils/helper";

const HeroSection = () => {
  return (
    <SectionWrapper
      id={NavLinks[0].id}
      className="pt-[1.5vh] xl:pt-[5vh] 3xl:pt-[4vh]"
    >
      <motion.img
        src="/imgs/MG_landing_thumb.png"
        alt="Hero image"
        className="h-[70vh] w-full object-cover"
      />
    </SectionWrapper>
  );
};

export default HeroSection;
