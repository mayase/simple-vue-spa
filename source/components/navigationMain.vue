<style scoped>
    header{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #2E7D32;
    }
    header > a{
        padding: 1rem 2rem;
        text-decoration: none;
        color: rgba(255,255,255,.7);
        text-transform: uppercase;
    }
    header > .router-link-active{
        color: white;
    }
</style>
<template>
    <header>
        <router-link to="/" exact>Main</router-link>
        <router-link to="config">Config</router-link>
    </header>
</template>