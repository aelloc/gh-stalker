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
            user: () => store.getters.user,
            repositories: () => store.state.user.repositories
        },
        methods: {
            getCommits: function(event) {
                let self = this;
                $github.commits(self.user, event.target.innerText.trim()).then(response => {
                    store.commit('bindCommits', { commits: response.data, repository: event.target.innerText });
                    store.dispatch('getBranchs', event.target.innerText);
                });
            }
        }
    });
})();