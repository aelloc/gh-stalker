'use strict';

const getters = (function() {
    return {
        user: state => state.user.user.login,
        commit_sha: state => state.commit.comments.sha,
        page_loading: state => state.page.loading
    };
})();