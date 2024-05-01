import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../assets/svg";
import { useWindowDimensions } from "../hooks";
import { Image } from "./ui";

const RevealedSection = () => {
  const scrollRef = useRef(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.6;
  const scrollWidth = width * 0.60;
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
    <div className="relative pb-[15vh]">
      <div className="flex-1 px-[5vw] pb-[10vh]">
        <p className="pb-[0.5vh] text-[1.8vw] italic text-secondary">News</p>
        <h2 className="font-RedHatDisplay-Black text-[4.5vw]">
          Revealed and <br />
          Upcoming Projects
        </h2>
      </div>
      <div className="relative">
        <section
          ref={scrollRef}
          id="revealedSlider"
          className="no-scrollbar relative flex h-full gap-[5vw] overflow-x-scroll scroll-smooth whitespace-nowrap pe-[30vw] ps-[5vw] pt-[5vh]"
        >
          {[
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
          ].map((item, index) => (
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
                className={`flex justify-between ps-[1vw] pt-[5vh] transition-all duration-500 ${activeSlider === index ? "opacity-100" : "opacity-0"}`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center font-RedHatDisplay-Black text-[1.1vw]">
                    M&nbsp;&nbsp;
                    <span className="h-[2px] w-[1.2vw] bg-black"></span>
                    &nbsp; Y
                  </div>
                  <p className="text-[1.1vw] font-bold text-black">
                    {item.date}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="min-w-[30vw] font-RedHatDisplay-Black text-[1.1vw]">
                    CATEGORY
                  </h3>
                  <p className="text-[1.2vw] font-medium text-secondary">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="absolute left-0 top-0 flex w-full items-center justify-between gap-[5vw] px-[5vw]">
          <button
            onClick={slideLeft}
            className="flex items-center gap-4 text-[1.5vw] uppercase text-secondary"
          >
            <ArrowLeft className={"h-[1.3vw] w-[1.3vw]"} /> Previous
          </button>
          <button
            onClick={slideRight}
            className="flex items-center gap-4 text-[1.5vw] uppercase text-secondary"
          >
            Next <ArrowRight className={"h-[1.3vw] w-[1.3vw]"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevealedSection;
