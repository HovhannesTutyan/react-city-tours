import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)
    useEffect(() => { // By default useEffect will run after every render
        console.log("Call useEffect");
        if (value >=  1){
            document.title = `New Messages ( ${value} )`;
        }
    },[]); // if we want useEffect run only at initial render. Otherwise remove the [ ] after }.
    console.log('render component')
    return (
        <>
            <h2> {value} </h2>
            <button className="btn" onClick={() => setValue(value + 1)}> Click me </button>
        </>
    )
};

export default UseEffectBasics

