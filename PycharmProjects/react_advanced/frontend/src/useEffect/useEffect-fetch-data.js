import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users); // setUsers is here because useEffect is called only once.
    };
    useEffect(()=>{ ////////  useEffect can not be async. IMPORTANT It preserves the value and triggers rerender. //////
        getUsers();
    }, [])

    return (
        <>
            <h3> github users </h3>
            <ul className="users">
                {users.map((user)=>{
                    const {id, login, avatar_url, html_url } = user
                    return <li key={id}>
                                <img src={avatar_url}/>
                                <div>
                                    <h4>{login}</h4>
                                    <a href={html_url}> profile </a>
                                </div>
                            </li>
                })}
            </ul>
        </>
    );
};

export default UseEffectSecondArgument;
