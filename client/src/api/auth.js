import axios from 'axios'
axios.defaults.withCredentials = true // for cookies


export async function onLogin(loginData) {
    return await axios.post('http://localhost:3001/api/login',
     loginData)
}

export async function onLogout () {
    return await axios.get('http://localhost:3001/api/logout')
}