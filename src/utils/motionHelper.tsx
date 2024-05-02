import { AnimationType } from "framer-motion";

export const animateText = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

export const textVariant = ({ delay }: { delay?: number }) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: {
  direction?: "left" | "right" | "up" | "down";
  type: AnimationType;
  delay?: number;
  duration?: number;
}) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = ({
  delay,
  duration,
}: {
  delay?: number;
  duration?: number;
}) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: {
  direction?: "left" | "right" | "up" | "down";
  type: AnimationType;
  delay?: number;
  duration?: number;
}) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: {
  staggerChildren?: number;
  delayChildren?: number;
}) => {
  return {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
