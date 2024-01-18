import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import   '../CSS/Navv.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Action'
import logo from '../img/download.png'

const Navv = () => {

  let dispatch = useDispatch()
  let data=useSelector((store)=>store.user)
  console.log(data.UserData.usename)
  return (
    <div id='nav'>
        <NavLink><img src={logo} alt="" /></NavLink>
        <NavLink className='link navlink' to="/">HOME</NavLink>
        <Link className='link navlink' to="/Product">PRODUCT</Link>
        <Link className='link navlink' to="/Cart">CART</Link>
        {data.isLogin ? <span className='link navlink'>{data.UserData.username}</span> : <Link className='link navlink' to="/Signup">SIGNUP</Link>}
        {data.isLogin ? <span className='link navlink' onClick={()=>dispatch(logout())}>LOGOUT</span> : <Link className='link navlink' to="/Login">LOGIN</Link>}
        
        
    </div>
  )
}

export default Navv