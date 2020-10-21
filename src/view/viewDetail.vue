<template>
    <div>
        {{show}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: 0
        }
    },
    components: {

    },
    methods: {
        doSomething(id) {
            this.show = id
        }
    },  
    watch: {
        $route() {  //监控路由参数变化，显示内容
            var id =  this.$route.params.id
            this.doSomething(id)  //做一些事情
        }
    },
    mounted() {
            var id =  this.$route.params.id
            this.doSomething(id)
    }
}
</script>

<style>

</style>