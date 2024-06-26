import mainImage from "./assets/images/main.png";
import mascot1 from "./assets/images/mascot1.png";
import mascot2 from "./assets/images/mascot2.png";
import thunderIcon from "./assets/images/thunderIcon.svg";
import trophyPigeon from "./assets/images/pigeon1.png";
import stick from "./assets/images/stick.png";
import nest from "./assets/images/emptyNest.png";
import birdOnNest from "./assets/images/nestedBird.png";
import { useState } from "react";
import Play from "./components/Play";
import Team from "./components/Team";
import { Utility } from "./components/Utility";
import Nfts from "./components/Nfts";
import {
  CloseMenuIcon,
  Dextools,
  EtherscanIcon,
  OpenMenuIcon,
  TelegramIcon,
  TwitterIcons,
} from "./components/Icons";
import mobileNavPigeon from "./assets/images/mobile_nav_pigeon.png";
import { motion } from "framer-motion";
import Navbar from "./components/Footer";
import Stake from "./components/Stake";
function App() {
  const [currentPage, setCurrentPage] = useState("PLAY");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navTextColor, setNavTextColor] = useState("#FFFFFF");

  const renderComponent = () => {
    switch (currentPage) {
      case "PLAY":
        return <Play />;
      case "UTILITY":
        return <Utility />;
      case "NFTS":
        return <Nfts />;
      case "BUY":
        return <Stake />;
      case "TEAM":
        return <Team />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <img
          src={mainImage}
          className="w-full lg:h-screen h-[50vh] object-center lg:object-top"
        />
        <div className="absolute bottom-0 w-full">
          <div className="w-[80%] mx-auto flex justify-between relative">
            <div>
              <img
                src={mascot1}
                className="2xl:w-[300px] xl:w-[250px] w-[100px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto mascot"
              />
            </div>
            <div className="absolute bottom-[10px] sm:bottom-[20px] md:bottom-[25px] 2xl:bottom-[30px] left-1/2 transform -translate-x-1/2 flex flex-col lg:gap-2 items-center">
              <button className="uppercase text-white text-[15px] sm:text-[20px] md:text-[25px] lg:text-[28px] xl:text-[30px] 2xl:text-[33px] p-1 lg:p-2 bg-[#3A80FE] lets-start-button font-darumadrop hover:bg-[#0050E1] hover:scale-[1.1]">
                <div className="flex items-center justify-center">
                  Let's play
                  <img src={thunderIcon} className="2xl:mt-4 w-1/6" />
                </div>
              </button>
              <div>
                <img
                  src={trophyPigeon}
                  className="w-[50px] h-auto mx-auto sm:w-1/2 md:w-1/2 lg:w-full"
                />
              </div>
            </div>
            <div>
              <img
                src={mascot2}
                className="2xl:w-[300px] xl:w-[250px] w-[100px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto mascot"
              />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------- */}
      <div
        className={`${
          currentPage === "UTILITY" || currentPage === "TEAM"
            ? " light-sky-bg w-full bg-cover bg-center"
            : "sky-bg w-full bg-cover bg-center"
        }   `}
      >
        <div className="lg:w-[80%] w-full mx-auto  ">
          {/* ------------------------------------------------------- */}
          {isMenuOpen ? (
            <motion.div
              initial={{ y: -100, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              className=" bg-[#D8EEF6] w-full h-[500px] lg:hidden"
            >
              <div className=" flex items-center justify-between p-[20px]  ">
                <div
                  className=" flex items-center gap-[20px] sm:gap-[25px] md:gap-[30px] cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCurrentPage("PLAY");
                  }}
                >
                  <p
                    className={` font-darumadrop uppercase  text-[24px] -[50x] ${
                      currentPage === "PLAY"
                        ? "text-[#3A80FE]"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    play
                  </p>
                  <img
                    src={mobileNavPigeon}
                    className={` ${
                      currentPage === "PLAY" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <CloseMenuIcon />
                </button>
              </div>
              <div className=" w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-[#3A80FE]  to-[#D8EEF6]" />

              <div className=" w-full h-[1px] sm:h-[2px] " />
              <div className=" flex items-center justify-between p-[20px]  ">
                <div
                  className=" flex items-center gap-2  cursor-pointer"
                  onClick={() => {
                    setCurrentPage("UTILITY");
                    setIsMenuOpen(false);
                  }}
                >
                  <p
                    className={` font-darumadrop uppercase text-[#] text-[24px] ${
                      currentPage === "UTILITY"
                        ? "text-[#3A80FE]"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    utility
                  </p>
                  <img
                    src={mobileNavPigeon}
                    className={` ${
                      currentPage === "UTILITY" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <div className=" w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-[#3A80FE]  to-[#D8EEF6]" />
              <div className=" flex items-center justify-between p-[20px]  ">
                <div
                  className=" flex items-center gap-2  cursor-pointer"
                  onClick={() => {
                    setCurrentPage("NFTS");
                    setIsMenuOpen(false);
                  }}
                >
                  <p
                    className={` font-darumadrop uppercase text-[#] text-[24px] ${
                      currentPage === "NFTS"
                        ? "text-[#3A80FE]"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    nfts
                  </p>
                  <img
                    src={mobileNavPigeon}
                    className={` ${
                      currentPage === "NFTS" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <div className=" w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-[#3A80FE]  to-[#D8EEF6]" />
              <div className=" flex items-center justify-between p-[20px]  ">
                <div
                  className=" flex items-center gap-2  cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCurrentPage("BUY");
                  }}
                >
                  <p
                    className={` font-darumadrop uppercase text-[#] text-[24px] ${
                      currentPage === "BUY"
                        ? "text-[#3A80FE]"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    presale
                  </p>
                  <img
                    src={mobileNavPigeon}
                    className={` ${
                      currentPage === "BUY" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <div className=" w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-[#3A80FE]  to-[#D8EEF6]" />
              <div className=" flex items-center justify-between p-[20px]  ">
                <div
                  className=" flex items-center gap-2  cursor-pointer "
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCurrentPage("TEAM");
                  }}
                >
                  <p
                    className={` font-darumadrop uppercase text-[#] text-[24px] ${
                      currentPage === "TEAM"
                        ? "text-[#3A80FE]"
                        : "text-[#3D3D3D]"
                    }`}
                  >
                    team
                  </p>
                  <img
                    src={mobileNavPigeon}
                    className={` ${
                      currentPage === "TEAM" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <div className=" w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-[#3A80FE]  to-[#D8EEF6]" />
              <div className=" flex mt-5 gap-3 p-5">
                <a href="" target="_blank">
                  <TwitterIcons />
                </a>
                <a href="" target="_blank">
                  <TelegramIcon />
                </a>
                <a href="" target="_blank">
                  <Dextools />
                </a>
                <a href="" target="_blank">
                  <EtherscanIcon />
                </a>
              </div>
            </motion.div>
          ) : (
            <div className=" lg:hidden flex justify-between p-5 items-center">
              <p
                className={`font-darumadrop uppercase text-[32px] ${
                  currentPage === "UTILITY" || currentPage === "TEAM"
                    ? "text-[#2D2D2D]"
                    : "text-white"
                } opacity-100 bird-nest-text`}
              >
                {currentPage}
              </p>
              <button className="" onClick={() => setIsMenuOpen(true)}>
                {currentPage === "UTILITY" || currentPage === "TEAM" ? (
                  <OpenMenuIcon color="#3A80FE" />
                ) : (
                  <OpenMenuIcon color="#ffffff" />
                )}
              </button>
            </div>
          )}
          {/* ------------------------------------ */}
          <div className=" pt-[100px]">
            <div className="hidden lg:block  relative  ">
              <img src={stick} className="w-full absolute inset-0" />
              <div className="">
                <div className="flex justify-between">
                  <div
                    className="relative cursor-pointer"
                    onClick={() => {
                      setCurrentPage("PLAY");
                      setNavTextColor("#FFFFFF");
                    }}
                  >
                    <div
                      className={`bird-nest ${
                        currentPage === "PLAY" ? "opacity-100" : "opacity-40"
                      }`}
                    ></div>
                    {currentPage === "PLAY" ? (
                      <img
                        src={birdOnNest}
                        className="absolute inset-0 top-[-90px] left-[-28px] z-10"
                      />
                    ) : (
                      <img
                        src={nest}
                        className="absolute inset-0 top-[-25px] left-[-20px] z-10"
                      />
                    )}

                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px]   ${
                        currentPage === "PLAY"
                          ? "opacity-100 bird-nest-text "
                          : "opacity-40"
                      } w-[200px]`}
                    >
                      PLAY
                    </p>
                  </div>
                  {/* ------------------------------------------ */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => {
                      setCurrentPage("UTILITY");
                      setNavTextColor("#3A80FE");
                    }}
                  >
                    <div
                      className={`bird-nest ${
                        currentPage === "UTILITY" ? "opacity-100" : "opacity-40"
                      }`}
                    ></div>
                    {currentPage === "UTILITY" ? (
                      <img
                        src={birdOnNest}
                        className="absolute inset-0 top-[-90px] left-[-28px] z-10"
                      />
                    ) : (
                      <img
                        src={nest}
                        className="absolute inset-0 top-[-25px] left-[-20px] z-10"
                      />
                    )}
                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px] ${
                        currentPage === "UTILITY"
                          ? "opacity-100 bird-nest-text "
                          : "opacity-40"
                      } w-[200px]`}
                    >
                      utility
                    </p>
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={() => {
                      setCurrentPage("NFTS");
                      setNavTextColor("#FFFFFF");
                    }}
                  >
                    <div
                      className={`bird-nest ${
                        currentPage === "NFTS" ? "opacity-100" : "opacity-40"
                      }`}
                    ></div>
                    {currentPage === "NFTS" ? (
                      <img
                        src={birdOnNest}
                        className="absolute inset-0 top-[-90px] left-[-28px] z-10"
                      />
                    ) : (
                      <img
                        src={nest}
                        className="absolute inset-0 top-[-25px] left-[-20px] z-10"
                      />
                    )}
                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px]  ${
                        currentPage === "NFTS"
                          ? "opacity-100 bird-nest-text "
                          : "opacity-40"
                      } w-[200px]`}
                    >
                      nfts
                    </p>
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={() => {
                      setCurrentPage("BUY");
                      setNavTextColor("#FFFFFF");
                    }}
                  >
                    <div
                      className={`bird-nest ${
                        currentPage === "BUY" ? "opacity-100" : "opacity-40"
                      }`}
                    ></div>
                    {currentPage === "BUY" ? (
                      <img
                        src={birdOnNest}
                        className="absolute inset-0 top-[-90px] left-[-28px] z-10"
                      />
                    ) : (
                      <img
                        src={nest}
                        className="absolute inset-0 top-[-25px] left-[-20px] z-10"
                      />
                    )}
                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px]  ${
                        currentPage === "BUY"
                          ? "opacity-100 bird-nest-text "
                          : "opacity-40"
                      } w-[200px]`}
                    >
                      presale
                    </p>
                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px]  ${
                        currentPage === "BUY"
                          ? "opacity-100 bird-nest-text "
                          : "opacity-40"
                      } w-[200px]`}
                    ></p>
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={() => {
                      setCurrentPage("TEAM");
                      setNavTextColor("#3A80FE");
                    }}
                  >
                    <div
                      className={`bird-nest ${
                        currentPage === "TEAM"
                          ? "opacity-100 bird-nest-text"
                          : "opacity-40"
                      }`}
                    ></div>
                    {currentPage === "TEAM" ? (
                      <img
                        src={birdOnNest}
                        className="absolute inset-0 top-[-90px] left-[-28px] z-10"
                      />
                    ) : (
                      <img
                        src={nest}
                        className="absolute inset-0 top-[-25px] left-[-20px] z-10"
                      />
                    )}
                    <p
                      style={{ color: navTextColor }}
                      className={`font-darumadrop uppercase text-[32px]  ${
                        currentPage === "TEAM" ? "opacity-100 " : "opacity-40"
                      } w-[200px]`}
                    >
                      team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------- */}

          <div className="lg:mt-[0px]">{renderComponent()}</div>
          {/* ---------------------------------------------------------- */}
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
