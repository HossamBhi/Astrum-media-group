import { HTMLProps } from "react";
import { motion } from "framer-motion";
const SectionWrapper = ({ children, className }: HTMLProps<HTMLDivElement>) => {
  return (
    <motion.section
      whileInView="animate"
      initial="hidden"
      className={`px-[4vw]${className ? " " + className : ""}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
