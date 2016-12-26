'use strict';

var store = new Vuex.Store({
    strict: true,
    state: {
        page: {
            isOk: false,
            message: '',
            status: '',
            loading: false,
            userSelected: false
        },
        search: {
            term: '',
            count: 0,
            users: []
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
        bindSearchResult: function(state, result) {
            state.search.users = result.items;
        },
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
                loading: false,
                userSelected: stats.userSelected ? stats.userSelected : false
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
            
            github.searchRepositories(store.state.user.login).then(response => {
                store.commit('bindRepositories', response.data);
            });
        },
        getBranchs: (state, repository) => {
            github.branchs(store.state.user.login, repository).then(response => {
                store.commit('bindBranchs', response.data);
            });
        }
    }
});