import icon from "../assets/Icon placeholder.png";
import icon1 from "../assets/Icon placeholder (1).png";
import icon2 from "../assets/Icon placeholder (2).png";
import video from "../assets/Video_Repository.png";

export default function Features() {
  return (
    <>
      <div>
        <div className="mx-auto text-center text-[2.5rem] py-16">
          <h1 className="font-bold">Features</h1>
          <p className="text-[1.25rem] capitalize text-gray-400">
            key highlights of our extension
          </p>
        </div>
        <section className="flex items-center py-10 gap-14 ml-[6.75rem] mr-[6.75rem]">
          <div className="w-[34.25rem]">
            <div className="flex  gap-4 pb-12">
              <div>
                <img className="" src={icon} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-[1.75rem]">
                  Simple Screen Recording
                </h1>
                <p className="text-[1.25rem] text-gray-400">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required
                </p>
              </div>
            </div>
            <div className="flex gap-4 pb-12">
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-[1.75rem]">
                  Easy-to-Share URL
                </h1>
                <p className="text-[1.25rem] text-gray-400">
                  Share your recordings instantly with a single link, No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={icon2} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-[1.75rem]">
                  Revisit Recordings
                </h1>
                <p className="text-[1.25rem] text-gray-400">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={video} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
