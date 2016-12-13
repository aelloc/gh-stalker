(function() {
    Vue.filter('date', function(value) {
        return new Date(value).toLocaleDateString();
    });

    Vue.filter('time from now', function(value) {
        return moment(value).fromNow();
    });
})();

