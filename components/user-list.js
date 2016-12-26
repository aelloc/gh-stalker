'use strict';

(function() {
    Vue.component('users', {
        template: `<div class="columns is-multiline">
                        <div class="column is-one-third-tablet is-one-quarter-desktop has-text-centered" v-for="user in users">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-3by3">
                                        <img :src="user.avatar_url" alt="User profile image">
                                    </figure>
                                </div>
                                <div v-on:click="getUser" class="card-content clickable">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-5">{{user.login}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`,
        computed: {
            users: () => store.state.search.users
        },
        methods: {
            getUser: function(e) {
                let self = this;
                github.user(e.target.innerText).then(response => {
                    store.commit('bindUser', self.mapUser(response.data));
                    store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, userSelected: true });
                    store.dispatch('searchRepositories');
                }, response => {
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: response.status == 200, status: response.statusText, message: response.data.message, userSelected: true });
                });
            },
            mapUser: function(user) {
               let dateFormat = "DD/MM/YYYY hh:mm:ss";
               return {
                   login: user.login,
                   avatar_url: user.avatar_url,
                   html_url: user.html_url,
                   name: user.name,
                   bio: user.bio,
                   followers: user.followers,
                   following: user.following,
                   created_at: moment(user.created_at).format(dateFormat),
                   updated_at: moment(user.updated_at).format(dateFormat),
                   repositories: []
               };
            }
        }
    });
})();
