import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"
const MealItemForm=()=>{

  const amountInputRef =useRef()

    const submitHandler=(event)=>{
        event.preventDefault()
        const enteredAmount=amountInputRef.current.value//it will always give us a string value to convert it into a number
        const enteredAmountNum=+enteredAmount

        if(enteredAmount.trim().length===0 || enteredAmountNum<1 || enteredAmountNum>5){
             return
        }
    }


    return <form className={classes.form} onSubmit={submitHandler}>
       <Input ref={amountInputRef} label="Amount" input={{
        id:"amount",
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:"1"

       }} />
        <button>+Add</button>
    </form>
}

export default MealItemForm