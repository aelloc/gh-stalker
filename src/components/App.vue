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
        <section class="section">
            <div class="container">
                <div v-if="search.count > 0 && !page.isOk" class="notification is-warning has-text-centered">
                    <error></error>
                </div>
                <div v-if="page.isOk">
                    <div v-if="!page.userSelected">
                        <users></users>
                    </div>
                    <div v-else>
                        <div class="columns has-text-centered">
                            <div class="column has-content-centered">
                                <user></user>
                            </div>
                            <div class="column">
                                <repositories></repositories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="page.isOk && page.userSelected && showCommits" class="section">
            <div class="container">
                <div class="heading">
                    <h1 class="title">Latest Commits</h1>
                </div>
                <commits></commits>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Search from './Search.vue';
    import Error from './Error.vue';
    import Users from './Users.vue';
    import User from './User.vue';
    import Repositories from './Repositories.vue';
    import Commits from './Commits.vue';

    export default {
        components: { Search, Error, Users, User, Repositories, Commits },
        computed: mapState({
            page: state => state.page,
            search: state => state.search.count,
            showCommits: state => state.commit.show
        })
    }
</script>