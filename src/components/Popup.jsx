import React from "react";
import ReactDOM from "react-dom/client";
import camera from "../assets/video-camera.png";
import cancel from "../assets/close-circle.png";
import copy from "../assets/copy.png";
import logo from "../assets/logo.png";
import mic from "../assets/microphone.png";
import monitor from "../assets/monitor.png";
import setting from "../assets/setting-2.png";

function Popup() {
  const startRecording = async () => {
    // Specify the active tab to send the message to (content scripts run in the context of a tab).
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Create a message object with an action to trigger the content script function.
      let message = { action: "triggerRecording" };

      console.log("clicked start recording");

      // Send the message to the content script in the active tab.
      // chrome.tabs.sendMessage(tabs[0].id, message, function (resp) {
      //   if (!chrome.runtime.lastError) {
      //     console.log(resp);
      //   } else {
      //     console.log(chrome.runtime.lastError, "Error recording in Popup.jsx");
      //   }
      // });
    });
  };

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

              <span className="absolute  inset-0 rounded-full bg-primary transition peer-checked:bg-green-500"></span>

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

              <span className="absolute  inset-0 rounded-full bg-primary transition peer-checked:bg-green-500"></span>

              <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
        </div>
        <button
          onClick={() => startRecording()}
          className="p-4 text-center text-white w-full font-bold mt-4 rounded-3xl bg-primary">
          Start Recording
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("popup")).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
