import Vue from 'vue';
import Vuex from 'vuex';
import commit from './modules/commit';
import page from './modules/page';
import search from './modules/search';
import settings from './modules/settings';
import user from './modules/user';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    strict: true,
    modules: {
        commit,
        page,
        search,
        settings,
        user
    }
});