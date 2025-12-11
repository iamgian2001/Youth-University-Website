import { createContext, useState, useContext } from "react";
import type { UserRoleContextType, Props } from "../types";

export const UserRoleContext = createContext<UserRoleContextType>({
  userRole: "guest",
  setUserRole: () => {},
});

export function UserRoleProvider({ children }: Props) {
  const [userRole, setUserRole] = useState("guest");
  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}
