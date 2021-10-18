import React from 'react'
import { NavLink } from 'react-router-dom'
import CartButton from '../UI/CartButton'
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink exact to="/allfoods">React Foods</NavLink></li>
                <li><NavLink exact to="/my-cart"><CartButton/></NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNavigation
