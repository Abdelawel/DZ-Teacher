import axios from 'axios'
axios.defaults.withCredentials = true // for cookies


const server_url = import.meta.env.VITE_SERVER_DEV



export async function onLogin(loginData) {
    return await axios.post(`${server_url}/api/login`,
     loginData)
}

export async function onLogout () {
    return await axios.get(`${server_url}/api/logout`)
}

export async function onRegister (registerData){
    return await axios.post(`${server_url}/api/register`, 
    registerData)
}


export async function onRegisterTeacher (registerDataTeacher){
    return await axios.post(`${server_url}/api/registerteacher` ,
        registerDataTeacher);
    
}