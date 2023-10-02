/* eslint-disable react/no-unescaped-entities */
import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
import video from "../assets/video11.png";

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

            <div>
              <h1>Video Url</h1>
              <div>
                <p>https://ahucauuiauauigciiaca/aspioha</p>
                <button>
                  <img src={copy} alt="" /> copy
                </button>
              </div>
            </div>
          </div>
          <div>
            <button>Facebook</button>
            <button> WhatsApp</button>
            <button>Telegram</button>
          </div>
        </section>
        <section>
          <div>
            <img src={video} alt="" />
          </div>
        </section>
      </div>
      <div className="mx-auto">
        <p>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <button>Save Video</button>
        <p> Don't have and account?</p> <span> Create account</span>
      </div>
    </>
  );
}
