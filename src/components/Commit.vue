<template>
    <div class="box">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img :src="commit.author.avatar_url" alt="Commiter profile picture">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <a target="_blank" :href="commit.author.html_url"><strong class="is-block-mobile">{{commit.author.name}}</strong></a>
                        <small class="is-block-mobile">{{commit.author.email}}</small> <small>{{commit.commit.author.date | time from now }}</small>
                        <br>
                        <a class="commit-msg" target="_blank" :href="commit.html_url">{{commit.commit.message}}</a>
                    </p>
                </div>
                <nav class="level">
                    <div class="level-left">
                        <a class="level-item" v-on:click="showComments(commit.sha)">
                            <span class="icon is-small">
                                                <i class="fa fa-comments"></i>
                                            </span>
                        </a>
                    </div>
                </nav>
                <div v-if="show && commit.sha == sha_comments">
                    <comments></comments>
                </div>
            </div>
        </article>
    </div>
</template>
<script> 
    import { mapGetters } from 'vuex';
    import Comments from './Comments.vue'

    export default {
        components: { Comments },
        props: ['commit'],
        data() {
            return {
                show: false
            }
        },
        computed: mapGetters({
            sha_comments: 'commit_sha'
        }),
        methods: {
            showComments(sha) {
                this.show = !this.show;

                if (this.show && sha != this.$store.state.commit.comments.sha)
                    this.$store.dispatch('getCommitComments', sha);
            }
        }
    }
</script>
<style scoped>
    .commit-msg {
        color: #000;
        text-decoration: none;
        border-bottom: none!important;
        word-break: break-word;
    }
</style>