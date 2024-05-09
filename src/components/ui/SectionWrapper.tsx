import { HTMLProps } from "react";
import { MotionProps, motion } from "framer-motion";

const SectionWrapper = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & MotionProps) => {
  return (
    <motion.section
      whileInView="animate"
      initial="hidden"
      className={`px-[4vw]${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
