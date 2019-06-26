import Vue from 'vue'
import App from './App.vue'
import router from './router'
import path from 'path'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});
