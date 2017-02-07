<template>
    <div>
        <section class="section">
            <div class="container">
                <form v-on:submit.prevent="search">
                    <p class="control has-addons has-addons-centered">
                        <input v-model="searchTerm" class="input" type="text" placeholder="Find a user">
                        <button type="submit" class="button is-success" :class="{'is-loading': isLoading}">Search</a>
                    </p>
                </form>    
            </div>
        </section>
        <div v-if="result.length > 0">
            <users title="Search result" :users="result" :paging="true" :total="result_count" @changePage="changePage"></users>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState } from 'vuex';
    import { keys, session, local } from '../services/storageService';
    import { searchUser } from '../services/githubService';
    import Users from './Users.vue';
    import * as types from '../store/mutationTypes';

    export default {
        components: { Users },
        data() {
            let lastSearch = local.get(keys.SETTINGS);
            lastSearch = lastSearch !== null ? lastSearch.lastSearch : true;
            lastSearch = lastSearch ? (session.get(keys.LAST_SEARCH) || {}) : {};

            return {
                searchTerm: '',
                result_count: 1,
                result: getLastSearch ? (session.get(keys.LAST_SEARCH) || []) : []
            };
        },
        computed: {
            ...mapGetters({
                isLoading: 'page_loading'
            }),
            ...mapState({
                searchCount: state => state.search.count,
                userSelected: state => state.page.userSelected
            })
        },
        methods: {
            search(e, page) {
                let self = this;
                self.$store.commit(types.PAGE_IS_LOADING);

                searchUser(self.searchTerm, page).then(response => {
                    self.result = response.data.items;
                    self.result_count = response.data.total_count;
                    session.set(keys.LAST_SEARCH, { term: self.searchTerm, page, total: response.data.total_count, result: response.data.items});
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText });
                }, response => {
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
                });
            },
            changePage({ type, actual_page }) {
                this.search(undefined, actual_page);
            }
        }
    }
</script>
<style></style>