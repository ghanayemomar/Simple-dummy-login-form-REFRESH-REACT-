import React from "react";
import Card from "../ui/Card/Card";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome</h1>
    </Card>
  );
};
export default Home;
