import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "../../assets/svg";
import { NavLinks } from "../../utils/helper";
import { Image } from "../ui";
import { MenuToggle } from "./MenuToggle";

const animateItems = {
  hidden: { opacity: 0 },
  show: { opacity: 100, transition: { duration: 0.1 } },
};

const NavItem = ({
  label,
  toggleMenu,
  path,
}: {
  label: string;
  toggleMenu: () => void;
  path: string;
}) => (
  <motion.li variants={animateItems}>
    <a href={path} onClick={toggleMenu} aria-label={label}>
      <span className="font-SpaceGrotesk-Bold hover:text-[#28BDC6]">
        {label}
      </span>
    </a>
  </motion.li>
);

const HomeNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [hash, setHash] = useState(location.hash);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const onHashChange = () => setHash(location.hash);
    const handleScroll = () =>
      setShowGoToTop(window.scrollY > window.innerHeight);

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [location]);

  return (
    <nav
      id="nav"
      className="flex items-center justify-between px-[4vw] pt-[2vh] xl:pt-[7vh] 3xl:xl:pt-[4vh]"
    >
      <motion.div
        // variants={fadeIn({
        //   direction: "right",
        //   duration: 0.7,
        // })}
        initial={"hidden"}
        animate={"animate"}
        className="z-[100] w-[20%] p-1 xl:w-[15vw] 3xl:w-[10%]"
      >
        <Image src="/Astrum_MG.svg" />
      </motion.div>
      
      <ul className="hidden gap-[2vw] md:flex">
        {NavLinks.map((item, index) => (
          <motion.li
            // variants={fadeIn({
            //   direction: "down",
            //   duration: 0.7,
            //   delay: index * 0.1,
            // })}
            // initial={"hidden"}
            // animate={"animate"}
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
              className="text-[1vw] md:text-[18px] xl:text-[1.5vw] 3xl:xl:text-[1vw]"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.nav
        id="nav"
        className={`navbar fixed left-0 top-0 z-[99] w-full transition-colors duration-300 ${
          showMenu ? "h-[100vh] !bg-transparent" : ""
        }`}
        onClick={() => setShowMenu(false)}
      >
        <header
          id="header"
          className={`${showMenu ? "h-[100vh] !bg-transparent" : ""}`}
        >
          <motion.div
            variants={{
              hidden: { y: "-80vh" },
              show: {
                y: showMenu ? 0 : "-80vh",
                transition: { type: false, duration: 1 },
              },
            }}
            initial="hidden"
            animate={showMenu ? "show" : "hidden"}
            className="absolute left-0 top-0 mb-4 w-full"
          >
            <motion.ul className="flex flex-col space-y-[20px] bg-[#000000f7] px-[42px] pb-8 pt-[100px] text-center font-SpaceGrotesk-Light text-[22px] text-[#fff] 3xl:pb-12 3xl:pt-[180px] 3xl:text-[1.5vw]">
              {NavLinks.map((item, index) => (
                <NavItem
                  key={index}
                  label={item.label}
                  path={item.path}
                  toggleMenu={toggleMenu}
                />
              ))}
            </motion.ul>
          </motion.div>
        </header>
      </motion.nav>
      <motion.div
        initial={false}
        animate={showMenu ? "open" : "closed"}
        className="relative z-[100] flex size-[24px] cursor-pointer items-center justify-center md:hidden md:size-[5vw] 2xl:size-[2vw]"
      >
        <MenuToggle
          showMenu={showMenu}
          toggle={(e: any) => {
            e.stopPropagation();
            toggleMenu();
          }}
        />
      </motion.div>
      <a
        href="#nav"
        className={`fixed bottom-[5vh] right-[5vh] z-50 flex items-center justify-center rounded-full bg-[#f7f7f7] p-2 ${showGoToTop ? "flex" : "hidden"}`}
      >
        <ArrowUp />
      </a>
    </nav>
  );
};

export default HomeNav;
