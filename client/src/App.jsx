import { BrowserRouter, Navigate, Routes, Route, Outlet, useLocation, useParams} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import Home from './component/home'
import Teacher from './component/Teacher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-5 p-5'>

      <p className=' text-pretty'>helll  </p>
    </div>
    </>
  )
}

export default App;
