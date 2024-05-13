import { motion } from "framer-motion";
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

const OurPeopleSection = () => (
  <div className="relative px-[4vw]">
    <motion.div className="top-0 flex w-full flex-col justify-evenly bg-white ">
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
      <motion.div className="items-center overflow-hidden bg-white">
        <motion.div
          id="group-container"
          className="grid grid-cols-2 gap-[5vw] xl:grid-cols-3"
        >
          {OUR_GROUP.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col`}
              // style={{ minWidth: cardWidth }}
            >
              <div
                className="flex size-full items-center justify-center overflow-hidden"
                // style={{
                //   backgroundImage: `url(${item.poster})`,
                //   backgroundPosition: "top",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                // }}
              >
                <motion.img
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
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

export default OurPeopleSection;
