import team1 from "../assets/images/team/1.png";
import team2 from "../assets/images/team/2.png";
import team3 from "../assets/images/team/3.png";
import team4 from "../assets/images/team/4.png";
import team5 from "../assets/images/team/5.png";
import team6 from "../assets/images/team/6.png";
import team7 from "../assets/images/team/7.png";
import team8 from "../assets/images/team/8.png";
import team9 from "../assets/images/team/9.png";
import team10 from "../assets/images/team/10.png";
import { TeamCloud } from "./Icons";
const Team = () => {
  return (
    <div>
      <div className=" lg:hidden flex flex-col gap-[30px]">
        <div className=" w-[80%] mx-auto flex justify-around ">
          <div className=" flex  flex-col gap-[10px]">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team1}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="tyson" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[10px] ">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team2}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="Disney" />
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto flex justify-around">
          <div className=" flex  flex-col gap-[10px]">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team3}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="cage" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[10px] ">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team4}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="soprano" />
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto flex justify-around">
          <div className=" flex  flex-col gap-[10px]">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team5}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="marlon" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[10px] ">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team6}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="Lee" />
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto flex justify-around">
          <div className=" flex  flex-col gap-[10px]">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team7}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="Roy" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[10px] ">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team8}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="Terry" />
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto flex justify-around">
          <div className=" flex  flex-col gap-[10px]">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team9}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="newman" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[10px] ">
            <div className=" team-card w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] p-[4px] overflow-hidden ">
              <img
                src={team10}
                className=" w-full h-full rounded-full overflow-hidden"
              />
            </div>
            <div className=" flex justify-center">
              <TeamCloud name="maurice" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      <div className="hidden lg:block w-full mt-[70px]">
        <div className=" flex flex-col gap-[50px] w-[100%] mx-auto ">
          <div className=" flex justify-between ">
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team1}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="tyson" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team2}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="Disney" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team3}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="cage" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team4}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="soprano" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team5}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="marlon" />
              </div>
            </div>
          </div>

          <div className=" flex justify-between  ">
            <div className=" flex flex-col  gap-[20px]  ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team6}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="Lee" />
              </div>
            </div>

            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team7}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="Terry" />
              </div>
            </div>

            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team8}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="Terry" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team9}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="newman" />
              </div>
            </div>
            <div className=" flex flex-col gap-[20px]   ">
              <div className=" team-card w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  p-[4px] overflow-hidden ">
                <img
                  src={team10}
                  className=" w-full h-full rounded-full overflow-hidden"
                />
              </div>
              <div className=" flex justify-center ">
                <TeamCloud name="maurice" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
