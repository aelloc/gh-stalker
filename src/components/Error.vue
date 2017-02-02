<template>
    <section class="section">
        <div class="container">
            <div class="notification is-warning has-text-centered">
                <i class="fa fa-exclamation-triangle"></i> <b>{{page.status}} - {{page.message}}</b>
            </div>
        </div>
    </section>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            page: state => state.page
        })
    }
</script>
<style></style>