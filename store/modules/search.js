'use strict';

const search = {
    state: {
        term: '',
        count: 0,
        users: []
    },
    mutations: {
        bindSearchResult(state, result) {
            state.users = result.items;
        },
        increaseCount(state) {
            state.count++;
        }
    }
};