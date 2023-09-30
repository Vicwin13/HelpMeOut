import trash from "../assets/trash.png";
import pause from "../assets/pause.png";
import stop from "../assets/stop.png";
import video from "../assets/video.png";
import audio from "../assets/audio.png";
import image from "../assets/image.jpg";

export default function Record() {
  return (
    <>
      <div className="flex items-center gap-8">
        <div
          className="rounded-full bg-cover bg-center bg-no-repeat w-32 h-32 border"
          style={{ backgroundImage: `url(${image})` }}></div>
        <aside className="flex items-center bg-black p-4 rounded-[4rem] text-white">
          <div>
            <span>number</span>
          </div>
          <hr className="border-2 w-8 transform rotate-90 border-white" />
          <div className="flex items-center gap-8  px-4">
            <div className="text-center">
              <img
                className="border rounded-full border-black"
                src={pause}
                alt=""
              />
              <p>Pause</p>
            </div>
            <div className="text-center">
              <img src={stop} alt="" />
              <p>Stop</p>
            </div>
            <div className="text-center p-0">
              <img src={video} alt="" />
              <p>Camera</p>
            </div>
            <div className="text-center">
              <img src={audio} alt="" />
              <p>Mic</p>
            </div>
            <div>
              <img src={trash} alt="" />
              <p>Delete</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
