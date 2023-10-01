import logo from "../assets/logo_white.png";
export default function Footer() {
  return (
    <>
      <div className="flex items-start justify-center text-white py-[6.12rem] p-[8.12rem] bg-red-500">
        <div className="flex mr-[15.19rem] items-center gap-2">
          <img src={logo} alt="" />
          <p className="font-bold text-[1rem]">HelpMeOut</p>
        </div>
        <aside className="flex">
          <div className="mr-[13.75rem]">
            <h1 className="font-bold pb-[1.62rem]">Menu</h1>
            <p className="pb-6">Home</p>
            <p className="pb-6">Converter</p>
            <p className="pb-6">How it Works</p>
          </div>
          <div className="mr-[13.75rem]">
            <h1 className="font-bold pb-[1.62rem]">About us</h1>
            <p className="pb-6">About</p>
            <p className="pb-6">Contact Us</p>
            <p className="pb-6">Privacy Policy</p>
          </div>
          <div>
            <h1 className="font-bold pb-[1.62rem]">Screen Record</h1>
            <p className="pb-6">Browser Window</p>
            <p className="pb-6">Desktop</p>
            <p className="pb-6">Application</p>
          </div>
        </aside>
      </div>
    </>
  );
}
