<template>
    <div id="app">
        <section class="hero is-dark">
            <div class="hero-head">
                <header class="nav">
                    <div class="container">
                        <div class="nav-left">
                            <a class="nav-item" target="_blank" href="http://github.com">
                                <span class="icon">
                                <i class="fa fa-clock"></i>
                            </span>
                            </a>
                        </div>
                    </div>
                </header>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-1 modeka">GH STALKER</h1>
                    <search></search>
                </div>
            </div>
        </section>

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
    import Search from './Search.vue';
    import Error from './Error.vue';
    import Users from './Users.vue';

    export default {
        components: { Search, Error, Users },
        computed: mapState({
            page: state => state.page,
            searchCount: state => state.search.count,
            showCommits: state => state.commit.show
        })
    }
</script>