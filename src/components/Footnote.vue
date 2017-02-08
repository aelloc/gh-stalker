<template>
    <footer class="footer" :class="{'at-bottom': !hasContent, 'sticky': hasContent}">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>GH Stalker</strong> created by <a href="//github.com/calvingerling" target="_blank">Calvin Gerling</a>.
                </p>
                <p>
                    Made with <a href="//vuejs.org" target="_blank">Vue.js</a>, <a href="//bulma.io" target="_blank">Bulma</a>,
                    <a href="//webpack.github.io" target="_blank">Webpack</a> and the <a href="//developer.github.com/" target="_blank">GitHub API</a>.
                </p>
                <p>
                    <a class="icon" href="//github.com/calvingerling/gh-stalker">
                        <i class="fa fa-github"></i>
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data() {
            return {
                hasContent: this.$route.path !== '/'
            };
        },
        watch: {
            $route: {
                immediate: true,
                handler(val, oldVal) {
                    this.hasContent = val.path !== '/';
                }
            }
        }
    }
</script>
<style scoped>
    footer {
        bottom: 0;
        left: 0;
        padding: 1rem;
        text-align: center;
        width: 100%;
    }
    .at-bottom {
        position: absolute;
    }

    .sticky {
        position: relative;
    }
</style>