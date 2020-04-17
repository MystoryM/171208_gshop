// 入口JS
import Vue from 'vue' 
import App from './APP.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
})