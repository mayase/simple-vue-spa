import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import Root from './app/app.vue'
import MainPage from './pages/main.vue'
import ConfigPage from './pages/config.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: MainPage},
    { path: '/config', component: ConfigPage}
];

new Vue({
    el: '#root',
    render: h => h(Root),
    store,
    router: new VueRouter({
        mode: 'history',
        routes
    })
});