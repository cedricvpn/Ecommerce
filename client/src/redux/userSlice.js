import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  _id : "",
  email : "",
  firstName : "",
  lastName : "",
  image: "",
  loggedIn: false,
}

export const userSlice = createSlice({
    name:"user",
    initialState, 
    reducers : {
        loginRedux : (state,action)=>{
            console.log(action.payload.data.User)
            const User = action.payload.data.User
            return{
            ...state,
            //state.user = action.payload
           _id : User._id,
           email: User.email,
           firstName:User.firstName,
           lastName:User.lastName,
           image:User.image,
           loggedIn: true,
           
            }
        },
        logoutRedux : (state,action) =>{
            return{
                _id : "",
                email: "",
                firstName:"",
                lastName:"",
                image:"",
                loggedIn: false,
            }
        },
    }
})

export const {loginRedux , logoutRedux} = userSlice.actions 

export default userSlice.reducer