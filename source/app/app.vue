<style rel="stylesheet/less" src="./main.less" lang="less"></style>
<template>
    <div id="app">
        <navigation-main></navigation-main>
        <router-view></router-view>
    </div>
</template>
<script>
    import navigationMain from './../components/navigationMain.vue'
    export default {
        components: {navigationMain}
    }
</script>