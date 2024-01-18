import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletcart, getcart } from '../Redux/Action'

const Cart = () => {
  let dispatch = useDispatch()
  let {cart}= useSelector((store=>store.product))
  console.log(cart);

  useEffect(()=>{
    dispatch(getcart())
  },[])

  const handledlet =(id)=>{
    dispatch(deletcart(id))
  }
  return (
    <div>
      {
        cart.map((ele)=>{
          return(
            <>
            <p>{ele.title}</p>
            <img src={ele.img} alt="" />
            <button onClick={()=>handledlet(ele.id)}>Delet</button>
            </>
          )
        })
      }
    </div>
  )
}

export default Cart