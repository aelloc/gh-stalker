<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img v-bind:src="user.avatar_url" alt="User profile picture">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">
                        <a target="_blank" :href="user.html_url">{{user.name}}</a>
                    </p>
                    <p class="subtitle is-6">{{user.login}}</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div v-if="user.type === 'User'">
                Followers <span class="tag is-success">{{user.followers}}</span> Following <span class="tag is-info">{{user.following}}</span>
                <br>
                <p>{{user.bio}}</p>
            </div>
            <div v-else-if="user.type === 'Organization'">
                <a :href="user.blog" target="_blank">{{user.blog}}</a>
                <br> Public repositories: <span class="tag is-success">{{user.public_repos}}</span>
            </div>
            <br>
            <small>Created {{ user.created_at | time from now }}</small>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            user: state => state.user.user
        })
    }
</script>
<style></style>