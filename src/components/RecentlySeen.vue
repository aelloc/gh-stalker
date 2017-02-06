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
            let mostViewed = local.get(keys.MOST_VIEWED) || [], show = local.get(keys.SETTINGS);
            mostViewed = mostViewed.sort((a, b) => new Date(b.lastView) - new Date(a.lastView));
            show = show !== null ? show.recentlySeen : true;

            return {
                mostViewed,
                show
            }
        }
    }
</script>
<style></style>