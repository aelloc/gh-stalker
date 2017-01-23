'use strict';

const user = {
    state: {
        user: {},
        repositories: []
    },
    mutations: {
        bindUser(state, user) {
            if(user.type === 'User') {
                user = $user.asUser(user);
            } else if(user.type === 'Organization') {
                user = $user.asOrganization(user);
            }

            state.user = user;
            state.repositories = [];
        },
        bindRepositories(state, repositories) {
            state.repositories = repositories;
        }
    }
};