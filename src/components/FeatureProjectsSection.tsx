import { NavLinks } from "../utils/helper";
import { Image, SectionWrapper } from "./ui";

const FeatureProjectsSection = () => (
  <>
    <SectionWrapper
      className="flex flex-row pb-[5vh] gap-[4vw]"
      id={NavLinks[3].id}
    >
      <div className="flex-1">
        <h2 className="text-[4.5vw] font-RedHatDisplay-Black">
          Feature Projects
        </h2>
      </div>
      <div className="flex flex-1 items-end">
        <p className="text-[#AAAAAA] text-[1.8vw]">
          entity comprising specialized <br />
          boutiques catering to various <br />
          media landscape facets.
        </p>
      </div>
    </SectionWrapper>
    <SectionWrapper className="flex w-auto pb-[15vh] gap-[4vw] gap-y-[5vw]">
      {[
        {
          title: "Astrum Films",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/Star.svg",
        },
        {
          title: "Level A Agency",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/Star.svg",
        },
        {
          title: "Makina Studios ",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/Star.svg",
        },
        {
          title: "Magnum VFX",
          des: "Entity comprising specialized boutiques catering to various media.",
          url: "",
          logo: "/Star.svg",
        },
      ].map((item, index) => (
        <div key={index} className="flex-col flex w-[80vw]">
          <div className="bg-black h-[24vw] flex justify-center items-center">
            <Image className="w-[20%]" src={item.logo} alt={item.title} />
          </div>
          <div className="ps-[1vw] pt-[1.5vw]">
            <div className="flex w-full items-center justify-between font-RedHatDisplay-Black">
              <h3 className="text-[2.2vw] pb-[0.5vh]">{item.title}</h3>
              <a className="underline text-[1.2vw]" href={item.url}>
                Open Website
              </a>
            </div>
            <p className="text-[#AAAAAA] text-[1.2vw] pe-[30%] font-bold">
              {item.des}
            </p>
          </div>
        </div>
      ))}
    </SectionWrapper>
  </>
);

export default FeatureProjectsSection;
