import CartContext from "./CartContext";


const CartProvider=(props)=>{

    const addItemHandler=(item)=>{}

    const removeItemHandler=(id)=>{

    }


    const cartContext={
        items:[],
        totalamount: 0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

  return  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;