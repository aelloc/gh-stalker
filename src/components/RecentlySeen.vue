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
            let mostViewed = local.get(keys.MOST_VIEWED) || [];
            mostViewed = mostViewed.sort((a, b) => new Date(b.lastView) - new Date(a.lastView));
            return {
                mostViewed
            }
        }
    }
</script>
<style>
</style>