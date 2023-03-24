import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { tokenKey } from "../config";
import * as auth from "./../services/auth-service";
import { getUser, createUser } from "./../services/users-service";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  console.log(user)
  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }
  function logout() {
    sessionStorage.removeItem(tokenKey);
    sessionStorage.removeItem("user-auth");
    setUser(null);
  }
  function signup(userData) {
    createUser(userData)
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
    const credentials = {
        email: userData.email,
        password: userData.password,
      } 
    login(credentials);
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

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
