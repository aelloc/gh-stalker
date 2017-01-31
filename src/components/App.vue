<template>
    <div id="app">
        <hero></hero>

        <div v-if="searchCount > 0 && !page.isOk">
            <error></error>
        </div>
        <div v-if="page.isOk">
            <div v-if="searchCount > 0 && !page.userSelected">
                <users></users>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Hero from './Hero.vue';
    import Error from './Error.vue';
    import Users from './Users.vue';

    export default {
        components: { Hero, Error, Users },
        computed: mapState({
            page: state => state.page,
            searchCount: state => state.search.count,
            showCommits: state => state.commit.show
        })
    }
</script>