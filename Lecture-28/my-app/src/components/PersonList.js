import React,{useState} from 'react'
import Person from './Person'

const PersonList = ()=> {
    
    const [persons,setPersons] = useState([
        {
            name: 'Max',
            age: 25,
            favColor: 'Blue'
        },
        {
            name: 'Kartik',
            age: 24,
            favColor: 'lightgreen'
        },
        {
            name: 'Sabeel',
            age: 22,
            favColor: 'SkyBlue'
        },
        {
            name: 'Rahul',
            age: 21,
            favColor: 'Purple'
        }
    ]);

    const personsList = persons.map((person,idx) => {
        

        return <Person
            name={person.name}
            age={person.age}
            favColor={person.favColor}
            key={idx}
        />
            
    });

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
        setPersons((prevState) => {
            return [...prevState, { name, age, favColor }];
        });
   
        // setPersons([...persons, { name, age, favColor }]);
    }

    
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
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
            

           {personsList}
        </div>
    )
}

export default PersonList;
