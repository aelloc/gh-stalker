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
        components: { Comment },
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