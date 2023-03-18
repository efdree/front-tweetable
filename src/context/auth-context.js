import { createContext, useContext } from "react";
import { useState } from "react";
import { tokenKey } from "../config";
import * as auth from "./../services/auth-service";
import { createUser } from "./../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  function logout() {
    sessionStorage.removeItem(tokenKey);
    setUser(null);
  }
  function signup(userData) {
    createUser(userData)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
