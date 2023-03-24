import React from "react";
import classes from './Button.module.css'
const Button =(props)=>{
    return(
        <button
        type={'botton' || props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className={`${classes.button} ${props.className}`}
        >
            {props.children}
        </button>
    )
}
export default Button;