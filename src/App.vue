<template>
  <div id="app">
        <!-- <OnClick/> -->
        <TesT/>
  </div>
</template>
<script>
// import VModel from './components/VModel.vue'
// import ForTable from './components/ForTable.vue'
// import OnClick from './components/OnClick.vue'
import TesT from './components/TesT.vue'

export default {
  name: 'App',
  components:{
      //  VModel,
      //  ForTable,
      //  OnClick,
       TesT
  },
  data(){
    return{
        fio:'',
        kurs:''
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
  margin-top: 60px;
}



</style>
