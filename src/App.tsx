function App() {
  return (
    <div className="flex h-screen w-full flex-col justify-between py-[4vh] xl:py-[8vh]">
      <div className="flex items-center">
        {/* <p className="fixed left-[8%] text-[1vh] xl:text-[1.5vh]">01.01.2024</p> */}
        <a className="flex flex-1 items-center justify-center" href="">
          <img className="w-[3vh]" src={"/Star.svg"} alt="Star logo" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-[2vh] px-[12%] text-center xl:gap-[4vh]">
        <p className="font-SpaceGrotesk-Regular text-[3vh] leading-tight xl:text-[6vh] 2xl:text-[10vh]">
          ASTRUM MEDIA
          <br /> GROUP
        </p>
        <p className="font-SpaceGrotesk-Regular text-[1vh] xl:text-[1.5vh] 3xl:text-[1.5vh]">
          We are an independent group of diverse
          <br /> production companies built on <br />
          the fluid exchange of ideas and talents.
        </p>
        {/* <p className="font-SpaceGrotesk-Regular text-[1vh] xl:text-[1.5vh] 3xl:text-[1.5vh]">
          These agencies are part of AMG®. All of them work in <br />
          fully integrated teams with the rest of
          <br /> AMG®.Some Are ‘boutique’ agencies that keep their
          <br /> own specific profile next to being a full <br />
          member of the AMG® family
        </p> */}
      </div>
      <div className="flex items-end justify-center px-[10%]">
        <a
          className="flex w-[20%] justify-center px-[4%]"
          href="https://astrumfilms.com/"
          target="_blank"
        >
          <img
            src={"/Astrum-films.svg"}
            className="h-[5vh]"
            alt="Astrum Films logo"
          />
        </a>
        <a
          className="flex w-[20%] justify-center px-[4%]"
          href="https://levelaagency.com/"
          target="_blank"
        >
          <img src={"/Level-A.svg"} className="h-[5vh]" alt="Level A logo" />
        </a>
        <a
          className="flex w-[20%] justify-center px-[4%]"
          href="http://magnumvfx.com/"
          target="_blank"
        >
          <img
            src={"/Magnum.svg"}
            alt="Magnum logo"
            className="h-[6vh] xl:h-[7vh]"
          />
        </a>
        <a
          className="flex w-[20%] justify-center px-[4%]"
          href="https://makinastudios.com/"
          target="_blank"
        >
          <img src={"/Makina.svg"} className="h-[5vh]" alt="Makina logo" />
        </a>
        <a
          className="flex w-[20%] justify-center px-[4%]"
          href="#"
          target="_blank"
        >
          <img src={"/Wahag.svg"} className="h-[5vh]" alt="Wahag logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
