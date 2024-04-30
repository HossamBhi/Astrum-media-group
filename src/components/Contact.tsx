import { SectionWrapper } from "./ui";

const ContactSection = () => {
  return (
    <SectionWrapper className="pb-[10vh]">
      <div className="flex flex-1 flex-col items-center justify-center bg-[#F7F7F7] px-[4vh] py-[10vh] text-center">
        <h3 className="pb-[0.5vh] font-RedHatDisplay-Bold text-[10vw] underline">
          Get in Touch
        </h3>
        <a
          href="mailto:Hello@astrumfilms.com"
          className="font-RedHatDisplay-Medium text-[1.8vw] text-black"
          aria-label="Send mail to Hello@astrumfilms.com"
        >
          Hello@astrumfilms.com
        </a>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
