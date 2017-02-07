<template>
    <nav class="pagination is-centered">
        <a class="pagination-previous" @click="changePage" :class="{'is-disabled': actual_page == first}">Previous</a>
        <a class="pagination-next" @click="changePage" :class="{'is-disabled': actual_page == last}">Next</a>
        <ul class="pagination-list">
            <li>
                <a class="pagination-link is-current">{{ actual_page }}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        props: {
            first: { type: Number, default: 1 }, 
            last: { type: Number, default: 1 }
        },
        data() {
            return {
                actual_page: 1
            };
        },
        methods: {
            changePage(event) {
                let type = event.target.innerHTML;
                type === 'Next' ? this.actual_page++ : this.actual_page--;
                this.$emit('changePage', { type, actual_page: this.actual_page });
            }
        }
    }
</script>
<style></style>