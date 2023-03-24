import React from "react";
import { useState, useEffect } from "react";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import MainHeader from "./component/MainHeader/MainHeader";
import AuthContext from "./component/Store/Auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHanlder = () => {
    localStorage.removeItem("isLoggedIn", "1");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHanlder
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHanlder} />}
      </main>
    </AuthContext.Provider>
  );
};
export default App;
