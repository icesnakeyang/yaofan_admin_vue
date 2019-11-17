import axios from 'axios'
import store from '../store/index'

// const host = 'http://192.168.43.29:8089'
const host = 'http://192.168.1.247:8089'
export const apiRegister = params => {
    return axios.post(`${host}/user/register`, params)
}

export const apiLogin = params => {
    return axios.post(`${host}/user/login`, params)
}

export const apiListUnProcessWithdraw = params => {
    window.console.log(params)
    window.console.log(store.state.gogo_yaofan_token)
    return axios.post(`${host}/point/listUnProcessWithdraw`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}