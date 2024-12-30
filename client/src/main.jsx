import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css'
import App from './App.jsx'
import RegisterTeacher from './component/RegisterTeacher'




createRoot(document.getElementById('root')).render(
  <Provider store ={store}>

  <StrictMode>
    <App/>
    
  </StrictMode>,
  </Provider>
)
