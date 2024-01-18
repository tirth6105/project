import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addcart, singleproduct } from '../Redux/Action'

const SinglePage = () => {

    let {id} = useParams()
    let dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(singleproduct(id));
    },[])
    
    let {singleProduct} = useSelector(store=>(store.product))
    console.log(singleProduct);

    const handlecart =()=>{
      dispatch(addcart({
        title:singleProduct.title,
        img:singleProduct.img,
      }));
    }
    
  return (
    
    <div>
      
     <h1>{singleProduct.title}</h1>
     <img src={singleProduct.img} alt="" />
     <Link to='/Cart'><button onClick={handlecart} >Add To Cart</button></Link>
    </div>
  )
}

export default SinglePage