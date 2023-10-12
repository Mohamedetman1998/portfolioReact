import { createContext, useState } from "react";

const user = { name: "Mohamed" };
export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "mohamed",
    email: "MoAly@gmail.com",
  });
  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};
