'use strict';

(function() {
    Vue.component('search', {
        template: `<div>
                        <label class="label">
                            <a>
                                <i class="fa fa-user"></i>
                            </a>
                        </label>
                        <p class="control has-addons has-addons-centered">
                            <input v-model="search.term" class="input" type="text" placeholder="Find a user">
                            <a class="button is-info" v-bind:class="{ 'is-loading': isLoading }" v-on:click="search">Search</a>
                        </p>
                    </div>`,
        computed: {
            isLoading: () => store.getters.page_loading
        },
        methods: {
            search () {
                let self = this;
                store.commit('isLoading');

                $github.searchUser(self.search.term).then(response => {
                    store.commit('bindSearchResult', response.data);
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: response.status == 200, status: response.statusText });
                }, response => {
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.body.message });
                });
            }
        },
        vuex: {
            getters: {
                search: store => store.search
            }
        },
    });
})();