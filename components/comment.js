'use strict';

(function() {
    Vue.component('comment', {
        props: ['commentary'],
        template: `<article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img :src="commentary.user.avatar_url">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ commentary.user.login }}</strong>
                                    <br>
                                    {{ commentary.body }}
                                    <br>
                                    <small>{{ commentary.updated_at | time from now }} · {{commentary.path}}</small>
                                </p>
                            </div>
                        </div>
                   </article>`
    });
})();