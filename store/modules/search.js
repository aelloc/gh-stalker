'use strict';

const search = {
    state: {
        term: '',
        count: 0,
        users: []
    },
    mutations: {
        [types.UPDATE.SEARCH_RESULT](state, result) {
            state.users = result.items;
        },
        [types.INCREASE_SEARCH_COUNT](state) {
            state.count++;
        }
    }
};