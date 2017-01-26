<template>
    <div class="columns is-multiline">
        <div class="column is-one-third-tablet is-one-quarter-desktop has-text-centered" v-for="u in users">
            <user-item :user="u"></user-item>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import UserItem from './UserItem.vue';

    export default {
        components: { UserItem },
        computed: mapState({
            users: state => state.search.users
        })
    }
</script>
<style></style>