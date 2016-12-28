'use strict';

(function() {
    Vue.component('comments-list', {
        template: `<div>
                        <div v-for="comment in comments">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-48x48">
                                    <img :src="comment.user.avatar_url">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                    <p>
                                        <strong>{{ comment.user.login }}</strong>
                                        <br>
                                        {{ comment.body }}
                                        <br>
                                        <small>{{ comment.updated_at | time from now }} · {{comment.path}}</small>
                                    </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>`,
            computed: {
                commit_sha: () => store.state.commits.comments.sha,
                comments: () => store.state.commits.comments.comments
            }
    });
})();