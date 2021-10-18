import React,{useContext,useRef} from 'react'
import styles from './Food.module.css';
import CartContext from '../../store/cart-context';

const Food = (props) => {

    const cartCtx = useContext(CartContext);

    const inputQtyRef = useRef();
   

    const addToCart = () => {

        cartCtx.addItemHandler({
            id: props.id,
            name: props.name,
            desc: props.desc,
            price: props.price,
            qty:inputQtyRef.current.value
       })

    }

    return (
        <li className={styles.food}>
            <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.desc}>{props.desc}</p>
                <p className={styles.price}>${ props.price}</p>
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    ref={inputQtyRef}
                />
                <button onClick={addToCart} className={styles['add-btn']}>+ Add</button>
            </div>
        </li>
    )
}

export default Food
