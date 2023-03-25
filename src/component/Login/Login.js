import React, { useState, useEffect, useReducer } from "react";
import Card from "../ui/Card/Card";
import classes from "./Login.module.css";
import Button from "../ui/Button/Button";
import { useContext } from "react";
import AuthContext from "../Store/Auth-context";
import Input from "../ui/Input/Input";
import { validate } from './../../../node_modules/workbox-build/node_modules/ajv/dist/standalone/index';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};



const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};



const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isvalid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isvalid: null,
  });
  const ctx = useContext(AuthContext);

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };
  const emailIsValid = emailState.isValid;
  const passwordIsValid = passwordState.isValid;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" 
        label="E-mail"
        type="text"
        isValid={emailIsValid}
        value={emailState.value}
        onBlur={validateEmailHandler}
        onChange={emailChangeHandler}
        />
        <Input id="password" 
        label="E-Password"
        type="password"
        isValid={passwordIsValid}
        value={passwordState.value}
        onBlur={validatePasswordHandler}
        onChange={passwordChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
