import {
  House,
  Book,
  LibraryBig,
  MailQuestionMark,
  UserCog,
} from "lucide-react";

import { Link } from "react-router";
import React from "react";

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
  const size = 18;
  const strokeWidth = 1.25;

  return (
    <ul className="nav-list flex flex-col h-full items-start">
      <div className="w-full flex flex-col space-y-2.5">
        {navItemList.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.path} to={item.path}>
              <div className="flex flex-row items-center space-x-1.5">
                <Icon size={size} strokeWidth={strokeWidth} />
                <li>{item.name}</li>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="w-full">
        <div className="flex flex-row items-center space-x-1.5 hover:text-slate-100">
          <UserCog size={size} strokeWidth={strokeWidth} />
          <li>Profile & Settings</li>
        </div>
      </div>
    </ul>
  );
}
