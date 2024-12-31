import axios from 'axios'
axios.defaults.withCredentials = true // for cookies


const server_url = import.meta.env.VITE_SERVER_URL



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
export async function ziyad(ID) {
    return await axios.post(`${server_url}/api/${ID}`, { ID });
  }
  

export async function onRegisterTeacher (registerData){
    return await axios.post(`${server_url}/api/registerTeacher` ,
        registerTeacherData);
    
}