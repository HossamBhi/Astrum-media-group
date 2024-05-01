import { OUR_EMAIL } from "../utils/helper";
import SubscribeSectionFooter from "./SubscribeSectionFooter";
import { SectionWrapper } from "./ui";
const FooterSection = () => {
  return (
    <SectionWrapper className="flex pb-[10vh] ">
      <div className="flex flex-1 items-center justify-start">
        <SubscribeSectionFooter />
      </div>
      <div className="flex flex-1 justify-between font-RedHatDisplay-Medium">
        <div>
          <p className="pb-[3vh] text-start text-[1.8vw] uppercase xl:text-[1.2vw]">
            Social
          </p>
          <ul className="text-[1.5vw] xl:text-[0.8vw]">
            {[
              { label: "Facebook", path: "" },
              { label: "Instagram", path: "" },
              { label: "Linkedin", path: "" },
              { label: "TikTok", path: "" },
              { label: "Twitch", path: "" },
              { label: "Twitter", path: "" },
              { label: "WhatsApp", path: "" },
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
          <p className="pb-[3vh] text-start text-[1.8vw] uppercase">ASTRUM</p>
          <ul className="text-[1.5vw]">
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
        <div>
          <p className="pb-[3vh] text-start text-[1.8vw] uppercase">OFFICES </p>
          <a
            href={`mailto:${OUR_EMAIL}`}
            className="text-[1.5vw]"
            aria-label={`Send mail to ${OUR_EMAIL}`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FooterSection;
