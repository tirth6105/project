import { ADD_CART, ADD_PRODUCT, DELET_CART, GET, GET_CART, SINGLE_PRODUCT } from "../ActionType"


let initialState ={
    Products:[],
    singleProduct:{},
    cart:[]
}

export const Product = (state=initialState,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT:
            return{
                ...state,
                Products: [...state.Products , payload]
            }
        
        case SINGLE_PRODUCT:
            return{
                ...state,
                singleProduct :payload
            }

            case GET:
            return{
                ...state,
                Products: payload
            }

        case ADD_CART:
            return{
                ...state,
                cart: [...state.cart , payload]
            }
        
        case GET_CART:
            return{
                ...state,
                cart:payload
            }

        case DELET_CART:
            return{
                ...state,
               cart:state.cart.filter((ele)=>ele.id !==payload)
            }

        default: return state;
    }
}