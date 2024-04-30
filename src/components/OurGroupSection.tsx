import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";

const OurGroupSection = () => {
  return (
    <>
      <SectionWrapper
        className="flex flex-row gap-[4vw] pb-[5vh]"
        id={NavLinks[3].id}
      >
        <div className="flex-1">
          <h2 className="font-RedHatDisplay-Black text-[4.5vw]">Our Group</h2>
        </div>
        <div className="flex flex-1 items-end">
          <p className="text-[1.8vw] text-secondary">
            entity comprising specialized <br />
            boutiques catering to various <br />
            media landscape facets.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="grid grid-cols-2 gap-[4vw] gap-y-[5vw] pb-[10vh]">
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
          <div key={index} className="flex flex-col ">
            <div className="flex h-[24vw] items-center justify-center bg-black">
              <Image className="w-[14%]" src={item.logo} alt={item.title} />
            </div>
            <div className="ps-[1vw] pt-[1.5vw]">
              <div className="flex w-full items-center justify-between font-RedHatDisplay-Black">
                <h3 className="pb-[0.5vh] text-[2.2vw]">{item.title}</h3>
                <a className="text-[1.2vw] underline" href={item.url}>
                  Open Website
                </a>
              </div>
              <p className="pe-[30%] text-[1.2vw] font-bold text-secondary">
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </SectionWrapper>
    </>
  );
};

export default OurGroupSection;
