import React from "react";
import { useState, useEffect } from "react";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import MainHeader from "./component/MainHeader/MainHeader";

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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHanlder} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHanlder} />}
      </main>
    </React.Fragment>
  );
};
export default App;
