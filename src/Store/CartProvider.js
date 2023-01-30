import { useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState={
  items:[]
  ,totalamount:0
}
                 // initial state

const CartReducer=(state,action)=>{
  if(action.type==="ADD"){
      const updatedItems=state.items.concat(action.item)//it returns a new array with updated items into previous array
  }
  return defaultCartState
}

const CartProvider=(props)=>{

  const[CartState,DispatchCartFN]=useReducer(CartReducer,defaultCartState)
    const addItemHandler=(item)=>{
      DispatchCartFN({
        type:"ADD"
        ,item:item
      })
    }

    const removeItemHandler=(id)=>{

      DispatchCartFN({
        type:"REMOVE",
        id:id
      })

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