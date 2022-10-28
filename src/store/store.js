import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../axiosInstance'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        is_login: false,
        token: '',
        userData: {},
        refreshingToken: false,
    },
    getters: {

        name({userData}){
            if(userData.name){
                return userData.firstName;
            }

            return false;
        },

        user({userData}){
            return userData
        },

        isLogin({is_login}){
            return is_login
        },

    },
    mutations: {
        updateLogin(state, payload){

            console.info(payload.login)
            
            state.is_login = payload.login;

            if(payload.login === false){
                localStorage.clear()
                state.userToken = ''
                state.userData  = {}
                state.billingData  = ''

            }else{

                localStorage.setItem('token', payload.token);
                state.token = payload.access_token
                state.refreshingToken = false
            }
        },

        setUserData(state, payload){
            state.userData = payload
        },
    },
    actions: {

        restoreAuth(){

        }, 

    }
})