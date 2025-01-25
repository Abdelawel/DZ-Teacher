import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/Home'
import Teacher from './component/Teacher'
import Register from './component/Register'
import MyProfile from './pages/MyProfile'

import RegisterTeacher from './component/RegisterTeacher'
import Homepage from   './pages/Homepage'
import Login from './component/Login'
import NewResource from './component/NewResource'
import NewCourse from './component/NewCourse'
import UserType from './component/UserType'
import payement from './component/CheckoutForm'
import CheckoutPage from './component/CheckoutForm'
import Stripe from './component/CheckoutForm'
function App() {
  

  const ProtectedRoute = ({value})=>{
    const {token} = useSelector((state)=>state.auth)
    if(token === null){
      return <Navigate to='/login' />
    }
    const decoded = jwtDecode(token)
    return <>{decoded.role < value+1 ? <Outlet /> : <Navigate to="/login" />}</>

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
      else if(decoded.role === 1){
        return <Navigate to='/home' />
      }

    }
    // return <>{ token === null ? <Outlet /> : <Navigate to='/teacher' />}</>
  }

  return (
    // <Homepage/>
    <BrowserRouter>
      <Routes>
        
        
        <Route element={<ProtectedRoute value={2}/>}>    {/* for teacher */}
          
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/new-resource' element={<NewResource/>}/>
          <Route path='/new-course' element={<NewCourse/>}/>
        </Route>


        <Route element={<ProtectedRoute value={3}/>}>    {/* for student */}
          <Route path='/teacher' element={<Teacher/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/user' element={<UserType/>}/>
          <Route path='/pay' element={<Stripe/>}/>



        </Route>
        
        <Route path='/' element={<Homepage/>}/>
        
        
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/register' element={<Register/>}/>
          
          
          <Route path='/register-teacher' element={<RegisterTeacher/>}/>
        </Route>

          
      </Routes>
    </BrowserRouter>
  )
}

export default App