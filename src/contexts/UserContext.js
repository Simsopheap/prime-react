import { createContext, useEffect, useState } from "react";
import { AppProps } from "../commom/AppProps";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem(AppProps.CURRENT_USER);
    console.log(`*User`, user)
    if (user && user.length) {
      const result = JSON.parse(user);
      setUser(result);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;