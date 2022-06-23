import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const HomePage = () => {

   const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://127.0.0.1:8000/api/user/", {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    });
    return (
        <div>
            < Header />
            <p> { name ? "Hi " + name : 'You are not logged in'} </p>
        </div>
    )
}

export default HomePage