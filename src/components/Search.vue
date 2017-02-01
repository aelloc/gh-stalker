<template>
    <div>
        <section class="section">
            <div class="container">
                <form v-on:submit="search">
                    <p class="control has-addons has-addons-centered">
                        <input v-model="search.term" class="input" type="text" placeholder="Find a user">
                        <button type="submit" class="button is-success" :class="{'is-loading': isLoading}">Search</a>
                    </p>
                </form>    
            </div>
        </section>
        <div v-if="result.length > 0">
            <users title="Search result" :users="result"></users>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState } from 'vuex';
    import { keys, session } from '../services/storageService';
    import { searchUser } from '../services/githubService';
    import Users from './Users.vue';
    import * as types from '../store/mutationTypes';

    export default {
        data() {
            return {
                result: (session.get(keys.LAST_SEARCH) || [])
            };
        },
        components: { Users },
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
            search(e) {
                e.preventDefault();
                
                let self = this;
                self.$store.commit(types.PAGE_IS_LOADING);

                searchUser(self.search.term).then(response => {
                    self.$data.result = response.data.items;
                    session.set(keys.LAST_SEARCH, response.data.items);
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText });
                }, response => {
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
                });
            }
        }
    }
</script>
<style></style>