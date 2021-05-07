import actions from './../store/actions/client'

export default function (store, axios) {
    axios.interceptors.request.use((response) => {
        store.commit(actions.SET_LOAD, true)

        return response;
    }, (error) => {
        store.commit(actions.SET_LOAD, true)
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });
    axios.interceptors.response.use((response) => {
        store.commit(actions.SET_LOAD, false)
        return response;
    }, (error) => {
        store.commit(actions.SET_LOAD, false)
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });
}