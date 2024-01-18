import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../CSS/pages.css'
import { googleauth } from '../Config';

const Login = () => {

    let [email,setEmail] =useState("");
    let [password,setPassword] =useState("");
    let dispatch = useDispatch()

    const handlelogin =async (email,password) => {
      // let user =  await axios.get(`http://localhost:8090/user?email=${email}&password=${password}`);

      // dispatch(Login(...user.data));
    }

    const handlesubmit = (e) =>{
      e.preventDefault()
      
      handlelogin(email,password);

      if(email.length > 0 && password.length > 0){


        alert("Login successful!");
      }
    }

    const handlegoogleauth =()=>{
      googleauth().then((response)=>{
        console.log(response);
      })
    }

  return (
    <div>
      <container>
        <section>
          <div className='log-banner-section'>
          <h1 className='text-center text-white py-5'>LOGIN</h1>

          </div>
          <div className='pt-5'>
            <h1 className='text-center'>LOGIN</h1>
          <form onSubmit={handlesubmit} className='text-center'>
        <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
        <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
        <input type="submit" value='login' />
          </form>
        <button onClick={handlegoogleauth}>Login with Google</button>
          </div>
        </section>
      </container>
    </div>
  )
}

export default Login