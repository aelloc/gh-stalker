<template>
    <div>
        <section class="hero is-dark is-medium">
            <header class="hero-head">
                <nav class="nav">
                    <div class="container">
                        <div class="nav-left">
                            <a class="nav-item" href="/">
                                <img src="../assets/images/logo.png">
                            </a>
                        </div>
                        <div class="nav-center">
                            <a class="nav-item is-active" href="/">GH Stalker</a>
                        </div>
                        <div class="nav-right nav-menu">
                            <a class="nav-item" href="/#/search">
                                <span class="icon">
                                <i class="fa fa-search"></i>
                            </span>
                            </a>
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
                            <a class="nav-item" href="/#/search">
                                <span class="icon"><i class="fa fa-search"></i></span>Search
                            </a>
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
<style>
    @media (min-width: 768px) {
        section.hero.is-info {
            display: none;
        }
    }
    
</style>