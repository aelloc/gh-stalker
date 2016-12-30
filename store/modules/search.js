'use strict';

const search = {
    state: {
        term: '',
        count: 0,
        users: []
    },
    mutations: {
        bindSearchResult: function(state, result) {
            state.users = result.items;
        },
        increaseCount: function(state) {
            state.count++;
        }
    }
};