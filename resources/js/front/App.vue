<template>
    <router-view/>
</template>
<script>

import { defineComponent } from 'vue'
export default defineComponent({
    name:'App',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'SaleHub - Fashion & Clothing Store';
            }
        },
    },
})
</script>
<style lang="scss">
@import "../../scss/front/style";
</style>
