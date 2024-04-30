import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../assets/svg";
import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";
import { useWindowDimensions } from "../hooks";

const OurPeopleSection = () => {
  const scrollRef = useRef(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.3;
  const scrollWidth = width * 0.7;
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider && activeSlider > 0) {
      setActiveSlider(
        Math.ceil((slider.scrollLeft - scrollWidth) / scrollWidth),
      );
      slider.scrollLeft = slider?.scrollLeft - scrollWidth;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider && activeSlider < 3) {
      setActiveSlider(
        Math.ceil((slider.scrollLeft + scrollWidth) / scrollWidth),
      );
      slider.scrollLeft = slider?.scrollLeft + scrollWidth;
    }
  };

  return (
    <div className="relative pb-[5vh]">
      <SectionWrapper
        className="flex flex-row gap-[4vw] pb-[5vh]"
        id={NavLinks[3].id}
      >
        <div className="flex-1">
          <h2 className="font-RedHatDisplay-Black text-[4.5vw]">Our People</h2>
        </div>
        <div className="flex flex-1 items-end">
          <p className="text-[1.8vw] text-secondary">
            entity comprising specialized <br />
            boutiques catering to various <br />
            media landscape facets.
          </p>
        </div>
      </SectionWrapper>
      <section
        ref={scrollRef}
        id="slider"
        className="no-scrollbar relative flex h-full gap-[5vw] overflow-x-scroll scroll-smooth whitespace-nowrap pe-[30vw] ps-[5vw]"
      >
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
            className={`relative flex flex-col`}
            style={{ minWidth: cardWidth }}
          >
            <div className="flex items-center justify-center">
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
                <p className="text-[1.1vw] font-RedHatDisplay-Medium text-white">{item.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurPeopleSection;
