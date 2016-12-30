'use strict';

const store = (function() {
    return new Vuex.Store({
        actions,
        strict: true,
        modules: {
            page,
            search,
            user,
            commit
        }
    });
})();