import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import utils from 'src/plugin/utils.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(utils)

const Var = {
    render() {
        return this.$scopedSlots.default(this.$attrs)
    }
}

new Vue({
    el: '#app',
    components: { App/*, 'Var': Var*/ },
    template: '<App/>',
    router
});
