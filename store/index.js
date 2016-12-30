'use strict';

const store = (function() {
    return new Vuex.Store({
        strict: true,
        actions: actions,
        modules: {
            page,
            search,
            user,
            commit
        }
    });
})();