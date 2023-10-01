import logo from "../assets/logo.png";
import setting from "../assets/setting-2.png";
import cancel from "../assets/close-circle.png";
import monitor from "../assets/monitor.png";
import copy from "../assets/copy.png";
import camera from "../assets/video-camera.png";
import mic from "../assets/microphone.png";

export default function Popup() {
  return (
    <div>
      <div className="w-[18.75rem] shadow-md mx-auto p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="w-[1.75rem]" src={logo} alt="" />
            <span className="font-bold">HelpMeOut</span>
          </div>
          <div className="flex gap-2">
            <img src={setting} alt="" />
            <img src={cancel} alt="" />
          </div>
        </div>
        <p className="text-center w-full pt-3">
          This extension helps you record and share help videos with ease.
        </p>

        <div className="flex py-8 justify-around ">
          <div className="flex flex-col font-bold">
            <img className="w-fit mx-auto" src={monitor} alt="" />
            <p>Full screen</p>
          </div>
          <div className="flex flex-col font-bold">
            <img className="w-fit mx-auto" src={copy} alt="" />
            <p>Current Tab</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between border-2 border-black px-2 rounded-md py-4">
            <div className="flex items-center gap-2 font-bold">
              <img src={camera} alt="" />
              <span>Camera</span>
            </div>
            <label className="relative  h-8 w-14 cursor-pointer">
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute  inset-0 rounded-full bg-gray-900 transition peer-checked:bg-green-500"></span>

              <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
          <div className="flex justify-between border-2 py-4 rounded-md mt-2 px-2 border-black items-center">
            <div className="flex items-center gap-2 font-bold">
              <img src={mic} alt="" />
              <span>Audio</span>
            </div>
            <label className="relative  h-8 w-14 cursor-pointer">
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute  inset-0 rounded-full bg-gray-900 transition peer-checked:bg-green-500"></span>

              <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
        </div>
        <button className="p-4 text-center w-full font-bold mt-4 rounded-3xl bg-blue-900">
          {" "}
          Start Recording
        </button>
      </div>
    </div>
  );
}
