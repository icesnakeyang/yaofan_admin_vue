import axios from 'axios'
import store from '../store/index'

const host = 'http://localhost:8090/yaofanapi'

export const apiAdminLogin = params => {
    return axios.post(`${host}/admin/loginAdmin`, params)
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

export const apiListRegisterUser = params => {
    window.console.log(params)
    window.console.log(store.state.gogo_yaofan_token)
    return axios.post(`${host}/admin/listRegisterUser`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}

export const apiGetUser = params => {
    return axios.post(`${host}/admin/getUser`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}

export const apiListUserAction = params => {
    return axios.post(`${host}/admin/listUserAction`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}

export const apiTotalUserActionType = params => {
    return axios.post(`${host}/admin/totalUserActionType`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}

export const apiGetUserAction = params => {
    return axios.post(`${host}/admin/getUserAction`, params, {
        headers: {
            token: store.state.gogo_yaofan_token
        }
    })
}
