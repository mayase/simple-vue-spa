<style rel="stylesheet/less" lang="less"></style>

<template>
    <div class="page-main">
        <div class="page__header">This is main page</div>

        <p>You are welcome, <span class="page__text-highlighted">{{name}}!</span></p>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters(['name'])
    }
</script>