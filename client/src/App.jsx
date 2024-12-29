import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/Home'
import Teacher from './component/Teacher'
import Register from './component/Register'
import Homepage from './pages/Homepage'
import MyProfile from './pages/MyProfile'

import RegisterTeacher from './component/RegisterTeacher'
import Homepage from   './pages/Homepage'

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
    if(token == null){
      return <Outlet/>
    }else{
      const decoded = jwtDecode(token)
      if(decoded.role === 3){
        return <Navigate to='/home' />
      }
      else if(decoded.role === 2){
        return <Navigate to='/teacher' />
      }

    }
    // return <>{ token === null ? <Outlet /> : <Navigate to='/teacher' />}</>
  }

  return (
    // <Homepage/>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute value={3}/>}>
          <Route path='' element={<Homepage/>}/>
          <Route path='/teacher' element={<Homepage/>}/>
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>

          
      </Routes>
    </BrowserRouter>
  )
}

export default App