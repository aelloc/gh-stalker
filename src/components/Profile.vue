<template>
    <div>
        <div v-if="qntRepos == 0">
            <spinner></spinner>
        </div>
        <div v-else>
            <section class="section">
                <div class="container">
                    <div class="columns has-text-centered">
                        <div class="column">
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
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import * as types from '../store/mutationTypes';
    import User from './User.vue';
    import Repositories from './Repositories.vue';
    import Commits from './Commits.vue';
    import Spinner from './Spinner.vue';

    export default {
        components: { User, Repositories, Commits, Spinner },
        props: ['username'],
        computed: mapState({
            showCommits: state => state.commit.show,
            qntRepos: state => state.user.repositories.length
        }),
        created() {
            this.$store.commit(types.PAGE_IS_LOADING);

            this.$store.dispatch('getUserInformations', this.username);
        }
    }
</script>
<style></style>