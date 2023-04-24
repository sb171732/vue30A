<template>
  <div id="app">
    <!-- <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item v-for="m in Menu1()" :key="m.id"  :index="m.id" :route="{name:'site',params:{name:m.route}}" >{{ m.name }}</el-menu-item>
          <el-submenu v-for="m in MenuSub()" :key="m.id" :index="m.id">
            <template slot="title">{{  m.name }}</template>
              <el-menu-item v-for="sm in SM" :key="sm.id" :index="sm.id">{{ sm.name   }}</el-menu-item>
          </el-submenu>
</el-menu> -->
    <router-view/>
  </div>
</template>
<script>
import {store} from './store'

  export default {
    data() {
      return {
        activeIndex2: 'DUZhTdwFsy2VRKMV5wdw'
      };
    },
    computed:{
      Menu(){ return store.state.menu  },
      SM(){ return store.state.submenu},
    }
    ,
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      Menu1(){
        return this.Menu.filter((n)=>{ return n.sub.match('false') })
      },
      MenuSub(){
        return this.Menu.filter((n)=>{ return n.sub.match('true') })
      },
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