<template>
    <nav class="panel">
        <p class="panel-heading">
            <span class="tag is-primary">{{repositories.length}}</span> Repositories
        </p>
        <div class="scroll">
            <repository v-for="repo in repositories" :repository="repo"></repository>
        </div>
    </nav>
</template>
<script>
    import { mapState } from 'vuex';
    import Repository from './Repository.vue';

    export default {
        components: { Repository },
        computed: mapState({
            repositories: state => state.user.repositories
        })
    }
</script>
<style></style>