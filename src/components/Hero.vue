<template>
    <div>
        <section class="hero is-dark is-medium">
            <header class="hero-head">
                <nav class="nav">
                    <div class="container">
                        <div class="nav-left">
                            <router-link to="/" class="nav-item">
                                <img src="../assets/images/logo.png">
                            </router-link>
                        </div>
                        <div class="nav-center">
                            <router-link to="/" class="nav-item is-active">GH Stalker</router-link>
                        </div>
                        <div class="nav-right nav-menu">
                            <router-link to="/search" class="nav-item">
                                <span class="icon">
                                    <i class="fa fa-search"></i>
                                </span>
                            </router-link>
                            <a class="nav-item" target="_blank" href="//github.com">
                                <span class="icon">
                                    <i class="fa fa-github"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
        <section class="hero is-info">
            <header class="hero-head">
                <nav class="nav">
                    <div class="container">
                        <div class="nav-center">
                            <router-link to="/search" class="nav-item">
                                <span class="icon"><i class="fa fa-search"></i></span>Search
                            </router-link>
                            <a class="nav-item" target="_blank" href="//github.com">
                                <span class="icon"><i class="fa fa-github"></i></span>GitHub
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    </div>
</template>
<script></script>
<style scoped>
    @media (min-width: 768px) {
        section.hero.is-info {
            display: none;
        }
    }
</style>