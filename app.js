'use strict';

const github = new GitHubService('https://api.github.com');
const $user = new UserService();

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