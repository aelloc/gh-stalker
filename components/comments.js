'use strict';

(function() {
    Vue.component('comments', {
        template: `<div>
                        <div v-for="c in comments">
                            <comment :commentary="c"></comment>
                        </div>
                    </div>`,
        computed: {
            commit_sha: () => store.getters.commit_sha,
            comments: () => store.state.commit.comments.comments
        }
    });
})();