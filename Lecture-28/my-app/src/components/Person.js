import React,{useState} from "react";
import './Person.css';

const Person = (props) => {
    
    // props.name = 'Anonymous'; ---> Props are immutable in react

    const [name,setName] = useState(props.name);


    const nameChangeHandler = (event) => {
        setName('Anonymous');
    }


    return (
        <article className="person">
            <h2>Name : { name }</h2>
            <h5>Age : { props.age}</h5>
            <p>My Fav Color is : {props.favColor} </p>
            <button onClick={nameChangeHandler}>Change Name</button>
        </article>)

}


export default Person;