import React from "react";
import Card from "../ui/Card/Card";
import classes from "./Home.module.css";
import Button from "../ui/Button/Button";
import { useContext } from "react";
import AuthContext from "../Store/Auth-context";
const Home = (props) => {
    const ctx=useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};
export default Home;
