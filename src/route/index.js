import Vue from 'vue';
import VueRouter from 'vue-router';

import Profile from '../components/Profile.vue';
import Search from '../components/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    routes: [
        { path: '/search', component: Search },
        { path: '/profile/:user', component: Profile }
    ]
});

