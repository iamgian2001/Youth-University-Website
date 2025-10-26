import Logo from "../assets/logo.svg?react";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-bg shadow-md md:hidden w-full">
      <Logo className="w-40 h-15" />
      <button
        className="text-3xl text-primary focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <IoIosMenu />
      </button>
      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-primary text-text-light shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="menu-buttons text-left mini-title flex flex-col p-6 space-y-5">
          <button className="">Home</button>
          <button className="">Item 2</button>
          <button className="">Item 3</button>
          <button className="">Item 4</button>
          <button className="">Item 5</button>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
