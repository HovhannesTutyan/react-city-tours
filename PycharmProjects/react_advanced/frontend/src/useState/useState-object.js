import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState ({
        name: 'peter',
        age: 24,
        message: 'random message',
    });
    const changeMessage = () => {
        setPerson({...person, message : "hello world"}) // leave the value of person and override only the message
    }
    return (
        <React.Fragment>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.message}</div>
            <button className="btn" onClick={changeMessage}> change message </button>
        </React.Fragment>
        );
};

export default UseStateObject;