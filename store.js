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
            comments: {
                sha: '',
                comments: []
            },
            show: false
        }
    },
    mutations: {
        bindSearchResult: function(state, result) {
            state.search.users = result.items;
        },
        bindUser: function(state, user) {
            if(user.type === 'User') {
                user = $user.mapAsUser(user);
            } else if(user.type === 'Organization') {
                user = $user.mapAsOrganization(user);
            }
            
            state.user = user;
        },
        bindRepositories: function(state, repositories) {
            state.user.repositories = repositories;
        },
        bindCommits: function(state, data) {
            state.commits = {
                repository: data.repository.trim(),
                branchs: state.commits.branchs,
                commits: data.commits,
                comments: {
                    sha: '',
                    comments: []
                },
                show: data.commits.length > 0
            }
        },
        bindBranchs: function(state, branchs) {
            state.commits.branchs = branchs;
        },
        bindComments: function(state, comments) {
            state.commits.comments = {
                sha: comments.sha,
                comments: comments.comments
            }
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
            
            $github.searchRepositories(store.state.user.login).then(response => {
                store.commit('bindRepositories', response.data);
            }, response => {
                store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
            });
        },
        getBranchs: (store, repository) => {
            $github.branchs(store.state.user.login, repository).then(response => {
                store.commit('bindBranchs', response.data);
            }, response => {
                store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
            });
        },
        getCommitComments: (store, sha) => {
            $github.commitComments(store.state.user.login, store.state.commits.repository, sha).then(response => {
                store.commit('bindComments', { sha: sha, comments: response.data });
            }, response => {
                store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
            });
        }
    }
});