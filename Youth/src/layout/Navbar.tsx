import {
  House,
  Book,
  LibraryBig,
  MailQuestionMark,
  UserCog,
} from "lucide-react";

import { Link, useLocation } from "react-router";
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
  { name: "Student Support", icon: MailQuestionMark, path: "/student-support" },
];

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  const [active, setActive] = useState(location.pathname);
  const activeStyle =
    "bg-gradient-to-r from-amber-300 to-yellow-50 text-primary";
  const size = 18;
  const strokeWidth = 1.25;

  return (
    <div className=" nav-list h-full w-fit py-7  flex flex-col">
      {/* TOP NAV */}
      <ul className="flex flex-col space-y-3">
        {navItemList.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <Link to={item.path}>
                <div
                  className={`flex flex-row  w-full px-6 py-0.5  items-center space-x-2 ${
                    active === item.path ? activeStyle : ""
                  }`}
                  onClick={() => setActive(item.path)}
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
      <ul className="mt-5">
        <Link to="/profile">
          <li
            className={`flex flex-row  w-full px-6 py-0.5  items-center space-x-2 ${
              active === "/profile" ? activeStyle : ""
            }`}
            onClick={() => setActive("/profile")}
          >
            <UserCog size={size} strokeWidth={strokeWidth} />
            <span>Profile & Settings</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
