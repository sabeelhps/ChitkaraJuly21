import React from "react";
import './Person.css';

const Person = (props) => {
    
    // props.name = 'Anonymous'; ---> Props are immutable in react

    return <article className="person">
                <h2>Name : { props.name }</h2>
                <h5>Age : { props.age}</h5>
                <p>My Fav Color is : {props.favColor} </p>
            </article>

}


export default Person;