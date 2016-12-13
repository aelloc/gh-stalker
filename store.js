'use strict';

var store = new Vuex.Store({
    strict: true,
    state: {
        page: {
            isOk: false,
            message: '',
            status: '',
            loading: false
        },
        search: {
            term: '',
            count: 0
        },
        user: {
            repositories: []
        },
        commits: {
            repository: '',
            branchs: [],
            commits: [],
            show: false
        }
    },
    mutations: {
        bindUser: function(state, user) {
            state.user = user;
        },
        bindRepositories: function(state, repositories) {
            state.user.repositories = repositories;
        },
        bindCommits: function(state, data) {
            state.commits = {
                repository: data.repository,
                branchs: state.commits.branchs,
                commits: data.commits,
                show: data.commits.length > 0
            }
        },
        bindBranchs: function(state, branchs) {
            state.commits.branchs = branchs;
        },
        increaseCount: function(state) {
            state.search.count++;
        },
        updatePage: function(state, stats) {
            state.page = {
                isOk: stats.isOk,
                status: stats.status,
                message: stats.message,
                loading: false
            };
        },
        isLoading: function(state) {
            state.page.loading = true;
        }
    },
    actions: {
        searchRepositories: () => {
            if(!store.state.user.login)
                return;
            
            Vue.http.get(github.searchRepositories(store.state.user.login)).then((data) => {
                store.commit('bindRepositories', data.body);
            });
        },
        getBranchs: (state, repository) => {
            Vue.http.get(github.branchs(store.state.user.login, repository)).then(data => {
                store.commit('bindBranchs', data.body);
            });
        }
    }
});