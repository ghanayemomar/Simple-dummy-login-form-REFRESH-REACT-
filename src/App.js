import React from "react";
import { useContext } from "react";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import MainHeader from "./component/MainHeader/MainHeader";
import AuthContext from "./component/Store/Auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
};
export default App;
