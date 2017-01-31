import Vue from 'vue';
import VueRouter from 'vue-router';

import Profile from '../components/Profile.vue';

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    routes: [
        { path: '/profile/:user', component: Profile }
    ]
});

