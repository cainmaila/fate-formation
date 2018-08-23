import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        config: null
    },
    mutations: {
        config(state, val) {
            state.config = val
        }
    },
    actions: {
        async init({ commit }) {
            try {
                let res = await axios.get('./static/config.json')
                commit('config', res.data)
            } catch (error) {
            } finally {
            }
        }
    }
})
