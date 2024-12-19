import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/home'
import Teacher from './component/Teacher'
import { useState } from 'react';
import Homepage from './pages/Homepage'; // Import Homepage
import './App.css';
import './index.css';

function App() {
  

  const ProtectedRoute = ({value})=>{
    const {token} = useSelector((state)=>state.auth)
    if(!token){
      return <Navigate to='/login' />
    }
    const decoded = jwtDecode(token)
    return <>{decoded.role === value ? <Outlet /> : <Navigate to="/login" />}</>

  }

  const RestrictedRoute = ()=>{
    const {token} = useSelector((state)=>state.auth)
    // if(token == false){
    //   return <Navigate to='/home' />
    // }
    return <>{ !token ? <Outlet /> : <Navigate to='home' />}</>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login/>}/>
        </Route>

        <Route element={<ProtectedRoute value={3}/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
    <Homepage/>
    
  );
}

export default App;
