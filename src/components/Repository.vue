<template>
    <a v-on:click="commits" class="panel-block" :data-branch="repository.default_branch">
        <span class="panel-icon">
            <i v-if="repository.fork" class="fa fa-code-fork"></i>
            <i v-else class="fa fa-book"></i>
        </span>
        <p>{{repository.name}}</p>
    </a>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { commits } from '../services/githubService';
    import * as types from '../store/mutationTypes';

    export default {
        props: ['repository'],
        computed: mapGetters({
            user: 'user'
        }),
        methods: {
            commits(event) {
                let self = this;
                self.$store.commit(types.PAGE_IS_LOADING);

                let repository = event.target.innerText.trim();
                commits(self.user, repository).then(response => {
                    self.$store.commit(types.UPDATE.COMMITS, { commits: response.data, repository: repository });
                    self.$store.commit(types.UPDATE.PAGE, {
                        isOk: response.status == 200,
                        status: response.statusText,
                        userSelected: true
                    });
                    self.$store.dispatch('getBranchs', repository);
                });
            }
        }
    }
</script>
<style></style>