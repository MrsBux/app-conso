import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token =
      localStorage.getItem("tokenUser") || localStorage.getItem("token");
    const type = localStorage.getItem("type");
    const id = localStorage.getItem("userId");
    const tokenExpiry =
      localStorage.getItem("tokenExpiry") ||
      localStorage.getItem("tokenUserExpiry");

    if (
      token &&
      type &&
      tokenExpiry &&
      new Date().getTime() < parseInt(tokenExpiry)
    ) {
      setIsLoggedIn(true);
      setUserType(type);
      setUserId(id);
    } else {
      // Clear all auth-related items if the token is expired
      localStorage.removeItem("tokenUser");
      localStorage.removeItem("token");
      localStorage.removeItem("tokenUserExpiry");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("userId");
      localStorage.removeItem("type");
    }
  }, []);

  const login = (type, id, token, expiryTime) => {
    setIsLoggedIn(true);
    setUserType(type);
    setUserId(id);
    localStorage.setItem(type === "user" ? "tokenUser" : "token", token);
    localStorage.setItem(
      type === "user" ? "tokenUserExpiry" : "tokenExpiry",
      expiryTime.toString()
    );
    localStorage.setItem("type", type);
    localStorage.setItem("userId", id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUserId(null);
    localStorage.removeItem("tokenUser");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenUserExpiry");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("userId");
    localStorage.removeItem("type");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userId, userType, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
