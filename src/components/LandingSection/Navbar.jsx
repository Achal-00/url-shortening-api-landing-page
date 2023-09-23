import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".overlay").classList.replace("hidden", "grid");
      document.querySelector(".icon-menu").src = "icon-close.svg";
    } else {
      document.querySelector(".overlay").classList.replace("grid", "hidden");
      document.querySelector(".icon-menu").src = "icon-hamburger.svg";
    }
  }, [menu]);

  return (
    <div className="self-center portrait:px-[5%] portrait:py-[2%] landscape:px-[10%] relative">
      <div className="landscape:hidden flex items-center justify-between">
        <img src="logo.svg" alt="" />
        <img
          src="icon-hamburger.svg"
          alt=""
          onClick={() => setMenu((prev) => !prev)}
          className="icon-menu"
        />
        <div className="absolute bg-dark-violet w-[90%] mx-auto mt-8 top-full z-20 rounded-lg p-[8%] text-white text-center grid gap-8 overlay">
          <div className="grid gap-6 font-bold text-lg">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
          <hr />
          <div className="grid gap-4">
            <button className="px-6 py-4 font-bold">Login</button>
            <button className="bg-cyan px-6 py-4 text-white rounded-full font-bold hover:opacity-80">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="portrait:hidden flex justify-between items-center">
        <div className="flex items-center gap-12">
          <img src="logo.svg" alt="" />
          <div className="flex gap-8">
            <p className="font-bold text-greyish-violet hover:text-very-dark-blue hover:cursor-pointer">
              Features
            </p>
            <p className="font-bold text-greyish-violet hover:text-very-dark-blue hover:cursor-pointer">
              Pricing
            </p>
            <p className="font-bold text-greyish-violet hover:text-very-dark-blue hover:cursor-pointer">
              Resources
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 text-greyish-violet font-bold">
            Login
          </button>
          <button className="bg-cyan px-6 py-2 text-white rounded-full font-bold hover:opacity-80">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
