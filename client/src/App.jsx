import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/home'
import Teacher from './component/Teacher'
import Register from './component/Register'

function App() {
  

  const ProtectedRoute = ({value})=>{
    const {token} = useSelector((state)=>state.auth)
    if(token === null){
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
    return <>{ token === null ? <Outlet /> : <Navigate to='/home' />}</>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>

        <Route element={<ProtectedRoute value={3}/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
        <Route element={<ProtectedRoute value={2} />}>
          <Route path='/teacher' element={<Teacher/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
