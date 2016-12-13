(function() {
    Vue.component('error', {
        template: `<div>
                        <i class="fa fa-exclamation-triangle"></i> <b>{{page.status}} - {{page.message}}</b>
                    </div>`,
        computed: {
            page: () => store.state.page
        }
    });
})();