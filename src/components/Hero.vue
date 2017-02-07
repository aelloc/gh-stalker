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
                            <template v-for="link in links">
                                <template v-if="link.type == 'internal'">
                                    <router-link :to="link.path" class="nav-item">
                                        <span class="icon"><i class="fa" :class="link.icon"></i></span>
                                    </router-link>
                                </template>
                                <template v-else>
                                    <a :href="link.path" target="_blank" class="nav-item">
                                        <span class="icon"><i class="fa" :class="link.icon"></i></span>
                                    </a>
                                </template>
                            </template>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
        <nav class="tabs is-hidden-tablet is-fullwidth">
            <ul>
                <template v-for="link in links">
                    <li :class="{'is-active': actualPath == link.path}">
                        <template v-if="link.type == 'internal'">
                            <router-link :to="link.path">
                                <span class="icon is-small"><i class="fa" :class="link.icon"></i></span>{{link.title}}
                            </router-link>
                        </template>
                        <template v-else>
                            <a :href="link.path" target="_blank">
                                <span class="icon is-small"><i class="fa" :class="link.icon"></i></span>{{link.title}}
                            </a>
                        </template>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                actualPath: this.$route.path,
                links: [
                    { title: 'Search', type: 'internal', path: '/search', icon: 'fa-search' },
                    { title: 'Settings', type: 'internal', path: '/settings', icon: 'fa-cog' }
                ]
            };
        },
        watch: {
            $route: {
                immediate: true,
                handler(val, oldVal) {
                    this.actualPath = val.path;
                }
            }
        }
    }
</script>
<style></style>