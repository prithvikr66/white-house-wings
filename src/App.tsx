import mainImage from "./assets/images/main.png";
import mascot1 from "./assets/images/mascot1.png";
import mascot2 from "./assets/images/mascot2.png";
import thunderIcon from "./assets/images/thunderIcon.svg";
import trophyPigeon from "./assets/images/pigeon1.png";
import blueSky from "./assets/images/sky.png";
import stick from "./assets/images/stick.png";
import nest from "./assets/images/emptyNest.png";

function App() {
  return (
    <div className="min-h-screen">
      <div className=" relative">
        <img src={mainImage} className=" w-full " />
        <div className=" absolute  bottom-0 w-full  ">
          <div className="w-[80%] mx-auto flex justify-between relative ">
            <div>
              <img
                src={mascot1}
                className="2xl:w-[300px] xl:w-[250px] w-[80px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto mascot"
              />
            </div>
            <div className="absolute bottom-[10px] sm:bottom-[20px] md:bottom-[25px] 2xl:bottom-[30px] left-1/2 transform -translate-x-1/2 flex flex-col lg:gap-2 items-center">
              <button className="uppercase text-white text-[10px] sm:text-[20px] md:text-[25px] lg:text-[28px] xl:text-[30px] 2xl:text-[33px] p-1 lg:p-2  bg-[#3A80FE] lets-start-button font-darumadrop hover:bg-[#0050E1] hover:scale-[1.1]">
                <div className="flex items-center justify-center">
                  Let's play
                  <img src={thunderIcon} className="2xl:mt-4 w-1/6" />
                </div>
              </button>
              <div>
                <img
                  src={trophyPigeon}
                  className="w-1/3 mx-auto sm:w-1/2 md:w-1/2 lg:w-full"
                />
              </div>
            </div>
            <div>
              <img
                src={mascot2}
                className="2xl:w-[300px] xl:w-[250px] w-[80px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto mascot"
              />
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </div>
      <div className=" relative">
        <img src={blueSky} className="w-full h-auto " />
        <div className=" absolute inset-0 w-[80%] mx-auto ">
          <div className=" mt-[300px] relative">
            <img src={stick} className=" w-full absolute inset-0" />
            <div className=" absolute inset-0">
              <div className=" flex justify-between">
                <div className=" relative">
                  <div className=" bird-nest "></div>
                  <img
                    src={nest}
                    className="absolute inset-0  top-[-25px] left-[-20px] z-10   "
                  />
                  <p className=" font-darumadrop uppercase w-full text-center text-[32px] text-white opacity-40">
                    PLAY
                  </p>
                </div>
                {/* ------- */}
                <div className=" relative">
                  <div className=" bird-nest  "></div>
                  <img
                    src={nest}
                    className="absolute inset-0  top-[-25px] left-[-20px] z-10  "
                  />
                  <p className=" font-darumadrop uppercase w-full text-center text-[32px] text-white opacity-40">
                    utility
                  </p>
                </div>
                <div className=" relative">
                  <div className=" bird-nest  "></div>
                  <img
                    src={nest}
                    className="absolute inset-0  top-[-25px] left-[-20px] z-10  "
                  />
                  <p className=" font-darumadrop uppercase w-full text-center text-[32px] text-white opacity-40">
                    nfts
                  </p>
                </div>
                <div className=" relative">
                  <div className=" bird-nest  "></div>
                  <img
                    src={nest}
                    className="absolute inset-0  top-[-25px] left-[-20px] z-10  "
                  />
                  <p className=" font-darumadrop uppercase text-center text-[32px] text-white opacity-40  w-[200px]">
                    buy
                  </p>
                  <p className=" font-darumadrop uppercase text-center text-[32px] text-white opacity-40  w-[200px]">
                    $pigeon
                  </p>
                </div>
                <div className=" relative">
                  <div className=" bird-nest  "></div>
                  <img
                    src={nest}
                    className="absolute inset-0  top-[-25px] left-[-20px] z-10  "
                  />
                  <p className=" font-darumadrop uppercase w-full text-center text-[32px] text-white opacity-40">
                    team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
