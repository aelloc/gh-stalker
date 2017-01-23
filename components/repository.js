'use strict';

(function() {
    Vue.component('repository', {
        props: ['repository'],
        template: `<a v-on:click="commits" class="panel-block" :data-branch="repository.default_branch">
                        <span class="panel-icon">
                            <i v-if="repository.fork" class="fa fa-code-fork"></i>
                            <i v-else class="fa fa-book"></i>
                        </span>
                        <p>{{repository.name}}</p>
                    </a>`,
        computed: {
            user: () => store.getters.user
        },
        methods: {
            commits (event) {
                let self = this;
                let repository = event.target.innerText.trim();
                $github.commits(self.user, repository).then(response => {
                    store.commit(types.UPDATE.COMMITS, { commits: response.data, repository: repository });
                    store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText });
                    store.dispatch('getBranchs', repository);
                });
            }
        }
    });
})();