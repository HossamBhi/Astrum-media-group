import { OUR_EMAIL } from "../utils/helper";
import { SectionWrapper } from "./ui";
const ContactSection = () => {
  return (
    <SectionWrapper className="relative bg-white pb-[10vh] pt-[5vh]">
      <div className="flex flex-1 flex-col items-center justify-center bg-[#F7F7F7] px-[4vh] py-[10vh] text-center">
        <h3 className="pb-[0.5vh] font-RedHatDisplay-Bold text-[10vw] underline">
          Get in Touch
        </h3>
        <a
          href={`mailto:${OUR_EMAIL}`}
          className="font-RedHatDisplay-Medium text-[2.5vw] text-black"
          aria-label={`Send mail to ${OUR_EMAIL}`}
        >
          {OUR_EMAIL}
        </a>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
