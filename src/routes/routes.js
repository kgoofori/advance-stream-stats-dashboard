import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import HomePage from'../pages/HomePage'
import LoginPage from'../pages/LoginPage'
import SubscribePage from'../pages/SubscribePage'
import RegisterPage from'../pages/RegisterPage'
import ProfilePage from'../pages/ProfilePage'

import { store} from '../store/store'


Vue.use(VueRouter);


let dashGuard = (next) => {

    console.info(store.state.is_login)
    if(store.state.is_login === true){
        next()
    }else if(!store.state.refreshingToken){
        
        next('/auth/login') ;
    }
}


const routes = [
    
    {path: '/', component: HomePage, beforeEnter: (to, from, next ) => dashGuard(next)},
    {path: '/auth/login', component: LoginPage},
    {path: '/auth/register', component: RegisterPage},
    {path: '/subscribe', component: SubscribePage, beforeEnter: (to, from, next ) => dashGuard(next)},
    {path: '/profile', component: ProfilePage, beforeEnter: (to, from, next ) => dashGuard(next)},
    
];

export default new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return {x:0, y:0}
        }
    },
})