import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop}>
      
    </div>
  );
};

const Overlay=(props)=>{
    return <Card className={classes.modal}>
           <header>
        <h2>{props.name}</h2>
      </header>
      <div>
        <p>TOTAL AMOUNT 
        </p>
            <div>{props.price}</div>
      </div>
      <footer>
        <button>close</button>
        <button>order</button>
      </footer>
        
    </Card>
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop/>,
        document.getElementById("portal")
      )}

      {ReactDOM.createPortal(<Overlay name={props.name} price={props.price}/>,document.getElementById("overlay"))}
    </React.Fragment>
  );
};

export default Modal;
