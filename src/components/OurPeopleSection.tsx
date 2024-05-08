import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useWindowDimensions } from "../hooks";
import { NavLinks } from "../utils/helper";
import { AnimateTextLine, AnimateTextLines } from "./animation";
import { SectionWrapper } from "./ui";

const OUR_GROUP = [
  {
    name: "Mohamed Sherif",
    bio: "Art Director",
    poster: "/imgs/team1.png",
  },
  {
    name: "Hassan Ahmed",
    bio: "Motion Director",
    poster: "/imgs/team2.png",
  },
  {
    name: "Mohamed Sherif",
    bio: "Art Director",
    poster: "/imgs/team3.png",
  },
  {
    name: "Mohamed Omar",
    bio: "Motion Director",
    poster: "/imgs/team1.png",
  },
  {
    name: "Hassan Ahmed",
    bio: "Art Director",
    poster: "/imgs/team2.png",
  },
  {
    name: "Mohamed Sherif",
    bio: "Motion Director",
    poster: "/imgs/team3.png",
  },
];

const OurPeopleSection = () => {
  const scrollRef = useRef(null);
  // const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${49 * OUR_GROUP.length}%`, `100%`],
  );
  const y = useTransform(scrollYProgress, [0.7, 1], ["0", `-100%`]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 || pos === 0 ? "relative" : "fixed",
  );

  const cardWidth = width * 0.6;
  // useEffect(() => {
  //   console.log(document.getElementById("group-container").offsetWidth);
  // }, []);
  return (
    <div ref={scrollRef} className="relative h-[300vh]">
      <motion.div
        style={{ position, y }}
        className="top-0 flex h-screen w-full flex-col justify-evenly bg-white pb-[5vh] pt-[5vh]"
      >
        <SectionWrapper
          className="flex w-full flex-row gap-[4vw] pb-[5vh]"
          id={NavLinks[3].id}
        >
          <AnimateTextLine className="flex-1 font-RedHatDisplay-Black text-[4.5vw] 3xl:text-[3vw]">
            Our People
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
        <motion.div
          // style={{ position }}
          className="h-full items-center overflow-hidden bg-white"
        >
          <motion.div
            style={{ x }}
            id="group-container"
            className="flex h-full gap-[5vw] "
          >
            {OUR_GROUP.map((item, index) => (
              <div
                key={index}
                className={`relative flex h-full w-[50%] flex-col`}
                style={{ minWidth: cardWidth }}
              >
                <div
                  className="flex size-full items-center justify-center bg-black"
                  style={{
                    backgroundImage: `url(${item.poster})`,
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <Image
                    className="h-full object-cover w-full"
                    src={item.poster}
                    alt={item.name}
                  /> */}
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-between p-[5%]`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center font-RedHatDisplay-Black text-[1.5vw] text-white">
                      {item.name}
                    </div>
                    <p className="font-RedHatDisplay-Medium text-[1.1vw] text-white 3xl:text-[0.73vw]">
                      {item.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurPeopleSection;
