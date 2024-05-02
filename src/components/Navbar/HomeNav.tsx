import { useEffect, useState } from "react";
import { NavLinks } from "../../utils/helper";
import { Image } from "../ui";

const HomeNav = () => {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);

  return (
    <nav className="flex items-center justify-between px-[5vw] pt-[2vh] xl:pt-[7vh] 3xl:xl:pt-[4vh]">
      <div className="w-[20%] bg-black p-1 xl:w-[15vw] 3xl:w-[10%]">
        <Image src="/Level-A.svg" />
      </div>
      <ul className="flex gap-[2vw]">
        {NavLinks.map((item, index) => (
          <li
            key={item.path}
            className={`${
              hash === "" && index === 0
                ? "border-b-2 border-black"
                : hash === item.path
                  ? "border-b-2 border-black"
                  : ""
            }`}
          >
            <a
              href={item.path}
              className="text-[12px] md:text-[18px] xl:text-[1.5vw] 3xl:xl:text-[1vw]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNav;
