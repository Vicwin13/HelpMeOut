import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="border-b shadow">
      <nav className="flex ml-[6.25rem] mr-[6.25rem] justify-between items-center py-4  ">
        <div>
          <img src={logo} alt="" />
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
