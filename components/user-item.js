'use strict';

(function() {
    Vue.component('user-item', {
        props: ['user'],
        template: `<div class="card">
                        <div class="card-image">
                            <figure class="image is-3by3">
                                <img :src="user.avatar_url" alt="User profile image">
                            </figure>
                        </div>
                        <div v-on:click="gotoProfile" class="card-content clickable">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-5">{{ user.login }}</p>
                                </div>
                            </div>
                        </div>
                    </div>`,
        methods: {
            gotoProfile: function(e) {
                $github.user(e.target.innerText.trim()).then(response => {
                    store.commit('bindUser', response.data);
                    store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, userSelected: true });
                    store.dispatch('searchRepositories');
                }).catch(response => {
                    store.commit('updatePage', { isOk: response.response == 200, status: response.response.statusText, message: response.response.data.message, userSelected: false });
                });
            }
        }
    });
})();