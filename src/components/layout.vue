<template>
  <div class="layout-outer">
      <div class="layout-left">
          <nav-menu/>    
          <!-- 左边区域 -->
      </div>
      <div class="layout-right">
          <!-- 右边区域 -->
          <router-view/>
      </div>
  </div>
</template>

<script>
import navMenu from './navMenu.vue'
export default {
    components: {
        navMenu
    }
}
</script>

<style>
.layout-outer {
    display: flex;
    height: 100vh;
}
.layout-left {
    width: 300px;
    height: 100%;
    background-color: blue;
}
.layout-right {
    flex: 1;
    height: 100%;
    background-color: cadetblue;
}
</style>