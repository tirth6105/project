import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Login = () => {

    let [email,setEmail] =useState("");
    let [password,setPassword] =useState("");
    let dispatch = useDispatch()

    const handlelogin =async (email,password) => {
      let user =  await axios.get(`http://localhost:8090/user?email=${email}&password=${password}`);

      dispatch(Login(...user.data));
    }

    const handlesubmit = (e) =>{
      e.preventDefault()
      
      handlelogin(email,password);
      alert("Login successful!");
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" value='login' />
      </form>
    </div>
  )
}

export default Login