'use strict';

(function() {
    Vue.component('users', {
        template: `<div class="columns is-multiline">
                        <div class="column is-one-third-tablet is-one-quarter-desktop has-text-centered" v-for="u in users">
                            <user-item :user="u"></user-item>
                        </div>
                    </div>`,
        computed: {
            users: () => store.state.search.users
        }
    });
})();
