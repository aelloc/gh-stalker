import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue';
import Profile from '../components/Profile.vue';

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    routes: [
        { path: '/', component: App },
        { path: '/profile/:user', component: Profile }
    ]
});

