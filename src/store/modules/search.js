import * as types from '../mutationTypes';

const state = {
    term: '',
    count: 0,
    users: []
};

const mutations = {
    [types.UPDATE.SEARCH_RESULT](state, result) {
        state.users = result.items;
    },
    [types.INCREASE_SEARCH_COUNT](state) {
        state.count++;
    }
};

export default {
    state,
    mutations
}