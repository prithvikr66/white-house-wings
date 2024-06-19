import {
  Dextools,
  EtherscanIcon,
  TelegramIcon,
  TwitterIcons,
  UniswapIcon,
} from "./Icons";
import footerImage from "../assets/images/footer.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-white w-full h-[60px] sm:h-[80px]  mt-[50px] flex items-center lg:hidden">
        <div className=" flex items-center ml-[15px] sm:ml-[35px] md:ml-[45px] gap-2 sm:gap-[25px] md:gap-[35px] ">
          <TwitterIcons />
          <TelegramIcon />
          <Dextools />
          <EtherscanIcon />
        </div>
      </div>

      <div className=" hidden lg:block w-full h-[340px] bg-[#D8EEF6] mt-[100px]">
        <div className=" flex justify-between items-center h-full">
          <div className=" w-[55%] h-full">
           <div className=" flex flex-col gap-4 ml-[50px] xl:ml-[80px] 2xl:ml-[120px] p-[30px]">
           <div className=" flex gap-[40px]">
              <div className=" flex flex-col gap-2">
                <p className=" text-[24px] text-[#3A80FE] font-darumadrop uppercase">
                  markets
                </p>
                <div className=" flex flex-col gap-[5px]">
                  <a href="" target="_blank">
                    <div className=" flex items-center gap-2 ">
                      <div className=" ">
                        <Dextools />
                      </div>
                      <p className=" uppercase font-darumadrop text-[#7A8A99] text-[20px]">
                        dextools
                      </p>
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className=" flex items-center gap-2 ">
                      <div className=" ">
                        <EtherscanIcon />
                      </div>
                      <p className=" uppercase font-darumadrop text-[#7A8A99] text-[20px]">
                        etherscan
                      </p>
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className=" flex items-center gap-2 ">
                      <div className=" ">
                        <UniswapIcon />
                      </div>
                      <p className=" uppercase font-darumadrop text-[#7A8A99] text-[20px]">
                        uniswap
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <p className=" text-[24px] text-[#3A80FE] font-darumadrop uppercase">
                  socials
                </p>
                <div className=" flex flex-col gap-[5px]">
                  <a href="" target="_blank">
                    <div className=" flex items-center gap-2 ">
                      <div className=" ">
                        <TwitterIcons />
                      </div>
                      <p className=" uppercase font-darumadrop text-[#7A8A99] text-[20px]">
                        twitter
                      </p>
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className=" flex items-center gap-2 ">
                      <div className=" ">
                        <TelegramIcon />
                      </div>
                      <p className=" uppercase font-darumadrop text-[#7A8A99] text-[20px]">
                        telegram
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-[450px] h-[1px] bg-gradient-to-r from-[#3A80FE] to-transparent" />
            <div>
              <p className=" text-[#3A80FE] uppercase text-[24px]">
                WHITE HOUSE WINGS
              </p>
              <p className="text-[16px] text-[#7A8A99] uppercase">
                © All rights reserved
              </p>
            </div>
           </div>
          </div>
          <div
            className=" relative
           w-[45%] h-full"
          >
            <img
              src={footerImage}
              className=" w-full h-full object-cover object-center"
            />
            <div className=" absolute inset-0 h-full w-full bg-gradient-to-r from-[#D8EEF6] to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
