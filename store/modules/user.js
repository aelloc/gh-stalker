'use strict';

const user = {
    state: {
        user: {},
        repositories: []
    },
    mutations: {
        bindUser: function(state, user) {
            if(user.type === 'User') {
                user = $user.mapAsUser(user);
            } else if(user.type === 'Organization') {
                user = $user.mapAsOrganization(user);
            }

            state.user = user;
            state.repositories = [];
        },
        bindRepositories: function(state, repositories) {
            state.repositories = repositories;
        }
    }
};