import { motion } from "framer-motion";
import { useWindowDimensions } from "../../hooks";

export const MenuToggle = ({
  showMenu,
  toggle,
}: {
  showMenu?: boolean;
  toggle: (e: any) => void;
}) => {
  const { width } = useWindowDimensions();
  return (
    <button
      aria-label="Toggle menu"
      className={`absolute right-0 flex h-[26px] flex-col gap-2 2xl:h-[1.7vw] 4xl:gap-4 ${!showMenu ? "text-black" : "text-white"}`}
      onClick={toggle}
    >
      <motion.span
        variants={{
          closed: { rotate: "0deg", x: 0, y: 0 },
          open: { rotate: "-45deg", y: width > 2561 ? "1rem" : "0.5rem" },
        }}
        transition={{ duration: 0.3 }}
        className={`block h-[1px] w-8 sm:h-[1px] sm:w-12 4xl:h-[3px] 4xl:w-24 ${!showMenu ? "bg-black" : "bg-white"}`}
      />
      <motion.span
        className={`block h-[1px] w-8 sm:h-[1px] sm:w-12 4xl:h-[3px] 4xl:w-24 ${!showMenu ? "bg-black" : "bg-white"}`}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.span
        variants={{
          closed: { rotate: "0deg", x: 0, y: 0 },
          open: { rotate: "-135deg", y: width > 2561 ? "-1rem" : "-0.5rem" },
        }}
        transition={{ duration: 0.3 }}
        className={`block h-[1px] w-8 sm:h-[1px] sm:w-12 4xl:h-[3px] 4xl:w-24 ${!showMenu ? "bg-black" : "bg-white"}`}
      />
    </button>
  );
};
