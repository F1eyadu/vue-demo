import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'
import mutations from './mutations/index'
import getters from './getter/index'
import actions from './action/index'
Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
    strict:isDev,
    state,
    mutations,
    getters,
    actions,
    modules: {
        a: {
            namespaced: true,
            state: {
                text:'233'
            },
            mutations:{
                setText(state, texts){
                    state.text = texts
                }
            },
            getters: {
                textPlugin(state){
                    return state.text + 'weeere'
                }
            }
        },
        b: {
            namespaced: true,
            state: {
                text: 'hahahha'
            },
            mutations:{
                setText(state, texts){
                    state.text += texts
                }
            }
        }
    }
})

export default store