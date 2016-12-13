'use strict';

(function() {
    Vue.component('search', {
        template: `<div>
                        <label class="label">
                            <a href="#result">
                                <i class="fa fa-user"></i>
                            </a>
                        </label>
                        <p class="control has-addons has-addons-centered">
                            <input v-model="search.term" class="input" type="text" placeholder="Find a user">
                            <a class="button is-info" v-bind:class="{ 'is-loading': isLoading }" v-on:click="search">Search</a>
                        </p>
                    </div>`,
        computed: {
            isLoading: () => store.state.page.loading
        },
        methods: {
            search: function() {
                let self = this;

                store.commit('isLoading');

                this.$http.get(github.searchUser(self.search.term)).then((data) => {
                    store.commit('bindSearchResult', data.body);
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: data.ok, status: data.statusText, message: data.body.message });
                }, (data) => {
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: data.ok, status: data.statusText, message: data.body.message });
                });
            },
            mapUser: function(user) {
                let dateFormat = "DD/MM/YYYY";
                return {
                    login: user.login,
                    avatar_url: user.avatar_url,
                    html_url: user.html_url,
                    name: user.name,
                    bio: user.bio,
                    followers: user.followers,
                    following: user.following,
                    created_at: moment(user.created_at).format(dateFormat),
                    updated_at: moment(user.updated_at).format(dateFormat),
                    repositories: []
                };
            }
        },
        vuex: {
            getters: {
                search: store => store.search,
            }
        },
    });
})();