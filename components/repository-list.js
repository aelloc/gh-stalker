'use strict';

(function() {
    Vue.component('repository-list', {
        template: `<nav class="panel">
                        <p class="panel-heading">
                            <span class="tag is-primary">{{repositories.length}}</span>
                            Repositories
                        </p>
                        <div class="scroll">
                            <a v-for="repository in repositories" v-on:click="getCommits" class="panel-block" :data-branch="repository.default_branch" href="#commits">
                                <span class="panel-icon">
                                    <i v-if="repository.fork" class="fa fa-code-fork"></i>
                                    <i v-else class="fa fa-book"></i>
                                </span>
                                <p>{{repository.name}}</p>
                            </a>
                        </div>
                    </nav>`,
        computed: {
            user: () => store.state.user.login,
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