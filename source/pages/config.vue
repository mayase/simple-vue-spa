<style rel="stylesheet/less" lang="less" scoped>
    p{
        padding-bottom: 0.5rem;
    }
    .page__button{
        margin: 0.5rem 0;
    }
</style>
<template>
    <div class="page-config">
        <div class="page__header">This is config page</div>
        <p>Your current name is <span class="page__text-highlighted">{{name}}</span>, here you can change it:</p>

        <input type="text" v-model="_name" placeholder="your actual name">
        <div class="page__button" @click="changeName(_name)">Save</div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'
    export default{
        data(){return{
            _name: ''
        }},
        methods: {
            ...mapActions(['changeName'])
        },
        computed: {
            ...mapGetters(['name'])
        }
    }
</script>