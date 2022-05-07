import React, {useState} from 'react'

const UseStateBasics = () => {
    const [text, setText] = useState('random title') // useState hook must be in the product body. Component must be uppercase.

    const handleClick = () =>{
        if(text === 'random title'){
            setText('hello world')
        } else {
            setText('random title')
        }

    }
    return (
    <React.Fragment>
        <h1>{text}</h1>
        <button className="btn" onClick={ handleClick }> change title</button>
    </React.Fragment>
    );
};

export default UseStateBasics