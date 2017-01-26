<template>
    <div>
        <p class="control">
            <span class="select">
                                <select v-on:change="changeBranch" v-model="actual_branch">
                                    <option v-for="branch in branchs" :value="branch.name">{{branch.name}}</option>
                                </select>
                            </span>
        </p>
        <commit v-for="c in commits" :commit="c"></commit>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import { commitsAt } from '../services/githubService';
    import * as types from '../store/mutationTypes';
    import Commit from './Commit.vue';

    export default {
        components: { Commit },
        computed: mapState({
            commits: state => state.commit.commits,
            branchs: state => state.commit.branchs,
            default_branch: state => state.user.repositories.filter(repository => repository.name == state.commit.repository)[0].default_branch
        }),
        data() {
            let state = this.$store.state;
            return {
                actual_branch: state.user.repositories.filter(repository => repository.name == state.commit.repository)[0].default_branch
            }
        },
        methods: {
            changeBranch(event) {
                let self = this, repository = this.$store.state.commit.repository;
                this.$store.commit(types.PAGE_IS_LOADING);

                this.actual_branch = event.target.value;
                commitsAt(this.$store.state.user.user.login, repository, event.target.value).then(response => {
                    self.$store.commit(types.UPDATE.COMMITS, { commits: response.data, repository });
                });
            }
        }
    }
</script>
<style></style>