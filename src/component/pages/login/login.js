import './login.css'
import React from "react";
import { useHistory } from 'react-router';

const Login = () => {
    const router= useHistory()

    return (
        <div>
            <h1>Page login</h1>
            <h2 onClick={()=>router.push('home')}>GO TO Home</h2>
        </div>
    )
}
export default Login;