import { motion } from "framer-motion";
import { NavLinks } from "../utils/helper";
import { fadeIn } from "../utils/motionHelper";
import { AnimateTextLine, AnimateTextLines } from "./animation";
import { SectionWrapper } from "./ui";

const AboutSection = () => {
  return (
    <>
      <SectionWrapper
        className="flex flex-row gap-[4vw] py-[6vh] xl:py-[15vh] 3xl:py-[10vh]"
        id={NavLinks[1].id}
      >
        <div className="flex-1">
          <AnimateTextLine className="pb-[0.5vh] text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]">
            Who We Are
          </AnimateTextLine>
          <AnimateTextLines
            items={[
              "We are an independent",
              "group of diverse",
              "production companies",
              "built on the fluid",
              "exchange of ideas and",
              "talents.",
            ]}
            className="font-RedHatDisplay-Black text-[3.2vw] 3xl:text-[2.2vw]"
            transition={{ staggerChildren: 0.2 }}
          />
        </div>
        <div className="flex flex-1 items-end">
          <AnimateTextLines
            items={[
              "Astrum Media Group is a collaborative platform",
              "for making a wide range of content for any",
              "medium through imagination, storytelling, and",
              "innovation technology.",
            ]}
            className="text-[1.8vw] italic  text-secondary 3xl:text-[1.2vw]"
            transition={{ staggerChildren: 0.2 }}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper className="flex flex-row gap-[4vw] pb-[6vh] xl:pb-[15vh] 3xl:pb-[10vh]">
        <motion.div
          variants={fadeIn({ direction: "up", duration: 0.8 })}
          className="flex flex-1 flex-col items-center justify-center bg-[#F7F7F7] px-[2vh] pb-[3vh] pt-[2vh] text-center xl:px-[4vh] xl:pb-[6vh] xl:pt-[4vh]"
        >
          <h3 className="pb-[0.5vh] font-RedHatDisplay-Black text-[3.2vw] 3xl:text-[2.2vw]">
            Mission
          </h3>
          <p className="text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]">
            Empower clients with top-tier media <br />
            solutions by utilizing technology and <br />
            talent to create compelling & engaging <br />
            multimedia experiences.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", duration: 0.8 })}
          className="flex flex-1 flex-col items-center justify-center bg-[#F7F7F7] px-[2vh] pb-[3vh] pt-[2vh] text-center xl:px-[4vh] xl:pb-[6vh] xl:pt-[4vh]"
        >
          <h3 className="pb-[0.5vh] font-RedHatDisplay-Black text-[3.2vw] 3xl:text-[2.2vw]">
            Vision
          </h3>
          <p className="text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]">
            Our vision is to be at the forefront <br />
            of the media industry, known for <br />
            our pioneering creativity & <br />
            cutting-edge solutions.
          </p>
        </motion.div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
