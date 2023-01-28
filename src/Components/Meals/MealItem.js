import React from 'react';
import classes from "./MealItem.module.css"

const MealItem=(props)=>{

    return (
       props.items.map((meal)=>{
            return(
                  <section className={classes.meal}>

              <li>
               <h3 className={classes.meal}>{meal.name}</h3>
               <div className={classes.description}>{meal.description}</div>
               <div className={classes.price}> ${meal.price}</div>
     
              </li>
                  </section>
            )
         })
    )
}

export default MealItem;