import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

   const context =useContext(CartContext)

   const totalAmount=`$${context.totalamount.toFixed(2)}`

   const hasItems=context.items.length>0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {context.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;