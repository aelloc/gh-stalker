import Vue from 'vue';
import VueRouter from 'vue-router';

import Profile from '../components/Profile.vue';
import Search from '../components/Search.vue';
import RecentlySeen from '../components/RecentlySeen.vue';
import Settings from '../components/Settings.vue';

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: RecentlySeen },
        { path: '/search', component: Search },
        { path: '/settings', component: Settings },
        { path: '/profile/:username', component: Profile, props: true }
    ]
});

