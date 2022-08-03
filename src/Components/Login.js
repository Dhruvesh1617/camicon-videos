import React from 'react';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className='cred-card credentials-page '>
            <h2>Login</h2>
            <input  className="credential_elements" type="email" placeholder='email'></input>
            <input className='credential_elements' type="password" placeholder='password'></input>
            <button className='btn btn_color'>Login</button>
            Not Registered yet? Register here<Link to="/users/register"><button className='btn btn_color'>Register here</button></Link>
        </div>
    )
}

export default Login
