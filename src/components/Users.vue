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
            <template v-if="paging">
                <pagination @changePage="propagate" :current="actualPage" :last="Math.round(total / 30)"></pagination>
            </template>
        </div>
    </section>
</template>
<script>
    import { mapState } from 'vuex';
    import UserItem from './UserItem.vue';
    import Pagination from './Pagination.vue';

    export default {
        components: { Pagination, UserItem },
        props: {
            title: String,
            users: [Object, Array],
            total: { type: Number, default: 0 },
            paging: { type: Boolean, default: false },
            actualPage: Number
        },
        computed: mapState({
            pageOk: state => state.page.isOk
        }),
        methods: {
            propagate(e) {
                this.$emit('changePage', e);
            }
        }
    }
</script>
<style></style>