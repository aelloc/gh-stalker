<template>
    <div>
        <label class="label">
            <a>
                <i class="fa fa-user"></i>
            </a>
        </label>
        <p class="control has-addons has-addons-centered">
            <input v-model="search.term" class="input" type="text" placeholder="Find a user">
            <a class="button is-info" v-bind:class="{ 'is-loading': isLoading }" v-on:click="search">Search</a>
        </p>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { searchUser } from '../services/githubService';
    import * as types from '../store/mutationTypes';

    export default {
        computed: mapGetters({
            isLoading: 'page_loading'    
        }),
        methods: {
            search() {
                let self = this;
                self.$store.commit(types.PAGE_IS_LOADING);
                
                searchUser(self.search.term).then(response => {
                    self.$store.commit(types.UPDATE.SEARCH_RESULT, response.data);
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText });
                }, response => {
                    self.$store.commit(types.INCREASE_SEARCH_COUNT);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, message: response.body.message });
                });
            }
        },
        vuex: {
            getters: {
                search: store => store.search
            }
        }
    }
</script>