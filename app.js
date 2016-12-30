'use strict';

const $github = new GitHubService('https://api.github.com', 'https://i2.wp.com/assets-cdn.github.com/images/gravatars/gravatar-user-420.png');
const $user = new UserService($github.unk_avatar);

const vm = new Vue({
    el: '#app',
    computed: {
        page: () => store.state.page,
        search: () => store.state.search,
        showCommits: () => store.state.commit.show
    },
    methods: {
        moment: (...args) => moment(...args)
    }
});