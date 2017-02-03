<template>
    <div>
        <p>{{title}}</p>
        <button @click="change" class="button" :class="{'is-primary': enabled, 'is-danger': !enabled}">
            {{ enabled ? 'Enabled' : 'Disabled' }}
        </button>
    </div>
</template>
<script>
    export default {
        props: ['title', 'default'],
        data() {
            return {
                enabled: this.default
            };
        },
        methods: {
            change() {
                this.$data.enabled = !this.$data.enabled;
                this.$emit('change', this.$data.enabled);
            }
        }
    }
</script>
<style scoped>
    p {
        display: inline-block;
        line-height: 28px;
    }
</style>