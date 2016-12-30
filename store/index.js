'use strict';

const store = (function() {
    return new Vuex.Store({
        actions,
        getters,
        strict: true,
        modules: {
            page,
            search,
            user,
            commit
        }
    });
})();