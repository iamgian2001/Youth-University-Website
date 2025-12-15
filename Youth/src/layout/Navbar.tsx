import {
  House,
  Book,
  LibraryBig,
  MailQuestionMark,
  UserCog,
} from "lucide-react";

import { Link, useLocation } from "react-router";
import { useState, useContext } from "react";
import { UserRoleContext } from "../contexts/authContext";

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

// NAV ITEMS ----------------------------
const studentNav: NavItem[] = [
  { name: "Home", icon: House, path: "/dashboard" },
  { name: "My courses", icon: Book, path: "/courses" },
  { name: "Resources", icon: LibraryBig, path: "/resources" },
  { name: "Student Support", icon: MailQuestionMark, path: "/student-support" },
];

const adminNav: NavItem[] = [
  { name: "Accounts", icon: House, path: "/accounts-admin" },
  { name: "Modules", icon: Book, path: "/modules-admin" },
];

export default function Navbar() {
  const { userRole, setUserRole } = useContext(UserRoleContext);
  setUserRole("admin");
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  const size = 18;
  const strokeWidth = 1.25;

  const navList = userRole === "admin" ? adminNav : studentNav;

  const activeStyle =
    "bg-gradient-to-r from-amber-300 to-yellow-50 text-primary";

  return (
    <div className="nav-list h-full w-fit py-7 flex flex-col">
      {/* TOP NAV */}
      <ul className="flex flex-col space-y-3">
        {navList.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <Link to={item.path}>
                <div
                  className={`flex w-full px-6 py-1 items-center space-x-2  cursor-pointer
                    ${active === item.path ? activeStyle : ""}`}
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
            className={`flex w-full px-6 py-1 items-center space-x-2 rounded-lg cursor-pointer
              ${active === "/profile" ? activeStyle : ""}`}
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
