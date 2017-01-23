'use strict';

(function() {
    Vue.component('repositories', {
        template: `<nav class="panel">
                        <p class="panel-heading">
                            <span class="tag is-primary">{{repositories.length}}</span>
                            Repositories
                        </p>
                        <div class="scroll">
                            <repository v-for="repo in repositories" :repository="repo"></repository>
                        </div>
                    </nav>`,
        computed: {
            repositories: () => store.state.user.repositories
        }
    });
})();