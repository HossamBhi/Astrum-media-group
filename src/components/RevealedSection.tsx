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
      className="relative h-[400vh] bg-white pb-[6vh] pt-[6vh] xl:pb-[15vh] 3xl:pb-[10vh]"
    >
      <motion.div
        style={{ position, y }}
        className="top-0 flex h-screen w-full flex-col justify-evenly bg-white pb-[5vh] pt-[5vh]"
      >
        <div className="flex-1 px-[5vw] pb-[4vh]">
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
        <div className="relative">
          <motion.section
            style={{ x }}
            id="revealedSlider"
            className="flex h-full gap-[5vw] pe-[30vw] ps-[4vw] pt-[2vh]"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col`}
                style={{ minWidth: cardWidth }}
              >
                <div className=" flex items-center justify-center">
                  <Image
                    className="w-[100%] object-cover"
                    src={item.poster}
                    alt={item.title}
                  />
                </div>
                <div
                  className={`flex justify-between ps-[1vw] pt-[2vh] transition-all duration-500 xl:pt-[5vh]`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center font-RedHatDisplay-Black text-[1.1vw] 3xl:text-[0.73vw]">
                      M&nbsp;&nbsp;
                      <span className="h-[2px] w-[1.2vw] bg-black"></span>
                      &nbsp; Y
                    </div>
                    <p className="text-[1.1vw] font-bold text-black 3xl:text-[0.73vw]">
                      {item.date}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="min-w-[30vw] font-RedHatDisplay-Black text-[1.1vw] 3xl:text-[0.73vw]">
                      CATEGORY
                    </h3>
                    <p className="text-[1.2vw] font-medium text-secondary 3xl:text-[0.8vw]">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
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
