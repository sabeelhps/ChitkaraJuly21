import React from 'react'
import Person from './Person'

const PersonList = ()=> {
    
    const persons = [
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
    ];

    const personsList = persons.map((person,idx) => {
        

        return <Person
            name={person.name}
            age={person.age}
            favColor={person.favColor}
            key={idx}
        />
            
    });

    
    return (
        <div>
           {personsList}
        </div>
    )
}

export default PersonList;
