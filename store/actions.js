'use strict';

const actions = {
    searchRepositories () {
        if(!store.state.user.user.login)
            return;

        $github.searchRepositories(store.state.user.user.login).then(response => {
            store.commit('bindRepositories', response.data);
        }).catch(response => {
            store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    },
    getBranchs (store, repository = {}) {
        $github.branchs(store.state.user.user.login, repository).then(response => {
            store.commit('bindBranchs', response.data);
        }).catch(response => {
            store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    },
    getCommitComments (store, sha = '') {
        $github.commitComments(store.state.user.user.login, store.state.commit.repository, sha).then(response => {
            store.commit('bindComments', { sha: sha, comments: response.data });
        }).catch(response => {
            store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    }
};