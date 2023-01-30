import React ,{useContext}from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton=(props)=>{

    const context=useContext(CartContext);

    const numberOfItems=context.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    // reduce is a built in method that helps to convert array of datainto single value

    return <button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfItems}
        </span>

    </button>
}

export default HeaderCartButton;