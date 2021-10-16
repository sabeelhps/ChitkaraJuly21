import React from 'react'
import styles from './CartButton.module.css';
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {
    return (
        <button className={styles['cart-btn']}>
            <span className={styles.text}><FaShoppingCart className={styles['cart-icon']} /> Your Cart</span>
            <span className={styles.badge}>9</span>
        </button>
    )
}

export default CartButton
