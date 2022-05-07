import React, { useState } from 'react';
import { data } from '../data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data)
//    const removeItem = (id) => {
//        let newPeople = people.filter((person) => person.id !== id)
//        setPeople(newPeople)
//    }
//                                 OR
    const removeItem = (id) => {
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => person.id !== id);
            return newPeople;
        });
    };
    return (
        <React.Fragment>
            { people.map((person) => {
                const {id, name} = person;
                return (
                           <div key={ id } className="item">
                               <h4> { name } </h4>
                               <button onClick = {()=> removeItem(id)}> Remove </button>
                           </div>
                        );
            }) }

        </React.Fragment>
        );
};

export default UseStateArray;