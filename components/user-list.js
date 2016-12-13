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
                this.$http.get(github.user(e.target.innerText)).then((data) => {
                    store.commit('bindUser', self.mapUser(data.body));
                    store.commit('updatePage', { isOk: data.ok, status: data.statusText, message: data.body.message, userSelected: true });
                    store.dispatch('searchRepositories');
                }, (data) => {
                    store.commit('increaseCount');
                    store.commit('updatePage', { isOk: data.ok, status: data.statusText, message: data.body.message });
                });
            },
            mapUser: function(user) {
               let dateFormat = "DD/MM/YYYY";
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
