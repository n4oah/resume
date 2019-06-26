import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexVue from '../components/Index.vue'

console.log('global')

Vue.use(VueRouter)

export default new VueRouter({
    //mode: 'history',
    routes: [
        {
            path: '/',
            name: '페이지',
            component: IndexVue
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
