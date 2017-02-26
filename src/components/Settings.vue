<template>
    <section class="section">
        <notification :type="notification.type" :message="notification.message" :show="notification.show" @close="closeNotification"></notification>
        <div class="content">
            <h1>Settings</h1>

            <h2>Recently Seen</h2>
            <p>Store the last user profiles you have visited.</p>
            <toggle title="Storage is " :default="recentlySeen" @change="changeRecentlySeen"></toggle>
            <button @click="clearUserHistory" class="button is-warning" :class="{'is-disabled': !recentlySeen}" >Clear storage</button>

            <h2>Search result</h2>
            <p>Store the latest search result.</p>
            <toggle title="Storage is " :default="lastSearch" @change="changeLastSearch"></toggle>

            <button @click="saveChanges" class="button is-primary">Save changes</button>
        </div>
    </section>
</template>
<script>
    import { local, keys } from '../services/storageService';
    import Toggle from './Toggle.vue';
    import Notification from './Notification.vue';

    export default {
        components: { Notification, Toggle },
        data() {
            return {
                recentlySeen: this.$store.state.settings.recentlySeen,
                lastSearch: this.$store.state.settings.lastSearch,
                notification: {
                    message: "",
                    type: "",
                    show: false
                }
            };
        },
        methods: {
            clearUserHistory() {
                local.remove(keys.MOST_VIEWED);
                this.notification = {
                    message: "History has been successfully purged!",
                    type: "is-info",
                    show: true
                };
            },
            saveChanges() {
                this.$store.dispatch('saveSettingsChanges', { recentlySeen: this.recentlySeen, lastSearch: this.lastSearch });
                this.notification = {
                    message: "Changes successfully applied!",
                    type: "is-success",
                    show: true
                };
            },
            changeRecentlySeen(status) {
                this.recentlySeen = status;
            },
            changeLastSearch(status) {
                this.lastSearch = status;
            },
            closeNotification() {
                this.notification.show = false;
            }
        }
    }
</script>
<style></style>