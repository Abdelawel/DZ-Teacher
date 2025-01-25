import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import Homepage from './pages/Homepage';
import MyProfile from './pages/MyProfile';
import ResourcesPage from './pages/Myresources';
import TeacherResourcesPage from './pages/ResourcesTeacher';
import NewResource from './pages/AddResource';
import Register from './component/Register';
import EditResource from './pages/EditResource';
import Sidebar from './component/Sidebar';
import { Outlet } from 'react-router-dom';
import './i18n';

function App() {
  const ProtectedRoute = ({ value }) => {
    const { token } = useSelector((state) => state.auth);
    if (!token) {
      return <Navigate to='/login' />;
    }
    const decoded = jwtDecode(token);
    return <>{decoded.role === value ? <Outlet /> : <Navigate to="/login" />}</>;
  };

  const RestrictedRoute = () => {
    const { token } = useSelector((state) => state.auth);
    if (token == null) {
      return <Outlet />;
    } else {
      const decoded = jwtDecode(token);
      if (decoded.role === 3) {
        return <Navigate to='/home' />;
      } else if (decoded.role === 2) {
        return <Navigate to='/teacher' />;
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute value={3} />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/teacher' element={<Sidebar><TeacherResourcesPage /></Sidebar>} />
          <Route path='/teacher/addresource' element={<Sidebar><NewResource /></Sidebar>} />
          <Route path='/teacher/editresource' element={<Sidebar><EditResource /></Sidebar>} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/teacherresources' element={<TeacherResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
