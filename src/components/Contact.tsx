import { motion } from "framer-motion";
import { NavLinks, OUR_EMAIL } from "../utils/helper";
import { slideIn } from "../utils/motionHelper";
import { SectionWrapper } from "./ui";

const ContactSection = () => {
  return (
    <SectionWrapper
      variants={slideIn({ direction: "left", duration: 1 })}
      className="relative bg-white pb-[10vh] pt-[5vh]"
      id={NavLinks[5].id}
    >
      <motion.a
        href={`mailto:${OUR_EMAIL}`}
        aria-label={`Send mail to ${OUR_EMAIL}`}
        whileHover={"animateLine"}
        initial={"hideLine"}
        className="flex flex-1 flex-col items-center justify-center bg-[#F7F7F7] px-[4vh] py-[10vh] text-center"
      >
        <motion.h3 className="relative flex flex-col pb-[0.5vh] font-RedHatDisplay-Bold text-[10vw]">
          Get in Touch
          <motion.span
            variants={{
              animateLine: { width: "100%" },
              hideLine: { width: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-[1.5vw] h-2 bg-black"
          />
        </motion.h3>
        <motion.a
          className="font-RedHatDisplay-Medium text-[2.5vw] text-black"
          href={`mailto:${OUR_EMAIL}`}
          aria-label={`Send mail to ${OUR_EMAIL}`}
        >
          {OUR_EMAIL}
        </motion.a>
      </motion.a>
    </SectionWrapper>
  );
};

export default ContactSection;
