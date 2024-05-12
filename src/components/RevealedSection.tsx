import { useRef } from "react";
import { useWindowDimensions } from "../hooks";
import { Image } from "./ui";
import { useScroll, useTransform, motion } from "framer-motion";
import { AnimateTextLines } from "./animation";
import { animateText } from "../utils/motionHelper";
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
  // const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.6;
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", `-${70 * data.length}%`],
  );
  const y = useTransform(scrollYProgress, [0.7, 1], ["0", `-100%`]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 || pos === 0 ? "relative" : "fixed",
  );
  // const scrollWidth = width * 0.6;
  // const slideLeft = () => {
  //   const slider = document.getElementById("revealedSlider");
  //   if (slider && activeSlider > 0) {
  //     setActiveSlider(
  //       Math.ceil((slider.scrollLeft - scrollWidth) / scrollWidth),
  //     );
  //     slider.scrollLeft = slider?.scrollLeft - scrollWidth;
  //   }
  // };

  // const slideRight = () => {
  //   const slider = document.getElementById("revealedSlider");
  //   if (slider && activeSlider < 3) {
  //     setActiveSlider(
  //       Math.ceil((slider.scrollLeft + scrollWidth) / scrollWidth),
  //     );
  //     slider.scrollLeft = slider?.scrollLeft + scrollWidth;
  //   }
  // };

  return (
    <div
      ref={scrollRef}
      className="relative bg-white md:pt-[6vh] md:h-[400vh] md:pb-[6vh] xl:pb-[15vh] 3xl:pb-[10vh]"
    >
      <motion.div
        style={width > 768 ? { position, y } : {}}
        className="top-0 flex w-full flex-col justify-evenly bg-white pb-[5vh] pt-[5vh] md:h-screen"
      >
        <div className="px-[5vw] pb-[4vh]">
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
            style={width > 768 ? { x } : {}}
            id="revealedSlider"
            className="flex h-full flex-col gap-[5vw] pe-[4vw] ps-[4vw] pt-[2vh] md:flex-row md:pe-[30vw]"
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
          {/* <div className="absolute left-0 -top-[2vh] xl:-top-[5vh] flex w-full items-center justify-between gap-[5vw] px-[5vw]">
          <PrevBtn onClick={slideLeft} />
          <NextBtn onClick={slideRight} />
        </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default RevealedSection;
