import utility1 from "../assets/images/utility-1.png";
import utility2 from "../assets/images/utility-2.png";
import utility3 from "../assets/images/utility-3.png";
import { Utility1Icon, Utility2Icon, Utility3Icon } from "./Icons";
const UtilityCard1 = () => {
  return (
    <svg
      width="371"
      height="570"
      viewBox="0 0 371 570"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1179_15509)">
        <path
          d="M276.708 36H60C48.9543 36 40 44.9543 40 56V453.922C40 456.453 40.4806 458.962 41.4162 461.314L62.1317 513.392C65.1596 521.004 72.5234 526 80.7155 526H310.5C321.546 526 330.5 517.046 330.5 506V122.459C330.5 119.309 329.756 116.203 328.328 113.395L294.535 46.9352C291.124 40.2258 284.234 36 276.708 36Z"
          fill="#3A80FE"
        />
        <rect x="162" y="382" width="152" height="44" fill="#3A80FE" />
        <foreignObject x="0" y="0" width="100%" height="100%" className="">
          <div className=" w-full h-full">
            <img src={utility1} className=" mx-auto" />
            <div className=" flex justify-between items-center ">
              <p className=" ml-[60px] mt-[-50px] text-white text-[48px] font-darumadrop uppercase">
                Race
              </p>
              <div className=" mr-[60px] mt-[-50px]">
                <Utility1Icon />
              </div>
            </div>
            <div className=" bg-[#C2DAF2] h-[180px] w-[270px] ml-[50px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[44px] uppercase dangrek-regular  flex items-center justify-center text-[#3D3D3D] text-center">
              <p>
                a unique lottery game where
                <span className=" text-[#D71F27]">
                  50% of the players win a 2x{" "}
                </span>{" "}
                compared to just 1 person taking the while pot!
              </p>
            </div>
          </div>
        </foreignObject>
      </g>
      <defs>
        <filter
          id="filter0_d_1179_15509"
          x="0"
          y="0"
          width="370.5"
          height="570"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.843137 0 0 0 0 0.121569 0 0 0 0 0.152941 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1179_15509"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1179_15509"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const UtilityCard2 = () => {
  return (
    <svg
      width="371"
      height="570"
      viewBox="0 0 371 570"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1183_15523)">
        <path
          d="M276.708 36H60C48.9543 36 40 44.9543 40 56V453.922C40 456.453 40.4806 458.962 41.4162 461.314L62.1317 513.392C65.1596 521.004 72.5234 526 80.7155 526H310.5C321.546 526 330.5 517.046 330.5 506V122.459C330.5 119.309 329.756 116.203 328.328 113.395L294.535 46.9352C291.124 40.2258 284.234 36 276.708 36Z"
          fill="#C2DAF2"
        />
        <foreignObject x="0" y="0" width="100%" height="100%" className="">
          <div className=" w-full h-full">
            <img src={utility2} className=" mx-auto" />
            <div className=" flex justify-between items-center ">
              <div>
                <p className=" ml-[60px] mt-[-30px] text-[#3D3D3D] text-[48px] font-darumadrop uppercase">
                  love
                </p>
                <p className=" ml-[60px] mt-[-30px] text-[#3D3D3D] text-[48px] font-darumadrop uppercase">
                  shack
                </p>
              </div>

              <div className=" mr-[60px] mt-[-10px]">
                <Utility2Icon />
              </div>
            </div>
            <div className=" mt-[10px] bg-[#ffffff] h-[180px] w-[270px] ml-[50px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[44px] uppercase dangrek-regular  flex items-center justify-center text-center text-[#3D3D3D] ">
              <p>
                Stake $PIGEON
                <span className=" text-[#3A80FE]">
                  and be eligible for passive income. we make revenue by taking
                  a 1% fee on every lottery ticket sold..
                </span>
              </p>
            </div>
          </div>
        </foreignObject>
      </g>
      <defs>
        <filter
          id="filter0_d_1183_15523"
          x="0"
          y="0"
          width="370.5"
          height="570"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.501961 0 0 0 0 0.996078 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1183_15523"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1183_15523"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const UtilityCard3 = () => {
  return (
    <svg
      width="292"
      height="492"
      viewBox="0 0 292 492"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M237.708 1H21C9.95431 1 1 9.9543 1 21V418.922C1 421.453 1.48059 423.962 2.41625 426.314L23.1317 478.392C26.1596 486.004 33.5234 491 41.7155 491H271.5C282.546 491 291.5 482.046 291.5 471V87.4594C291.5 84.3088 290.756 81.2029 289.328 78.3945L255.535 11.9352C252.124 5.22584 245.234 1 237.708 1Z"
        fill="white"
        stroke="#D71F27"
      />
      <foreignObject x="0" y="0" width="100%" height="100%" className="">
        <div className=" w-full h-full">
          <img src={utility3} className=" mx-auto  mt-[-35px]" />
          <div className=" flex justify-around items-center mt-[-20px] ">
            <div>
              <p className="  text-[#3A80FE] text-[48px] font-darumadrop uppercase">
                burn
              </p>
            </div>

            <div className=" ">
              <Utility3Icon />
            </div>
          </div>
          <div className="  bg-[#3A80FE] h-[180px] w-[270px] mx-auto rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[44px] uppercase dangrek-regular  flex items-center justify-center text-center text-white ">
            <p>
              With each lottery ticket you buy, a small portion of
              <span className=" text-[#FFE920]">$PIGEON is burnt.</span>
              deflationary mechanism drives demand!
            </p>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};

export { UtilityCard1, UtilityCard2, UtilityCard3 };
