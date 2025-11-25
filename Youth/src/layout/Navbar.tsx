import {
  House,
  Book,
  LibraryBig,
  MailQuestionMark,
  UserCog,
} from "lucide-react";

import { Link } from "react-router";
import React, { useState } from "react";

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

const navItemList: NavItem[] = [
  { name: "Home", icon: House, path: "/dashboard" },
  { name: "My courses", icon: Book, path: "/courses" },
  { name: "Resources", icon: LibraryBig, path: "/resources" },
  { name: "Student Support", icon: MailQuestionMark, path: "/studentsupport" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const activeStyle =
    "bg-gradient-to-r from-amber-300 to-yellow-50 text-primary";
  const size = 18;
  const strokeWidth = 1.25;

  return (
    <div className=" nav-list h-full w-fit py-10  flex flex-col">
      {/* TOP NAV */}
      <ul className="flex flex-col space-y-3">
        {navItemList.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <Link to={item.path}>
                <div
                  className={`flex flex-row  w-full px-6 py-0.5  items-center space-x-2 ${
                    active === item.name ? activeStyle : ""
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <Icon size={size} strokeWidth={strokeWidth} />
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* BOTTOM NAV */}
      <div className="mt-5">
        <Link to="/profile">
          <div
            className={`flex flex-row  w-full px-6 py-0.5  items-center space-x-2 ${
              active === "Profile & Settings" ? activeStyle : ""
            }`}
            onClick={() => setActive("Profile & Settings")}
          >
            <UserCog size={size} strokeWidth={strokeWidth} />
            <span>Profile & Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
