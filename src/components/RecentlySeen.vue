<template>
    <div v-if="show && mostViewed.length > 0">
        <users title="Recently seen" :users="mostViewed"></users>
    </div>
</template>
<script>
    import { keys, local } from '../services/storageService';
    import Users from './Users.vue';

    export default {
        components: { Users },
        data() {
            return {
                mostViewed: this.$store.state.history.users,
                show: this.$store.state.settings.recentlySeen
            }
        }
    }
</script>
<style></style>