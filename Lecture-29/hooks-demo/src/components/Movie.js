import {useState,useEffect} from 'react'
import axios from 'axios';

const Movie = () => {

    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');



    const updateNumber = (e) => {
        setNumber(e.target.value);
    }

    // SYNTAX
    // useEffect(() => {
    //     call back function
    // },[dependency array])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.tvmaze.com/shows/${number}`);
            console.log(res.data.image.medium);
            setMovie(res.data.image.medium);
        }
        fetchData();
    }, [number])
    
    useEffect(() => {
        console.log("I will run only 1 time after first render only!!!");
    },[])

    return (
        <div>
            <img src={movie} alt="show" />
            <select value={number} onChange={updateNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
        </div>
    )
}

export default Movie
