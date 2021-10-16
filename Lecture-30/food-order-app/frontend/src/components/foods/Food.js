import React from 'react'
import styles from './Food.module.css';

const Food = (props) => {
    return (
        <li className={styles.food}>
            <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.desc}>{props.desc}</p>
                <p className={styles.price}>${ props.price}</p>
            </div>
        </li>
    )
}

export default Food
