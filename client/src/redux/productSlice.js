import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  products: [],
  isLoading : false
}
/*  {
    _id : "",
    name : "",
    category : "",
    image : "",
    price: "",
    description: "",
    //loggedIn: false,
  } */

  export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        productRedux : (state, action)=>{
            console.log(action)
            state.products = action.payload
        },
        setLoading: (state, action) => {
          state.isLoading = action.payload;
    },
  }})

  export const {productRedux,setLoading} = productSlice.actions

  export default productSlice.reducer