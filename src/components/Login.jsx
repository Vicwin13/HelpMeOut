import google from "../assets/Google svg.png";
import fb from "../assets/Facebook svg.png";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div className="py-4 ">
        <div>
          <h1 className="  text-[2rem] font-bold">Log in or Sign up</h1>
          <p className=" py-3 text-center text-sm font-light">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <div>
          <button className="flex gap-2 border rounded-md w-full justify-center p-2 my-2">
            <img src={google} alt="" /> Continue with Google
          </button>
          <button className="flex gap-2 border rounded-md w-full justify-center p-2">
            <img src={fb} alt="" /> Continue with Facebook
          </button>
        </div>
        <div className="flex pt-4 gap-2 w-[90%] mx-auto items-center justify-center">
          <hr className="w-7/12 border-black" /> <p>or</p>
          <hr className="w-7/12 border-black" />
        </div>
        <div>
          <div className="text-left py-4">
            <p>Email</p>
            <input
              className="border w-full p-2 rounded-md"
              type="email"
              placeholder="Enter your email address"
              name=""
              id=""
            />
          </div>
          <div className="text-left">
            <p>Password</p>
            <input
              className="border w-full p-2 rounded-md"
              type="password"
              placeholder="Enter your Password"
              name=""
              id=""
            />
          </div>
          <button className=" w-full bg-red-500 p-3 mt-8 rounded-md font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
