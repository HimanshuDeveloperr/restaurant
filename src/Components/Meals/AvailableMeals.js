import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const AvailableMeals=()=>{

    // const MealsLists=DUMMY_MEALS.map((meal)=>{
    //    return(

    //      <li className={cLASSES.meal}>
    //       <h3 className={cLASSES.meal}>{meal.name}</h3>
    //       <div className={cLASSES.description}>{meal.description}</div>
    //       <div className={cLASSES.price}>{meal.price}</div>

    //      </li>
    //    )
    // })
    
    
    
    return <section className={classes.meals}>
        <ul>  
            <MealItem items={DUMMY_MEALS}/>
        </ul>
    </section>
}

export default AvailableMeals;