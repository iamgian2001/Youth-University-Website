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
      path: "/studentsupport",
    },
  ];
  const size = 22;
  const strokeWidth = 1;

  return (
    <nav className="flex z-9999 items-center justify-end px-2 py-3 bg-neutral-950/10 shadow-lg  w-full  top-0 right-0">
      <button
        className="text-2xl w-fit h-fit text-text-light focus:outline-none"
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
        className={`fixed top-0 right-0 z-80 h-full  w-3/4 max-w-xs bg-primary/10 backdrop-blur-2xl backdrop-filter
           border border-white text-text-light shadow-lg transform transition-transform duration-300 ease-in-out ${
             open ? "translate-x-0" : "translate-x-full"
           }`}
      >
        <div className=" flex flex-col h-fit  p-6 space-y-5">
          {navItemList.map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.path}>
                <div className="flex focus:text-amber-400 font-cta font-medium rounded-2xl gap-5 transition-all duration-200  flex-row items-center">
                  <Icon size={size} strokeWidth={strokeWidth} />
                  <button key={item.path} onClick={() => setOpen(false)}>
                    {item.name}
                  </button>
                </div>
              </Link>
            );
          })}
          <div className="flex focus:text-amber-400 font-cta font-medium rounded-2xl gap-5 transition-all duration-200  flex-row items-center">
            <UserCog size={size} strokeWidth={strokeWidth} />
            <button onClick={() => setOpen(false)}>Profile & Settings</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
