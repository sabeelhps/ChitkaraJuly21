import React,{useState} from "react";

const Form = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [favColor, setFavColor] = useState('');


    // const nameChangeHandler = (event) => {
    //     setName(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value);
    // }

    // const colorChangeHandler = (event) => {
    //     setFavColor(event.target.value);
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        

        // const newPersons = [...persons];
        // newPersons.push({ name, age, favColor });

        // Better way of manipulating state
        // setPersons((prevState) => {
        //     return [...prevState, { name, age, favColor }];
        // });
   
        // setPersons([...persons, { name, age, favColor }]);



        // ======================================

        props.add({ name, age, favColor });

    }

    

    return  <form onSubmit={formSubmitHandler}>
    <div>
        <label htmlFor="name">Name : </label>
        <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor="age">Age : </label>
        <input
            type="number"
            id="age"
            placeholder="Age"
            onChange={(e)=>setAge(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor="color">Fav Color : </label>
        <input
            type="text"
            id="color"
            placeholder="Fav Color"
            onChange={(e)=>setFavColor(e.target.value)}
        />
    </div>
    <button type="submit">Submit</button>
</form>


}

export default Form;