<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="columns has-text-centered">
                    <div class="column has-content-centered">
                        <user></user>
                    </div>
                    <div class="column">
                        <repositories></repositories>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="showCommits" class="section">
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
    import { mapState } from 'vuex';
    import User from './User.vue';
    import Repositories from './Repositories.vue';
    import Commits from './Commits.vue';

    export default {
        components: { User, Repositories, Commits },
        computed: mapState({
            showCommits: state => state.commit.show
        })
    }
</script>