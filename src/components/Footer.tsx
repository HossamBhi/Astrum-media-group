import { OUR_EMAIL } from "../utils/helper";
import SubscribeSectionFooter from "./SubscribeSectionFooter";
import { SectionWrapper } from "./ui";
const FooterSection = () => {
  return (
    <SectionWrapper className="bg-black py-[5vh] text-white xl:py-[10vh] xl:pb-[5vh]">
      <div className="flex w-full justify-between">
        <div className="flex w-[50%] items-center justify-start">
          <SubscribeSectionFooter />
        </div>
        <div className="flex w-[50%] justify-between 3xl:w-[30%]">
          <div>
            <p className="pb-[1.5vh] text-start text-[1.8vw] uppercase xl:pb-[3vh] xl:text-[1.2vw] 3xl:pb-[1.5vh] 3xl:text-[0.8vw]">
              Social
            </p>
            <ul className="text-[1.5vw] xl:text-[1vw] 3xl:text-[0.7vw]">
              {[
                { label: "Linkedin", path: "" },
                { label: "Twitter", path: "" },
                { label: "Instagram", path: "" },
                // { label: "TikTok", path: "" },
                // { label: "Twitch", path: "" },
                { label: "Facebook", path: "" },
                // { label: "WhatsApp", path: "" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.path} target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="pb-[1.5vh] text-start text-[1.8vw] uppercase xl:pb-[3vh] xl:text-[1.2vw] 3xl:pb-[1.5vh] 3xl:text-[0.8vw]">
              ASTRUM
            </p>
            <ul className="text-[1.5vw] xl:text-[1vw] 3xl:text-[0.7vw]">
              {[
                { label: "Astrum Films", path: "https://astrumfilms.com/" },
                { label: "Level A Agency", path: "https://levelaagency.com/" },
                { label: "Makina Studios", path: "https://makinastudios.com/" },
                { label: "Magnum VFX", path: "http://magnumvfx.com/" },
                { label: "Wahaj", path: "" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.path} target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="pb-[1.5vh] text-start text-[1.8vw] uppercase xl:pb-[3vh] xl:text-[1.2vw] 3xl:pb-[1.5vh] 3xl:text-[0.8vw]">
              OFFICES{" "}
            </p>
            <a
              href={`mailto:${OUR_EMAIL}`}
              className="text-[1.5vw] xl:text-[1vw] 3xl:text-[0.7vw]"
              aria-label={`Send mail to ${OUR_EMAIL}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between pt-[5vh] text-center text-[8px] sm:text-[12px] 3xl:text-[14px]">
        <p className="text-left">Copyright &#169; Astrum Media Group 2024</p>
        <div className="flex min-w-[30%] justify-end gap-[2vw] 3xl:gap-[1vw]">
          <a href="https://astrumfilms.com/MediaFiles/TermsConditions.pdf">
            Terms & Conditions
          </a>
          <a href="https://astrumfilms.com/MediaFiles/privacyPolicyTemplate.pdf">
            Privacy Policy
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FooterSection;
