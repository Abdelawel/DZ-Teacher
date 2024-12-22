import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'



  const initialState = {
    token: localStorage.getItem('token') ,
  }

  const authSlice = createSlice({
    name :'auth',
    initialState,
    reducers :{
        login : (state, action)=>{
            state.token = action.payload.token
            // state.role = action.payload.role
        }, 
        logout : (state, action)=>{
            state.token = null
            // state.role = null
        }
    }
  })

  export const { login, logout } = authSlice.actions

  export default authSlice.reducer