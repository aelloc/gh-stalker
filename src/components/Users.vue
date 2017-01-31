<template>
    <section class="section">
        <div class="container">
            <div class="heading">
                <h1 class="title">{{ title }}</h1>
            </div>
            <div class="columns is-multiline">
                <div class="column is-one-third-tablet is-one-quarter-desktop has-text-centered" v-for="u in users">
                    <user-item :user="u"></user-item>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { mapState } from 'vuex';
    import UserItem from './UserItem.vue';

    export default {
        props: ['title', 'users'],
        components: { UserItem },
        computed: mapState({
            pageOk: state => state.page.isOk
        })
    }
</script>
<style></style>