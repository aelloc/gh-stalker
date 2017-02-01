import Vue from 'vue';
import VueRouter from 'vue-router';

import Profile from '../components/Profile.vue';
import Search from '../components/Search.vue';
import RecentlySeen from '../components/RecentlySeen.vue';

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    routes: [
        { path: '/', component: RecentlySeen },
        { path: '/search', component: Search },
        { path: '/profile/:username', component: Profile, props: true }
    ]
});

