<template>
    <div id="app">
        <hero></hero>
        <div v-if="searchCount > 0 && !page.isOk">
            <error></error>
        </div>
        <router-view></router-view>
        <footnote></footnote>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Hero from './Hero.vue';
    import Error from './Error.vue';
    import Footnote from './Footnote.vue';

    export default {
        components: { Hero, Error, Footnote },
        computed: mapState({
            page: state => state.page,
            searchCount: state => state.search.count,
            showCommits: state => state.commit.show
        })
    }
</script>
<style></style>