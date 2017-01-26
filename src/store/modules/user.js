import * as types from '../mutationTypes';
import { asUser, asOrganization } from '../../services/userService';

const state = {
    user: {},
    repositories: []
};

const mutations = {
    [types.UPDATE.USER](state, user = {}) {
        if (user.type === 'User') {
            user = asUser(user);
        } else if (user.type === 'Organization') {
            user = asOrganization(user);
        }
        
        state.user = user;
        state.repositories = [];
    },
    [types.UPDATE.REPOS](state, repositories = []) {
        state.repositories = repositories;
    }
};

export default {
    state,
    mutations
}