function App() {
  return (
    <div className="h-screen w-full justify-between py-[4vh] xl:py-[8vh] flex flex-col">
      <div className="flex items-center">
        {/* <p className="fixed left-[8%] text-[1vh] xl:text-[1.5vh]">01.01.2024</p> */}
        <a
          className="flex-1 flex justify-center items-center"
          href="https://vitejs.dev"
          target="_blank"
        >
          <img className="w-[3vh]" src={"/Star.svg"} alt="Star logo" />
        </a>
      </div>
      <div className="flex items-center text-center flex-col px-[12%] gap-[2vh] xl:gap-[4vh]">
        <p className="text-[3vh] xl:text-[6vh] 2xl:text-[10vh] font-SpaceGrotesk-Regular leading-tight">
          ASTRUM MEDIA
          <br /> GROUP
        </p>
        <p className="text-[1vh] xl:text-[1.5vh] 3xl:text-[1.5vh] font-SpaceGrotesk-Regular">
          These agencies are part of AMG®. All of them work in <br />
          fully integrated teams with the rest of
          <br /> AMG®.Some Are ‘boutique’ agencies that keep their
          <br /> own specific profile next to being a full <br />
          member of the AMG® family
        </p>
      </div>
      <div className="flex justify-center px-[10%] items-end">
        <a
          className="w-[20%] px-[4%] flex justify-center"
          href="https://levelaagency.com/"
          target="_blank"
        >
          <img src={"/Level-A.svg"} className="h-[5vh]" alt="Level A logo" />
        </a>

        <a
          className="w-[20%] px-[4%] flex justify-center"
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
          className="w-[20%] px-[4%] flex justify-center"
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
          className="w-[20%] px-[4%] flex justify-center"
          href="https://makinastudios.com/"
          target="_blank"
        >
          <img src={"/Makina.svg"} className="h-[5vh]" alt="Makina logo" />
        </a>

        <a
          className="w-[20%] px-[4%] flex justify-center"
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
