<template>
    <div v-if="mostViewed.length > 0">
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
                mostViewed: local.get(keys.MOST_VIEWED) || []
            }
        }
    }
</script>
<style>
</style>