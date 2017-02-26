import * as types from '../mutationTypes';
import { local, keys } from '../../services/storageService';

let mostViewed = local.get(keys.MOST_VIEWED) || [];

const state = {
    users: sortByDateAsc(mostViewed)
};

const mutations = {
    [types.ADD_VIEWED_USER](state, user) {
        let index = state.users.findIndex(e => e.login == user.login);
        if (index == -1) state.users.push(user);
        else state.users[index].lastView = new Date();

        state.users = sortByDateAsc(state.users);
        local.set(keys.MOST_VIEWED, state.users);
    }
};

function sortByDateAsc(array) {
    return array.sort((a, b) => new Date(b.lastView) - new Date(a.lastView));
}

export default {
    state,
    mutations
}