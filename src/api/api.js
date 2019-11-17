import axios from 'axios'

const host = 'http://192.168.43.29:8089'
export const apiRegister = params => {
    return axios.post(`${host}/user/register`, params)
}

export const apiLogin = params => {
    return axios.post(`${host}/user/login`, params)
}