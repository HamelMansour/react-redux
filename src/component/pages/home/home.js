import './home.css'
import React from 'react';
import { Router, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { incrementerCounter } from '../../../store/store';

const Home = () => {
    const dispatch = useDispatch ();
    const counter= useSelector((state)=>state.counter.counter)
    const increment = useCallback((counter)=> dispatch(incrementerCounter(counter)), [dispatch]);

    const router = useHistory();
    return (
        <div>
            <h1>Home</h1>
            <h2 onClick={()=>router.push('login')}>GO TO LOGIN</h2>
            <h2>cpt:{counter} </h2>
            <h2 onClick={() => increment(counter + 1)}>Incrementer</h2>
        </div>
    )
}

export default Home;