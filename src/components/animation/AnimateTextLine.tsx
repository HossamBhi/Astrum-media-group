import { MotionProps, motion } from "framer-motion";
import { animateText } from "../../utils/motionHelper";
import { HTMLProps } from "react";

const AnimateTextLine = ({
  children,
  ...props
}: HTMLProps<HTMLDivElement> & MotionProps) => (
  <motion.div variants={animateText} {...props}>
    {children}
  </motion.div>
);

export default AnimateTextLine;
