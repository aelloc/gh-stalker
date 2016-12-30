'use strict';

const page = {
    state: {
        isOk: false,
        message: '',
        status: '',
        loading: false,
        userSelected: false
    },
    mutations: {
        updatePage: function(state, stats) {
            state.isOk = stats.isOk;
            state.status = stats.status;
            state.message = stats.message || "";
            state.loading = stats.loading || false;
            state.userSelected = stats.userSelected || false;
        },
        isLoading: function(state) {
            state.loading = true;
        }
    }
};