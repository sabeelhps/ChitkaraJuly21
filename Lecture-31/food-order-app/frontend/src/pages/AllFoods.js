import React,{useState,Fragment,useEffect} from 'react'
import FoodList from '../components/foods/FoodList'
import MealsPosterImage from '../assets/meals.jpg';
import styles from './AllFoods.module.css';
import axios from 'axios';

const AllFoods = () => {


    const [foods,setFoods] = useState([]);

    useEffect(() => {
        
        async function getFoods() {
            
            try {
                const res = await axios.get('https://practical-dijkstra-8bb15f.netlify.app/allfoods');
                // console.log(res);
                setFoods(res.data);
            }
            catch (e) {
                console.log(e.message);
            }
        }

        getFoods();

    },[])



    return (
        <Fragment>
            <section className={styles.poster}>
                <img src={ MealsPosterImage} alt="table full of meals"/>
            </section>
            <FoodList foods={foods} />
        </Fragment>
    )
}

export default AllFoods
