'use strict';

const github = {
    url: 'https://api.github.com',
    get: {
        branchs: (owner, repository) => `https://api.github.com/repos/${owner}/${repository}/branches`,
        commits: (owner, repository) => `https://api.github.com/repos/${owner}/${repository}/commits`,
        commitsAt: (owner, repository, branch) => `https://api.github.com/repos/${owner}/${repository}/commits?sha=${branch}`
    },
    search: {
        byUsername: (user) => `https://api.github.com/users/${user}`.trim(),
        byUserRepositories: (user) => `https://api.github.com/users/${user}/repos`
    }
}

const vm = new Vue({
    el: '#app',
    computed: {
        page: () => store.state.page,
        search: () => store.state.search,
        showCommits: () => store.state.commits.show
    },
    methods: {
        moment: (...args) => moment(...args)
    }
});