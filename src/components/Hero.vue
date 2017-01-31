<template>
    <section class="hero is-dark">
        <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                        <a class="nav-item" target="_blank" href="http://github.com">
                            <img src="../assets/images/logo.png">
                        </a>
                    </div>
                </div>
            </header>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-1 modeka">gh stalker</h1>
                <search></search>
            </div>
        </div>
    </section>
</template>
<script>
    import Search from './Search.vue';

    export default {
        components: { Search }
    }
</script>