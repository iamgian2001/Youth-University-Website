import Logo from "../assets/logo.svg?react";
import { IoIosArrowDown } from "react-icons/io";
import MobileNavbar from "./MobileNavbar.js";

function Navbar() {
  return (
    <>
      <div className="hidden md:flex flex-row px-4 py-3 text-text-default justify-between items-center">
        <div className="flex flex-row space-x-4">
          <Logo />
        </div>
        <div className="flex flex-row items-center space-x-7 justify-center mr-10 body">
          <div className="custom-navbar">
            <button>Item</button>
            <IoIosArrowDown className="w-12 h-7" />
          </div>
          <div className="custom-navbar">
            <button>Item</button>
            <IoIosArrowDown className="w-12 h-7" />
          </div>
          <div className="custom-navbar">
            <button>Item</button>
            <IoIosArrowDown className="w-12 h-7" />
          </div>
          <div className="custom-navbar">
            <button>Item</button>
            <IoIosArrowDown className="w-12 h-7" />
          </div>
          <div className="custom-navbar">
            <button>Item</button>
            <IoIosArrowDown className="w-12 h-7" />
          </div>
        </div>
      </div>
      {/* Mobile Navbar: only visible below md */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
