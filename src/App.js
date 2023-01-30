import {useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";



function App() {

  const[cart,SetCart]=useState(false)
 
  const shown=()=>{
    SetCart(true)
  }

  const hide=()=>{
    SetCart(false)
  }
  return (
  <CartProvider>
    {cart && <Cart onClose={hide}/>}
    <Header onShow={shown}/>
    <main>
      <Meals/>
    </main>

    
  
  </CartProvider>
    
  );
}

export default App;
