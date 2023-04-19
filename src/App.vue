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
          <el-menu-item v-for="m in Menu" :key="m.id" :index="m.id" :route="{name:'site',params:{name:m.route}}">{{ m.name }}</el-menu-item>
          
</el-menu>

   

    <router-view/>
  </div>
</template>
<script>
import {store} from './store'

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: 'DUZhTdwFsy2VRKMV5wdw'
      };
    },
    computed:{
      Menu(){ return store.state.menu  }
    }
    ,
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