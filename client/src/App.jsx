import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/Home'
import Teacher from './component/Teacher'
import Register from './component/Register'
import MyProfile from './pages/MyProfile'
import HomePage from './pages/Homepage'



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
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute value={3}/>}>
          <Route path='/home' element={<HomePage/>}/>
        </Route>
        <Route element={<ProtectedRoute value={2} />}>
          <Route path='/teacher' element={<Teacher/>}/>
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