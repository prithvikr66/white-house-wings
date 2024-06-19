import utility1 from "../assets/images/utility-1.png";

export const Utility = () => {
  return (
    <div className="flex justify-center">
      <div className="relative utility-card w-1/3 bg-yellow-200 overflow-visible">
        <div className="flex items-center justify-center">
          <img src={utility1} className="absolute w-1/2 top-[-50px] z-10" />
        </div>
      </div>
    </div>
  );
};
