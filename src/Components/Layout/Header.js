import React from "react";

import classes from "./Header.module.css"
import images from"../../Assests/meals.jpg"

const Header=(props)=>{

    return (
        <React.Fragment>

          <header className={classes.header}>
            <h1>Meals</h1>
            <button>Cart</button>
          </header>
          <div className={classes["main-image"]}>
            {/* cause we use dash in there we cant use classes. but could be written as above expression for stylingthe dic */}
          <img src={images} alt="free to order anything"/>
          </div>
        </React.Fragment>
    )
}

export default Header;