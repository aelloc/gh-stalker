'use strict';

(function() {
    Vue.component('commits', {
        template: `<div>
                        <p class="control">
                            <span class="select">
                                <select v-on:change="changeBranch" v-model="actual_branch">calvingerling
                                    <option v-for="branch in commits.branchs" :value="branch.name">{{branch.name}}</option>
                                </select>
                            </span>
                        </p>
                        <commit v-for="c in commits.commits" :commit="c"></commit>
                    </div>`,
        computed: {
            commits: () => store.state.commits,
            default_branch: () => store.state.user.repositories.filter(repository => repository.name == store.state.commits.repository)[0].default_branch
        },
        data: () => {
            return {
                actual_branch: store.state.user.repositories.filter(repository => repository.name == store.state.commits.repository)[0].default_branch
            }
        },
        methods: {
            changeBranch: function(event) {
                this.actual_branch = event.target.value;
                $github.commitsAt(store.state.user.login, store.state.commits.repository, event.target.value).then(response => {
                    store.commit('bindCommits', { commits: response.data, repository: store.state.commits.repository});
                });
            }
        }
    });
})();
