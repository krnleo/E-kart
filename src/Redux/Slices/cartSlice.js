import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const newState = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                state = ([...newState,existingProduct])
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        },
        incQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            const newState = state.filter(item=>item.id!=existingProduct.id)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            state = ([...newState,existingProduct])
        },
        decQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            const newState = state.filter(item=>item.id!=existingProduct.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price   
            state=[...newState , existingProduct]
            
            }


    }
})

export const {addToCart,removeCart,emptyCart,incQuantity,decQuantity} = cartSlice.actions
export default cartSlice.reducer