'use strict';

const actions = {
    searchRepositories () {
        if(!store.state.user.user.login)
            return;

        $github.searchRepositories(store.state.user.user.login).then(response => {
            store.commit(types.UPDATE.REPOS, response.data);
        }).catch(response => {
            store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    },
    getBranchs (store, repository = '') {
        $github.branchs(store.state.user.user.login, repository).then(response => {
            store.commit(types.UPDATE.BRANCHS, response.data);
        }).catch(response => {
            store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    },
    getCommitComments (store, sha = '') {
        $github.commitComments(store.state.user.user.login, store.state.commit.repository, sha).then(response => {
            store.commit(types.UPDATE.COMMENTS, { sha: sha, comments: response.data });
        }).catch(response => {
            store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
        });
    }
};