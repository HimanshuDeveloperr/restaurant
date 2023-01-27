import React from "react";
import Classes from "./HeaderCartButton.module.css"
import classes from "./Header.module.css"

const Header=()=>{

    return (
          <header className={classes.header}>
            <h1>
                React Meals
            </h1>
            <nav>

            </nav>
            <button className={Classes.button}>0</button>
          </header>
    )
}

export default Header;