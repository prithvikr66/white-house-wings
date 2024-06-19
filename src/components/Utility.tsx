import { UtilityCard1, UtilityCard2, UtilityCard3 } from "./UtilityCard";

export const Utility = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-center mt-[-50px] lg:mt-[50px] lg:w-[100%] mx-auto lg:justify-between">
      <UtilityCard1 />
      <UtilityCard2/>
      <UtilityCard3 />
    </div>
  );
};
