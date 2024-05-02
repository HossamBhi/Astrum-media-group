import { NavLinks } from "../utils/helper";
import { SectionWrapper } from "./ui";

const AboutSection = () => {
  return (
    <>
      <SectionWrapper
        className="flex flex-row py-[6vh] xl:py-[15vh] 3xl:py-[10vh] gap-[4vw]"
        id={NavLinks[1].id}
      >
        <div className="flex-1">
          <p className="text-secondary text-[1.8vw] 3xl:text-[1.2vw] pb-[0.5vh] italic">
            Who We Are
          </p>
          <h2 className="text-[3.2vw] 3xl:text-[2.2vw] font-RedHatDisplay-Black">
            We are an independent <br />
            group of diverse
            <br /> production companies
            <br /> built on the fluid <br />
            exchange of ideas and
            <br />
            talents.
          </h2>
        </div>
        <div className="flex flex-1 items-end">
          <p className="text-secondary text-[1.8vw] 3xl:text-[1.2vw] italic">
            Astrum Media Group is a collaborative platform <br />
            for making a wide range of content for any <br />
            medium through imagination, storytelling, and
            <br /> innovation technology.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="flex flex-row pb-[6vh] xl:pb-[15vh] 3xl:pb-[10vh] gap-[4vw]">
        <div className="bg-[#F7F7F7] flex-col text-center flex justify-center items-center flex-1 pt-[2vh] pb-[3vh] px-[2vh] xl:pt-[4vh] xl:pb-[6vh] xl:px-[4vh]">
          <h3 className="text-[3.2vw] 3xl:text-[2.2vw] font-RedHatDisplay-Black pb-[0.5vh]">
            Mission
          </h3>
          <p className="text-secondary text-[1.8vw] 3xl:text-[1.2vw] italic">
            Empower clients with top-tier media <br />
            solutions by utilizing technology and <br />
            talent to create compelling & engaging <br />
            multimedia experiences.
          </p>
        </div>
        <div className="bg-[#F7F7F7] flex-col text-center flex justify-center items-center flex-1 pt-[2vh] pb-[3vh] px-[2vh] xl:pt-[4vh] xl:pb-[6vh] xl:px-[4vh]">
          <h3 className="text-[3.2vw] 3xl:text-[2.2vw] font-RedHatDisplay-Black pb-[0.5vh]">
            Vision
          </h3>
          <p className="text-secondary text-[1.8vw] 3xl:text-[1.2vw] italic">
            Our vision is to be at the forefront <br />
            of the media industry, known for <br />
            our pioneering creativity & <br />
            cutting-edge solutions.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
