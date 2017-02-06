<template>
    <div v-show="show" class="notification" :class="type">
        <button @click="close" class="delete"></button>
        {{ message }}
    </div>
</template>
<script>
    export default {
        props: ['message', 'type', 'show'],
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>
<style></style>