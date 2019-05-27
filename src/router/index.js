import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/a',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
