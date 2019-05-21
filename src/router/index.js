import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../components/Order'
import Home from '../components/HelloWorld'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            component: Home,
            path: '/'
        },

        {
            name: 'makeorder',
            component: Order,
            path: '/makeorder/'

        }
    ]
}) 

export default router;