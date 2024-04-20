import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoute = () =>{
    const user = null
    return user ? <Outlet/>  : <Navigate to="/" /> 
}
export default PrivateRoute