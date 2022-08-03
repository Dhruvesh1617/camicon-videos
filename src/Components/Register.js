import React from 'react'
import { useReducer } from 'react';
import { useNavigate} from 'react-router';
import {useLocation} from "react-router-dom"
import { useData } from '../Context/DataContext';
const registerReducer=(state,action)=>
{
        switch(action.type)
        {
            case "USERNAME":
                return {...state,username:action.payload}
            case "EMAIL":
                return {...state,email:action.payload}
            case "PASSWORD":
                return {...state,password:action.payload}
            case "CLEAR":
                return {...state,username:"",email:"",password:""}
            default:
                return state;
        }
}

export default function Register() {
    const [{username,email,password}, dispatch] = useReducer(registerReducer,{username:"",email:"",password:""})
    const {registerUser}=useData()
    const navigate=useNavigate()
    const {state}=useLocation()
    return (
        <>
          <div className='cred-card credentials-page '>
            <h2>Register</h2>
            <input  className="credential_elements" type="text" placeholder='username'
            onChange={(e)=>dispatch({type:"USERNAME",payload:e.target.value})}
            ></input>
            <input  className="credential_elements" type="email" placeholder='email'
            onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})}
            ></input>
            <input className='credential_elements' type="password" placeholder='password'
             onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}
            ></input>
            <button className='btn btn_color'
            onClick={(e)=>{
                registerUser(username,email,password,navigate,state)
                e.preventDefault()
            }}
            >Register</button>
        </div>  
        </>
    )
}

