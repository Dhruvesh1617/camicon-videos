import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useReducer} from "react";
import {useData} from "../Context/DataContext"
const loginReducer=(state,action)=>
{
    switch(action.type)
    {
        case "EMAIL":
            return {...state,email:action.payload}
        case "PASSWORD":
            return {...state,password:action.payload}
        default:
            return state;
    }

}

function Login() {
    const [{email,password}, dispatch] = useReducer(loginReducer,{email:"",password:""})
    const {loginUser,isAuthenticated,logOutUser}=useData();
    const {state}=useLocation();
    //console.log("state",state.from)
    const navigate=useNavigate();
    return (
        <>
            {isAuthenticated?
            (
                <div style={{display:"flex",justifyContent:"center"}}>
                    <button className='btn btn_logout-color' onClick={logOutUser}>Logout</button>
                </div>
            
            )
            :(<div className='cred-card credentials-page '>
            <h2>Login</h2>
            <input onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})} 
             className="credential_elements" type="email" placeholder='email'></input>
            <input onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}
            className='credential_elements' type="password" placeholder='password'></input>
            <button  onClick={(e)=>{
                loginUser(email,password,state,navigate)
                e.preventDefault()
                }}
            className='btn btn_color'>Login</button>
            Not Registered yet? Register here<Link to="/register" className='links'><button className='btn btn_color'>Register here</button></Link>
        </div>)}
        </>
    )
}

export default Login
