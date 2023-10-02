import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className=" shadow">
      <nav className="flex ml-[6.25rem] mr-[6.25rem] justify-between items-center py-4  ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <span className="font-bold text-primary">HelpMeOut</span>
        </div>
        <div>
          <a className="pr-2" href="#">
            Features
          </a>
          <a className="pl-2" href="#">
            How it works
          </a>
        </div>
        <div>
          <p>Get Started</p>
        </div>
      </nav>
    </div>
  );
}
