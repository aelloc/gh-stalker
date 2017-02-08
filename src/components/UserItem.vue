<template>
    <router-link :to="'/profile/' + user.login" tag="div" class="card">
        <div class="card-image">
            <figure class="image is-3by3">
                <img :src="user.avatar_url" alt="User profile image">
            </figure>
        </div>
        <div class="card-content clickable">
            <div class="media">
                <div class="media-content">
                    <p class="title is-5">{{ user.login }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
    import { user } from '../services/githubService';
    import * as types from '../store/mutationTypes';

    export default {
        props: ['user'],
        methods: {
            gotoProfile(e) {
                let self = this;
                self.$store.commit(types.PAGE_IS_LOADING);

                user(e.target.innerText.trim()).then(response => {
                    self.$store.commit(types.UPDATE.USER, response.data);
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.status == 200, status: response.statusText, userSelected: true });
                    self.$store.dispatch('searchRepositories');
                }).catch(response => {
                    self.$store.commit(types.UPDATE.PAGE, { isOk: response.response == 200, status: response.statusText, message: response.data.message, userSelected: false });
                });
            }
        }
    }
</script>
<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>