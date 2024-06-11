import play1 from "../assets/images/play1.png";
import play2 from "../assets/images/play2.png";
import play3 from "../assets/images/play3.png";
import play4 from "../assets/images/play4.png";
import thunderIcon from "../assets/images/thunderIcon.svg";
const Play = () => {
  return (
    <div className=" w-full ">
      <div className=" flex justify-between items-center ">
        <div className="    ">
          <img src={play1} className=" mx-auto w-[80%]" />
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase  text-center">
            Start
          </p>
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center">
            each round has 100 lottery tickets for sale ($10 / ticket)
          </p>
        </div>
        <div className="  ">
          <img src={play2} className=" mx-auto w-[80%]" />
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center">
            race
          </p>
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center">
            the race starts and the pigeons flap to the finish line (auto)
          </p>
        </div>
        <div className="  ">
          <img src={play3} className=" mx-auto w-[80%]" />
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center mt-5">
            lottery
          </p>
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center">
            50 tickets win a 2x ($20) instead of 1 winner taking everything
          </p>
        </div>
        <div className="  ">
          <img src={play4} className=" mx-auto w-[100%]" />
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center ">
            Results
          </p>
          <p className=" text-[24px] xl:text-[26px] 2xl:text-[28px]  text-white font-darumadrop uppercase text-center">
            the result is probably fair on the blockchain
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center mt-[100px]">
        <button className="uppercase  text-[10px] sm:text-[20px] md:text-[25px] lg:text-[28px] xl:text-[30px] 2xl:text-[33px] p-1 lg:p-2  bg-[#ffffff] text-[#3A80FE] lets-start-button font-darumadrop hover:bg-[#e9effc] hover:scale-[1.1]">
          <div className="flex items-center justify-center">
            Let's play
            <img src={thunderIcon} className="2xl:mt-4 w-1/6" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Play;
