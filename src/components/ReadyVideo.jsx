/* eslint-disable react/no-unescaped-entities */

import fb from "../assets/Facebook svg.png";
import whatsapp from "../assets/Vector.png";
import tg from "../assets/Group.png";
import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
import video from "../assets/video11.png";
import Footer from "./Footer";

export default function ReadyVideo() {
  return (
    <>
      <div className=" ml-[6.75rem] mr-[6.75rem] flex justify-between">
        <section>
          <h1 className="text-[2.8rem]">Your Video is ready</h1>

          <div className="py-16">
            <p>Name</p>
            <div className="flex items-center gap-2  p-2 ">
              <p className="text-[1.5rem] font-semibold text-primary">
                untitled_video_id
              </p>
              <img src={edit} alt="" />
            </div>
            <div className=" flex bg-ash my-4 w-[34rem] rounded-2xl px-[1.5rem] py-[0.75rem]">
              <input
                className=" w-full p-2 bg-ash"
                placeholder="enter email of receiver"
                type="email"
                id=""
              />
              <button className="bg-purple text-white px-[1.125rem] py-[0.6rem] rounded-lg ">
                Send
              </button>
            </div>

            <div className="py-16">
              <h1>Video Url</h1>
              <div className="flex items-center gap-2 justify-between bg-ash px-4 py-4 rounded-2xl">
                <p>https://www.helpmeout/Untitled_Video_20232509</p>
                <button className="flex items-center border-primary text-primary font-semibold border py-2 px-4 bg-white rounded-lg gap-2">
                  <img className="w-fit" src={copy} alt="" /> Copy
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-2  flex gap-2 border-ash border rounded">
              <img src={fb} alt="" />
              Facebook
            </button>
            <button className="p-2 flex gap-2 border-ash border rounded">
              <img src={whatsapp} alt="" /> WhatsApp
            </button>
            <button className="p-2 flex gap-2 border-ash  border rounded">
              <img src={tg} alt="" />
              Telegram
            </button>
          </div>
        </section>
        <section>
          <div>
            <img src={video} alt="" />
          </div>
        </section>
      </div>
      <div className="mx-auto w-[46.6875rem] text-center py-44">
        <p className="w-[40rem] text-[1.5rem] mx-auto font-semibold text-center">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <div className="py-[2.5rem]">
          <button className="text-white rounded-lg bg-primary py-[0.75rem] px-[1.12rem]">
            Save Video
          </button>
        </div>
        <div className="flex text-[1.5rem] gap-2 mx-auto text-center justify-center">
          <p className="text-ashText"> Don't have and account?</p>{" "}
          <span className="text-primary"> Create account</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
