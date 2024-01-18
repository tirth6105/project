
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../Redux/Action'
import '../CSS/pages.css'



const Signup = () => {

      let [username,setUsername]=useState("")
      let [email,setEmail]=useState("")
      let [password,setPassword]=useState("")

      let dispatch = useDispatch()
      const handlesignup = async(userdata)=>{
// console.log(userdata);
        let user = await axios.post('http://localhost:8090/user',userdata)
        console.log(user)
        dispatch(signup(user.data))
      }

      const handlesubmit=(e)=>{
        e.preventDefault();
        let user ={
          username: username,
          email: email,
          password: password
        }
        handlesignup(user);
        alert("Signup successful")
      }

  return (
    <div>
      <container>
        <section>
              <div className='sign-banner-section'>
                <h1 className='text-center text-white py-5'>SIGNUP</h1>
              </div>
            <div className='pt-5'>
            <form onSubmit={handlesubmit} className='text-center'>
            <h1 className=''>SIGNUP</h1>
            <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} /><br/><br/>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
            <input type="submit"  />
            </form>
            </div>
        </section>
      </container>

    </div>
  )
}

export default Signup