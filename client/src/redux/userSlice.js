import {createSlice} from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name:"user",
    initialState:{}, 
    reducers : {
        loginRedux : (state,action)=>{
            console.log(action.payload)
        }
    }
})

export const {loginRedux} = userSlice.actions 

export default userSlice.reducer