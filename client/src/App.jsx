import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/Home'
// import Teacher from './component/Teacher'
import Register from './component/Register'
import MyProfile from './pages/MyProfile'
import ResourcesPage from './pages/Myresources';

import './i18n'; 


import RegisterTeacher from './component/RegisterTeacher'
import Homepage from   './pages/Homepage'
import Login from './component/Login'
import NewResource from './component/NewResource'
import NewCourse from './component/NewCourse'
// import MyResource from './pages/MyResource'
import CoursesPage from './pages/CoursePage'
import ResourcesTeacher from './pages/ResourcesTeacher'
import ModifResource from './component/ModifResource'
import Myresources from './pages/Myresources'
import ModifCourse from './component/ModifCourse'

function App() {
  

  const ProtectedRoute = ({value})=>{
    const {token} = useSelector((state)=>state.auth)
    if(token === null){
      return <Navigate to='/login' />
    }
    const decoded = jwtDecode(token)
    return <>{decoded.role < value+1 ? <Outlet /> : <Navigate to="/login" />}</>

  }

  const RestrictedRoute = () => {
    const { token } = useSelector((state) => state.auth);
    if (token == null) {
      return <Outlet />;
    } else {
      const decoded = jwtDecode(token);
      if (decoded.role === 3) {
        return <Navigate to='/courses' />;
      } else if (decoded.role === 2) {
        return <Navigate to='/resources' />;
      }
      else if(decoded.role === 1){
        return <Navigate to='/' />
      }

    }
  };

  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route element={<ProtectedRoute value={2}/>}>    {/* for teacher */}
          
          <Route path='/home' element={<Home/>}/>
          <Route path='/new-resource' element={<NewResource/>}/>
          <Route path='/new-course' element={<NewCourse/>}/>
          <Route path='/resources' element={<ResourcesTeacher />}/>
          <Route path='/resources/:id' element={<ModifResource />}/>
          <Route path='/courses/:id' element={<ModifCourse />}/>
        </Route>


        <Route element={<ProtectedRoute value={3}/>}>    {/* for student */}
          <Route path='/all-resource' element={<Myresources />}/>
          <Route path='/courses' element={<CoursesPage />}/>
        </Route>
        
        <Route path='/' element={<Homepage/>}/>
        
        
        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          
          <Route path="/resources" element={<ResourcesPage />} />
          
          
          <Route path='/register-teacher' element={<RegisterTeacher/>}/>
        </Route>

          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
