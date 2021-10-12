import React,{useState} from 'react'
import Person from './Person'
import Form from './Form';


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

    const addPerson = (person) => {
        setPersons((prevState) => {
            return [...prevState, person];
        })
    }

   
    
    return (
        <div>
            <Form add={ addPerson}/>
            {personsList}
        </div>

    )
}

export default PersonList;
