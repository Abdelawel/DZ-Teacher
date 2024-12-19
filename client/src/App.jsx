import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Teacher from './component/Teacher'
import Homepage from './pages/Homepage'

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
    // <Homepage/>
    <BrowserRouter>
      <Routes>
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Homepage/>}/>
        </Route>

        <Route element={<ProtectedRoute value={3}/>}>
          <Route path='' element={<Homepage/>}/>
          <Route path='/teacher' element={<Homepage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App