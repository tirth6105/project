import axios from "axios";
import { ADD_CART, ADD_PRODUCT, DELET_CART, GET, GET_CART, LOGIN, LOGOUT, SIGNUP, SINGLE_PRODUCT } from "./ActionType"

export const signup =(data)=>{

    console.log(data);
    return{
        type : SIGNUP,
        payload : data
    }
};

export const login =(data)=>{
    return{
        type : LOGIN,
        payload : data
    }
}

export const logout=()=>{
    return{
        type : LOGOUT,
    }
}

export const addproduct = (data)=>async(dispatch)=>{
    let res =await axios.post('http://localhost:8090/products',data);
    dispatch({
        type : ADD_PRODUCT,
        payload : res.data
    })
}

export const singleproduct =(id)=>async(dispatch)=>{
    let res = await axios.get(`http://localhost:8090/products/${id}`);
    dispatch({
        type : SINGLE_PRODUCT,
        payload : res.data
    })
}


export const get =()=>async(dispatch)=>{
    let res = await axios.get(`http://localhost:8090/products`);
    dispatch({
        type : GET,
        payload : res.data
    })
}

export const addcart =(data)=>async(dispatch)=>{
    let res =await axios.post("http://localhost:8090/Cart",data);
    dispatch({
        type:ADD_CART,
        payload:res.data
    })
}

export const getcart =()=>async(dispatch)=>{
    let res = await axios.get("http://localhost:8090/Cart");
    dispatch({
        type:GET_CART,
        payload:res.data
    })
}

export const deletcart = (id)=> async(dispatch)=>{
    let res = await axios.delete(`http://localhost:8090/Cart/${id}`);
    dispatch({
        type:DELET_CART,
        payload:id
    })
}