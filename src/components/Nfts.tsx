import arrow from "../assets/images/mutate-arrow.png";
// import eagleImage from "../assets/images/eagle.png";
import pigeonIcon from "../assets/images/pigeon-thumbs-up.png";
const Nfts = () => {
  return (
    <div className=" ">
      <p
        className={`font-darumadrop uppercase   text-[32px] text-white  text-center bird-nest-text `}
      >
        mutate <span className=" no-text-shadow">for better odds</span>
      </p>
      <div className=" w-full flex justify-center ">
        <img src={arrow} />
      </div>
      <div className=" gradient-card w-[20%] h-[500px] p-[15px] opacity-100 ">
        <div className=" bg-[#3A80FE] h-full w-full rounded-[5px] bg-gradient-to-b from-[#3A80FE] to-[#ffffff]">
          <img src={pigeonIcon} className=" mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
