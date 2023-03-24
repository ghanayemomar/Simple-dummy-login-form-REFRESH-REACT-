import React from "react";
import Card from "../ui/Card/Card";
import classes from "./Home.module.css";
import Button from "../ui/Button/Button";
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};
export default Home;
