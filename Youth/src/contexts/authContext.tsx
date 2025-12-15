import { createContext, useState } from "react";
import type { UserRoleContextType, ChildrenProps } from "../types";

export const UserRoleContext = createContext<UserRoleContextType>({
  userRole: "guest",
  setUserRole: () => {},
});

export function UserRoleProvider({ children }: ChildrenProps) {
  const [userRole, setUserRole] = useState("guest");
  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}
