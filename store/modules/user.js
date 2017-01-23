'use strict';

const user = {
    state: {
        user: {},
        repositories: []
    },
    mutations: {
        bindUser(state, user) {
            if(user.type === 'User') {
                user = $user.mapAsUser(user);
            } else if(user.type === 'Organization') {
                user = $user.mapAsOrganization(user);
            }

            state.user = user;
            state.repositories = [];
        },
        bindRepositories(state, repositories) {
            state.repositories = repositories;
        }
    }
};