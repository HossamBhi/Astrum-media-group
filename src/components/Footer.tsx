import { OUR_EMAIL } from "../utils/helper";
import { slideIn } from "../utils/motionHelper";
import SubscribeSectionFooter from "./SubscribeSectionFooter";
import { SectionWrapper } from "./ui";
const FooterSection = () => {
  return (
    <SectionWrapper
      variants={slideIn({ direction: "right", duration: 1 })}
      className="flex justify-between pb-[10vh]"
    >
      <div className="flex w-[50%] items-center justify-start">
        <SubscribeSectionFooter />
      </div>
      <div className="flex w-[50%] justify-between font-RedHatDisplay-Medium 3xl:w-[30%]">
        <div>
          <p className="pb-[1.5vh] text-start text-[1.8vw] uppercase xl:pb-[3vh] xl:text-[1.2vw] 3xl:pb-[1.5vh] 3xl:text-[0.8vw]">
            Social
          </p>
          <ul className="text-[1.5vw] xl:text-[1vw] 3xl:text-[0.7vw]">
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
    </SectionWrapper>
  );
};

export default FooterSection;
