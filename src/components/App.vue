<template>
    <div id="app">
        <hero></hero>
        <div v-if="searchCount > 0 && !page.isOk">
            <error></error>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Hero from './Hero.vue';
    import Error from './Error.vue';

    export default {
        components: { Hero, Error },
        computed: mapState({
            page: state => state.page,
            searchCount: state => state.search.count,
            showCommits: state => state.commit.show
        })
    }
</script>