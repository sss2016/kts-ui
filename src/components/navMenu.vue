<template>
    <div class="nav-link">
        <ul class="link-outer"> 
            <li>  <router-link :to="{ name:'view',params:{id:1} }">1</router-link></li>
            <li @click="openView(2)">2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <a href="/#/">返回主页</a>
    </div>
</template>

<script>
export default {
    methods: {
        openView(id) {
            this.$router.push({ name:'view',params:{id} })
        }
    }
}
</script>

<style>
    .link-outer li {
        cursor: pointer;
    }
    .link-outer li :hover {
        color: crimson;
    }
</style>