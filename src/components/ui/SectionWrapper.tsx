import { HTMLProps } from "react";
import { motion } from "framer-motion";
const SectionWrapper = ({ children, className }: HTMLProps<HTMLDivElement>) => {
  return (
    <motion.section
      whileInView="visible"
      initial="visible"
      className={`px-[5vw]${className ? " " + className : ""}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
