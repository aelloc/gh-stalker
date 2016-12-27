'use strict';

(function() {
    Vue.component('user-view', {
        template: `<div>
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img v-bind:src="user.avatar_url" alt="User profile picture">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-5">
                                            <a target="_blank" v-bind:href="user.html_url">{{user.name}}</a>
                                        </p>
                                        <p class="subtitle is-6">{{user.login}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                Followers <span class="tag is-success">{{user.followers}}</span>
                                Following <span class="tag is-info">{{user.following}}</span>
                                <br>
                                <p>{{user.bio}}</p>
                                <br>
                                <small>Created {{ user.created_at | time from now }}</small>
                            </div>
                        </div>
                    </div>`,
        computed: {
            user: () => store.state.user
        }
    });
})();