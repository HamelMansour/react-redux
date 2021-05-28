import './home.css'
import React from 'react';
import { Router, useHistory } from 'react-router';

const Home = () => {
    const router = useHistory()

    return (
        <div>
            <h1>Home</h1>
            <h2 onClick={()=>router.push('login')}>GO TO LOGIN</h2>
        </div>
    )
}

export default Home;