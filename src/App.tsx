import mainImage from "./assets/images/main.png";
import mascot1 from "./assets/images/mascot1.png";
import mascot2 from "./assets/images/mascot2.png";
import thunderIcon from "./assets/images/thunderIcon.svg";

function App() {
  return (
    <div className="min-h-screen">
      <div className=" relative">
        <img src={mainImage} className=" w-full " />
        <div className=" absolute  bottom-0 w-full  ">
          <div className=" w-[80%] mx-auto flex justify-between ">
            <div>
              <img
                src={mascot1}
                className=" 2xl:w-[300px] xl:w-[250px]  w-[80px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto  mascot"
              />
            </div>
            <div className="  my-auto shadow-[#23FF88] ">
              <button className=" uppercase text-white text-[10px] 2xl:text-[36px] 2xl:p-2 pt-1 pb-1 bg-[#3A80FE]  lets-start-button font-darumadrop shadow-[#23FF88]">
                <div className=" flex items-center justify-center ">
                  Let's play
                  <img src={thunderIcon} className=" 2xl:mt-4 w-1/6 " />
                </div>
              </button>
            </div>
            <div>
              <img
                src={mascot2}
                className=" 2xl:w-[300px] xl:w-[250px]  w-[80px] sm:w-[150px] md:w-[170px] lg:w-[200px] h-auto  mascot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
