import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useWindowDimensions } from "../hooks";
import { NavLinks } from "../utils/helper";
import { AnimateTextLines } from "./animation";
import { NextBtn, PrevBtn } from "./carousel";
const data = [
  {
    title: "Astrum Films",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/revelated1.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Level A Agency",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/revelated2.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Makina Studios ",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/revelated1.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
  {
    title: "Magnum VFX",
    des: "Entity comprising specialized boutiques catering to various media.",
    url: "",
    poster: "/imgs/revelated2.png",
    category: "ORIGINAL DOCUMENTARY",
    date: "APRIL 2024",
  },
];
const RevealedSection = () => {
  const scrollRef = useRef(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.6;
  const scrollWidth = width * 0.65;
  const slideLeft = () => {
    const slider = document.getElementById("revealedSlider");
    if (slider && activeSlider > 0) {
      setActiveSlider(
        Math.ceil((slider.scrollLeft - scrollWidth) / scrollWidth),
      );
      slider.scrollLeft = slider?.scrollLeft - scrollWidth;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("revealedSlider");
    if (slider && activeSlider < 3) {
      setActiveSlider(
        Math.ceil((slider.scrollLeft + scrollWidth) / scrollWidth),
      );
      slider.scrollLeft = slider?.scrollLeft + scrollWidth;
    }
  };

  return (
    <div
      ref={scrollRef}
      className="relative bg-white md:pb-[6vh] md:pt-[6vh] xl:pb-[15vh] 3xl:pb-[10vh]"
    >
      <motion.div
        id={NavLinks[4].id}
        className="top-0 flex w-full flex-col justify-evenly bg-white pb-[5vh] pt-[5vh]"
      >
        <div className="px-[5vw] md:pb-[4vh]">
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },

              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
            className="pb-[0.5vh] text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]"
          >
            News
          </motion.p>

          <AnimateTextLines
            items={["Revealed and", "Upcoming Projects"]}
            className="font-RedHatDisplay-Black text-[4.5vw] 3xl:text-[3vw]"
          />
        </div>
        <div className="relative flex-1">
          <motion.section
            id="revealedSlider"
            className="no-scrollbar relative flex h-full flex-col gap-[5vw] overflow-x-scroll scroll-smooth whitespace-nowrap pe-[4vw] ps-[4vw] pt-[2vh] md:flex-row md:pe-[30vw] xl:pt-[5vh]"
            // className="flex h-full gap-[5vw]  pe-[30vw] ps-[5vw] pt-[2vh] xl:pt-[5vh]"
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
          <div className="absolute -top-0 left-0 hidden md:flex w-full items-center justify-between gap-[5vw] px-[5vw] xl:-top-0">
            <PrevBtn onClick={slideLeft} />
            <NextBtn onClick={slideRight} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevealedSection;
