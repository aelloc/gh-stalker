import Vue from 'vue';
import store from './store';
import GitHubService from './services/githubService';
import UserService from './services/userService';
import { date, timeFromNow } from './filters/date';
import App from './components/App.vue';

Vue.filter('date', date);
Vue.filter('time from now', timeFromNow);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});

require('./main.scss');