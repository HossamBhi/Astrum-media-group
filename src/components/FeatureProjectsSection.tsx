import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../assets/svg";
import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";
import { useWindowDimensions } from "../hooks";

const FeatureProjectsSection = () => {
  const scrollRef = useRef(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.6;
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
    <div className="relative pb-[6vh] xl:pb-[15vh]">
      <SectionWrapper
        className="flex flex-row gap-[4vw] pb-[5vh]"
        id={NavLinks[3].id}
      >
        <div className="flex-1">
          <h2 className="font-RedHatDisplay-Black text-[5vw]">
            Feature Projects
          </h2>
        </div>
        <div className="flex flex-1 items-end">
          <p className="text-[1.8vw] italic text-secondary">
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
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col`}
            style={{ minWidth: cardWidth }}
          >
            <div className="flex items-center justify-center">
              <Image
                className="w-[100%] object-cover"
                src={item.poster}
                alt={item.title}
              />
            </div>
            <div
              className={`flex justify-between ps-[1vw] pt-[2vh] transition-all duration-500 xl:pt-[5vh] ${activeSlider === index ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex flex-col">
                <div className="flex items-center font-RedHatDisplay-Black text-[1.1vw]">
                  M&nbsp;&nbsp;
                  <span className="h-[2px] w-[1.2vw] bg-black"></span>
                  &nbsp; Y
                </div>
                <p className="text-[1.1vw] font-bold text-black">{item.date}</p>
              </div>
              <div className="flex flex-col">
                <h3 className="min-w-[30vw] font-RedHatDisplay-Black text-[1.1vw]">
                  CATEGORY
                </h3>
                <p className="text-[1.2vw] font-medium italic text-secondary">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="absolute bottom-[6vh] w-[25vw] left-[70vw] flex items-center justify-between gap-[5vw] xl:bottom-[15vh]">
        <button
          onClick={slideLeft}
          className="flex items-center gap-4 text-[1.2vw] uppercase text-secondary"
        >
          <ArrowLeft className={"h-[1.1vw] w-[1.1vw]"} /> Previous
        </button>
        <button
          onClick={slideRight}
          className="flex items-center gap-4 text-[1.2vw] uppercase text-secondary"
        >
          Next <ArrowRight className={"h-[1.1vw] w-[1.1vw]"} />
        </button>
      </div>
    </div>
  );
};

export default FeatureProjectsSection;
