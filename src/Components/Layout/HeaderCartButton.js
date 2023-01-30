import React ,{useContext, useEffect, useState}from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton=(props)=>{

    const[btnhigh,setbtnhigh]=useState(false)
    const context=useContext(CartContext);

    const numberOfItems=context.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    // reduce is a built in method that helps to convert array of datainto single value

      const animation =`${classes.button} ${btnhigh ? classes.bump : ""}`
const{items}=context;
     useEffect(()=>{
        if(items.length===0){
            return
        }
        setbtnhigh(true)
       const timer= setTimeout(() => {
            setbtnhigh(false);
          }, 300);
          return ()=>{
            clearTimeout(timer)
          }
     },[items])

    return <button className={animation} onClick={props.onShow}>
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