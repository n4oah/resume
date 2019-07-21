import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import utils from 'src/plugin/utils.js'
import passComponent from 'src/components/common/pass.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(utils)

Vue.component('Pass', passComponent)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});
