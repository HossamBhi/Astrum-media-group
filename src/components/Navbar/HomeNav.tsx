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
    <nav className="flex items-center pt-[7vh] px-[5vw] justify-between">
      <div className="w-[20%] bg-black p-1">
        <Image src="/Level-A.svg" />
      </div>
      <ul className="flex gap-[1vw]">
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
            <a href={item.path} className="text-[18px] xl:text-[1.5vw]">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNav;