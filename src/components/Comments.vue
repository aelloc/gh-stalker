<template>
    <div>
        <div v-for="c in comments">
            <comment :commentary="c"></comment>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';
    import Comment from './Comment.vue'

    export default {
        computed: {
            ...mapGetters({
                commit_sha: 'commit_sha'
            }),
            ...mapState({
                comments: state => state.commit.comments.comments
            })
        }
    }
</script>
<style></style>