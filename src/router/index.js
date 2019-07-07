import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import IndexVue from '../components/Index.vue'

import settingData from 'resource/data.json'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'resource/sass/custom.scss'

const router = new VueRouter({
    //mode: 'history',
    routes: [
        {
            path: '/',
            name: '페이지',
            component: IndexVue,
            meta: { title: settingData.header.title }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
export default router

router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});