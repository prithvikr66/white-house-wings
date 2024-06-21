import { EthereumIcon, EthereumIconSM, PacManIcon, StakeSVG } from "./Icons";
import stakeImg from "../assets/images/stake.png";
import stakeBird from "../assets/images/stake-bird.png";
import money from "../assets/images/money.png";
import happyBird from "../assets/images/happy-bird.png";

const Stake = () => {
  return (
    <div className=" lg:mt-[100px]">
      <div className=" lg:hidden mb-[50px] w-[70%] mx-auto  bg-gradient-to-br from-[#F9F871] via-[#FEB0FE] to-[#5DF7A4] rounded-[20px] p-[4px] flex justify-center items-center">
        <div className=" h-full w-full bg-white rounded-[20px]">
          <div className=" w-[90%] mx-auto flex justify-between items-center ">
            <img src={money} />
            <img src={happyBird} />
            <p
              className=" font-darumadrop uppercase text-[24px] text-[#3A80FE]
                    "
            >
              100 ETH
            </p>
          </div>
          <div className=" mt-[-35px]">
            <div className=" w-[90%]  mx-auto h-[20px] bg-[#3A80FE] rounded-[160px] shadow-xl shadow-[#FEC7FE]">
              <div className=" bg-[#5DF7A4] h-full w-[50%] rounded-[160px] "></div>
            </div>
            <div className=" w-[90%] flex justify-center mx-auto">
              <p className=" text[#3A80FE] text-[20px] font-darumadrop uppercase">
                50%
              </p>
            </div>
          </div>

          <div className=" w-[90%] mx-auto  ">
            <div className=" flex justify-between   ">
              <div className=" w-full  ">
                <p className=" text-[#3A80FE] font-darumadrop uppercase text-[24px]">
                  participate
                </p>
                <div className="relative w-full mt-[20px]  ">
                  <input
                    placeholder="eth amount"
                    className="w-full pl-10 pr-4 py-2 rounded-md outline-none participate-button border border-[#3A80FE] bg-white font-darumadrop uppercase "
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <EthereumIcon />
                  </div>
                </div>
                <div className=" w-full mt-[20px] ">
                  <button className=" bg-[#3A80FE] uppercase font-darumadrop text-white text-[20px]  p-[5px] rounded-tr-[44px] rounded-b-[8px] rounded-tl-[8px]  flex gap-[15px] justify-center items-center  w-full ">
                    <p className=" ml-[15px]">get me in!</p>
                    <div className=" mr-[15px]">
                      <PacManIcon />
                    </div>
                  </button>
                </div>
                <div className=" w-[70%] border flex justify-between mt-[20px]">
                  <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px] ">
                    <EthereumIconSM />
                    <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                      0.1
                    </p>
                  </div>
                  <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                    <EthereumIconSM />
                    <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                      0.5
                    </p>
                  </div>
                  <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                    <EthereumIconSM />
                    <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                      1
                    </p>
                  </div>
                  <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                    <EthereumIconSM />
                    <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                      2
                    </p>
                  </div>
                </div>
                <div className=" bg-white border-[1px] border-[#FEB0FE] rounded-[8px] flex flex-col gap-[10px] p-[15px] mt-[20px]">
                  <div className=" flex justify-between items-center ">
                    <p className=" font-darumadrop uppercase text-[16px] text-[#3D3D3D]">
                      minimum
                    </p>
                    <div className=" flex items-center gap-2">
                      <EthereumIconSM />
                      <p className=" font-darumadrop uppercase text-[16px] text-[#3A80FE]">
                        0.01
                      </p>
                    </div>
                  </div>
                  <div className=" bg-gradient-to-r from-[#3A80FE] to-transparent w-[100%] mx-auto h-[1px]" />
                  <div className=" flex justify-between items-center">
                    <p className=" font-darumadrop uppercase text-[16px] text-[#3D3D3D]">
                      mAXimum{" "}
                    </p>
                    <div className=" flex items-center gap-2">
                      <EthereumIconSM />
                      <p className=" font-darumadrop uppercase text-[16px] text-[#3A80FE]">
                        2
                      </p>
                    </div>
                  </div>
                  <div className=" bg-gradient-to-r from-[#3A80FE] to-transparent w-[100%] mx-auto h-[1px]" />
                  <div className=" flex justify-between items-center">
                    <p className=" font-darumadrop uppercase text-[16px] text-[#3D3D3D]">
                      your amount
                    </p>
                    <div className=" flex items-center gap-2">
                      <EthereumIconSM />
                      <p className=" font-darumadrop uppercase text-[16px] text-[#3A80FE]">
                        0.01
                      </p>
                    </div>
                  </div>
                </div>
                <img src={stakeBird} className=" mx-auto" />
              </div>
              <div>
                {/* <img src={stakeBird} className=" w-[200px] h-auto"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="   w-full flex flex-col lg:flex-row justify-between">
        <div className="w-[70%] lg:w-[25%] 2xl:w-[20%] bg-white rounded-[20px] mx-auto lg:mx-0 ">
          <div className=" mt-[15px] flex   justify-center">
            <StakeSVG />
          </div>
          <div className=" relative ">
            <img src={stakeImg} className=" w-[200px] h-auto mx-auto" />
            <p className=" absolute inset-0 top-[30%] left-[35%] font-darumadrop text-white text-[35px] uppercase">
              100 eth
            </p>
          </div>
          <div>
            <div className=" flex justify-between p-[20px] items-center">
              <div className=" flex items-center gap-[10px]">
                <div className=" bg-[#F9F871] h-[16px] w-[16px] rounded-[4px] shadow-2xl  shadow-[#D8E6FF]" />
                <p className=" text-[#3D3D3D] font-darumadrop uppercase text-[20px] 2xl:text-[20px]">
                  public sale
                </p>
              </div>
              <p className=" text-[#3A80FE] text-[24px] 2xl:text-[24px] font-darumadrop uppercase">
                100%
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#3A80FE] to-transparent" />
            <div className=" flex justify-between p-[20px] items-center">
              <div className=" flex items-center gap-[10px]">
                <div className=" bg-[#5DF7A4] h-[16px] w-[16px] rounded-[4px] shadow-2xl  shadow-[#D8E6FF]" />
                <p className=" text-[#3D3D3D] font-darumadrop uppercase text-[20px] 2xl:text-[20px]">
                  LP
                </p>
              </div>
              <p className=" text-[#3A80FE] text-[24px] 2xl:text-[24px] font-darumadrop uppercase">
                30%
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#3A80FE] to-transparent" />
            <div className=" flex justify-between p-[20px] items-center">
              <div className=" flex items-center gap-[10px]">
                <div className=" bg-[#3D3D3D] h-[16px] w-[16px] rounded-[4px] shadow-2xl  shadow-[#D8E6FF]" />
                <p className=" text-[#3D3D3D] font-darumadrop uppercase text-[20px] 2xl:text-[20px]">
                  marketing
                </p>
              </div>
              <p className=" text-[#3A80FE] text-[24px] 2xl:text-[24px] font-darumadrop uppercase">
                10%
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#3A80FE] to-transparent" />
            <div className=" flex justify-between p-[20px] items-center">
              <div className=" flex items-center gap-[10px]">
                <div className=" bg-[#FF9581] h-[16px] w-[16px] rounded-[4px] shadow-2xl  shadow-[#D8E6FF]" />
                <p className=" text-[#3D3D3D] font-darumadrop uppercase text-[20px] 2xl:text-[20px]">
                  utility/build
                </p>
              </div>
              <p className=" text-[#3A80FE] text-[24px] 2xl:text-[24px] font-darumadrop uppercase">
                5%
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#3A80FE] to-transparent" />
            <div className=" flex justify-between p-[20px] items-center">
              <div className=" flex items-center gap-[10px]">
                <div className=" bg-[#FF72B5] h-[16px] w-[16px] rounded-[4px] shadow-2xl  shadow-[#D8E6FF]" />
                <p className=" text-[#3D3D3D] font-darumadrop uppercase text-[20px] 2xl:text-[20px]">
                  cex (tier 1)
                </p>
              </div>
              <p className=" text-[#3A80FE] text-[24px] 2xl:text-[24px] font-darumadrop uppercase">
                5%
              </p>
            </div>
          </div>
        </div>

        <div className="2xl:w-[75%] w-[68%] flex flex-col justify-between">
          <div className=" hidden  w-full  h-[65%] bg-gradient-to-br from-[#F9F871] via-[#FEB0FE] to-[#5DF7A4] rounded-[20px] p-[4px] lg:flex justify-center items-center">
            <div className=" h-full w-full bg-white rounded-[20px]">
              <div className=" w-[80%] mx-auto flex justify-between items-center mt-[10px]">
                <img src={money} />
                <img src={happyBird} />
                <p
                  className=" font-darumadrop uppercase text-[24px] text-[#3A80FE]
                    "
                >
                  100 ETH
                </p>
              </div>
              <div className=" mt-[-40px]">
                <div className=" w-[80%]  mx-auto h-[25px] bg-[#3A80FE] rounded-[160px] shadow-xl shadow-[#FEC7FE]">
                  <div className=" bg-[#5DF7A4] h-full w-[60%] rounded-[160px] "></div>
                </div>
                <div className=" w-[80%] flex justify-center mx-auto">
                  <p className=" text[#3A80FE] text-[20px] font-darumadrop uppercase">
                    50%
                  </p>
                </div>
              </div>

              <div className=" w-[80%] mx-auto">
                <div className=" flex justify-between ">
                  <div>
                    <p className=" text-[#3A80FE] font-darumadrop uppercase text-[24px]">
                      participate
                    </p>
                    <div className=" w-[100%]  flex items-center justify-between">
                      <div className="relative w-[45%] ">
                        <input
                          placeholder="eth amount"
                          className="w-full pl-10 pr-4 py-2 rounded-md outline-none participate-button border border-[#3A80FE] bg-white font-darumadrop uppercase "
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <EthereumIcon />
                        </div>
                      </div>
                      <div className=" w-[45%]">
                        <button className=" bg-[#3A80FE] uppercase font-darumadrop text-white text-[20px] 2xl:text-[24px] p-[15px] rounded-tr-[44px] rounded-b-[8px] rounded-tl-[8px]  flex gap-[15px] justify-around items-center ">
                          <p className=" ml-[15px]">get me in!</p>
                          <div className=" mr-[15px]">
                            <PacManIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className=" w-[50%] border flex justify-between">
                      <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px] ">
                        <EthereumIconSM />
                        <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                          0.1
                        </p>
                      </div>
                      <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                        <EthereumIconSM />
                        <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                          0.5
                        </p>
                      </div>
                      <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                        <EthereumIconSM />
                        <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                          1
                        </p>
                      </div>
                      <div className=" w-[23%] h-[32px] bg-[#E4EEFF]  border-[#3A80FE] border-[1px] rounded-[4px] flex items-center justify-center  gap-[8px]">
                        <EthereumIconSM />
                        <p className=" text-[#3A80FE] text-[16px] font-darumadrop uppercase">
                          2
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <img src={stakeBird} className=" w-[200px] h-auto"/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col lg:flex-row items-center  lg:justify-between  lg:h-[30%] gap-[30px] lg:gap-0 mt-[50px] lg:mt-[0px]">
            <div className=" bg-white h-full lg:w-[32%] 2xl:w-[32%] w-full  stake-card p-[15px] xl:p-[20px] 2xl:p-[30px]  ">
              <p className=" text-[#3A80FE] text-[20px] 2xl:text-[24px] font-darumadrop uppercase">
                tge
              </p>
              <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
                you’ll receive your tokens on TGE, on{" "}
                <span className=" text-[#3A80FE]">July 4th, 2024</span>
              </p>
            </div>
            <div className=" bg-white h-full lg:w-[32%] 2xl:w-[32%] w-full  stake-card p-[15px] xl:p-[20px] 2xl:p-[30px] ">
              <p className=" text-[#3A80FE] text-[20px] 2xl:text-[24px] font-darumadrop uppercase">
                LP
              </p>
              <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
                <span className="text-[#3A80FE]">30% of the presale</span>{" "}
                amount would be added to the LP
              </p>
            </div>
            <div className=" bg-white h-full lg:w-[32%] 2xl:w-[32%] w-full  stake-card p-[15px] xl:p-[20px] 2xl:p-[30px] ">
              <p className=" text-[#3A80FE] text-[20px] 2xl:text-[24px] font-darumadrop uppercase">
                note
              </p>
              <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
                Diamond hands only! prefer people with a{" "}
                <span className=" text-[#3A80FE]">long- term vision</span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col lg:flex-row items-center  lg:justify-between  lg:h-[30%] gap-[30px] lg:gap-0 mt-[50px] lg:mt-[0px]">
          <div className=" bg-white h-full lg:w-[31%] w-[70%] sm:w-[400px]  stake-card p-[30px]  ">
            <p className=" text-[#3A80FE] text-[24px] font-darumadrop uppercase">
              tge
            </p>
            <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
              you’ll receive your tokens on TGE, on{" "}
              <span className=" text-[#3A80FE]">July 4th, 2024</span>
            </p>
          </div>
          <div className=" bg-white h-full lg:w-[31%]  w-[70%] sm:w-[400px]  stake-card p-[30px] ">
            <p className=" text-[#3A80FE] text-[24px] font-darumadrop uppercase">
              LP
            </p>
            <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
              <span className="text-[#3A80FE]">30% of the presale</span> amount
              would be added to the LP
            </p>
          </div>
          <div className=" bg-white h-full lg:w-[31%] w-[70%] sm:w-[400px]  stake-card p-[30px] ">
            <p className=" text-[#3A80FE] text-[24px] font-darumadrop uppercase">
              note
            </p>
            <p className=" text-[24px] font-darumadrop uppercase text-[#3D3D3D]">
              Diamond hands only! prefer people with a{" "}
              <span className=" text-[#3A80FE]">long- term vision</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
