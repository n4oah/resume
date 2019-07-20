import VueRouter from 'vue-router'
import IndexVue from '../components/Index.vue'
import settingData from 'resource/data.json'

import 'resource/sass/custom.scss'

const router = new VueRouter({
    //mode: 'history',
    //hash: false,
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