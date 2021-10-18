import React from 'react'
import Food from './Food'
import styles from './FoodList.module.css';


const FoodList = ({foods}) => {
    return (
        <ul className={styles['food-list']}>
            {
                foods.map((food) => {
                    
                    return <Food
                        id={food._id}
                        key = { food._id }
                        name = { food.name }
                        price={food.price}
                        desc={food.desc}
                    />
                })
            }
        </ul>
    )
}

export default FoodList
