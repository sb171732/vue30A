<template>
  <div id="app">
    <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="1-1" route="/about">About</el-menu-item>
          <el-menu-item index="1-1" route="/json">jsonplaceholder</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Element</template>
            <el-menu-item index="2-1" route="/btn">Button</el-menu-item>
            <el-menu-item index="2-2" route="/icon">Icon</el-menu-item>
            
          </el-submenu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/fortable">For Table</router-link> |
      <router-link to="/json">jsonplaceholder</router-link> |
      <router-link to="/map">Map</router-link> |
      <router-link to="/icon">Icon</router-link> |
      <router-link to="/btn">Button Element</router-link>
    </nav>

    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>