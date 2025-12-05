import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router";
import {
  House,
  Book,
  LibraryBig,
  MailQuestionMark,
  UserCog,
  User,
} from "lucide-react";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const activeStyle = "text-slate-300/70";

  type NavItem = {
    name: string;
    icon: React.ElementType;
    path: string;
  };

  const navItemList: NavItem[] = [
    { name: "Home", icon: House, path: "/dashboard" },
    { name: "My courses", icon: Book, path: "/courses" },
    { name: "Resources", icon: LibraryBig, path: "/resources" },
    {
      name: "Student Support",
      icon: MailQuestionMark,
      path: "/student-support",
    },
  ];
  const size = 22;
  const strokeWidth = 1;

  return (
    <nav className="flex flex-row z-9999 items-center justify-between px-2 py-3 bg-primary/40 text-secondary shadow-lg  w-full  top-0 right-0">
      <h1 className="mx-3 font-body font-semibold ">{active}</h1>
      <button
        className="text-2xl w-fit h-fit text-secondary focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <IoIosMenu />
      </button>
      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 "
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 z-80 h-full  w-fit max-w-xs bg-primary/10 backdrop-blur-2xl backdrop-filter
           border border-white/20 text-text-light shadow-lg transform transition-transform duration-300 ease-in-out ${
             open ? "translate-x-0" : "translate-x-full"
           }`}
      >
        <div className=" flex flex-col h-fit  p-6 space-y-5">
          {navItemList.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path}>
                <div
                  key={item.path}
                  className={`flex font-cta font-medium rounded-2xl ${
                    active == item.name ? activeStyle : null
                  } gap-5 transition-all duration-200  flex-row items-center`}
                >
                  <Icon size={size} strokeWidth={strokeWidth} />
                  <button
                    key={item.path}
                    onClick={() => {
                      setOpen(false), setActive(item.name);
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              </Link>
            );
          })}
          <Link to="/profile">
            <div
              className={`flex font-cta font-medium rounded-2xl ${
                active == "Profile & Settings" ? activeStyle : null
              } gap-5 transition-all duration-200  flex-row items-center`}
            >
              <UserCog size={size} strokeWidth={strokeWidth} />
              <button
                onClick={() => {
                  setOpen(false), setActive("Profile & Settings");
                }}
              >
                Profile & Settings
              </button>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
