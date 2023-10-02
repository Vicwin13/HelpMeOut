import success from "../assets/success-kite 1.png";

export default function SaveVideo() {
  return (
    <>
      <section className="flex justify-center h-screen items-center z-20 ">
        <div className=" w-fit p-8 rounded-2xl shadow-xl">
          <div className="mx-auto text-center">
            <img className=" mx-auto" src={success} alt="" />
            <p className="text-[1.5rem] py-5">
              Your link has been sent
              <br /> to <span className="text-primary">jognmark@gmail.com</span>
            </p>
          </div>
          <div className="mx-auto w-[23rem] text-center py-4">
            <p className=" text-[1.1rem] mx-auto font-semibold text-center">
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </p>
            <div className="py-[2.5rem]">
              <button className="text-white rounded-lg bg-primary py-[0.75rem] px-[1.12rem]">
                Save Video
              </button>
            </div>
            <div className="flex text-[1rem] gap-1 mx-auto text-center justify-center">
              <p className="text-ashText"> Don't have and account?</p>{" "}
              <span className="text-primary"> Create account</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
