import React,{useContext} from 'react'
import CartContext from '../store/cart-context'
import styles from './MyCart.module.css';


const MyCart = () => {

    const cartCtx = useContext(CartContext);
    const cart = cartCtx.cart

    let totalCartPrice = 0;

    if (cart.length === 1) {
        totalCartPrice = cart[0].price * cart[0].qty;
    }
    else if (cart.length>1) {
        totalCartPrice = cart.reduce((prev, curr) => prev.price* parseInt(prev.qty) + curr.price* parseInt(curr.qty) );
    }

    const placeOrderHandler = () => {
        console.log('clicked');
        cartCtx.placeOrder();
    }
    

    return (
        <ul className={styles.cart}>
            <li>My Cart</li>
            {
                cart.map((item,idx) => {

                   return <li key={idx}>
                        <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                        <p className={styles['item-desc']}>{ item.desc}</p>
                        <p className={styles['item-price']}>$ {item.price}</p>
                       <button onClick={()=>cartCtx.decrementItem(item.id) }>-</button>
                        <button onClick={()=>cartCtx.incrementItem(item.id)}>+</button>
                    </li>
                })
            }
            <li>Total: { totalCartPrice} <span className={styles['place-order-btn']}><button onClick={placeOrderHandler}>Place Order</button></span> </li>
        </ul>
    )
}

export default MyCart
