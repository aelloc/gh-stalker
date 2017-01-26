import * as types from '../mutationTypes';

const state = {
    isOk: false,
    message: '',
    status: '',
    loading: false,
    userSelected: false
};

const mutations = {
    [types.UPDATE.PAGE](state, stats = {}) {
        state.isOk = stats.isOk;
        state.status = stats.status;
        state.message = stats.message || '';
        state.loading = stats.loading || false;
        state.userSelected = stats.userSelected || false;
    },
    [types.PAGE_IS_LOADING](state) {
        state.loading = true;
    }
};

export default {
    state,
    mutations
}