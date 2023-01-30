import { Fragment,useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";



function App() {

  const[cart,SetCart]=useState(false)
 
  const shown=()=>{
    SetCart(true)
  }

  const hide=()=>{
    SetCart(false)
  }
  return (
  <Fragment>
    {cart && <Cart onClose={hide}/>}
    <Header onShow={shown}/>
    <main>
      <Meals/>
    </main>

    
  
  </Fragment>
    
  );
}

export default App;
