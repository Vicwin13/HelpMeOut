/* eslint-disable react/no-unescaped-entities */
import frame1 from "../assets/Frame 1.png";
import frame2 from "../assets/Frame 2.png";
import frame3 from "../assets/Frame 3.png";
import bg from "../assets/grid.136a9256d16888900db0.svg.png";
import bg2 from "../assets/grid.svg.png";

export const LandingPageText = () => {
  return (
    <div>
      <section className="flex h-screen items-center ml-[6.25rem] mr-[6.25rem] justify-center">
        <div>
          <h1 className="text-[4rem] font-bold w-[60%] leading-none pb-4">
            Show them don't just tell
          </h1>
          <p className="w-[34rem] text-[1.25rem]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website
          </p>
          <button className="mt-10 p-4 rounded-md bg-red-600 font-semibold text-white border text-center">
            Install HelpMeOut <div></div>
          </button>
        </div>

        <aside className="relative">
          <div className="flex items-center gap-4">
            <div>
              <img className="pb-4 " src={frame1} alt="" />
              <img className="" src={frame3} alt="" />
            </div>
            <img className="h-[%]" src={frame2} alt="" />
          </div>
          <img className="absolute -top-10 -right-10 -z-10" src={bg} alt="" />
          <img className="absolute -bottom-10 -z-10 -left-10" src={bg2} alt="" />
        </aside>
      </section>
    </div>
  );
};
