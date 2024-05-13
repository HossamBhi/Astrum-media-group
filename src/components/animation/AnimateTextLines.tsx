import { MotionProps, motion } from "framer-motion";
import { HTMLProps } from "react";

const AnimateTextLines = ({
  items,
  itemScope,
  children,
  ...props
}: { items: string[] } & HTMLProps<HTMLDivElement> & MotionProps) => (
  <motion.div
    whileInView="animate"
    initial="hidden"
    transition={{ staggerChildren: 0.2 }}
  >
    {items?.map((item, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },

          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          },
        }}
        {...props}
      >
        {item}
      </motion.div>
    ))}
  </motion.div>
);

export default AnimateTextLines;
