'use strict';

(function() {
    Vue.component('commits', {
        template: `<div>
                        <p class="control">
                            <span class="select">
                                <select v-on:change="changeBranch" v-model="actual_branch">
                                    <option v-for="branch in branchs" :value="branch.name">{{branch.name}}</option>
                                </select>
                            </span>
                        </p>
                        <commit v-for="c in commits" :commit="c"></commit>
                    </div>`,
        computed: {
            commits: () => store.state.commit.commits,
            branchs: () => store.state.commit.branchs,
            default_branch: () => store.state.user.repositories.filter(repository => repository.name == store.state.commit.repository)[0].default_branch
        },
        data () {
            return {
                actual_branch: store.state.user.repositories.filter(repository => repository.name == store.state.commit.repository)[0].default_branch
            }
        },
        methods: {
            changeBranch (event) {
                this.actual_branch = event.target.value;
                $github.commitsAt(store.state.user.user.login, store.state.commit.repository, event.target.value).then(response => {
                    store.commit('bindCommits', { commits: response.data, repository: store.state.commit.repository});
                });
            }
        }
    });
})();
