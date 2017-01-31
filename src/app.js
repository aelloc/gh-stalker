import Vue from 'vue';
import store from './store';
import router from './router';
import GitHubService from './services/githubService';
import UserService from './services/userService';
import { date, timeFromNow } from './filters/date';
import App from './components/App.vue';

Vue.filter('date', date);
Vue.filter('time from now', timeFromNow);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});

require('./main.scss');