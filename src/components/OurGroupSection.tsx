import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";
import { animateText } from "../utils/motionHelper";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 5, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: "X", // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const OurGroupSection = () => (
  <>
    <SectionWrapper
      className="flex flex-row gap-[4vw] pb-[5vh]"
      id={NavLinks[3].id}
    >
      <div className="flex-1 overflow-hidden">
        <motion.h2
          variants={animateText}
          initial="hidden"
          whileHover={"visible"}
          whileInView={"visible"}
          className="font-RedHatDisplay-Black text-[4.5vw] 3xl:text-[3vw]"
        >
          Our Group
        </motion.h2>
      </div>
      <div className="flex flex-1 items-end">
        <p className="text-[1.8vw] italic text-secondary 3xl:text-[1.2vw]">
          entity comprising specialized <br />
          boutiques catering to various <br />
          media landscape facets.
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper className="grid grid-cols-2 gap-[4vw] gap-y-[5vw] pb-[5vh] xl:pb-[10vh] 3xl:gap-y-[4vw]">
      {[
        {
          title: "Astrum Films",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/icons/Astrum-films-icon.svg",
        },
        {
          title: "Level A Agency",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/icons/Level-A-icon.svg",
        },
        {
          title: "Makina Studios ",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/icons/Magnum-icon.svg",
        },
        {
          title: "Magnum VFX",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/icons/Makina-icon.svg",
        },
      ].map((item, index) => (
        <Tilt options={defaultOptions}>
          <div key={index} className="flex flex-col">
            <div className="flex h-[24vw] items-center justify-center bg-black 3xl:h-[16vw]">
              <Image
                className="w-[14%] 3xl:w-[10%]"
                src={item.logo}
                alt={item.title}
              />
            </div>
            <div className="ps-[1vw] pt-[1.5vw] 3xl:pt-[1vw]">
              <div className="flex w-full items-center justify-between font-RedHatDisplay-Black">
                <h3 className="pb-[0.5vh] text-[2.2vw] 3xl:text-[1.5vw]">
                  {item.title}
                </h3>
                <a
                  className="text-[1.2vw] underline 3xl:text-[0.8vw]"
                  href={item.url}
                >
                  Open Website
                </a>
              </div>
              <p className="pe-[30%] text-[1.2vw] font-bold text-secondary 3xl:text-[0.8vw]">
                {item.des}
              </p>
            </div>
          </div>
        </Tilt>
      ))}
    </SectionWrapper>
  </>
);

export default OurGroupSection;
