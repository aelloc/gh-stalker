'use strict';

const user = {
    state: {
        user: {},
        repositories: []
    },
    mutations: {
        [types.UPDATE.USER] (state, user = {}) {
            if(user.type === 'User') {
                user = $user.asUser(user);
            } else if(user.type === 'Organization') {
                user = $user.asOrganization(user);
            }

            state.user = user;
            state.repositories = [];
        },
        [types.UPDATE.REPOS] (state, repositories = []) {
            state.repositories = repositories;
        }
    }
};