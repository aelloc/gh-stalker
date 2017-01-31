import * as types from '../mutationTypes';

const state = {
    term: '',
    count: 0
};

const mutations = {
    [types.INCREASE_SEARCH_COUNT](state) {
        state.count++;
    }
};

export default {
    state,
    mutations
}