import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowDimensions } from "../hooks";
import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";
const OurPeopleSection = () => {
  const scrollRef = useRef(null);
  // const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 || pos === 0 ? "relative" : "fixed",
  );

  const cardWidth = width * 0.6;

  return (
    <div className="pb-[5vh]">
      <SectionWrapper
        className="flex flex-row gap-[4vw] pb-[5vh]"
        id={NavLinks[3].id}
      >
        <div className="flex-1">
          <h2 className="font-RedHatDisplay-Black text-[4.5vw] 3xl:text-[3vw]">Our People</h2>
        </div>
        <div className="flex flex-1 items-end">
          <p className="text-[1.8vw] 3xl:text-[1.2vw] italic text-secondary">
            entity comprising specialized <br />
            boutiques catering to various <br />
            media landscape facets.
          </p>
        </div>
      </SectionWrapper>
      <div ref={scrollRef} className="relative h-[300vh]">
        <motion.div
          style={{ position }}
          className="top-0 flex h-screen items-center overflow-hidden bg-white"
        >
          <motion.div style={{ x }} className="flex gap-[5vw]">
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex h-screen flex-col`}
                style={{ minWidth: cardWidth }}
              >
                <div className="flex h-full items-center justify-center">
                  <Image
                    className="w-[100%] object-cover"
                    src={item.poster}
                    alt={item.name}
                  />
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-between p-[5%]`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center font-RedHatDisplay-Black text-[1.5vw] text-white">
                      {item.name}
                    </div>
                    <p className="font-RedHatDisplay-Medium text-[1.1vw] 3xl:text-[0.73vw] text-white">
                      {item.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPeopleSection;
