<template>
  <div class="home">
    <h2>Home</h2>
      
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'

export default {
  name: 'HomeView',
  computed: {
    Menu(){ return store.state.menu    },
    B(){  return store.state.banners   },
    News(){  return store.state.news   },
  }
}
</script>
