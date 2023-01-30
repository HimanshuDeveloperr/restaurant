import { useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState={
  items:[]
  ,totalamount:0
}
// initial state

const CartReducer=(state,action)=>{
  return defaultCartState
}

const CartProvider=(props)=>{

  const[CartState,DispatchCartFN]=useReducer(CartReducer,defaultCartState)
    const addItemHandler=(item)=>{
      DispatchCartFN({
        type:"ADD"
      })
    }

    const removeItemHandler=(id)=>{

    }


    const cartContext={
        items:CartState.items,
        totalamount: CartState.totalamount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

  return  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;