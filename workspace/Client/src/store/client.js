import axios from 'axios'
import actions from './actions/client'

export default {
    state: {
        clients: Array(),
        load: Boolean()
    },
    mutations: {
        GET_ALL_CLIENTS: (state, data) => {
            state.clients = data
        },
        SET_LOAD: (state, data) => {
            state.load = data
        }
    },
    actions: {
        async GET_ALL_CLIENTS({ commit }) {
            let res = await axios.get(`/get-all`)
            commit(actions.GET_ALL_CLIENTS, res.data)
        },
        async UPDATE_CLIENT({ dispatch }, payload) {
            await axios.post(`/update`, payload)
            dispatch(actions.GET_ALL_CLIENTS)
        },
        async DELETE_CLIENT({ dispatch }, payload) {
            await axios.post(`/delete`, payload)
            dispatch(actions.GET_ALL_CLIENTS)
        },
        async CREATE_CLIENT({ dispatch }, payload) {
            await axios.post(`/create`, payload)
            dispatch(actions.GET_ALL_CLIENTS)
        },

    },
    getters: {

        getClients: state => state.clients,
        getLoad: state => state.load
    }

}