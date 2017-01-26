<template>
    <div>
        <i class="fa fa-exclamation-triangle"></i> <b>{{page.status}} - {{page.message}}</b>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            page: state => state.page
        })
    }
</script>