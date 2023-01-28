import React from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css"
const MealItemForm=()=>{
    return <form className={classes.form}>
       <Input label="Amount" type="number"/>
        <button>+Add</button>
    </form>
}

export default MealItemForm