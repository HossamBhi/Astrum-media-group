import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useWindowDimensions } from "../hooks";
import { NavLinks } from "../utils/helper";
import { AnimateTextLine, AnimateTextLines } from "./animation";
import { SectionWrapper } from "./ui";

const data = [
  {
    title: "Astrum Films",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/feature-space.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Level A Agency",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/feature-space.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Makina Studios ",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/feature-space.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Magnum VFX",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/feature-space.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
];

const FeatureProjectsSection = () => {
  const scrollRef = useRef(null);
  const { width } = useWindowDimensions();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${70 * data.length}%`],
  );
  const y = useTransform(scrollYProgress, [0.7, 1], ["0", `-100%`]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 || pos === 0 ? "relative" : "fixed",
  );

  const cardWidth = width * 0.6;

  return (
    <motion.div
      ref={scrollRef}
      whileInView="animate"
      initial="hidden"
      className="relative md:h-[400vh] md:pb-[6vh] xl:pb-[15vh] 3xl:pb-[10vh]"
    >
      <motion.div
        style={width > 768 ? { position, y } : {}}
        className="top-0 w-full bg-white pt-[5vh] md:fixed md:h-screen"
      >
        <SectionWrapper
          className="flex flex-row gap-[4vw] pb-[5vh]"
          id={NavLinks[3].id}
        >
          <AnimateTextLine className="flex-1 font-RedHatDisplay-Black text-[5vw] 3xl:text-[3.3vw]">
            Feature Projects
          </AnimateTextLine>

          <div className="flex flex-1 items-end">
            <AnimateTextLines
              items={[
                "entity comprising specialized",
                "boutiques catering to various",
                "media landscape facets.",
              ]}
              className="text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]"
              transition={{ staggerChildren: 0.2 }}
            />
          </div>
        </SectionWrapper>
        <motion.section
          style={width > 768 ? { x } : {}}
          id="slider"
          className="relative flex h-full flex-col gap-[5vw] pe-[4vw] ps-[4vw] md:flex-row md:pe-[30vw]"
          // className="no-scrollbar relative flex h-full gap-[5vw] overflow-x-scroll scroll-smooth whitespace-nowrap pe-[30vw] ps-[5vw]"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col`}
              style={{ minWidth: cardWidth }}
            >
              <div className="flex items-center justify-center overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="w-[100%] object-cover"
                  src={item.poster}
                  alt={item.title}
                />
              </div>
              <div
                className={`flex justify-between ps-[1vw] pt-[2vh] text-[1.5vw] transition-all duration-500 md:text-[1.1vw] xl:pt-[5vh] 3xl:text-[0.73vw]`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center font-RedHatDisplay-Black">
                    M&nbsp;&nbsp;
                    <span className="h-[2px] w-[1.2vw] bg-black"></span>
                    &nbsp; Y
                  </div>
                  <p className="font-bold text-black">{item.date}</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="min-w-[30vw] font-RedHatDisplay-Black">
                    CATEGORY
                  </h3>
                  <p className="text-[1.6vw] font-medium italic text-secondary md:text-[1.2vw] 3xl:text-[0.8vw]">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
      {/* <div className="absolute bottom-[6vh] left-[70vw] flex w-[25vw] items-center justify-between gap-[5vw] xl:bottom-[15vh] 3xl:bottom-[10vh]">
        <PrevBtn onClick={slideLeft} />
        <NextBtn onClick={slideRight} />
      </div> */}
    </motion.div>
  );
};

export default FeatureProjectsSection;
