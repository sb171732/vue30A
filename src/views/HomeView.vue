<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="m in Menu" :key="m.id">{{ m.name }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="b in B" :key="b.id"><img :src="b.img" alt="" width="300px"></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'

export default {
  name: 'HomeView',
  computed: {
    Menu(){
      return store.state.menu
    },
    B(){
      return store.state.banners
    },
  }
}
</script>
