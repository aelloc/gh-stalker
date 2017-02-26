import { local, session, keys } from '../services/storageService';
import { searchRepos, branchs, commitComments, user } from '../services/githubService';
import * as types from './mutationTypes';

export const searchRepositories = function (store) {
    let userLogin = store.state.user.user.login;
    if (!userLogin)
        return;

    searchRepos(userLogin).then(response => {
        store.commit(types.UPDATE.REPOS, response.data);
    }).catch(response => {
        store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
    });
};

export const getBranchs = function (store, repository) {
    branchs(store.state.user.user.login, repository).then(response => {
        store.commit(types.UPDATE.BRANCHS, response.data);
    }).catch(response => {
        store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
    });
};

export const getCommitComments = function (store, sha) {
    commitComments(store.state.user.user.login, store.state.commit.repository, sha).then(response => {
        store.commit(types.UPDATE.COMMENTS, { sha: sha, comments: response.data });
    }).catch(response => {
        store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
    });
};

export const getUserInformations = function (store, username) {
    user(username).then(response => {
        store.commit(types.UPDATE.USER, response.data);
        store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, userSelected: true });
        store.dispatch('searchRepositories');
        local.add(keys.MOST_VIEWED, { avatar_url: response.data.avatar_url, login: response.data.login });
    }).catch(response => {
        store.commit(types.UPDATE.PAGE, { isOk: response.response == 200, status: response.statusText, message: response.data.message, userSelected: false });
    });
}

export const saveSettingsChanges = function(store, { recentlySeen, lastSearch }) {
    let settings = { recentlySeen, lastSearch };
    store.commit(types.CHANGE_SETTINGS, settings);
    local.set(keys.SETTINGS, settings);

    if(!recentlySeen) {
        local.remove(keys.MOST_VIEWED);
    }

    if(!lastSearch) {
        session.remove(keys.LAST_SEARCH);
    }
}

export const saveLastSearch = function(store, searchResult) {
    store.commit(types.UPDATE_LAST_SEARCH, searchResult);
    session.set(keys.LAST_SEARCH, searchResult);
}