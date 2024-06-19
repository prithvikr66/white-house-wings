import arrow from "../assets/images/mutate-arrow.png";
import eagleImage from "../assets/images/eagle.png";
import pigeonIcon from "../assets/images/pigeon-thumbs-up.png";
import thunderIcon from "../assets/images/nft-thunder.svg";
import { BagOfMoney, QrIcon } from "./Icons";
import nft1 from "../assets/images/nft-1.png";
import nft2 from "../assets/images/nft-2.png";
import nft3 from "../assets/images/nft-3.png";
import nft4 from "../assets/images/nft-4.png";
import nft5 from "../assets/images/nft-5.png";
import nft6 from "../assets/images/nft-6.png";
import nft7 from "../assets/images/nft-7.png";
import nft8 from "../assets/images/nft-8.png";

const Nfts = () => {
  return (
    <div className=" lg:mt-[20px]">
      <p
        className={`font-darumadrop uppercase hidden lg:block  text-[32px] text-white  text-center bird-nest-text `}
      >
        mutate <span className=" no-text-shadow">for better odds</span>
      </p>
      <div className=" hidden  w-full lg:flex justify-center ">
        <img src={arrow} />
      </div>

      <div className="  flex flex-col lg:flex-row">
        <div className=" gradient-card w-[300px] h-[460px] lg:w-[280px] lg:h-[420px] xl:w-[300px] xl:h-[460px] mx-auto  p-[15px] opacity-100 ">
          <div className=" relative bg-[#3A80FE] h-full w-full rounded-[5px] bg-gradient-to-b from-[#3A80FE] to-[#ffffff]">
            <div className=" absolute inset-0 top-[-50px]">
              <img src={pigeonIcon} className=" mx-auto" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  body
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-white text-[24px]  ">
                    based pigeon
                  </p>
                </div>
              </div>
              <div className=" relative flex  justify-end">
                <img
                  src={thunderIcon}
                  className=" absolute top-[-73px] right-[20px]"
                />
              </div>
              <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-[#8BA6D6]" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  helmet
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-white text-[24px]  ">
                    silver
                  </p>
                </div>
              </div>
              <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-[#8BA6D6]" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  nextwear
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-[#3A80FE] text-[24px]  ">
                    scarf
                  </p>
                </div>
              </div>
              <div className=" relative flex  justify-end">
                <div className=" absolute top-[-50px] right-[30px]">
                  <QrIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:hidden mt-[50px]">
          <p
            className={`font-darumadrop uppercase    text-[32px] text-white  text-center bird-nest-text `}
          >
            mutate <span className=" no-text-shadow">for better odds</span>
          </p>
          <div className="   w-full flex justify-center ">
            <img src={arrow} className=" w-[150px] h-auto" />
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div>
          <div className=" bg-white w-[350px] h-[210px] lg:w-[300px] lg:h-[180px] 2xl:w-[400px] 2xl:h-[250px] xl:w-[350px] xl:h-[210px] mx-auto rounded-[8px]">
            <div className="flex flex-col justify-around h-full ">
              <div className=" flex items-center justify-around ">
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft1} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft2} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft3} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft4} />
                </div>
              </div>
              <div className=" flex items-center justify-around">
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft5} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft6} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft7} />
                </div>
                <div className=" lg:w-[60px] lg:h-[60px] xl:h-[80px] xl:w-[80px] w-[63px] h-[63px] bg-[#E4EEFF] rounded-full shadow-lg shadow-[#D1E1FF] flex items-center justify-center p-[2px] overflow-hidden">
                  <img src={nft8} />
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------- */}
          <div className=" mt-[30px]  flex flex-col gap-[15px] lg:mt-[30px]">
            <div className=" w-[350px] lg:w-[300px] mx-auto h-[20px] bg-white rounded-[160px] shadow-md shadow-[#B7A0FB]">
              <div className=" bg-[#5DF7A4] h-full w-[70%] rounded-[160px] "></div>
            </div>
            <p className=" text-white font-darumadrop uppercase text-[20px] w-[330px] lg:w-[300px] text-center mx-auto">
              Buy <span className=" text-[#FFE816]">accessories as NFTs</span>{" "}
              to enhance your skills and odds of winning
            </p>
            <p className=" text-[28px] text-[#C2DAF2] text-center font-darumadrop uppercase">
              (coming soon)
            </p>
          </div>
        </div>

        {/* ----------------------------------------------- */}
        <div className=" gradient-card w-[300px] h-[460px] lg:w-[280px] lg:h-[420px] xl:w-[300px] xl:h-[460px] mx-auto  p-[15px] opacity-100 mt-[50px] lg:mt-0">
          <div className=" relative  h-full w-full rounded-[5px] bg-gradient-to-b from-[#5DF7A4] to-[#FFFFFF]">
            <div className=" absolute inset-0 top-[-50px]">
              <img src={eagleImage} className=" mx-auto" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  body
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-[#3A80FE] text-[24px]  ">
                    based pigeon
                  </p>
                </div>
              </div>
              <div className=" relative flex  justify-end">
                <img
                  src={thunderIcon}
                  className=" absolute top-[-73px] right-[20px]"
                />
              </div>
              <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-[#8BA6D6]" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  flag
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-[#3A80FE] text-[24px]  ">
                    usa
                  </p>
                </div>
              </div>
              <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#3A80FE] to-[#8BA6D6]" />
              <div className="  flex  flex-col p-5">
                <p className=" font-darumadrop uppercase text-[20px] text-[#3D3D3D] ">
                  nextwear
                </p>
                <div className=" flex justify-between items-end">
                  <p className=" font-darumadrop uppercase text-[#3A80FE] text-[24px]  ">
                    cash money
                  </p>
                </div>
              </div>
              <div className=" relative flex  justify-end">
                <div className=" absolute top-[-50px] right-[30px]">
                  <BagOfMoney />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nfts;
