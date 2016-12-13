'use strict';

const github = new GitHubAPI('https://api.github.com');

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