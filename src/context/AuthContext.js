import { useState, useContext, createContext } from "react";
import { singin, singup } from "../api";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const formSignup = async (formData) => {
    const { data } = await singup(formData);

    setUser(data);
  };

  const formSignin = async (formData) => {
    const { data } = await singin(formData);

    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, formSignin, formSignup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
