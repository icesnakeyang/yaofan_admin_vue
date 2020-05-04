import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        gogo_yaofan_token: '' || localStorage.gogo_yaofan_token,
        user_id: '' || localStorage.user_id,
        action_id: '' || localStorage.action_id
    },
    actions: {
        saveToken(ctx, token) {
            ctx.commit('saveToken', token)
        },
        saveUserId(ctx, userId) {
            ctx.commit('saveUserId', userId)
        },
        saveActionId(ctx, actionId) {
            ctx.commit('saveActionId', actionId)
        }
    },
    mutations: {
        saveToken(state, token) {
            state.gogo_yaofan_token = token
            localStorage.gogo_yaofan_token = token
        },
        saveUserId(state, userId) {
            state.user_id = userId
            localStorage.user_id = userId
        },
        saveActionId(state, actionId) {
            state.action_id = actionId
            localStorage.action_id = actionId
        }
    }
})
